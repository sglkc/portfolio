import { useState } from 'react'
import clsx from 'clsx'
import { m } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis';

const variants = {
  hidden: { y: 100, opacity: 0, scale: 0 },
  shown: { y: 0, opacity: 1, scale: 1 }
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis(({ scroll }) => setVisible(scroll > 100));

  const onClick = () => lenis.scrollTo(document.documentElement, {
    duration: 2,
    offset: 0,
    force: true
  })

  return (
    <m.button
      // @ts-ignore
      className={clsx(
        'fixed bottom-0 right-0 m-4 sm:m-8 print:hidden',
        'i-mdi:arrow-up-drop-circle text-black text-2xl'
      )}
      animate={visible ? 'shown' : 'hidden'}
      initial="hidden"
      variants={variants}
      onClick={onClick}
    />
  )
}
