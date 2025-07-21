import {
  ColumnDef,
  getCoreRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

import clsxm from '~/lib/clsxm';

export type ServerTableState = {
  globalFilter: string;
  pagination: PaginationState;
  sorting: SortingState;
};
export default function ServerTable() {}
