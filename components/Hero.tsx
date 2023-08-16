'use client'
import Image from 'next/image'
import  CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {}

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className="hero__title">Rent a car!</h1>
            <p className='hero__subtitle'>Car rental experience.</p>
            <CustomButton 
                title='Explore'
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
                handleClick={handleScroll}
            />
        </div>
    </div>
  )
}

export default Hero