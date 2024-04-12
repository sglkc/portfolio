import { useEffect, useState } from 'preact/hooks'
import { m as motion, useScroll } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import Cursor from '@/components/Cursor'
import ScrollToTop from '@/components/ScrollToTop'
import Progress from '@/components/Progress'
import Hero from '@/layouts/Hero'
import Projects from '@/layouts/Projects'
import About from '@/layouts/About'
import Principles from '@/layouts/Principles'
import Skills from '@/layouts/Skills'
import Contacts from '@/layouts/Contacts'
import Loader from '@/layouts/Loader'

export default function App() {
  const [loader, setLoader] = useState(true)
  const { scrollYProgress: progress } = useScroll()
  const lenis = useLenis()

  useEffect(() => {
    if (loader) {
      lenis?.stop()
      lenis?.scrollTo(0, { force: true, immediate: true })
    } else {
      lenis.start()
      document.body.classList.remove('overflow-hidden')
    }
  }, [loader])

  return (
    <>
      <motion.div
        initial={{ backgroundColor: '#000' }}
        animate={{ backgroundColor: '#fff' }}
        transition={{
          delay: 2.5,
          duration: 1
        }}
      >
        <div
          className={clsx(
            'px-8 md:px-16 py-16 md:py-32 flex flex-col items-center',
            'text-sm sm:text-base !print:py-0 print:px-16',
          )}
        >
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Principles />
          <Contacts />
        </div>
      </motion.div>
      <Progress progress={progress} />
      <ScrollToTop />
      <Cursor />
      { loader && <Loader setLoader={setLoader} /> }
    </>
  )
}
