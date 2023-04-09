import PrincipleProps from '@/types/Principle'

export default function Principle({ children, title }: PrincipleProps) {
  return (
    <div className="grid grid-cols-6">
      <p className="font-serif w-32">{ title }</p>
      <p className="col-span-5">{ children }</p>
    </div>
  )
}
