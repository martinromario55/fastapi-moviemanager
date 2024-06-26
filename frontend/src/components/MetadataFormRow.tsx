import React from 'react'

interface MetadataFormRowProps {
  title: string
  children: React.ReactNode
}

function MetadataFormRow({ title, children }: MetadataFormRowProps) {
  return (
    <div className="flex my-2">
      <div className="w-1/4">{title}</div>
      <div className="w-3/4">{children}</div>
    </div>
  )
}

export default MetadataFormRow
