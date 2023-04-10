import { useState } from 'react'
import clsx from 'clsx'
import { m, useMotionValueEvent, useScroll } from 'framer-motion'

const variants = {
  hidden: { y: 100, opacity: 0, scale: 0 },
  shown: { y: 0, opacity: 1, scale: 1 }
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', ((latest) => setVisible(latest > 100)))

  function onClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <m.button
      className={clsx(
        'fixed bottom-0 right-0 m-8',
        'i-mdi:arrow-up-drop-circle text-black text-2xl'
      )}
      animate={visible ? 'shown' : 'hidden'}
      initial="hidden"
      variants={variants}
      onClick={onClick}
    >To Top</m.button>
  )
}
