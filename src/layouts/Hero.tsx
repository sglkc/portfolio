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
      <div class="flex gap-8">
        <a class="i-mdi:github" href="https://github.com/sglkc/" />
        <a class="i-mdi:linkedin" href="https://linkedin.com/in/cikal-gs/" />
        <a class="i-mdi:gmail" href="mailto:cikalgemintangseya1@gmail.com" />
      </div>
    </Section>
  )
}
