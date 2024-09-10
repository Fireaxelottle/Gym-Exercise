import React from 'react'
import { css } from '@emotion/css'

const HeroBanner = () => {
  const imgSrc = "https://thumbs.dreamstime.com/b/vector-illustration-cool-typography-banner-design-concept-be-your-own-hero-inspiring-motivation-quote-template-120096543.jpg";
  return (
    <div className='hero-banner-container'>
      <h2 className={css`color: #ff2625; font-size: 1.5rem`}>Fitness club</h2>
      <p className={css`font-size: 2rem; font-weight: 550`}>Sweat, Smile <br />and Repeat</p>
      <p className={css`line-height: 35px`} >Check the most effective  exercises. <br /> That will get you in shape the quickly. </p>
      <button className={css`background-color: #ff2625; color: white; border: none; padding: 10px 20px; border-radius: 5px; font-size: 1rem; font-weight: 600; cursor: pointer; margin-top: 20px `}>Explore Exercises</button>
      <img src={imgSrc} alt="Banner" className='HeroBannerImg'/>
    </div>
  )
}

export default HeroBanner
