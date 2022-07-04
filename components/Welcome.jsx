import React from 'react'

const Welcome = () => {
  return (
    <div>
      <img className=" absolute top-[88px] left-0 right-0 max-h-full h-screen object-cover overflow-hidden z-0" src="/bg/bg_land.png" alt="Logo" />
      {/* <img className="absolute top-[88px] left-0 right-0 max-h-full h-screen object-cover overflow-hidden " src="/bg/bg_phase.png" alt="Logo" /> */}
      <img className=" floatingbg " src="/bg/bg_phase.png" alt="Logo" />
      <div className='absolute top-[88px] left-[24px] right-0 flex flex-row items-start justify-start h-[592px] w-[325px] text-white indent-0.5'>
        <div className='flex flex-col items-center justify-center mr-3'>
          <span className=" w-3 h-3 bg-slate-50 rounded-full flex items-center justify-center z-10">
            <div className="w-3 h-3 animate-ping bg-white rounded-full"></div>
          </span>
          <div className='h-[592px] w-[1px] border-l bg-white -m-1 z-0'></div>
        </div>
        「Year… 2222, Location… InVaria, Weather…
        Radiation Fog and Cold」Something is
        happening in this world…
        <br/><br/>
        Build up communication channel… Discord 
        set up… Twitter launched… Now we can communicate, discuss with each others about InVaria and the ideas we have there!
      </div>
      <div className="absolute top-40 xl:top-60 left-0 right-0 ml-auto mr-auto text-center">
        <p className="text-[#E3D5FA] text-3xl mx-6 xl:mx-0 md:text-5xl font-semibold">
          Explore Crypto Desert on Next-Gen
          </p>
      </div>



      <div className="absolute top-80 xl:top-100 left-6 right-6 md:right-16 ml-auto mr-auto text-center md:text-right">
        <p className="text-[#E3D5FA]">Year...2222, Location...InVaria, Weather...</p>
        <p className="text-[#E3D5FA]">Radiation Fog and Cold</p>
      </div>
    </div>
  )
}

export default Welcome
