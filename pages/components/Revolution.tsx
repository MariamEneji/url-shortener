import React from 'react'
import Image from 'next/image'
import one from '../../public/assets/Group 3 (2).png'
import two from '../../public/assets/Group 2 (3).png'

const Revolution = () => {
  return (
    <div className='bg-secondary p-10 md:p-20 flex flex-col justify-center items-center gap-10 relative'>
              <Image src={one} alt='one' width={550} height={300} className='absolute left-0 top-0' />
      <Image src={two} alt='one' width={400} height={300} className='absolute right-0 bottom-0' />
        <h1 className='text-4xl text-center font-bold text-white z-10'>Revolutionalizing Link Optimization</h1>
        <button className="text-white w-32 bg-primary px-4 py-2 rounded-full hover:border-primary hover:border hover:bg-transparent hover:text-primary z-10">Get Started</button>
      
    </div>
  )
}

export default Revolution
