import { ComponentChildren } from 'preact'
import clsx from 'clsx'

export type SectionProps = {
  children: ComponentChildren
  className?: string
  title?: string
}

export default function Section({ children, className, title }: SectionProps) {
  return (
    <section
      class={clsx(
        'prose my-16 flex flex-col justify-center items-center gap-16 w-full',
        'h-auto print:h-[11in] print:my-0',
        className
      )}
    >
      { title &&
        <h1
          class="text-center font-serif font-normal text-4xl sm:text-5xl tracking-wide"
          children={title}
        />
      }
      { children }
    </section>
  )
}
