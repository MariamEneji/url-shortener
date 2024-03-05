import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";



const Navbar = () => {

const [hidden, setHidden] = useState(true)

const handleHidden = () => {
  setHidden(prevState => !prevState)
}


  return (
    <div>
    <div className="flex justify-between items-center py-4 px-6 md:px-20">
        <div >
        <Image width={200} height={200} src="/Logo.png" alt="Scisor" />
        </div>


        <div className="hidden md:flex gap-8">
            <Link href='/' className="text-primary">My Urls</Link>
            <Link href='/'>Features</Link>
            <Link href='/'>Pricing</Link>
            <Link href='/'>Analytics</Link>
            <Link href='/'>FAQs</Link>
        </div>

        <div className="hidden md:flex gap-8">
            <button className="text-primary hover:border-primary hover:border px-4 py-2 rounded-full ">Log in</button>
            <button className=" text-white bg-primary px-4 py-2 rounded-full hover:border-primary hover:border hover:bg-transparent hover:text-primary">Try for free</button>

        </div>


<button className="md:hidden" onClick={handleHidden}><FaHamburger className="w-20 text-primary"/></button>
       

      
    </div>
     <div  className={hidden ? "hidden " : "md:hidden absolute right-10 bg-white text-right p-10 " } >


     <div className="flex flex-col gap-8">
         <Link href='/' className="text-primary">My Urls</Link>
         <Link href='/'>Features</Link>
         <Link href='/'>Pricing</Link>
         <Link href='/'>Analytics</Link>
         <Link href='/'>FAQs</Link>
     </div>

     <div className=" flex flex-col gap-8">
         <button className="text-white bg-primary px-4 py-2 :border-primary hover:border hover:bg-transparent hover:text-primary">Log in</button>
         <button className="text-white bg-primary px-4 py-2 hover:border-primary hover:border hover:bg-transparent hover:text-primary">Try for free</button>

     </div>
     </div>
     </div>
  );
};

export default Navbar;
