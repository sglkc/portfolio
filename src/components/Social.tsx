export type SocialProps = {
  href: string
  icon: string
  name?: string
}

export default function Social({ href, icon, name }: SocialProps) {
  return (
    <a
      className="ml-0 justify-start flex items-center gap-2 underline-from-font underline-offset-5"
      href={href}
    >
      <p className={icon}></p>
      <div className="font-normal">{ name || href }</div>
    </a>
  )
}
