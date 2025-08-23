import type { Route } from "./+types/banner";
import * as React from 'react';
import Banner from '~/components/Banner';
import Layout from '~/components/layout/Layout';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Banner' }];
}

export default function BannerPage() {
  return (
    <Layout>
      <main>
        <div className="layout min-h-screen space-y-4 py-20">
          <Banner>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Banner>
          <Banner variant='secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Banner>
          <Banner variant='warning'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Banner>
          <Banner variant='danger'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Banner>
          <Banner variant='success'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Banner>
        </div>
      </main>
    </Layout>
  )
}