import Balancer from 'react-wrap-balancer'
import Section from '@/components/Section'

export default function About() {
  return (
    <Section title="About" className="gap-8">
      <p className="mt-8 text-center w-full">
        <Balancer>
          My name is Cikal Gemintang Seya, I’m currently an informatics
          undergraduate in National Institute of Technology, Bandung. In the
          online world, I usually go by <u>sglkc</u> or <u>seya</u>.
        </Balancer>
      </p>
      <p className="text-center w-full">
        <Balancer>
          Technology is what I have in mind ever since I was a child, my
          curiosity in elementary school was a big turning point, leading me
          to strive to be a programmer. As I formally develop my skills in
          vocational high school as a software engineer, I was caught into
          web development and I loved it so much.
        </Balancer>
      </p>
      <p className="text-center w-full">
        <Balancer>
          I usually work alone, but that doesn't mean I can't work with a team.
          Getting tasks right won't be possible without teamwork. I normally
          contribute to the team by giving recommendations and ideas with my
          own reasons.
        </Balancer>
      </p>
    </Section>
  )
}
