import React from 'react'

export default function Container({children}) {
  
  return (
    <div className={`max-w-6xl md:max-w-screen sm:max-w-screen h-full m-auto text-white`}>
        {children}
    </div>
  )
}
