import * as React from 'react';
import Typography from '~/components/Typography';
import { SimpleCard } from '~/components/cards/index';

import clsxm from '~/lib/clsxm';

type DevelopmentCardProps = React.ComponentPropsWithoutRef<'div'>;

export function DevelopmentCard({
  className, 
  children, 
  ...rest
}: DevelopmentCardProps) {
  const shouldShow = process.env.NODE_ENV !== 'production';
  return shouldShow ? (
    <SimpleCard
      className={clsxm([
        'border-2 border-dashed border-secondary-500 bg-secondary-50',
        'pt-2',
        className,
      ])}
      size='sm'
      {...rest}
    >
      <Typography className='mb-2 text-center text-secondary-700' variant='c1'>
        Development Only
      </Typography>
    </SimpleCard>
  ) : null
}