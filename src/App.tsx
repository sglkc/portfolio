import { useEffect, useState } from 'preact/hooks'
import Cursor from '@/components/Cursor'
import ScrollToTop from '@/components/ScrollToTop'
import Hero from '@/layouts/Hero'
import Works from '@/layouts/Works'
import About from '@/layouts/About'
import Principles from '@/layouts/Principles'
import Skills from '@/layouts/Skills'
import Contacts from '@/layouts/Contacts'
import Loader from '@/layouts/Loader'
import clsx from 'clsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', !loaded)
  }, [loaded])

  return (
    <>
      { loaded
          ? <Cursor />
          : <Loader setter={setLoaded} />
      }
      <div
        className={clsx(
          'mx-8 md:mx-16 my-16 md:my-32 flex flex-col items-center text-sm sm:text-base',
          '!print:my-0 print:mx-16',
        )}
      >
        <Hero />
        <Works />
        <About />
        <Skills />
        <Principles />
        <Contacts />
      </div>
      <ScrollToTop />
    </>
  )
}
