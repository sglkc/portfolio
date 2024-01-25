import Balancer from 'react-wrap-balancer'
import Section from '@/components/Section'
import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'

export default function Hero() {
  const lenis = useLenis()
  const toContacts = () => lenis.scrollTo('#contacts', {
    duration: 3,
    force: true
  })

  return (
    <Section title="Cikal Gemintang Seya" className="my-32 gap-8">
      <h2 className="font-bold text-lg sm:text-xl text-center">
        Front-End Developer / Back-End Developer
      </h2>
      <p className="text-center leading-6.5 w-full">
        <Balancer>
          I'm a web developer from Indonesia with 2 years experience. I’m
          committed to create intuitive, responsive, and accessible websites
          with maintainability and scalability as the focus in development
          while considering the current industry best practices.
          Exploring new things has always lead me to be a better programmer.
        </Balancer>
      </p>
      <button
        class={clsx(
          'b-2 b-black text-black fw-bold px-8 py-4 sm:(b-1 px-6 py-2)',
          'print:hidden transition-colors on:bg-black on:text-white'
        )}
        onClick={toContacts}
      >
        Contacts
      </button>
    </Section>
  )
}
