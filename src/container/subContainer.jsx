import React from 'react'

import {calcMinHeight} from '../utils/height'

export default function SubContainer({children}) {
    var minHeight = calcMinHeight();
    console.log(minHeight)
  return (
    <div className={`bg-blue-800/90 min-h-[${minHeight}px]`}>
        {children}
    </div>
  )
}