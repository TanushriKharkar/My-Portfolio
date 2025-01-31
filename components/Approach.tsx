import React from 'react'
import { GlareCard } from "@/components/ui/GlareCard";


const Approach = () => {
  return (
    <section className=" py-20">
    <h1 className="heading  flex justify-center items-center max-lg:mt-10">
        My <span className="text-purple px-3"> Approach</span>
      </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 mt-7 mb-3 ">
      <GlareCard className="flex flex-col items-center justify-center px-6">
      <p className="font-bold text-white text-lg">Planning & Strategy</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
        We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center px-6">
      <p className="font-bold text-white text-lg">Development & Progress Update</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
        Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center px-6">
        <p className="font-bold text-white text-lg">Development & Launch</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
        This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up.
        </p>
      </GlareCard>
    </div>
  
    </section> 
  );
};

export default Approach;
