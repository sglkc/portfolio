import { useEffect } from 'preact/hooks';
import { m as motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const size = 20
  const cursor = {
    x: useMotionValue(document.documentElement.clientWidth / 2),
    y: useMotionValue(document.documentElement.clientHeight)
  }

  const options = {
    damping: 20,
    stiffness: 350,
    mass: 0.5
  }

  const cursorSpring = {
    x: useSpring(cursor.x, options),
    y: useSpring(cursor.y, options)
  }

  const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
    cursor.x.set(clientX - size / 2)
    cursor.y.set(clientY - size / 2)
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <motion.div
      // @ts-ignore
      class="print:hidden"
      style={{
        left: cursorSpring.x,
        top: cursorSpring.y,
        position: 'fixed',
        width: size,
        height: size,
        backgroundColor: 'black',
        borderRadius: '50%',
        pointerEvents: 'none',
        backdropFilter: 'invert(1)',
        mixBlendMode: 'difference',
        zIndex: 5
      }}
    />
  )
}
