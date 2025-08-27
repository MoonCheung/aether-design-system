import * as React from 'react';
import Typography from '~/components/Typography';

import clsxm from '~/lib/clsxm';

type CardProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

type SectionProps = {
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export function CardRoot({
  children,
  className,
  title,
  ...rest
}: CardProps){
  return (
    <div
      className={clsxm([
        'rounded-xl border border-typo-divider bg-white dark:bg-white/10 dark:border-white/20',
        className,
      ])}
      {...rest}
    >
      {title && (
        <div className='border-b border-typo-divider px-4 py-2 sm:px-6 sm:py-3 dark:bg-white/10 dark:border-white/20'>
          <Typography variant='h5' as='h2'>
            {title}
          </Typography>
        </div>
      )}
      <div className='divide-y divide-typo-divider px-4 sm:px-6 dark:bg-white/10 dark:border-white/20'>
        {children}
      </div>
    </div>
  )
}

function Section({
  className,
  children
}: SectionProps) {
  return (
    <div
      className={clsxm('flex w-full flex-col', 'py-4 sm:py-6', className)}
    >
      {children}
    </div>
  )
}

export const Card = Object.assign(CardRoot, { Section });