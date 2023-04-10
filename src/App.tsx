import { useEffect } from 'react'
import Hero from '@/layouts/Hero'
import Works from '@/layouts/Works'
import About from '@/layouts/About'
import Principles from '@/layouts/Principles'
import Skills from '@/layouts/Skills'

function App() {
  useEffect(() => {
    document.body.classList.remove()
    document.body.classList.add('bg-zinc-50')
  }, []);

  return (
    <div className="mx-16 my-32 flex flex-col items-center">
      <Hero />
      <Works />
      <About />
      <Principles />
      <Skills />
    </div>
  )
}

export default App