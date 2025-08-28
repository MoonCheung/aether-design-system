import type { Route } from "./+types/statistics-card";
import * as React from 'react';
import { Users } from 'lucide-react';

import { StatisticsCard } from '~/components/cards/index';
import Layout from '~/components/layout/Layout';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'StatisticsCardPage' }];
}

export default function StatisticsCardPage() {
  return (
    <Layout>
      <main>
        <div className="layout min-h-screen max-w-xs space-y-4 py-20">
          <StatisticsCard
            variant='primary'
            icon={Users}
            label='Lorem Ipsum'
            value={10}
          />
          <StatisticsCard
            variant='secondary'
            icon={Users}
            label='Lorem Ipsum'
            value={10}
          />
          <StatisticsCard
            variant='danger'
            icon={Users}
            label='Lorem Ipsum'
            value={10}
          />
          <StatisticsCard
            variant='warning'
            icon={Users}
            label='Lorem Ipsum'
            value={10}
          />
          <StatisticsCard
            variant='success'
            icon={Users}
            label='Lorem Ipsum'
            value={10}
          />
          <StatisticsCard variant='primary' label='Lorem Ipsum' value={10} />
          <StatisticsCard
            variant='primary'
            icon={Users}
            label='Lorem Ipsum'
            value={10}
            isLoading
          />
          <StatisticsCard
            variant='primary'
            label='Lorem Ipsum'
            value={10}
            isLoading
          />
        </div>
      </main>
    </Layout>
  )
}