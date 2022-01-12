import React from 'react'

import 'animate.css'

import {infoCardsData} from './info_cards_data'
import {BsArrowRight} from 'react-icons/bs'
const About = () => {
    //select three random elements from the infoCardsData array
    const randomElements = infoCardsData.sort(() => 0.5 - Math.random()).slice(0,3)
  


    return (
    <>
            <div className=' js-show-on-scroll w-full bg-gray-100 h-auto p-5 flex mini_x:flex-row flex-col justify-around text-gray-900 trs-2 animate__animated animate__fadeInUp' id="services">
                <div className="p-6 max-w-xs bg-transparent border-r-2 h-max ">
                    <a href="/#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Why we are the best option to choose</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    If you are a growing business or want to expand it, our customized pickup 
                    and delivery service can help you to achieve your goals and maintain your
                    competitive edge.</p>
                    <a href="/#" className="inline-flex p-2 text-sm font-medium text-white bg-rose-700 rounded-full hover:bg-rose-800 focus:ring-4 focus:rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:rose-800">
                        <BsArrowRight className='text-xl'/>
                    </a>
                </div>
           <div className="flex mini_x:flex-row flex-col justify-items-stretch">
                {randomElements.map(element => (
                            <div className="p-6 w-60 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md mx-6 my-3 h-max text-center" key={element.id}>
                                <img src={element.image} alt='img'></img>
                                <a href="/#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{element.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {element.description}</p>
                            </div>
                    ))}
           </div>

    </div>
    </>
        
       
    )
}

export default About
