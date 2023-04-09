import { useEffect } from 'react'
import Balancer from 'react-wrap-balancer'
import Principle from './components/Principle'
import Project from './components/Project'
import Skill from './components/Skill'
import Section from './layouts/Section'

function App() {
  useEffect(() => {
    document.body.classList.remove()
    document.body.classList.add('bg-zinc-50')
  }, []);

  return (
    <div className="mx-16 my-32 flex flex-col items-center">
      <Section title="Cikal Gemintang Seya" className="my-32 gap-8">
        <h2 className="font-bold text-xl">
          Front-End Developer / Back-End Developer
        </h2>
        <p className="text-center leading-6.5 w-full">
          <Balancer>
            I'm a web developer from Indonesia with 2 years experience. I’m
            committed to create intuitive, responsive, and accessible websites
            with maintainability and scalability as the focus in development
            while considering the current industry best practices.
            Exploring new things has always lead me to be a better programmer.
          </Balancer>
        </p>
        <div className="flex gap-8">
          <a
            className="i-si:github transition-icon hover:text-[#333333]"
            href="https://github.com/sglkc/"
          ></a>
          <a
            className="i-si:linkedin transition-icon hover:text-[#1572b6]"
            href="https://linkedin.com/in/cikal-gs/"
          ></a>
          <a
            className="i-si:gmail transition-icon hover:text-[#ff5252]"
            href="mailto:cikalgemintangseya1@gmail.com"
          ></a>
        </div>
      </Section>
      <Section title="Featured Works" className="max-w-screen">
        <div className="grid grid-cols-3 gap-8 justify-center max-w-256">
          <Project
            href="jr-academy"
            name="Jalan Rahmat Academy"
            src="jr-academy.webp"
          />
          <Project
            href="jr-digilib"
            name="Jalan Rahmat Digilib"
            src="jr-digilib.webp"
          />
          <Project href="simak-ppdb" name="Simak PPDB" src="simak-ppdb.webp" />
          <Project href="hubin" name="Hubin 13" src="hubin-13.webp" />
          <Project
            href="live-translate"
            name="Live Translate"
            src="live-translate-2.webp"
          />
          <Project
            href="hotel-vue"
            name="Hotel Vue"
            src="hotel-vue.webp"
          />
        </div>
        <a
          className="font-serif no-underline text-lg"
          href="https://sglkc.my.id/projects/"
        >
          view more
        </a>
      </Section>
      <Section title="About">
        <p className="text-center w-full">
          <Balancer>
            My name is Cikal Gemintang Seya, I’m currently an undergraduate in
            National Institute of Technology, Bandung. Online, I usually go by
            sglkc or seya.
            Technology is what I have in mind ever since I was a child, my
            curiosity in elementary school was a big turning point, leading me
            to strive to be a programmer. Formally developed my skills
            vocational high school as a software engineer, I was caught into
            web development and I loved it.
          </Balancer>
        </p>
      </Section>
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
    </div>
  )
}

export default App
