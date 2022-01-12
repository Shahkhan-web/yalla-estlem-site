import React from 'react'

const Getstarted = () => {
    return (
        <div className='bg-stone-100' id='about' >
            <div className='p-3 mini_x:flex hidden flex-row'> 
                        <div className="card lg:card-side bordered ml-5 w-1/2 bg-rose-700 text-white h-max">
                            <div className="card-body">
                                <h2 className="card-title font-bold">About the company</h2> 
                                <p>Yalla Estlem is a delivery services company in the business district of Dubai, UAE Established in 2015 and we offer pickup and delivery services to small as well as large organizations In terms of understanding their business requirements.</p> 
                                
                            </div>
                        </div> 
                        <div className="card lg:card-side bordered mx-5 w-1/2 bg-rose-700 text-white mt-24 h-max">
                            <div className="card-body">
                                <h2 className="card-title font-bold">Growing together</h2> 
                                <p>Our experience and expertise provide cost effective and profitable delivery partnership to wider range of business throughout UAE.</p> 
                            
                            </div>
                        </div>
                       
                </div>
        </div>
    )
}

export default Getstarted
