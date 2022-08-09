import React from 'react'
import Casameal from './Images/Photo from Courier Technology (3).jpg'

const About = () => {
  return (
    <div id="about" className='bg-amber-200 flex flex-col h-auto items-center py-5 px-3 md:flex-row lg:px-8 md:justify-center'>
        <div className="grid content-center justify-center w-auto md:w-1/2   ">
                <img  src={Casameal} alt="" className='rounded h-96' />
        </div>
        <div className=" text-amber-900 md:text-sm md:text-left md:grid md:content-center md:w-1/2">
            <div className='py-3 md:py-0 md:mx-auto md:text-center '>
                <h1 className=' text-4xl font-mont font-bold '>Have you tasted casameal?</h1>
                <h3 className=' mb-4 font-pop font-semibold'>Here's all you need to know..</h3>
            </div>
            <div>
                <p className=' w-3/4 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veritatis assumenda sit dolor, quae magnam neque eaque odit, at nam aperiam accusamus, modi debitis? Reiciendis laborum tempore quo quia eos!</p><br />
                <p className='w-3/4 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veritatis assumenda sit dolor, quae magnam neque eaque odit, at nam aperiam accusamus, modi debitis? Reiciendis laborum tempore quo quia eos!</p> <br />
                <p className='w-3/4 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veritatis assumenda sit dolor, quae magnam neque eaque odit, at nam aperiam accusamus, modi debitis? Reiciendis laborum tempore quo quia eos!</p>
            </div>   
        </div>
    </div>
  )
}

export default About