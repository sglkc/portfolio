import { useEffect } from 'react'
import Hero from '@/layouts/Hero'
import Works from '@/layouts/Works'
import About from '@/layouts/About'
import Principles from '@/layouts/Principles'
import Skills from '@/layouts/Skills'
import ScrollToTop from '@/components/ScrollToTop'
import Footer from './layouts/Footer'

function App() {
  useEffect(() => {
    document.body.classList.remove()
    document.body.classList.add('bg-zinc-50')
  }, []);

  return (
    <>
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

export default App
