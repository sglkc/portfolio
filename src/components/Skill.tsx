import clsx from 'clsx'
import SkillProps from '@/types/Skill'

export default function Skill({ color, icon, name }: SkillProps) {
  return (
    <div className="select-none">
      <p className={clsx('transition-icon delay-250', color, icon)}></p>
      <p className="mt-2 text-sm sm:text-base text-center">{ name }</p>
    </div>
  )
}
