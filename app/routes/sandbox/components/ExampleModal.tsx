import React, { type JSX } from 'react';

import Modal from '~/components/Modal';
import { Button } from '~/components/buttons/index';
import Typography from '~/components/Typography';

type ModalReturnType = {
  openModal: () => void;
};

type ExampleModalProps = {
  children: (props: ModalReturnType) => JSX.Element;
}

export function ExampleModal({ children }: ExampleModalProps){
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true)
  }

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen} title='Modal Title'>
        <Modal.Section>
          <Typography variant='b2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ex cumque assumenda! Nesciunt reiciendis dolores sit atque incidunt
            debitis repudiandae.
          </Typography>
        </Modal.Section>
        <Modal.Section>
          <div className='flex justify-end gap-2'>
            <Button variant='outline'>Label</Button>
            <Button>Label</Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  )
}