import type { Route } from "./+types/colors";
import * as React from 'react';
import Layout from '~/components/layout/Layout';
import ColorBox from '~/components/color/ColorBox';
import Typography from '~/components/Typography';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'ColorBox' }]
}

export default function Colors() {
  return (
    <Layout>
      <main>
        <div className='layout min-h-screen py-20'>
          <Typography as='h1' variant='j1'>
            Colors
          </Typography>
          <section className='mt-8'>
            <Typography as='h2' variant='h2'>
              Primary
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-primary-50 text-black'>50</ColorBox>
              <ColorBox className='bg-primary-100 text-black'>
                <p> 100</p>
                <p>Background</p>
              </ColorBox>
              <ColorBox className='bg-primary-200 text-black'>200</ColorBox>
              <ColorBox className='bg-primary-300 text-black'>300</ColorBox>
              <ColorBox className='bg-primary-400 text-black'>
                <p>400</p>
                <p>Complement</p>
              </ColorBox>
              <ColorBox className='bg-primary-500 text-white'>
                <p>500</p>
                <p>Default</p>
              </ColorBox>
              <ColorBox className='bg-primary-600 text-white'>
                <p>600</p>
                <p>Hovered</p>
              </ColorBox>
              <ColorBox className='bg-primary-700 text-white'>
                <p>700</p>
                <p>Active</p>
              </ColorBox>
              <ColorBox className='bg-primary-800 text-white'>800</ColorBox>
              <ColorBox className='bg-primary-900 text-white'>900</ColorBox>
            </div>
          </section>
          <section className='mt-4'>
            <Typography as='h2' variant='h2'>
              Secondary
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-secondary-50 text-black'>50</ColorBox>
              <ColorBox className='bg-secondary-100 text-black'>
                <p> 100</p>
                <p>Background</p>
              </ColorBox>
              <ColorBox className='bg-secondary-200 text-black'>200</ColorBox>
              <ColorBox className='bg-secondary-300 text-black'>300</ColorBox>
              <ColorBox className='bg-secondary-400 text-black'>
                <p>400</p>
                <p>Complement</p>
              </ColorBox>
              <ColorBox className='bg-secondary-500 text-white'>
                <p>500</p>
                <p>Default</p>
              </ColorBox>
              <ColorBox className='bg-secondary-600 text-white'>
                <p>600</p>
                <p>Hovered</p>
              </ColorBox>
              <ColorBox className='bg-secondary-700 text-white'>
                <p>700</p>
                <p>Active</p>
              </ColorBox>
              <ColorBox className='bg-secondary-800 text-white'>800</ColorBox>
              <ColorBox className='bg-secondary-900 text-white'>900</ColorBox>
            </div>
          </section>

          <section className='mt-4'>
            <Typography as='h2' variant='h2'>
              Typography
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-typo text-white'>Default</ColorBox>
              <ColorBox className='bg-typo-secondary text-white'>
                Secondary
              </ColorBox>
              <ColorBox className='bg-typo-tertiary text-white'>
                Tertiary
              </ColorBox>
              <ColorBox className='bg-typo-icons text-white'>Icons</ColorBox>
              <ColorBox className='bg-typo-divider text-typo'>Divider</ColorBox>
              <ColorBox className='bg-typo-outline text-typo'>Outline</ColorBox>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}