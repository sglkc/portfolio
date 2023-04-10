import clsx from 'clsx'
import SkillProps from '@/types/Skill'

export default function Skill({ icon, name }: SkillProps) {
  return (
    <div className="group select-none">
      <p className={clsx('text-sm sm:text-base transition-icon', icon)}></p>
      <p className="mt-2 text-sm sm:text-base text-center">{ name }</p>
    </div>
  )
}
