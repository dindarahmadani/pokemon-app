import React from 'react'
import DownloadAds from './DownloadAds'

function Hero() {
  return (
    <div className="wrapper bg-[#0f264e] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
            <span>
                <b>Catch em!</b>
                <p>Collect your Strongest <br/>and Rarest Pokémon</p>
            </span>
            <span className="text-[15px] text-[#525d63]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Veniam beatae expedita deleniti, pariatur inventore ipsa.
                
            </span>
            {/* download ads */}
            <div>
                <span className="text-[13px]">Download now on IOS and Android </span>
                <DownloadAds/>
            </div>
        </div>
        {/* right side */}
        <div className="images relative w-[50%]">
            <img
                src={require("../img/pokemon.png")}
                alt=""
                className="absolute top-[-8rem] left-[2rem]"
            />
        </div>

        
    </div>
  )
}

export default Hero