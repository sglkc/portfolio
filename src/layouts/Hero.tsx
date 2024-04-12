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
      <p className="text-center leading-6.5">
        <Balancer>
          I am a web developer from Indonesia with over 2 years of experience.
          Usually work around my hobbies and interests, I always try to be
          imaginative to train my creative thinking skill. Exploring new things
          has always lead me to be a better programmer.
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
      <div
        class={clsx(
          'print:mt-8 print:pl-0 px-0.25 py-8 bg-black z-0 print:animate-none',
          'animate-[3s_ease_1s_scroll-scale_infinite_both]'
        )}
      />
    </Section>
  )
}
