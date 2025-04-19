import React from 'react'

const TitleHeader = ({title, sub}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <div className='hero-badge'>
        <p>{sub}</p>
      </div>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
        {title}
      </div>
    </div>
  )
}

export default TitleHeader
