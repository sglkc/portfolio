import Project, { ProjectProps } from '@/components/Project'
import Section from '@/components/Section'

const projects: ProjectProps[] = [
  { href: 'jr-academy', name: 'Jalan Rahmat Academy', src: 'jr-academy.webp' },
  { href: 'jr-digilib', name: 'Jalan Rahmat Digilib', src: 'jr-digilib.webp' },
  { href: 'live-translate', name: 'Live Translate', src: 'live-translate-2.webp' },
  { href: 'hotel-vue', name: 'Hotel Vue', src: 'hotel-vue.webp' },
  { href: 'simak-ppdb', name: 'Simak PPDB', src: 'simak-ppdb.webp' },
  { href: 'hubin', name: 'Hubin 13', src: 'hubin-13.webp' },
]

export default function Works() {
  return (
    <Section title="Featured Works" className="max-w-screen">
      <div
        className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center max-w-256"
      >
        { projects.map((project, i) => <Project key={i} {...project} />)}
      </div>
      <a
        className="font-serif no-underline text-base sm:text-lg"
        href="https://sglkc.my.id/projects/"
      >
        view more
      </a>
    </Section>
  )
}
