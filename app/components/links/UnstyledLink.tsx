import * as React from 'react';
import { Link, type LinkProps } from "react-router";

import clsxm from '~/lib/clsxm';

export type UnstyledLinkProps = {
  href: string
  children: React.ReactNode
  openNewTab?: boolean
  className?: string
  nextLinkProps?: Omit<LinkProps, 'to'>
} & React.ComponentPropsWithRef<'a'>

export const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(({children, href, openNewTab, className, nextLinkProps, ...rest}, ref) => {
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
})