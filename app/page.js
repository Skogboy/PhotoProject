'use client';
import Image from 'next/image'
import film from '../public/img/film.jpg'
import img002 from '../public/img/img002.jpg'
import img003 from '../public/img/img003.jpg'
import img004 from '../public/img/img004.jpg'
import img005 from '../public/img/img005.jpg'
import img006 from '../public/img/img006.jpg'
import img007 from '../public/img/img007.jpg'
import img008 from '../public/img/img008.jpg'
import img009 from '../public/img/img009.jpg'
import img010 from '../public/img/img010.jpg'

import { useRef } from 'react'
import { motion, useTransform, useScroll} from 'framer-motion'

import NavBar from './Navbar.js'
import Form from './Form.js'



export default function Home() {  

  const Zoom = () => {
    useEffect(() => {
      const initialValue = document.body.style.zoom;
  
      // Change zoom level on mount
      document.body.style.zoom = "150%";
  
      return () => {
        // Restore default value
        document.body.style.zoom = initialValue;
      };
    }, []);
    return <></>;
  };
  
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-800%"]);

  return (
    <main className='bg-neutral-900'>
      <div>
        <NavBar />
      </div>

    <section ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden justify-center'>
        <motion.div style={{ x }} className='flex gap-4 bg-film-pattern lg:h-120 lg:w-80'>
            <Image className='bg-film-pattern' src={img002} />
            <Image src={img003} />
            <Image src={img004} />
            <Image src={img005} />
            <Image src={img006} />
            <Image src={img007} />
            <Image src={img008} />
            <Image src={img009} />
            <Image src={img010} />
        </motion.div>
      </div>
    </section>  

    <section>
      <Form  />
    </section>


  </main>


  )
}
