import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return <main className="bg-white mx-auto my-4 p-4">{children}</main>
}

export default Container
