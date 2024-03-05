import React from 'react'
import Image from 'next/image'
import line from '../../public/assets/Line 70.png'
import one from '../../public/assets/link-2-1.png'
import two from '../../public/assets/edit.png'
import three from '../../public/assets/grid.png'
import four from '../../public/assets/activity.png'

const WhyScisor = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between  p-14'>
      <div className='w-full pb-10 md:pb-0 md:w-[35%]'>
        <div className='flex gap-3 items-center'>
            <Image src={line} alt='line' width={5} height={5} />
            <h1 className='font-bold text-3xl'>Why Choose <span className='text-primary'>Scisors</span> </h1>

        </div>
        <p className='md:pl-6 font-thin pt-2'>Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management andusage tracking with avalanche analytics for all of
            these is second to none.</p>
      </div>



      <div  className='grid md:grid-cols-2  gap-10 md:w-[55%]'>
       
        <div>
            <Image className='p-2 rounded-full bg-circle w-10 mb-6' src={one} alt='img' width={20} height={10}/>
            <h2 className='text-2xl pb-2'>URL Shortening</h2>
            <p className='font-thin'>Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects</p>
        </div>
        <div>
            <Image className='p-2 rounded-full bg-circle w-10 mb-6' src={two} alt='img' width={20} height={10}/>
            <h2 className='text-2xl pb-2'>Custom URLs</h2>
            <p className='font-thin'>With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.</p>
        </div>
        <div>
            <Image className='p-2 rounded-full bg-circle w-10 mb-6' src={three} alt='img' width={20} height={10}/>
            <h2 className='text-2xl pb-2'>QR Codes</h2>
            <p className='font-thin'> Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.</p>
        </div>
        <div>
            <Image className='p-2 rounded-full bg-circle w-10 mb-6' src={four} alt='img' width={20} height={10}/>
            <h2 className='text-2xl pb-2'>Data Analytics</h2>
            <p className='font-thin'>  Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyScisor
