import { MotionValue, m as motion, useSpring, useTransform } from 'framer-motion'

export type ProgressProps = {
  progress: MotionValue<number>
}

export default function Progress({ progress }: ProgressProps) {
  const transform = useTransform(progress, [0, 1], [window.outerWidth, 0])
  const spring = useSpring(transform, { stiffness: 300, damping: 50 })

  return (
    <motion.div
      // @ts-ignore
      class="fixed left-0 bottom-0 bg-black pt-1 sm:pt-2 print:hidden"
      style={{ right: spring }}
    />
  )
}
