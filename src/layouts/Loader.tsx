import { StateUpdater, useEffect, useState } from 'preact/hooks'
import { m as motion } from 'framer-motion'

export type LoaderProps = {
  setter: StateUpdater<boolean>
}

export default function Loader({ setter }: LoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((val) => val + 1)
      } else {
        setProgress(100)
        clearInterval(interval)
      }
    }, 10)

    return () => clearInterval(interval)
  }, [progress])

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 5,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        originY: 1,
        cursor: 'progress'
      }}
      animate={progress < 100 ? {} : { y: '-100vh' }}
      transition={{
        type: 'spring',
        delay: 1,
        duration: 1
      }}
      onAnimationComplete={() => setter(true)}
      data-lenis-prevent
    >
      <motion.div
        style={{
          width: '1px',
          height: '100vh',
          margin: 'auto',
          marginTop: 0,
          backgroundColor: 'black',
          position: 'relative',
          originY: 0
        }}
        initial={{ scaleY: 0 }}
        animate={progress < 100 ? 'loading' : 'loaded'}
        variants={{
          loading: {
            scaleY: 1,
            transition: {
              delay: 0.5,
              duration: 1.5,
            }
          },
          loaded: {
            x: -10,
            opacity: 0,
            scaleY: 1,
            transition: {
              delay: 0.5,
              duration: 0.25
            }
          }
        }}
        transition={{
          type: 'spring',
          bounce: 0.15
        }}
      >
        <p class="absolute bottom-5 left-5 font-sans">
          <span class="text-4xl">{ progress }</span>
          <span class="fw-thin">%</span>
        </p>
      </motion.div>
    </motion.div>
  )
}
