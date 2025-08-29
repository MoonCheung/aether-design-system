import type { Route } from './+types/NotFoundPage'
import { Siren } from 'lucide-react';
import Typography from '~/components/Typography';
import Layout from '~/components/layout/Layout';
import { ArrowLink } from '~/components/links/index';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Not Found Page' }];
}

export default function NotFoundPage() {
  return (
    <Layout>
      <main>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black dark:text-white'>
          <Siren
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <Typography className='mt-4' as='h1' variant='j1'>
            Page Not Found
          </Typography>
          <Typography className='mt-4' variant='b1'>
            <ArrowLink href='/'>Back to Home</ArrowLink>
          </Typography>
        </div>
      </main>
    </Layout>
  )
}
