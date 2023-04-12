import React from 'react'
import {useScroll, motion, useMotionValueEvent} from 'framer-motion'

const LIIcon = ({reference}) => {

    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "end end"]
        }
    )
      
  return (
    <figure className=' absolute left-0 stroke-primary'>
        <svg className=' -rotate-90' width="75px" height="75px" viewBox='0 0 100 100'>
            {/* <circle cx="75" cy="50" r="20" className=' stroke-violet-400 stroke fill-none' /> */}
            <motion.circle style={{ pathLength: scrollYProgress }} cx="75" cy="50" r="20" pathLength="1" className=' stroke-[5px] fill-dark' />
            <circle cx="75" cy="50" r="10" className=' stroke-1 fill-light' />
        </svg>
    </figure>
  )
}

export default LIIcon