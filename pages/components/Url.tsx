/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import one from '../../public/assets/Group 3.png'
import two from '../../public/assets/Group 2 (1).png'
import axios from 'axios'
import {QRCodeSVG} from 'qrcode.react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';



const Url = () => {
const [longUrl, setLongUrl] = useState('')
const [links, setLinks] = useState({})
const [copied, setCopied] = useState(false)

const handleClick = async () => { 
 
  console.log({longUrl})

  const result = await axios.post("/api/shorten", { longUrl });

  console.log(result)
  // setInputValue(value);
  setLongUrl('') 
  await refreshLinks()
  
}

const getLinks = async () => {
  const response = await axios.get("/api/links");
  return response?.data?.links;

}


const refreshLinks =async () => {

  const linkObjects = await getLinks();
  setLinks(linkObjects )
  
}

useEffect(() => {(async () => {
  await refreshLinks();
  // let tmpLinks = await getLinks();
  // console.log(tmpLinks)
})();


}, [])

useEffect( () => {
  const timer = setTimeout(() => {
      setCopied(false)
  }, 2000);
  return () => clearTimeout(timer)
}, [copied])

  return (
    <div className='bg-secondary py-20 px-4 flex flex-col gap-20 justify-center items-center relative'>

        <Image src={one} alt='one' width={920} height={500} className='absolute left-0 top-0  h-full' />

      <div className='flex flex-col justify-center items-center gap-6 md:w-[35%] bg-white rounded-lg p-8 z-10'>
        <input 
        type="text" 
        placeholder='Place URL Here' 
        value={longUrl} 
        onChange={e => setLongUrl(e.target.value)}
        className='border border-primary p-4 w-full rounded-lg text-primary' />
      

      

        <button
        onClick={handleClick}
         className='w-full rounded-full bg-primary text-white p-2'>Trim Url</button>
        
        
        <p className="text-primary text-sm font-thin">
     
          By clicking TrimURL, I agree to the 
          <span className='font-bold'> Terms of Service, Privacy Policy</span> and Use of Cookies
        </p>

 
      </div>

      <table className='z-20' >
      
          <tbody className='flex flex-col gap-10'>
            {Object.keys(links).map((short) => {
              // links is form of { shortUrl: longUrl }, so the short url is key
              const long = links[short as keyof typeof links];
              return (
                <tr key={short} className='flex border border-primary bg-white flex-col items-center justify-center gap-8 p-4'>

                  <CopyToClipboard text={`${BASE_URL}/go/${short}`} onCopy={() => setCopied(true)}>
                  <td className={copied ? 'text-primary': 'text-black'}
                   
                  
                 >{`${BASE_URL}/go/${short}`}</td>
                  </CopyToClipboard>

               
                  <td className=''>{long || 'N/A'}</td>
                  <td className=''><QRCodeSVG value={`${BASE_URL}/go/${short}`} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>


      <Image src={two} alt='one' width={900} height={500} className='absolute right-0 bottom-0' />
    </div>
  )
}

export default Url
