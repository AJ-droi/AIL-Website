import React from 'react'
import {BsFacebook} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io"
import {AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <div id="contact" className="  flex flex-col h-screen bg-amber-900 text-amber-200 md:h-auto md:py-5 lg:flex-row lg:h-72 lg:justify-evenly ">
        
        <div className="flex flex-col justify-evenly self-center h-1/4 lg:h-1/2"> 
            <h4 className=' text-xl lg:text-2xl font-mont font-bold'> AHUIZI INVESTMENT LTD</h4> 
            
            <div className='flex justify-between items-center w-60 md:pt-2'>
                <a href="http://wa.link/9wm5o2" target=" _blank" className='text-5xl hover:text-violet-50'><IoLogoWhatsapp />  </a>
                <p className='text-left text-sm '> Chat Us on Whatsapp by <br />Clicking the Whatsapp Icon.</p> 
            </div>
        </div>

        <div className="self-center">
            <h5 className="font-pop font-bold py-1 md: pt-3">Company</h5>
            <ul className='flex flex-col justify-evenly h-36 py-3'>
                <li><a href=" " className="hover:text-violet-50">Home</a></li>
                <li><a href="#about" className="hover:text-violet-50">About</a></li>
                <li><a href="#faq" className="hover:text-violet-50">FAQ</a></li>
                <li><a href="#contact" className="hover:text-violet-50">Contact</a></li>
            </ul>
        </div>

        <div className="self-center h-40 ">
            <h5 className="font-pop font-bold ">Contact Us</h5> 
            <div className=" py-3 ">
                <span className="font-semibold " >Phone:</span>
                <p> 08131310352</p>
            </div>
            <div>
                <span className="font-semibold">Email:</span>
                <p>info@ahuiziinvest.com</p>
            </div>
        </div>

        <div className="self-center ">
            <h5 className="font-pop font-bold">Visit Us</h5>
            <div className="py-3" >
                <span className="font-semibold ">Head Office:</span>
                <p className="text-sm">Azueke Ndume, Ibeku Opp. Timber Market, <br /> P.O Box 2922, Umuahia, Abia State, Nigeria </p>
            </div> 
            <div>
                <span className="font-semibold">Branch Office:</span>
                <p className="text-sm">1, Ojike Street, Umuahia, Abia State.</p>
            </div>
            
        </div>

    </div>
  )
}

export default Footer