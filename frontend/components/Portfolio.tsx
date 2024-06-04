import React from 'react'
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className='container mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>
            Real Estate Photo Edits
        </h1>
        <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-1/2 p-2'>
                <Image
                    src="https://images.unsplash.com/photo-1594540992254-0e2239661647?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="/"
                    width={700}
                    height={500}
                    priority
                />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <Image
                        src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width={500}
                        height={700}
                        className='object-cover'
                    />

                    <Image
                        src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width={500}
                        height={700}
                        className='object-cover'
                    />

                    <Image
                        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width={500}
                        height={700}
                        className='object-cover'
                    />

                    <Image
                        src="https://images.unsplash.com/photo-1560185008-b033106af5c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width={500}
                        height={700}
                        className='object-cover'
                    />

                </div>

                {/* <div className='w-full h-full'>
                    
                </div>

                <div className='w-full h-full'>
                    
                </div>

                <div className='w-full h-full'>
                    
                </div> */}
            </div>
            

        </div>
    </div>
  )
}

export default Portfolio