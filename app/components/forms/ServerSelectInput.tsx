import * as React from 'react';
import { AxiosError } from 'axios';
import { get } from 'es-toolkit/compat';
import { useQuery } from '@tanstack/react-query';

import { mockQuery } from '~/lib/axios-mock';

import { SearchableSelectInput,  type SearchableSelectInputProps } from '~/components/forms/index';
import { type ApiError, type ApiResponse } from '~/types/api';

type ServerSelectInputProps = { 
  route: string;
  valueGetter?: string;
  labelGetter?: string; 
} & Omit<SearchableSelectInputProps, 'options'>;
export function ServerSelectInput({
  route,
  valueGetter = 'id',
  labelGetter = 'name',
  ...rest
}: ServerSelectInputProps){
  //#region  //*=========== Get Options ===========
  const { data: optionsData, isLoading } = useQuery<
  ApiResponse<Array<object>>, 
  AxiosError<ApiError>>([route], mockQuery);

  const options = optionsData?.data.map((item) => ({
    value: get(item, labelGetter) + '',
    label: get(item, valueGetter) + '',
  })) || [];

  //#endregion  //*======== Get Options ===========

  return (
    <SearchableSelectInput
      options={options}
      noOptionsMessage={() =>
        isLoading ? 'Getting options...' : 'No option found'
      }
      {...rest}
    />
  )
}