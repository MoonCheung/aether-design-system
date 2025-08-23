import * as React from 'react';
import { X } from 'lucide-react';

import clsxm from '~/lib/clsxm';

const bannerVariant = [ 
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
] as const 

type BannerVariant = (typeof bannerVariant)[number];

type BannerProps = {
  variant?: BannerVariant;
} & React.ComponentPropsWithoutRef<'div'>;


export default function Banner({
  variant = 'primary',
  className,
  children,
  ...rest
}: BannerProps){
  return (
    <div className={clsxm([
      "relative flex items-center gap-x-6 px-6 py-2.5 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5 sm:before:flex-1",
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
      <p className="text-sm/6 text-black dark:text-white">
        {children}
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:-outline-offset-4">
          <X aria-hidden="true" className="size-5 text-black dark:text-white" />
        </button>
      </div>
    </div>
  )
}