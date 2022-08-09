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
      <h3 className="text-amber-900 text-3xl md:text-5xl py-8 font-mont font-bold">Other Services</h3>

      <section className="grid lg:grid-rows-2 lg:grid-cols-3 px-24 gap-y-12">
        <div className="w-auto justify-self-center">
          <FaTractor className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold ">Commercial Farming</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            repellendus?
          </p>
        </div>
        <div className="w-auto justify-self-center">
          <TbPlant2 className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Agro-Allied farming</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            repellendus?
          </p>
        </div>
        <div className="w-auto justify-self-center">
          <TbPaperBag className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Food Production and Processing</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            repellendus?
          </p>
        </div>
        <div className="w-auto justify-self-center">
          <FaSellcast className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Sales and Supplies of Agricultural Produce</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            repellendus?
          </p>
        </div>
        <div className="w-auto justify-self-center">
            <GiChicken className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Sales of Animal Feeds and Day Old Chicks</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            repellendus?
          </p>
        </div>
        <div className="w-auto justify-self-center">
            <RiHomeGearFill className="text-6xl text-black text-center w-full" />
          <h4 className="text-amber-900 font-pop font-semibold">Sales of Raw and Industrial Materials</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            repellendus?
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
