import React from 'react'

const Contact = () => {
return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
            <h1 className='text-2xl font-bold text-center p-4'>Let&apos;s work together</h1>
            <form className='max-w-[600px] m-auto'>
                    <div className='grid grid-cols-2 gap-2'>
                            <input className='border shadow-lg p-3 rounded-2xl' type="text" placeholder='Name' />
                            <input className='border shadow-lg p-3 rounded-2xl' type="email" placeholder='Email' />
                    </div>

                    <input className='border shadow-lg p-3 w-full rounded-2xl my-2' type="text" placeholder='Subject' />
                    <textarea className='border shadow-lg p-3 w-full rounded-2xl' cols={30} rows={10} placeholder='Message'></textarea>
                    <button className='border rounded-3xl shadow-lg p-3 mt-2 w-[20vw] hover:bg-black/50' type="submit">Submit</button>
            </form>
    </div>
)
}

export default Contact