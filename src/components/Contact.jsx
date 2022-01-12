import React,{useRef} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cbm1ank', 'template_erqkhy6', form.current, 'user_7W93Mnc4EWcPpxuUadDj1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            alert(error.text+ "Sorry for the inconvenience, we can,t send the mail right now, please try again later");
        });
    };


    //check if the form is valid
    const isFormValid = () => {
        const form = document.querySelector('form');
        const inputs = form.querySelectorAll('input');
        const textarea = form.querySelector('textarea');
        let valid = true;
        inputs.forEach(input => {
            if (input.value === '') {
                valid = false;
            }
        });
        if (textarea.value === '') {
            valid = false;
        }
        return valid;
    };
    // show the form after submitting
    const showForm = () => {
        form.current.style.display = 'block';
        document.getElementById('thankyou').style.display = 'none';
    }
    // show the thank you message after submitting
    const showThankyou = () => {
        if(isFormValid()){
            form.current.style.display = 'none';
            document.getElementById('thankyou').style.display = 'block';
        }
        else{
            alert("Please fill all the fields");
        }
    }
    return (
        <div class="h-screen md:flex" id="contact">
        <div
            class="relative overflow-hidden md:flex w-1/3 bg-gradient-to-tr from-rose-800 to-rose-700 i justify-around items-center hidden">
            <div>
                <h1 class="text-white font-bold text-4xl font-sans">Connect now</h1>
                <p class="text-white mt-1">We would be happy to work with you</p>
            </div>
            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 "></div>
            <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div class="flex flex-row md:w-2/3 justify-center py-10 items-center bg-white">
              <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
              <div className='hidden' id="thankyou">
                <div class="alert flex flex-row">
                    <div class="flex-1">
                        <label class="mx-3">You'r message is successfully submitted </label>
                    </div> 
                    <div class="flex-none">
                        <a href="/#contact" class="btn btn-sm btn-ghost mr-2">Cancel</a> 
                        <a href="/#contact" class="btn btn-sm btn-primary" onClick={showForm}>OK</a>
                    </div>
                </div>

        </div>
                  <form onSubmit={sendEmail} ref={form}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">
                        
                                 <input type="text" className="form-control
                                                            block
                                                            w-full
                                                            px-3
                                                            py-1.5
                                                            text-base
                                                            font-normal
                                                            text-gray-700
                                                            bg-white bg-clip-padding
                                                            border border-solid border-gray-300
                                                            rounded
                                                            transition
                                                            ease-in-out
                                                            m-0
                                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                                            aria-describedby="emailHelp123" placeholder="First name" name='firstName'/>
                                </div>
                  <div class="form-group mb-6">
                        <input type="text" class="form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                        aria-describedby="emailHelp124" placeholder="Last name" name='lastName'/>
                    </div>
                                </div>
                                <div class="form-group mb-6">
                                <input type="text" minLength="8" maxLength="12" class="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                                   
                                    placeholder="Company Name" name='company'/>
                                </div>
                                <div class="form-group mb-6">
                                <input type="email" class="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                                    required
                                    placeholder="Email address" name='user_Email'/>
                                </div>
                                <div class="form-group mb-6">
                                <input type="phone" minLength="8" maxLength="12" class="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                                    required
                                    placeholder="Phone Number" name='Phone'/>
                                </div>
                                <div class="mb-3 xl:w-96">
                                    <textarea
                                    class="
                                        form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                    required
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Your message"
                                    name='message'></textarea>
                                </div>
                                <input type="submit" className=" 
                                cursor-pointer
                                w-full
                                px-6
                                py-2.5
                                bg-blue-600
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                hover:bg-blue-700 hover:shadow-lg
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg
                                transition
                                duration-150
                                ease-in-out" value="Submit" onClick={showThankyou}/>
                                
                            </form>
                            </div>
        </div>
    </div>
    )
}

export default Contact
