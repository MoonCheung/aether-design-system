import * as React from 'react';

import clsxm from '~/lib/clsxm';

const alertVariant = [ 
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
] as const 

type AlertVariant = (typeof alertVariant)[number];

type AlertProps = {
  variant?: AlertVariant;
} & React.ComponentPropsWithoutRef<'div'>;

export function Alert({
  variant = 'primary',
  className,
  children,
  ...rest
}: AlertProps){
  return (
    <div
      className={clsxm([
        'w-full rounded-xl p-3',
        'text-secondary text-center',
        'text-sm',
        [
          variant === 'primary' && ['bg-primary-50', 'dark:text-white', 'dark:bg-primary-900'],
          variant === 'secondary' && ['bg-secondary-50', 'dark:text-white', 'dark:bg-secondary-900'],
          variant === 'warning' && ['bg-yellow-50', 'dark:text-white', 'dark:bg-yellow-900'],
          variant === 'danger' && ['bg-red-50', 'dark:text-white', 'dark:bg-red-900'],
          variant === 'success' && ['bg-green-50', 'dark:text-white', 'dark:bg-green-900'],
        ],
        className,
      ])}
      {...rest}
    >
      {children}
    </div>
  )
} 