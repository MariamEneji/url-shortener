import React from 'react'

const Onestop = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center p-10 md:p-20 bg-platform'>
      <div className='pb-12 md:pb-0 text-center md:text-left'>
        <h1 className='text-3xl  font-bold'>One Stop</h1>
        <h1 className='text-3xl font-bold'>Four <span className='text-primary'>Possibilities</span></h1>
      </div>
      <div className='grid text-center md:text-left grid-cols-2 md:flex  gap-8'>
        <div className='w-32'>
            <h2 className='text-2xl'>3M</h2>
            <p className='font-thin'>Active Users</p>
        </div>
        <div className='w-32'>
            <h2 className='text-2xl'>60M</h2>
            <p className='font-thin'>Links & QR codes created</p>
        </div>
        <div className='w-36'>
            <h2 className='text-2xl'>1B</h2>
            <p className='font-thin'>Clicked & Scanned connections</p>
        </div>
        <div className='w-32'>
            <h2 className='text-2xl'>300k</h2>
            <p className='font-thin'>App Integrations</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Onestop
