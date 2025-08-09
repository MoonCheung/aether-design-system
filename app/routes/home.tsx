import type { Route } from './+types/home'
import Layout from '~/components/layout/Layout'

import Typography from '~/components/Typography'
import { UnderlineLink, ButtonLink } from '~/components/links/index'

export function meta({}: Route.MetaArgs) {
  return [{ name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  return (
    <Layout>
      <main>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Typography as='h1' variant='j1' className='mt-2'>
            Aether Design System
          </Typography>
          <Typography variant='b3' color='tertiary'>
            Inspired by{' '}
            <UnderlineLink href="https://moon.io">moon.io</UnderlineLink>
            , adjusted to our needs
          </Typography>
          <Typography variant='b3' className='mt-6' color='secondary'>
            See the repository
          </Typography>
          <div className='mt-6'>
            <Typography as='h2' variant='h6'>
              Sandbox:
            </Typography>
            <div className='mt-2 flex flex-wrap justify-center gap-2'>
              {sandbox.map(({ title, route }) => (
                <ButtonLink key={route} href={route} variant='outline'>
                  {title}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

//#region  //*=========== Sandbox ===========
const sandbox = [
  {
    title: 'Typography',
    route: '/sandbox/typography',
  },
  {
    title: 'Colors',
    route: '/sandbox/colors',
  },
  {
    title: 'Form',
    route: '/sandbox/form',
  },
  {
    title: 'Searchable Select Form',
    route: '/sandbox/searchable-select-form',
  },
  {
    title: 'Text Link & Button',
    route: '/sandbox/text-button',
  },
  {
    title: 'Button',
    route: '/sandbox/button',
  },
  {
    title: 'Breadcrumb',
    route: '/sandbox/breadcrumb',
  },
  {
    title: 'Icon Button',
    route: '/sandbox/icon-button',
  },
  {
    title: 'React Query & Toast',
    route: '/sandbox/toast-rq',
  },
  {
    title: 'Modal',
    route: '/sandbox/modal',
  },
  {
    title: 'Dialog',
    route: '/sandbox/dialog',
  },
  {
    title: 'Table',
    route: '/sandbox/table',
  },
  {
    title: 'Tooltip',
    route: '/sandbox/tooltip',
  },
  {
    title: 'Mac Card',
    route: '/sandbox/mac-cards',
  },
  {
    title: 'Popover',
    route: '/sandbox/popover',
  },
  {
    title: 'Banner',
    route: '/sandbox/banner',
  },
  {
    title: 'Alert',
    route: '/sandbox/alert',
  },
  {
    title: 'Typography Alert',
    route: '/sandbox/typography-alert',
  },
  {
    title: 'Tag',
    route: '/sandbox/tag',
  },
  {
    title: 'Card',
    route: '/sandbox/card',
  },
  {
    title: 'Development Card',
    route: '/sandbox/development-card',
  },
  {
    title: 'Statistics Card',
    route: '/sandbox/statistics-card',
  },
];
//#endregion  //*======== Sandbox ===========
