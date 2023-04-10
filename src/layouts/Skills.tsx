import Balancer from 'react-wrap-balancer'
import Section from '@/components/Section'
import Skill from '@/components/Skill'

export default function Skills() {
  return (
    <Section title="Skills" className="max-w-256">
      <p className="text-center w-full max-w-128">
        <Balancer>
          The following is a selective list of programming languages, libraries,
          frameworks, and technologies that I have used throughout my career.
        </Balancer>
      </p>
      <div className="grid grid-cols-6 gap-8">
        <Skill name="HTML" icon="i-si:html5 group-hover:text-[#e34f26]" />
        <Skill name="CSS" icon="i-si:css3 group-hover:text-[#1572b6]" />
        <Skill name="JavaScript" icon="i-si:javascript group-hover:text-[#f2d70d]" />
        <Skill name="TypeScript" icon="i-si:typescript group-hover:text-[#3178c6]" />
        <Skill name="Node JS" icon="i-si:nodejs group-hover:text-[#339933]" />
        <Skill name="React" icon="i-si:react group-hover:text-[#61dafb]" />
        <Skill name="Vue.js" icon="i-si:vuejs group-hover:text-[#4fc08d]" />
        <Skill name="Bootstrap" icon="i-si:bootstrap group-hover:text-[#7952b3]" />
        <Skill name="Tailwind CSS" icon="i-si:tailwindcss group-hover:text-[#06b6d4]" />
        <Skill name="UnoCSS" icon="i-si:unocss group-hover:text-[#333333]" />
        <Skill name="Express" icon="i-si:express" />
        <Skill name="PHP" icon="i-si:php group-hover:text-[#777bb4]" />
        <Skill name="Laravel" icon="i-si:laravel group-hover:text-[#ff2d20]" />
        <Skill name="MariaDB" icon="i-si:mariadb group-hover:text-[#4479a1]" />
        <Skill name="MongoDB" icon="i-si:mongodb group-hover:text-[#47a248]" />
        <Skill name="Linux Mint" icon="i-si:linuxmint group-hover:text-[#87cf3e]" />
        <Skill name="Git" icon="i-si:git group-hover:text-[#f05032]" />
        <Skill name="NeoVim" icon="i-si:neovim group-hover:text-[#57a143]" />
      </div>
    </Section>

  )
}
