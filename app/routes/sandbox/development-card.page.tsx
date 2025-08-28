import type { Route } from "./+types/development-card";
import * as React from 'react';

import { Button } from '~/components/buttons/index';
import { DevelopmentCard } from '~/components/cards/index';
import Layout from '~/components/layout/Layout';
import Typography from '~/components/Typography';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'DevelopmentCardPage' }];
}

export default function DevelopmentCardPage() {
  return (
    <Layout>
      <main>
        <div className='layout min-h-screen py-20'>
          <Typography as='h1' variant='h1'>
            Development Card
          </Typography>

          <Typography variant='b2' className='mt-4'>
            You might not see anything here
          </Typography>

          <DevelopmentCard className='mt-3 space-y-2'>
            <Typography variant='b3'>
              Some development only content here
            </Typography>
            <Button>Button</Button>
          </DevelopmentCard>
        </div>
      </main>
    </Layout>
  )
}