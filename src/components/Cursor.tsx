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

  const updateCursorPosition = ({ clientX, clientY }: MouseEvent) => {
    cursor.x.set(clientX - size / 2)
    cursor.y.set(clientY - size / 2)
  }

  let mouseResetTimeout: ReturnType<typeof setTimeout>
  const resetCursorPosition = () => {
    clearTimeout(mouseResetTimeout)
    mouseResetTimeout = setTimeout(() => cursor.y.set(window.outerHeight), 5000)
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition)
    window.addEventListener('scroll', resetCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      window.removeEventListener('scroll', resetCursorPosition)
  }
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
        zIndex: 5,
        cursor: 'pointer'
      }}
    />
  )
}
