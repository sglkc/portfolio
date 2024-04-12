import Project, { ProjectProps } from '@/components/Project'
import Section from '@/components/Section'
import clsx from 'clsx'

const projects: ProjectProps[] = [
  { name: 'INUBARA 5', url: '/inubara.inku.my.id', src: 'inubara.webp' },
  { name: 'Moegi Extension', url: 'moegi'},
  { name: 'INKU', url: '/inku.my.id', src: 'inku.webp' },
  // { name: 'Goal Stack Planning', url: 'goal-stack-planning' },
  { name: 'Blog', url: 'blog', src: 'blog.webp' },
  { name: 'Waifu on the Web AI', url: 'waifu-on-the-web' },
  { name: 'JR Digilib', src: 'jr-digilib.webp' },
  { name: 'JR Academy App', src: 'jr-academy.webp' },
  { name: 'Live Translate', url: 'live-translate' },
  { name: 'Japanese Assistant', url: 'jp-assistant' },
  { name: 'Ohayou', url: 'ohayou' },
  { name: 'Hotel', url: 'hotel-vue' },
  { name: 'Asobimashou', url: 'asobimashou' },
  { name: 'Simak PPDB', src: 'simak-ppdb.webp' },
  { name: 'Hubin 13', src: 'hubin-13.webp' },
  { name: 'Savikindo', url: 'svknd.id', src: 'savikindo.webp' },
  { name: 'Hubin Humas 13', src: 'hubin-landing.webp' },
]

export default function Projects() {
  return (
    <Section title="Various Projects" className="max-w-screen">
      <div
        className={clsx(
          'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center',
          'max-w-256 !print:grid-cols-4 !print:mx-4'
        )}
      >
        { projects.map((project, i) => <Project key={i} {...project} />)}
      </div>
    </Section>
  )
}
