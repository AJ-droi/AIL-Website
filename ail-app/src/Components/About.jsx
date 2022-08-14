import React from 'react'
import back from './Images/Photo from Courier Technology (4).jpg'
import front from './Images/Photo from Courier Technology (2).jpg'

const About = () => {
  return (
    <div id="about" className='bg-amber-200 flex flex-col flex-col-reverse h-auto items-center py-5 px-3 md:flex-row lg:px-0 md:justify-evenly relative md:mt-80 lg:mt-0'>
        <div className="flex flex-col py-3 justify-between md:flex-row md:justify-evenly w-auto md:w-1/2   ">
                <img  src={front} alt="" className='rounded h-72 px-5 ' />
                <img  src={back} alt="" className='rounded h-72 px-5 md:px-0' />
        </div>
        <div className=" text-amber-900 md:text-sm md:text-left md:grid md:content-center md:w-1/2">
            <div className=' md:py-0 md:mx-auto md:text-center '>
                <h1 className=' text-4xl font-mont font-bold '>Have you tasted casameal?</h1>
                <h3 className=' mb-4 font-pop font-semibold'>Here's all you need to know..</h3>
            </div>
            <div className="text-center md:text-left ">
                <p className=' w-3/4 mx-auto'>Casameal is very light, rich in fibre and easily digested</p><br />
                <p className='w-3/4 mx-auto'>There are a number of health benefits associated with substituting your favourite swallow with Casameal. Extensive research was put into the production of Casameal to ensure it retains the highest level of quality and nutritional benefits, compared to other products in the market.</p> <br />
                <p className='w-3/4 mx-auto'>Clinical studies show that Casameal significantly reduces Blood Sugar levels because of its low sugar content, making it good for Diabetics.<br />
                <br /> Casameal also lowers Blood Cholesterol levels. 

                Casameal helps to protect against Liver Cancer, because of the healthy Magnesium component of Cassava. 

                Casameal is rich in Calories and a good fuel source after high-intensity activities.

                Casameal is naturally rich in Vitamin C, and this supports the immune cells by preventing oxidative stress
                </p>
            </div>   
        </div>
    </div>
  )
}

export default About