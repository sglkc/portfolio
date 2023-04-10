import Project from '@/components/Project'
import Section from '@/components/Section'

export default function Works() {
  return (
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
  )
}
