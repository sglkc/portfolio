import Balancer from 'react-wrap-balancer'
import Section from '@/components/Section'
import SocialProps from '@/types/Social'
import Social from '@/components/Social'

const socials: SocialProps[] = [
  { href: 'https://sglkc.my.id', icon: 'i-mdi:web' },
  { href: 'https://github.com/sglkc/', icon: 'i-mdi:github' },
  { href: 'https://linkedin.com/in/cikal-gs/', icon: 'i-mdi:linkedin' },
  {
    href: 'mailto:cikalgemintangseya1@gmail.com',
    icon: 'i-mdi:gmail',
    name: 'cikalgemintangseya1@gmail.com'
  },
  { href: 'https://instagram.com/ckl_gs/', icon: 'i-mdi:instagram' },
]

export default function Footer() {
  return (
    <Section title="" className="my-32 sm:my-16">
      <h2 className="text-center text-lg sm:text-xl">
        <Balancer>
          If you wish to know more about me or my projects, you can
          contact/stalk me on the following links.
        </Balancer>
      </h2>
      <div className="flex flex-col gap-4">
        { socials.map((social, i) => <Social key={i} {...social} />)}
      </div>
    </Section>
  )
}
