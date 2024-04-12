import Balancer from 'react-wrap-balancer'
import Section from '@/components/Section'

export default function About() {
  return (
    <Section title="About" className="gap-8">
      <p className="mt-8 text-center w-full">
        <Balancer>
          I am currently pursuing my undergraduate degree in Informatics at the
          National Institute of Technology (ITENAS) in West Java, Bandung.
        </Balancer>
      </p>
      <p className="text-center w-full">
        <Balancer>
          My interest in technology dates back to my elementary school days,
          marking a significant turning point. Since then, I have been wondering
          about programming. During my formal skill development in vocational
          high school as a software engineer, I became deeply involved in web
          development and decided to focus in the field.
        </Balancer>
      </p>
      <p className="text-center w-full">
        <Balancer>
          While I typically work independently, I also enjoy collaborating with
          others. Contributing recommendations and ideas is something I thrive
          on in a team environment. Additionally, I occasionally contribute to
          open-source projects on GitHub.
       </Balancer>
      </p>
    </Section>
  )
}
