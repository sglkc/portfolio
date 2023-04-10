import clsx from 'clsx'
import ProjectProps from '@/types/Project'

export default function Project({ href, name, src }: ProjectProps) {
  return (
    <a
      className={clsx(
        'flex flex-col gap-4 decoration-from-font underline-offset-2',
        'filter-grayscale on:filter-none transition-filter',
      )}
      href={`https://sglkc.my.id/project/${href}/`}
    >
      <img
        className={clsx(
          'aspect-video object-cover object-top border-1 border-gray-300',
        )}
        src={`/works/${src}`}
        alt={`${name} project thumbnail`}
        width="852"
        height="480"
      />
      <p className="text-center font-medium">{ name }</p>
    </a>
  )
}
