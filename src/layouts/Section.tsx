import clsx from 'clsx'
import SectionProps from '@/types/Section'

export default function Section({ children, className, title }: SectionProps) {
  return (
    <section
      className={clsx(
        'prose my-16 flex flex-col justify-items-center items-center gap-16',
        className
      )}
    >
      <h1 className="text-5xl font-serif font-normal tracking-wide">{ title }</h1>
      { children }
    </section>
  )
}
