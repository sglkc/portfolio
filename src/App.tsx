import { useState } from 'preact/hooks'
import Cursor from '@/components/Cursor'
import ScrollToTop from '@/components/ScrollToTop'
import Hero from '@/layouts/Hero'
import Works from '@/layouts/Works'
import About from '@/layouts/About'
import Principles from '@/layouts/Principles'
import Skills from '@/layouts/Skills'
import Footer from '@/layouts/Footer'
import Loader from '@/layouts/Loader'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      { loaded
          ? <Cursor />
          : <Loader setter={setLoaded} />
      }
      <div
        className="mx-8 md:mx-16 my-16 md:my-32 flex flex-col items-center text-sm sm:text-base"
      >
        <Hero />
        <Works />
        <About />
        <Skills />
        <Principles />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  )
}
