import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import stroke from '../../public/assets/Vector 3.png'
import group from '../../public/assets/Group 2.png'
import groupe from '../../public/assets/Groupe.png'
const Header = () => {
  return (
    <div className='bg-header-img'>
        <Navbar />
        <div className='px-8 md:px-44 pt-20 h-full flex justify-center items-center text-center flex-col  '>
            <h1 className='text-4xl tracking-wide md:tracking-wider font-extrabold md:leading-loose'>Optimize Your Inline Experience With Our Advanced <span className='text-primary'>URL Shortening</span> Solution</h1>
            <Image className='hidden md:block absolute md:top-72' width={200} height={100} src={stroke} alt='stroke' />
            <p className='md:px-32 tracking-wider font-thin py-8'>Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links and domain customization options
          to reinforce your brand presence and enhance user engagement.</p>

          <div className='flex gap-8 my-10'>
            <button className="text-primary hover:border-primary hover:border px-4 py-2 rounded-full ">Sign Up</button>
            <button className="text-white bg-primary px-4 py-2 rounded-full hover:border-primary hover:border hover:bg-transparent hover:text-primary">Learn More</button>
          </div>

          <Image className='my-8' src={group} width={550} height={500} alt='group' />

      
        </div>

        <Image className='w-full' src={groupe} width={1000} height={300} alt='group' />
    </div>
  )
}

export default Header
