import type { Route } from './+types/home'
import { Meta, Links, ScrollRestoration, Scripts } from 'react-router'

export default function Layout({ children }: { children: Route.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
