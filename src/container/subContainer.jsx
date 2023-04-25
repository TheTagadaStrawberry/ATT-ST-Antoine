import React from 'react'

import {calcMinHeight} from '../utils/height'

export default function SubContainer({children}) {
    var minHeight = calcMinHeight();
    console.log(minHeight)
  return (
    <div className={`max-w-6xl md:max-w-screen sm:max-w-screen m-auto text-black  w-full min-h-[${minHeight}px]`}>
        {children}
    </div>
  )
}