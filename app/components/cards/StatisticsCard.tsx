import * as React from 'react';
import { type LucideIcon } from 'lucide-react';
import Skeleton from '~/components/Skeleton';
import Typography from '~/components/Typography';

import clsxm from '~/lib/clsxm';

const statisticsCardVariant = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
] as const;

type StatisticsCardVariant = (typeof statisticsCardVariant)[number];

type StatisticsCardProps = {
  icon?: LucideIcon;
  iconClassName?: string;
  isLoading?: boolean;
  label: string;
  value: number;
  variant?: StatisticsCardVariant;
} & React.ComponentPropsWithoutRef<'div'>;

export function StatisticsCard({
  className,
  icon: Icon,
  iconClassName,
  isLoading = false,
  label,
  value,
  variant = 'primary',
  ...rest
}: StatisticsCardProps){
  return (
    <div
      className={clsxm(
        'rounded-xl p-3 bg-white dark:bg-white/5',
        'border border-typo-divider dark:border-typo-secondary',
        'flex items-center gap-3',
        className,
      )}
      {...rest}
    >
      {Icon && (
        <div
          className={clsxm('rounded-lg p-2', [
            variant === 'primary' && ['bg-primary-50 dark:bg-primary-900'],
            variant === 'secondary' && ['bg-secondary-50 dark:bg-secondary-900'],
            variant === 'warning' && ['bg-yellow-50 dark:bg-yellow-900'],
            variant === 'danger' && ['bg-red-50 dark:bg-red-900'],
            variant === 'success' && ['bg-green-50 dark:bg-green-900'],
          ])}
        >
          <Icon
            size='1.5em'
            className={clsxm(
              [
                variant === 'primary' && ['text-primary-500'],
                variant === 'secondary' && ['text-secondary-500'],
                variant === 'warning' && ['text-yellow-500'],
                variant === 'danger' && ['text-red-500'],
                variant === 'success' && ['text-green-500'],
              ],
              iconClassName,
            )}
          />
        </div>
      )}
      {isLoading ? (
        <div>
          <Skeleton className='h-4 w-24' />
          <Skeleton className='mt-1 h-4 w-10' />
        </div>
      ) : (
        <div>
          <Typography variant='b3' color='secondary'>
            {label}
          </Typography>
          <Typography variant='s2'>{value}</Typography>
        </div>
      )}
    </div>
  )
}