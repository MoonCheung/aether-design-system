import * as React from 'react';

import clsxm from '~/lib/clsxm';

type ColorBoxProps = {
  className?: string;
  children: React.ReactNode;
}
export default function ColorBox({children, className}: ColorBoxProps){
  return (
    <div className={clsxm(
      'flex h-24 w-24 flex-col items-center justify-center break-all rounded px-1 text-center text-xs font-medium',
      className
    )}>
      {children}
    </div>
  )
};