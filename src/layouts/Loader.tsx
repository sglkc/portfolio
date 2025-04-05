import { Dispatch, StateUpdater, useEffect, useState } from 'preact/hooks'
import { m as motion } from 'framer-motion'

export type LoaderProps = {
  setLoader: Dispatch<StateUpdater<boolean>>
}

export default function Loader({ setLoader }: LoaderProps) {
  const curtainStyle = {
    position: 'fixed',
    backgroundColor: 'white',
    cursor: 'progress',
  }

  const curtainTransition = {
    type: 'spring',
    delay: 0.5,
    duration: 1.25
  }

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
    <div class="fixed inset-0">
      <motion.div
        style={{
          width: '1px',
          height: '100svh',
          margin: 'auto',
          marginTop: 0,
          zIndex: 99,
          backgroundColor: 'black',
          position: 'relative',
          inset: 0,
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
      <motion.div
        style={{ ...curtainStyle, inset: '0 50% 0 0', originY: 0 }}
        animate={progress == 100 && { scaleY: 0 }}
        transition={curtainTransition}
        onAnimationComplete={() => setLoader(false)}
        data-lenis-prevent
      />
      <motion.div
        style={{ ...curtainStyle, inset: '0 0 0 50%', originY: 1 }}
        animate={progress == 100 && { scaleY: 0 }}
        transition={curtainTransition}
        data-lenis-prevent
      />
    </div>
  )
}
