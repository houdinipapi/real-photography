import React from 'react'
import Img1 from '../public/images/Img1.jpg'
import Img2 from '../public/images/Img2.jpg'
import Img3 from '../public/images/Img3.jpg'
import Img4 from '../public/images/Img4.jpg'
import Img5 from '../public/images/Img5.jpg'
import Img6 from '../public/images/Img6.jpg'
import Img7 from '../public/images/Img7.jpg'
import Img8 from '../public/images/Img8.jpg'
import Img9 from '../public/images/Img9.jpg'
import Img10 from '../public/images/Img10.jpg'
import InstaImage from './InstaImage'
import { StaticImageData } from 'next/image'

const Instagram = ({ socialImg }: { socialImg: StaticImageData }) => {
    return (
        <div className='max-w-[1240px] mx-auto text-center py-24'>
            <p className="text-2xl font-bold">Follow me on Instagram</p>
            <p className='pb-4'>@Achiomwa</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4'>
                {[Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img9].map((img, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <InstaImage socialImg={img} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Instagram