import React from 'react';
import about from '../images/about.png'

const About = () => {
    return (
        <div id='aboutus' className="hero md:pt-24 pb-6 md:pb-32">
        <div className="hero-content flex-col-reverse md:items-center lg:flex-row-reverse">

          <div data-aos="fade-left" data-aos-duration="3000" className='md:w-1/2 md:pt-5'>
            <h1 className="md:text-5xl text-4xl text-center md:text-start font-bold text-white font-Poppins">Who we are?</h1>
            <p className="py-6 text-white font-Roboto">
            It began with hope and belief in a second chance. A collection, derived not just from any project, one of the greatest, the OG BAYC. There are no duplicates an expansion of 5,000 Bored Apes from the original BAYC collection, each deconstructed, reconstructed offering a new Bored Ape a home in the Sui Blockchain.</p>
            <div>
                <h2 className='text-2xl text-white pt-2 pb-1 underline font-Roboto'>CORE VALUES</h2>
                <p className='pb-2 text-white font-Roboto'>Integrity, transparence and honesty are at the core of our team values and everything we do.</p>
                <p className='text-white font-Roboto'>We put the interests of our community first, making their goals our goals. This is our ethical and professional obligation and the right way to act. Our team is dedicated to best serving our community and never taking for granted the trust they place in us, our transparency ensures that our community be able to make a meaningful analysis of our actions and decisions. We communicate openly and honestly with our community believing that this leads to healthy relationships and work we can be proud of.</p>
            </div>
            <div className='mb-8'>
                <h2 className='text-2xl text-white pt-4 pb-1 underline font-Roboto'>GOALS</h2>
                <p className='text-white font-Roboto'>As a project our goal is to provide great services at an affordable price to our community and create a place were like-minded people be able to discuss and share information.</p>
            </div>

          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className='flex items-start pt-12 md:pt-0'>
            <img src={about} className="max-w-xs md:max-w-xl " />
          </div>
        </div>
      </div>
    );
};

export default About;