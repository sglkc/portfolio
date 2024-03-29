import Balancer from 'react-wrap-balancer'
import Section from '@/components/Section'

export default function Hero() {
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
      <div className="flex gap-8">
        <a
          className="i-mdi:github transition-icon on:text-[#333333]"
          href="https://github.com/sglkc/"
        >GitHub</a>
        <a
          className="i-mdi:linkedin transition-icon on:text-[#1572b6]"
          href="https://linkedin.com/in/cikal-gs/"
        >LinkedIn</a>
        <a
          className="i-mdi:gmail transition-icon on:text-[#d14836]"
          href="mailto:cikalgemintangseya1@gmail.com"
        >Email</a>
      </div>
    </Section>
  )
}
