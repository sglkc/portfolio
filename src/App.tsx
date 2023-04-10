import { useEffect } from 'react'
import Hero from '@/layouts/Hero'
import Works from '@/layouts/Works'
import About from '@/layouts/About'
import Principles from '@/layouts/Principles'
import Skills from '@/layouts/Skills'
import ScrollToTop from '@/components/ScrollToTop'

function App() {
  useEffect(() => {
    document.body.classList.remove()
    document.body.classList.add('bg-zinc-50')
  }, []);

  return (
    <>
      <div className="mx-8 md:mx-16 my-16 md:my-32 flex flex-col items-center">
        <Hero />
        <Works />
        <About />
        <Skills />
        <Principles />
      </div>
      <ScrollToTop />
    </>
  )
}

export default App
