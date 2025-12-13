import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

function Header() {
  return (
   <div className='bg-primary/10 backdrop:blur-2xl py-4' > 
     <div className='2xl:w-9/12 w-11/12 mx-auto flex items-center justify-between ' >
        
      {/* logo */}
    <Link href={"/"} className='flex items-center group w-fit  '>
          <Image src={'/trevolaBlurLogo.png'} className='w-fit group-hover:-translate-y-20 group-hover:translate-x-20 duration-600 ease-in-out ' width={60} height={60} alt='logo' />
     <div>
         <h2 className='text-primary text-4xl font-bold' >trevola</h2>
      <p className='text-primary font-bold text-xs' >Travel made easier</p>
     </div>
    </Link>

      {/* nav links */}

   <div className='flex  items-center gap-6'>
       {navLinks.map((link, index) => (
        <div key={index} className="relative overflow-hidden  text-primary font-semibold h-6 group"  >
         <Link href={link.path}>
            <span className="block group-hover:-translate-y-full transition-transform duration-300">{link.name}</span>
            <span
                className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{link.name}</span>
         </Link>

        </div>
      ))}
   </div>

      {/* get started btn + profile */}

      <Button>Click</Button>
    </div>
   </div>
  )
}

export default Header