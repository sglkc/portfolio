import Balancer from 'react-wrap-balancer'
import PrincipleProps from '@/types/Principle'

export default function Principle({ children, title }: PrincipleProps) {
  return (
    <div className="grid grid-cols-6">
      <p className="font-serif col-start-1 w-32">{ title }</p>
      <p className="col-span-5 w-full">
        <Balancer>
          { children }
        </Balancer>
      </p>
    </div>
  )
}
