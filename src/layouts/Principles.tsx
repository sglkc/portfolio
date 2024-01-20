import Principle from '@/components/Principle'
import Section from '@/components/Section'

export default function Principles() {
  return (
    <Section title="Principles" className="max-w-192">
      <div class="mx-0 print:px-8 sm:ml-[clamp(0rem,5vw,8rem)] grid gap-8 w-full">
        <Principle title="Development">
          Reading documentation, following code design patterns, and
          embracing best practices are my principle in writing clean codes.
          A maintainable and scalable codebase will benefit everyone in the
          future.
        </Principle>
        <Principle title="Design" right>
          Although UI/UX isn’t my thing, I like minimalism because of it’s
          simplicity and uncluttered design, “less is more”. But I also like
          creative design that convey ideas using animations, transitions,
          and illustrations.
        </Principle>
        <Principle title="Delivery">
          Most of all, I would like my clients to have a great experience while
          working with me. Communication and adaptability is what I look for in
          every task.
        </Principle>
      </div>
    </Section>
  )
}
