import type { Route } from "./+types/alert";
import { Alert } from '~/components/alerts/index';
import Layout from '~/components/layout/Layout';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Alert' }];
}

export default function AlertPage() {
  return (
    <Layout>
      <main>
        <div className="layout min-h-screen space-y-4 py-20">
          <Alert>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Alert>
          <Alert variant='secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Alert>
          <Alert variant='danger'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Alert>
          <Alert variant='warning'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Alert>
          <Alert variant='success'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            velit.
          </Alert>
        </div>
      </main>
    </Layout>
  )
}