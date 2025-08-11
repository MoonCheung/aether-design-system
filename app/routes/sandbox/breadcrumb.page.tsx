import type { Route } from "./+types/breadcrumb";
import Breadcrumb from '~/components/Breadcrumb';
import Typography from '~/components/Typography';
import Layout from '~/components/layout/Layout';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Breadcrumb' }]
}

export default function BreadcrumbPage() {
  return (
    <Layout>
      <main>
        <div className='layout min-h-screen py-20'>
          <Typography as='h1' variant='h1'>
            Breadcrumb
          </Typography>
          <Breadcrumb className='mt-4' crumbs={['/']} />
          <Breadcrumb
            className='mt-4'
            crumbs={['/', '/sandbox/breadcrumb']}
          />
        </div>
      </main>
    </Layout>
  )
}