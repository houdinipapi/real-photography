"use client"

import React, { useState } from 'react'
import { SliderData } from './SliderData'

import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }: { slides: any[] }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


  return (
    <div id="gallery" className='max-w-[1240px] mx-auto'>
        <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>

        <div className='relative flex justify-center p-4'>
            {SliderData.map((slide, index) => {
                return (
                    <div key={index} className={index === current ? "opacity-[1] ease-in duration-1000" : "opacity-0"}>
                        
                        <div className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]">
                            <span onClick={prevSlide}>
                                <FaArrowCircleLeft size={50} />
                            </span>
                        </div>
                        {
                            index === current && (
                                <Image
                                    key={index}
                                    src={slide.image}
                                    alt="/"
                                    width={1440}
                                    height={600}
                                    style={{ objectFit: "cover" }}
                                    priority
                                />
                            )
                        }

                        <div className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]">
                            <span onClick={nextSlide}>
                                <FaArrowCircleRight size={50} />
                            </span>
                        </div>
                        
                    </div>
                    
                )
            })}
        </div>
    </div>
  )
}

export default Slider