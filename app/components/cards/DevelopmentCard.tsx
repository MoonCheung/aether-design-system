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
        'border-2 border-dashed pt-2',
        'border-secondary-500 bg-secondary-50 dark:broder-secondary-500/20 dark:bg-secondary-900',
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