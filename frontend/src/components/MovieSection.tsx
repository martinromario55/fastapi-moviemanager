import React from 'react'

interface MovieSectionProps {
  title: string
  children: React.ReactNode
}

function MovieSection({ title, children }: MovieSectionProps) {
  return (
    <section className="border-2 border-black p-2">
      <div className="border border-red-500 p-2 my-2">
        <h2 className="text-center text-2xl font-bold">{title}</h2>
      </div>
      <div className="border border-blue-500 p-2">{children}</div>
    </section>
  )
}

export default MovieSection
