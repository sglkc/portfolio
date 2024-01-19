export type ProjectProps = {
  href: string
  name: string
  src: string
}

export default function Project({ href, name, src }: ProjectProps) {
  return (
    <a
      className="flex flex-col gap-4 decoration-from-font underline-offset-2"
      href={`https://sglkc.my.id/project/${href}/`}
    >
      <img
        className="aspect-video object-cover object-top border-1 border-gray-300"
        src={`/works/${src}`}
        alt={`${name} project thumbnail`}
        width="852"
        height="480"
      />
      <p className="text-center font-medium">{ name }</p>
    </a>
  )
}
