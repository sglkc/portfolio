import Balancer from 'react-wrap-balancer'
import Section from '@/components/Section'
import Skill, { SkillProps } from '@/components/Skill'

const skills: SkillProps[] = [
  { name: 'HTML5', icon: 'i-dev:html5' },
  { name: 'CSS3', icon: 'i-dev:css3' },
  { name: 'JavaScript', icon: 'i-dev:javascript' },
  { name: 'TypeScript', icon: 'i-dev:typescript' },
  { name: 'Node.js', icon: 'i-dev:nodejs' },
  { name: 'npm', icon: 'i-dev:npm-wordmark' },
  { name: 'pnpm', icon: 'i-dev:pnpm' },
  { name: 'Bootstrap', icon: 'i-dev:bootstrap' },
  { name: 'Tailwind CSS', icon: 'i-dev:tailwindcss' },
  { name: 'UnoCSS', icon: 'i-my:unocss' },
  { name: 'jQuery', icon: 'i-dev:jquery' },
  { name: 'Axios', icon: 'i-my:axios' },
  { name: 'Vite', icon: 'i-dev:vitejs' },
  { name: 'React', icon: 'i-dev:react' },
  { name: 'Preact', icon: 'i-my:preact' },
  { name: 'Express', icon: 'i-dev:express' },
  { name: 'Sequelize', icon: 'i-dev:sequelize' },
  { name: 'PHP', icon: 'i-dev:php' },
  { name: 'Laravel', icon: 'i-dev:laravel' },
  { name: 'MariaDB', icon: 'i-dev:mariadb' },
  { name: 'Linux', icon: 'i-dev:linux' },
  { name: 'Git', icon: 'i-dev:git' },
  { name: 'Postman', icon: 'i-dev:postman' },
  { name: 'NeoVim', icon: 'i-dev:neovim' },
]

export default function Skills() {
  return (
    <Section title="Skills" className="max-w-256">
      <p class="text-center w-full max-w-96 sm:max-w-144">
        <Balancer>
          The following are technologies that I usually use for development.
          Of course, there are more and will definitely expand as time passes.
        </Balancer>
      </p>
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 print:grid-cols-4 gap-8"
      >
        { skills.map((skill, i) => <Skill key={i} {...skill} />) }
      </div>
    </Section>

  )
}
