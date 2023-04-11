import Balancer from 'react-wrap-balancer'
import Section from '@/components/Section'
import Skill from '@/components/Skill'
import SkillProps from '@/types/Skill'

const skills: SkillProps[] = [
  { color: 'bg-[#e34f26]', name: 'HTML5', icon: 'i-si:html5' },
  { color: 'bg-[#1572b6]', name: 'CSS3', icon: 'i-si:css3' },
  { color: 'bg-[#f2d70d]', name: 'JavaScript', icon: 'i-si:javascript' },
  { color: 'bg-[#3178c6]', name: 'Typescript', icon: 'i-si:typescript' },
  { color: 'bg-[#339933]', name: 'Node JS', icon: 'i-si:nodejs' },
  { color: 'bg-[#61dafb]', name: 'React', icon: 'i-si:react' },
  { color: 'bg-[#4fc08d]', name: 'Vue.js', icon: 'i-si:vuejs' },
  { color: 'bg-[#7952b3]', name: 'Bootstrap', icon: 'i-si:bootstrap' },
  { color: 'bg-[#06b6d4]', name: 'Tailwind CSS', icon: 'i-si:tailwindcss' },
  { color: 'bg-[#333333]', name: 'UnoCSS', icon: 'i-si:unocss' },
  { color: 'bg-[#333333]', name: 'Express', icon: 'i-si:express' },
  { color: 'bg-[#777bb4]', name: 'PHP', icon: 'i-si:php' },
  { color: 'bg-[#ff2d20]', name: 'Laravel', icon: 'i-si:laravel' },
  { color: 'bg-[#4479a1]', name: 'MariaDB', icon: 'i-si:mariadb' },
  { color: 'bg-[#47a248]', name: 'MongoDB', icon: 'i-si:mongodb' },
  { color: 'bg-[#333333]', name: 'Linux', icon: 'i-si:linux' },
  { color: 'bg-[#f05032]', name: 'Git', icon: 'i-si:git' },
  { color: 'bg-[#57a143]', name: 'NeoVim', icon: 'i-si:neovim' },
]

export default function Skills() {
  return (
    <Section title="Skills" className="max-w-256">
      <p className="text-center w-full max-w-128">
        <Balancer>
          The following is a <u>selective</u> list of technologies that I have
          used throughout my career. Of course, there are more than this and
          will expand as time passes.
        </Balancer>
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        { skills.map((skill, i) => <Skill key={i} {...skill} />) }
      </div>
    </Section>

  )
}
