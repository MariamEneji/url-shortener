import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/assets/Logo (1).png'
import fb from '../../public/assets/i.fi-social-facebook.png'
import ig from '../../public/assets/svg.feather.png'
import x from '../../public/assets/i.fi-social-twitter.png'
import li from '../../public/assets/i.fi-social-linkedin.png'

import one from '../../public/assets/Group 3 (3).png'
import two from '../../public/assets/Group 2 (4).png'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row  justify-between p-10 md:p-20 relative'>

<Image src={one} alt='one' width={300} height={200} className='absolute left-0 bottom-0  h-full' />
<Image src={two} alt='one' width={300} height={100} className='absolute right-0 bottom-0  h-full' />

        <div className='flex pb-10 md:pb-0 flex-col items-center z-10'>
            <Image src={logo} alt='logo' width={150} height={100}/>
            <div className='flex gap-4 pt-4 '>
                <Link href='/'> <Image src={x} alt='logo' width={20} height={10}/></Link>
                <Link href='/'> <Image src={ig} alt='logo' width={20} height={10}/></Link>
                <Link href='/'> <Image src={li} alt='logo' width={20} height={10}/></Link>
                <Link href='/'> <Image src={fb} alt='logo' width={20} height={10}/></Link>
            </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-20 md:gap-6 '>

            <div>
                <p className='font-bold pb-2 flex flex-col gap-2'>Why Scisor?</p>
                <p>Scisor 101</p>
                <p>Integration & API</p>
                <p>Pricing</p>
            </div>

            <div>
                <p className='font-bold pb-2 flex flex-col gap-2'>Solutions</p>
                <p>Social Media</p>
                <p>Digital Marketing</p>
                <p>Customer Service</p>
                <p>For Developers</p>
            </div>

            <div>
                <p className='font-bold pb-2 flex flex-col gap-2'>Products</p>
                <p>Link Management</p>
                <p>QR Codes</p>
                <p>Link-in-bio</p>
            </div>

            <div>
                <p className='font-bold pb-2 flex flex-col gap-2'>Resources</p>
                <p>Blog</p>
                <p>Resource Library</p>
                <p>Developers</p>
                <p>App Connectors</p>
                <p>Support</p>
                <p>Trust Center</p>
                <p>Browser Extension</p>
                <p>Mobile App</p>
            </div>

            <div>
                <p className='font-bold pb-2 flex flex-col gap-2'>Features</p>
                <p>Branded Links</p>
                <p>Mobile Links</p>
                <p>Campaign</p>
                <p>Management & Analytics</p>
                <p>QR ode Generation</p>
            </div>

            <div>
                <p className='font-bold pb-2 flex flex-col gap-2'>Legal</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Terms of Service</p>
                <p>Acceptable Use Policy</p>
                <p>Code of Conduct</p>
            </div>

            <div>
                <p className='font-bold pb-2 flex flex-col gap-2'>Company</p>
                <p>About Scisor</p>
                <p>Careers</p>
                <p>Partners</p>
                <p>Press</p>
                <p>Contact</p>
                <p>Reviews</p>
            </div>

           

        </div>

        
            <p className='absolute bottom-4 text-sm font-thin right-8'>Terms of Service | Security | Scisor 2023</p>
       

       
      
    </div>
  )
}

export default Footer
