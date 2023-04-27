import React from 'react'

export default function containerFixed({children}) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-slate-500'>
        {children}
    </div>
  )
}
