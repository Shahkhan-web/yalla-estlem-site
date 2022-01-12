import React from "react";
import Slider from "react-slick";

import Clients from "./Clients";
const Corousel = () => {
     const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
          };
          return (

        <div className='bg-stone-100 pb-32'> 
        <hr/>
            <div className=" text-black-700 mx-7 text-center font-bold h-72 pt-1">
              <h2 className=" text-3xl my-5">Our Clients</h2>
              
                     <Slider {...settings} className=" p-5 ">
                       {Clients.map((client) => ( 
                         <div class="mx-0 px-5" key={client.id}>
                            <img src={client.image} className="hover:h-36 transition h-40 w-auto" alt={client.id}/>
                        </div> ))
                        }
                      </Slider>
                </div>
            </div>
    )
}
export default Corousel
