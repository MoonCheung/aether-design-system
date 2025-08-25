import type { Route } from "./+types/typography-alert";
import { AlertTriangle, AtSign } from 'lucide-react';
import { TypographyAlert } from '~/components/alerts/index';
import { UnstyledLink } from '~/components/links/index';
import Typography from '~/components/Typography';
import Layout from '~/components/layout/Layout'

export default function TypographyAlertPage() {
  return (
    <Layout>
      <main>
        <div className='layout min-h-screen space-y-4 py-20'>
          <Typography as='h1' variant='h1'>
            Typography Alert
          </Typography>
          <TypographyAlert>
            <p className='font-semibold'>Hello</p>
            <ul>
              <li>Hi</li>
              <li>Hi</li>
              <li>Hi</li>
            </ul>
          </TypographyAlert>
          <TypographyAlert variant='secondary' leftIcon={AlertTriangle}>
            <p>Hello</p>
            <ul>
              <li>Hi</li>
              <li>Hi</li>
              <li>Hi</li>
            </ul>
          </TypographyAlert>
          <TypographyAlert variant='danger'>
            <p>Hello</p>
            <ul>
              <li>Hi</li>
              <li>Hi</li>
              <li>Hi</li>
            </ul>
          </TypographyAlert>
          <TypographyAlert variant='warning' leftIcon={AtSign}>
            <p>Contact Us</p>
            <p>
              Contact us on{' '}
              <UnstyledLink href='/'>+62812341234234</UnstyledLink>
            </p>
          </TypographyAlert>
          <TypographyAlert variant='success'>
            <p>Hello</p>
            <ul>
              <li>Hi</li>
              <li>Hi</li>
              <li>Hi</li>
            </ul>
          </TypographyAlert>
        </div>
      </main>
    </Layout>
  )
}