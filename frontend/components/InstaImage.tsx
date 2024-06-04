import React from 'react'
import Image, { StaticImageData } from 'next/image'

const InstaImage = ({ socialImg }: { socialImg: StaticImageData }) => {
  return (
    <div>
        <Image src={socialImg} alt="/" />
    </div>
  )
}

export default InstaImage