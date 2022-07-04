import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div class="navbar w-full sticky top-0 left-0 right-0 z-50 bg-[#fff0] md:justify-center items-center h-[88px] flex">
      <div class="navbar-start">
      </div>
      <div class="navbar-center">
        <img className=" w-24 xl:w-24 " src="/icons/logo_white.svg" alt="Logo" />
      </div>
      <div class="navbar-end">
        <button class="btn btn-sm btn-outline rounded h-[40px] w-[130px] px-[11px] py-[1px] m-[24px] font-semibold text-sm text-white border-[#44334C] normal-case hover:border-none hover:bg-primary ">Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar
