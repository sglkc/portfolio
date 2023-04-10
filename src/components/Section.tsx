import clsx from 'clsx'
import SectionProps from '@/types/Section'

export default function Section({ children, className, title }: SectionProps) {
  return (
    <section
      className={clsx(
        'prose my-16 flex flex-col justify-items-center items-center gap-16 w-full',
        className
      )}
    >
      <h1 className="text-center font-serif font-normal text-5xl tracking-wide">
        { title }
      </h1>
      { children }
    </section>
  )
}
