import React,{useState, useEffect} from 'react'
import data from "../data"
import logo from "./Images/Photo_from_Courier_Technology-removebg-preview.png"
import {IoCallSharp} from "react-icons/io5"
import {FaBars} from "react-icons/fa"


const Home = () => {
    const [values, setValues] = useState(data);
    const [index, setIndex] = useState(0);
    const [toggle, setToggle] = useState(false);


  
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > values.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [values])
  return (
    <div id="home" className='h-screen md:h-48 lg:h-screen'>
        <div className="flex flex-col flex-col-reverse fixed top-0 h-auto items-center bg-amber-900 fixed z-10 w-screen md:flex-row md:justify-between md:items-center  ">
             {toggle && <ul className='list-none text-black relative z-1 flex flex-col py-3 w-2/6 font-semibold justify-between h-60 md:flex-row md:h-auto md:pl-12 md:invisible '>
                  <li className='text-amber-200 font-mont hover:bg-violet-600 no-underline'><a className="hover:text-violet-50" href="#home"  onClick={()=> setToggle(false)} >Home</a></li>
                  <li className='text-amber-200 font-mont'><a className="hover:text-violet-50" href="#about" onClick={()=> setToggle(false)} >About</a></li>
                  <li className='text-amber-200 font-mont'><a className="hover:text-violet-50" href="#faq" onClick={()=> setToggle(false)} >FAQ</a></li>
                  <li className='text-amber-200 font-mont'><a className="hover:text-violet-50" href="#contact" onClick={()=> setToggle(false)} >Contact</a></li>
              </ul> } 

              <ul className='list-none text-black relative z-1 md:flex flex-col py-3 w-2/6 font-semibold justify-between hidden h-60 md:w-1/2 md:flex-row md:h-auto md:pl-12'>
                  <li className='text-amber-200 font-mont '><a className="hover:text-violet-50" href=" " >Home</a></li>
                  <li className='text-amber-200 font-mont'><a className="hover:text-violet-50" href="#about" >About</a></li>
                  <li className='text-amber-200 font-mont'><a className="hover:text-violet-50" href="#faq" >FAQ</a></li>
                  <li className='text-amber-200 font-mont'><a className="hover:text-violet-50" href="#contact" >Contact</a></li>
              </ul>
              <div className='w-screen px-12 h-24 flex flex-row-reverse justify-between items-center bg-amber-200 md:px-0 md:rounded md:w-1/3 '>
                {toggle && <button class="btn bg-amber-900 text-amber-200 h-1/2 font-mont font-semibold w-32 flex justify-evenly items-center"><IoCallSharp /><a className="hover:text-violet-50" href="tel: 08131310352" onClick={()=> setToggle(false)}>Call Us </a></button>}
                <a href=" "><img src={logo} alt="" className=" h-16 md:pr-12" /></a>
                <button class="btn bg-amber-900 text-amber-200 h-1/2 font-mont font-semibold w-32 hidden md:flex justify-evenly items-center"><IoCallSharp /><a className="hover:text-violet-50" href="tel: 08131310352" onClick={()=> setToggle(false)}>Call Us </a></button>
                {!toggle ? <FaBars onClick={()=> setToggle(!toggle)} className="text-3xl text-amber-900 md:invisible" /> :  "" }
              </div>
              
          </div>
        <header>
          
            {values.map((value, idx) => {
                const{id, image} = value;
                let position = 'nextSlide'
                if (idx === index) {
                    position = 'activeSlide'
                }
                if (
                    idx === index - 1 ||
                    (index === 0 && idx === values.length - 1)
                ) {
                    position = 'lastSlide'
                }
                return(
                    <article key={idx} className={position} >
                        <div  className="relative w-screen h-screen before:pseudo before:h-screen md:h-4/5 md:before:h-full  lg:h-screen lg:before:h-screen " style={{backgroundImage:`url("${image}")`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
                           <div className="relative z-1 text-amber-200 text-center flex flex-col items-center justify-between md:justify-start lg:justify-evenly h-2/3 pt-72 md:pt-48 lg:pt-72">
                              <h3 className="text-3xl md:text-5xl font-bold font-mont leading-normal ">
                                  AHUIZI INVESTMENT LTD. 
                              </h3>
                              <p className='font-pop text-sm py-3 md:py-4 md:pr-5  md:text-2xl'>Producers of Casameal Flour.</p>
                              <button className="bg-amber-900 w-1/2 md:w-32 px-3 py-3 rounded text-amber-200 font-pop text-sm"><a href="#about"> Know More </a></button>
                            </div>
                        </div>
                    </article>
                )
            })}
        </header>

    </div>
  )
}

export default Home