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
        <div>
            <p>Follow me on Instagram</p>
            <p>@ACHIOMWA</p>
            <div>
                <InstaImage socialImg={Img1} />
            </div>
        </div>
    )
}

export default Instagram