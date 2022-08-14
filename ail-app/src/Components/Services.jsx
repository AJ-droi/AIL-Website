import React from "react";
import { RiHomeGearFill } from "react-icons/ri";
import {FaTractor, FaSellcast} from "react-icons/fa"
import {TbPlant2, TbPaperBag} from "react-icons/tb"
import {GiChicken} from "react-icons/gi"

const Services = () => {
  return (
    <div id="service" className=" py-3 mt-2 md:h-auto md:py-8 lg:h-screen">
        <div className="flex h-1/6 w-full">
            <div className="bg-amber-900 w-1/2 "></div>
            <div className="bg-amber-200 w-1/2 "></div>
        </div>
      <h3 className="text-amber-900 text-3xl md:text-5xl py-4 font-mont font-bold">About Us</h3>
      <p className="w-3/4 mx-auto font-pop text-sm font-semibold leading-relaxed">Ahuizi Investment is an Agro-Allied company that engages in Commercial Farming, <br /> Food Production and Processing, Sales and Supplies of Agricultural Produce, <br /> Sales of Animal Feeds and Day Old Chicks and the Sales of Raw and Industrial Materials</p>

      <section className="grid lg:grid-rows-2 lg:grid-cols-3 px-24 gap-y-12 pt-12">
        <div className="w-auto justify-self-center">
          <FaTractor className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold ">Commercial <br />Farming</h4>
          
        </div>
        <div className="w-auto justify-self-center">
          <TbPlant2 className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Agro-Allied <br />farming</h4>
          
        </div>
        <div className="w-auto justify-self-center">
          <TbPaperBag className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Food Production <br /> and Processing</h4>
          
        </div>
        <div className="w-auto justify-self-center">
          <FaSellcast className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Sales and Supplies <br /> of Agricultural Produce</h4>
          
        </div>
        <div className="w-auto justify-self-center">
            <GiChicken className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Sales of Animal Feeds <br /> and Day Old Chicks</h4>
          
        </div>
        <div className="w-auto justify-self-center">
            <RiHomeGearFill className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Sales of Raw <br /> and Industrial Materials</h4>
        </div>
      </section>
    </div>
  );
};

export default Services;
