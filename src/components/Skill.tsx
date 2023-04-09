import SkillProps from '@/types/Skill'

export default function Skill({ icon, name }: SkillProps) {
  return (
    <div>
      <p className={icon}></p>
      <p className="mt-2 text-center">{ name }</p>
    </div>
  )
}
