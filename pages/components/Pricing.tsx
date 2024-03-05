import React from 'react'
import Image from 'next/image'
import line from '../../public/assets/Line 70.png'
import tick from '../../public/assets/check-circle.png'
import tick2 from '../../public/assets/check-circle-2.png'

const Pricing = () => {
  return (
    <div className='flex flex-col justify-between items-center py-20'>
        <div className='flex flex-col justify-center items-center text-center  md:w-[50%]'>
          <div className='flex gap-3 items-center '>
            <Image src={line} alt='line' width={5} height={5} />
            <h1 className='font-bold text-3xl'>A <span className='text-primary'>price perfect</span> for your needs. </h1>

        </div>
        <p className='p-14 font-thin pt-2 text-sm'>  From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.</p>
      </div>
      <div className='md:flex justify-center items-center pb-20'>
        <div className='py-8 mb-6 md:mb-0 px-14 border h-[455px] border-primary md:rounded-r-none md:rounded-l-md rounded-md '>
            <p className='font-thin'>Basic</p>
            <h1 className='pt-6 pb-4 text-3xl '>Free</h1>
            <p className='font-thin'>Free plan for all users</p>
            <div className='flex flex-col gap-6 pt-6 font-thin text-sm'>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>Unlimited
              URL Shotening</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>Basic Link
              Analytics</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>Customizable Short Links</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>Standard
              Support</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>Ad-Supported</p>
            </div>
            </div>
        </div>


        <div className='bg-secondary h-[627px]  text-white py-20 px-14 rounded-lg mb-6 md:mb-0 '>
            <p className='font-thin'>Professional</p>
            <h1 className='pt-6 pb-4 text-3xl '>$15/month</h1>
            <p className='font-thin'>Ideal for business creators</p>
            <div className='flex flex-col gap-6 pt-6 font-thin text-sm'>
            <div className='flex gap-4 items-center'>
            <Image src={tick2} alt='line' width={15} height={5} />
            <p>Enhanced
              Link Analytics</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick2} alt='line' width={15} height={5} />
            <p>Custom
              Branded Domains</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick2} alt='line' width={15} height={5} />
            <p>Advanced
              Link Customization</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick2} alt='line' width={15} height={5} />
            <p>Priority
              Support</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick2} alt='line' width={15} height={5} />
            <p>Ad-free
              Experience</p>
            </div>
            </div>
            
        </div>


        <div className='py-8 px-14 border  h-[455px]  border-primary rounded-md md:rounded-l-none rounded-r-md'>
            <p className='font-thin'>Teams</p>
            <h1 className='pt-6 pb-4 text-3xl '>$25/month</h1>
            <p className='font-thin'>Share with up to 10 users</p>
            <div className='flex flex-col gap-6 pt-6 font-thin text-sm'>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>Team
              Collaboration</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>User Roles
              and Permissions</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>Enhanced
              Security</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>Api Access</p>
            </div>
            <div className='flex gap-4 items-center'>
            <Image src={tick} alt='line' width={15} height={5} />
            <p>Dedicated
              Account Manager</p>
            </div>
            </div>
        </div>

      </div>
      <div className='flex gap-8'>
      <button className="w-44 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full border border-primary ">Get Custom Pricing</button>
            <button className="w-44 text-white bg-primary px-4 py-2 rounded-full  hover:border-primary hover:border hover:bg-transparent hover:text-primary">Select Pricing</button>
      </div>
    </div>
  )
}

export default Pricing
