import clsx from 'clsx'

export type SkillProps = {
  color?: string
  icon: string
  name: string
}

export default function Skill({ color, icon, name }: SkillProps) {
  return (
    <div class="select-none">
      <p class={clsx('transition-icon delay-250', color, icon)}></p>
      <p class="mt-2 text-sm sm:text-base text-center">{ name }</p>
    </div>
  )
}
