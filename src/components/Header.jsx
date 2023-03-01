import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232a4e] px-[25px] py-[7px]' 
  return (
    <div className="header bg-[#081730] flex items-center justify-between
    px-[5rem] pt-[0.7rem] pb-[0.7rem] text-[0.8rem] ">
      {/* logo */}  
      <img src={require("../img/logo.png")} alt="" className='logo w-[60px] h-[42px]'/>
      {/* side menu */}  
      <CenterMenu />
      <div className="buttons flex">
        <button className={'mr-[35px] hover:bg-[#232A4e] ' + buttonStyle}>Wallet Connect</button>
      </div>
    </div>
  )
}

export default Header