import { ComponentChildren } from 'preact'
import Balancer from 'react-wrap-balancer'
import clsx from 'clsx'

export type PrincipleProps = {
  children: ComponentChildren
  right?: true
  title: string
}

export default function Principle({ children, right, title }: PrincipleProps) {
  return (
    <div className="grid grid-cols-6 w-full">
      <p
        className={clsx(
          'mb-4 sm:mb-0 w-full sm:w-32',
          'font-serif sm:text-left text-lg sm:text-base',
          'col-span-6 sm:col-span-1 col-start-auto sm:col-start-1',
          right ? 'text-right' : ''
        )}
      >
        { title }
      </p>
      <p
        className={clsx(
          'mb-4 sm:mb-0 col-span-6 sm:col-span-5 w-full',
          right && 'text-right sm:text-left'
        )}
      >
        <Balancer>
          { children }
        </Balancer>
      </p>
    </div>
  )
}
