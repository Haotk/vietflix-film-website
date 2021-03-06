import React from 'react'
import facebook from "../../svg/icons8-facebook-f.svg";
import instagram from "../../svg/icons8-instagram.svg";
import twitter from "../../svg/icons8-twitter.svg";
import youtube from "../../svg/icons8-youtube.svg";
import linkedin from "../../svg/icons8-linkedin-2.svg";
export default function Footer() {
  return (
    <div className='bg-[#171717] grid grid-rows-2 place-items-center py-10' >
        <div className='grid  grid-cols-5 gap-5'>
            <img className="rounded-full bg-zinc-800 p-2 hover:backdrop-blur-sm hover:bg-red-600" src={facebook} alt='background'/>
            <img className="rounded-full bg-zinc-800 p-2 hover:backdrop-blur-sm hover:bg-red-600" src={instagram} alt='background'/>
            <img className="rounded-full bg-zinc-800 p-2 hover:backdrop-blur-sm hover:bg-red-600" src={twitter} alt='background'/>
            <img className="rounded-full bg-zinc-800 p-2 hover:backdrop-blur-sm hover:bg-red-600" src={youtube} alt='background'/>
            <img className="rounded-full bg-zinc-800 p-2 hover:backdrop-blur-sm hover:bg-red-600" src={linkedin} alt='background'/>
        </div>
        <div className=''>
            <span>
                <small>© 2022 Copyright: Vietflix</small>
            </span>
        </div>
    </div>
  )
}
