import type { Route } from './+types/home'
import * as React from 'react';

import clsxm from '~/lib/clsxm';

export type UnstyledLinkProps = {
  href: string
  children: Route.ReactNode
  openNewTab?: boolean
  className?: string
  nextLinkProps?: Omit<Route.LinkProps, 'href'>
} & Route.ComponentPropsWithRef<'a'>

const UnstyledLink = React.forwardRef<Route.HTMLAnchorElement, UnstyledLinkProps>(({children, href, openNewTab, className, nextLinkProps, ...rest}, ref => {
  const isNewTab = openNewTab !== undefined 
    ? openNewTab 
    : href && !href.startsWith('/') && !href.startsWith('#');

  
  if(!isNewTab) {
    return (
      <Link
        href={href}
        ref={ref}
        className={className}
        {...rest}
        {...nextLinkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      ref={ref}
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...rest}
      className={clsxm('cursor-newtab', className)}
    >
      {children}
    </a>
  )
}))

export default UnstyledLink;