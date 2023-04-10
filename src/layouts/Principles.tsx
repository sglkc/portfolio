import Principle from '@/components/Principle'
import Section from '@/components/Section'

export default function Principles() {
  return (
    <Section title="Principles" className="max-w-192">
      <div className="ml-[clamp(0rem,5vw,8rem)] grid gap-8">
        <Principle title="Code">
          Reading documentation, following code design patterns, and
          embracing best practices are my principle in writing clean codes.
          A maintainable and scalable codebase will benefit everyone in the
          future. Alas, my private projects are not quite clean.
        </Principle>
        <Principle title="Design">
          Although UI/UX isn’t my thing, I like minimalism because of it’s
          simplicity and uncluttered design, “less is more”. But I also like
          creative design that convey ideas using animations, transitions,
          and illustrations.
        </Principle>
        <Principle title="Delivery">
          Most of all, I would like my clients to have a great experience
          working with me. Adaptability is what I look for in every plan.
          I am always ready to meet up and get to know other cool people.
        </Principle>
      </div>
    </Section>
  )
}
