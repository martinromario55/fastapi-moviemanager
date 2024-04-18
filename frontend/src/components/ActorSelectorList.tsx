import React from 'react'

interface ActorSelectorListProps {
  title: string
  children: React.ReactNode
}

function ActorSelectorList({ title, children }: ActorSelectorListProps) {
  return (
    <div className="m-2 w-1/2">
      <div className="">
        <h2 className="text-center font-bold text-lg">{title}</h2>
      </div>

      <div className="">{children}</div>
    </div>
  )
}

export default ActorSelectorList
