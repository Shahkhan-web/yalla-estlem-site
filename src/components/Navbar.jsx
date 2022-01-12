import React from 'react'

import 'animate.css'

import yalla from '../assets/yalla-wide.png'
import {FiMail,FiPhoneCall} from 'react-icons/fi'

const Navbar = () => {


    return (
                            
                <div className="navbar mb-0 shadow-lg bg-rose-700 text-neutral-content w-full ">
                    <div className="flex-none px-2 mx-2">
                        <img alt="YallaEstlem_logo" src={yalla} className=' w-36 rounded-md '/>
                    </div>
                    <div className="flex-1 px-2 mx-16">
                        <div className="items-stretch hidden lg:flex">
                        <a className="btn btn-ghost btn-sm rounded-btn" href='/#about'>
                                About
                                </a> 
                        <a className="btn btn-ghost btn-sm rounded-btn"  href='/#services'>
                                Services
                                </a> 
                        <a className="btn btn-ghost btn-sm rounded-btn" href='/#contact'>
                                Contact
                                </a>
                        </div>
                    </div> 
                    <div className='sm:flex items-start hidden animate__animated animate__backInDown trs-2' >
                        <button className="btn btn-ghost glass mx-2 rounded-br-3xl rounded-tl-3xl ">
                            <FiMail className='text-2xl mt-1.5 mr-1'/>
                            <span className='align-text-bottom text-xs  normal-case'>
                            <p className='mr-24'>&nbsp;&nbsp;Email:</p>
                            &nbsp;info@yallaestlem.com</span>
                        </button>  
                        <button className="btn btn-ghost glass rounded-br-3xl rounded-tl-3xl mini:hidden">
                            <FiPhoneCall className='text-2xl mt-1.5 mr-1'/>
                            <p className='text-xs'>Phone:
                            <br/> 0551636772</p>
                        </button>
                    </div>
                
                </div>

        )}
export default Navbar

  