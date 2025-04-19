import React from 'react'
import { logoIconsList } from '../constants'

const LogoIcon = ({icon}) => {
    return (
        <div className='flex-none flex-center marquee-item'>
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge' />
      <div className='gradient-edge' />

      <div className='marquee h-52'>
        <div className='marquee-box md:gap-12 gap-5'>
            {logoIconsList.map((icon, ind) => (
                <LogoIcon key={`1-${ind}`} icon={icon}/>
            ))}
            {logoIconsList.map((icon, ind) => (
                <LogoIcon key={`2-${ind}`} icon={icon}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSection
