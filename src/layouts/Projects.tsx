import Project, { ProjectProps } from '@/components/Project'
import Section from '@/components/Section'
import clsx from 'clsx'

const projects: ProjectProps[] = [
  { name: 'Moegi', url: 'moegi'},
  { name: 'INKU.my.id', url: '/inku.my.id', src: 'inku.webp' },
  { name: 'Goal Stack Planning', url: 'goal-stack-planning' },
  { name: 'Waifu on the Web', url: 'waifu-on-the-web' },
  { name: 'Live Translate', url: 'live-translate' },
  { name: 'Japanese Assistant', url: 'jp-assistant' },
  { name: 'Ohayou', url: 'ohayou' },
  { name: 'Hotel', url: 'hotel-vue' },
  { name: 'Asobimashou', url: 'asobimashou' },
  { name: 'Simak PPDB', src: 'simak-ppdb.webp' },
  { name: 'Hubin 13', src: 'hubin-13.webp' },
  { name: 'Savikindo', url: 'svknd.id', src: 'savikindo.webp' },
]

export default function Projects() {
  return (
    <Section title="Featured Projects" className="max-w-screen">
      <div
        className={clsx(
          'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
          'print:grid-cols-3 print:mx-8 gap-8 justify-center max-w-256'
        )}
      >
        { projects.map((project, i) => <Project key={i} {...project} />)}
      </div>
    </Section>
  )
}
