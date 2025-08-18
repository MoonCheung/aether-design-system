import type { Route } from "./+types/modal";
import * as React from 'react';
import { Button } from '~/components/buttons/index';
import Layout from '~/components/layout/Layout';

import { ExampleModal } from '~/routes/sandbox/components/index';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Modal' }]
}

export default function ModalPage() {
  return (
    <Layout>
      <main>
        <div className='layout min-h-screen py-20'>
          <ExampleModal>
            {({ openModal }) => (
              <Button onClick={openModal}>Open Modal</Button>
            )}
          </ExampleModal>
        </div>
      </main>
    </Layout>
  )
}