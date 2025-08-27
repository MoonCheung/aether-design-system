import type { Route } from "./+types/card";
import * as React from 'react';

import { Button } from '~/components/buttons/index';
import Layout from '~/components/layout/Layout';
import { Card } from './components/index';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'CardPage' }];
}

export default function CardPage() {
  return (
    <Layout>
      <main>
        <div className='layout min-h-screen py-20'>
          <Card title='Card Title' className='mt-8'>
            <Card.Section>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ratione asperiores dolorem minima repudiandae ducimus vero
              accusantium repellat hic. Beatae enim id ab dolorum a corrupti
              recusandae, suscipit officiis veniam, sequi perspiciatis cumque
              harum adipisci labore. Eum id ratione velit ipsa facilis at
              consequuntur mollitia! Ut sed dignissimos doloremque
              voluptatibus voluptatum cumque totam voluptates illo, quisquam
              ducimus necessitatibus numquam. Dolore doloremque magni,
              cupiditate odio tenetur eligendi eius qui minus officia adipisci
              iure eaque, eos ipsa aperiam quasi quaerat, debitis maiores
              nesciunt corporis perspiciatis doloribus modi numquam placeat.
              Odit omnis a, repellendus perferendis ipsa culpa iure provident
              quo architecto, dolorem pariatur quos!
            </Card.Section>
            <Card.Section>
              <div className='flex justify-end gap-2'>
                <Button variant='outline'>Label</Button>
                <Button>Label</Button>
              </div>
            </Card.Section>
          </Card>
        </div>
      </main>
    </Layout>
  )
}