import React from 'react'
import {BsFacebook} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io"
import {AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <div id="contact" className="  flex flex-col h-screen bg-amber-900 text-amber-200 md:h-auto md:py-5 lg:flex-row lg:h-72 lg:justify-evenly ">
        
        <div className="flex flex-col justify-evenly self-center h-1/4 lg:h-1/2"> 
            <h4 className=' text-xl lg:text-2xl font-mont font-bold'> AHUIZI INVESTMENT LTD</h4> 
            <p> Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Libero, amet?</p>
            <div className='flex justify-evenly md:pt-2'>
                <BsFacebook />
                <IoLogoWhatsapp />
                <AiFillInstagram/>
            </div>
        </div>

        <div className="self-center">
            <h5 className="font-pop font-bold py-1 md: pt-3">Company</h5>
            <ul className='flex flex-col justify-evenly h-36 py-3'>
                <li><a href=" ">Home</a></li>
                <li><a href=" ">About</a></li>
                <li><a href=" ">Service</a></li>
                <li><a href=" ">Contact</a></li>
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