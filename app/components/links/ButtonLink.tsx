import * as React from 'react';
import { type LucideIcon } from 'lucide-react';
import { UnstyledLink,  type UnstyledLinkProps } from '~/components/links/index';

import clsxm from '~/lib/clsxm';

const ButtonLinkVariant = [
  'primary',
  'secondary',
  'outline',
  'ghost',
  'warning',
] as const

const ButtonLinkSize = ['sm', 'base', 'lg'] as const;

type ButtonLinkProps = {
  variant?: (typeof ButtonLinkVariant)[number];
  size?: (typeof ButtonLinkSize)[number];
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & UnstyledLinkProps;

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(({
  children,
  className,
  variant = 'primary',
  size = 'base',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassName,
  rightIconClassName,
  ...rest
}, ref) => {
  return (
    <UnstyledLink 
      ref={ref}
      {...rest}
      className={clsxm(
        'inline-flex items-center justify-center rounded-lg font-medium',
        'focus:outline-none focus-visible:ring',
        'shadow-sm',
        'transition-colors duration-75',
        //#region  //*=========== Size ===========
        [
          size === 'lg' && [
            'min-h-[3rem] px-3.5 md:min-h-[2.75rem]',
            'text-base',
          ],
          size === 'base' && [
            'min-h-[2.25rem] px-3 md:min-h-[2.5rem]',
            'text-sm md:text-base',
          ],
          size === 'sm' && [
            'min-h-[1.75rem] px-2 md:min-h-[2rem]',
            'text-xs md:text-sm',
          ],
        ],
        //#endregion  //*======== Size ===========
        //#region  //*=========== Variants ===========
        [
          variant === 'primary' && [
            'bg-primary-500 text-white dark:bg-primary-100 dark:text-black',
            'border border-primary-600 dark:hover:border-primary-100',
            'hover:bg-primary-600 hover:text-white dark:hover:bg-primary-100 dark:hover:text-black',
            'active:bg-primary-700 dark:active:bg-primary-100',
            'disabled:bg-primary-700 dark:disabled:bg-primary-100',
            'focus-visible:ring-primary-400 dark:focus-visible:ring-primary-100',
          ],
          variant === 'secondary' && [
            'bg-secondary-500 text-white dark:text-black dark:bg-secondary-100',
            'border border-secondary-600 dark:border-secondary-100',
            'hover:bg-secondary-600 hover:text-white dark:hover:bg-secondary-100 dark:hover:text-black',
            'active:bg-secondary-700 dark:active:bg-secondary-100',
            'disabled:bg-secondary-700 dark:disabled:bg-secondary-100',
            'focus-visible:ring-secondary-400 dark:focus-visible:ring-secondary-100',
          ],
          variant === 'warning' && [
            'bg-amber-500 text-white dark:bg-amber-100 dark:text-black',
            'border border-amber-500 dark:border-amber-100',
            'hover:bg-amber-600 hover:text-white dark:hover:bg-amber-100 dark:hover:text-black',
            'active:bg-amber-700 dark:active:bg-amber-100',
            'disabled:bg-amber-700 dark:disabled:bg-amber-100',
            'focus-visible:ring-amber-400 dark:focus-visible:ring-amber-100',
          ],
          variant === 'outline' && [
            'text-typo dark:text-typo-outline',
            'border border-gray-300 dark:border-gray-100',
            'hover:bg-light focus-visible:ring-primary-400 active:bg-typo-divider disabled:bg-typo-divider dark:hover:bg-black dark:focus-visible:ring-primary-100 dark:active:bg-typo-divider dark:disabled:bg-typo-divider',
          ],
          variant === 'ghost' && [
            'text-primary-500 dark:text-primary-100',
            'shadow-none',
            'hover:bg-primary-50 focus-visible:ring-primary-400 active:bg-primary-100 disabled:bg-primary-100 dark:hover:bg-primary-100 dark:hover:text-white dark:focus-visible:ring-primary-100 dark:active:bg-primary-50 dark:disabled:bg-primary-50', 
          ],
        ],
        //#endregion  //*======== Variants ===========
        'disabled:cursor-not-allowed',
        className,
      )}
    >
      {LeftIcon && (
        <div
          className={clsxm([
            size === 'lg' && 'mr-3',
            size === 'base' && 'mr-2',
            size === 'sm' && 'mr-1',
          ])}
        >
          <LeftIcon
            size='1em'
            className={clsxm('text-base', leftIconClassName)}
          />
        </div>
      )}
      {children}
      {RightIcon && (
        <div
          className={clsxm([
            size === 'lg' && 'ml-3',
            size === 'base' && 'ml-2',
            size === 'sm' && 'ml-1',
          ])}
        >
          <RightIcon
            size='1em'
            className={clsxm('text-base', rightIconClassName)}
          />
        </div>
      )}
    </UnstyledLink>
  )
})
