 import React from 'react'
 import 'animate.css'
 import heropic from "../assets/hero-pic.png"
 const Hero = () => {
 
     return ( 
    <> 
        <div className="hero hero-overlay hero_gradient text-zinc-200">
            <div className="flex-row hero-content sm:ml-16 ml-0">
                <div className='animate__animated animate__backInLeft trs-2'>
                
                    <i className="mb-7 sm:text-4xl text-4xl font-bold">
                            CUSTOMIZED DELIVERY SERVICES
                    </i>
                    <hr className='w-3/4 my-3'/>
                    <br/>
                    <p className="mb-12 w-3/4 mini_x:flex hidden">
                          Day & Night Delivery operation We provide Pickup and delivery services to small & large businesses in the UAE.
                            </p> 
                    <a className="mb-24 mini-2:mb-18 btn btn-ghost glass rounded-br-3xl rounded-tl-3xl shadow-lg shadow-black hover:shadow-white hover:shadow-lg" href="/#contact">Get Started</a>
               </div>
                <div>
                    <img src={heropic} className="max-w-sm mini_x:h-72 h-52 mt-0 md:mt-32 sm:flex hidden animate__animated animate__backInUp trs-2" alt='style-img'/> 
                </div>
                 </div>
        </div>
    </>    
     )
 }
 
 export default Hero
 