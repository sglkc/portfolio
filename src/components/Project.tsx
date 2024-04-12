export type ProjectProps = {
  name: string
  url?: string
  src?: string
}

export default function Project({ url, name, src }: ProjectProps) {
  const Tag = url ? 'a' : 'p'
  const href = url?.startsWith('/')
    ? `https:/${url}`
    : `https://github.com/sglkc/${url}/`

  return (
    <Tag
      className="flex flex-col gap-4 decoration-from-font underline-offset-2"
      href={href}
    >
      <img
        className="aspect-video object-cover object-top border-1 border-gray-300"
        src={`/works/${src ?? `${url}.webp`}`}
        alt={`${name} project thumbnail`}
        width="852"
        height="480"
        draggable={false}
      />
      <p className="text-center font-medium print:text-sm">{ name }</p>
    </Tag>
  )
}
