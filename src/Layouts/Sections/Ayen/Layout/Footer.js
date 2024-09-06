import React from 'react'
import { FaSquareYoutube } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <main>
      <section className="bg-black py-40">
        <div
          className="max-w-lg bg-black px-4 pt-14 mx-auto text-left md:max-w-none md:text-center"
        >
          <h1
            className="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl"
          >
            <span className="inline md:block">Be a part of our Journey</span>
            <span
              className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-emerald-400 to-blue-500 md:inline-block"
            >By Supporting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-gray to-blue-500"> our vision </span> </span>
          </h1>
          <div
            className="mx-auto rounded-lg font-black mt-20 text-zinc-400 md:mt-12 md:max-w-xl text-center lg:text-lg"
          >
            <button className="border text-sm text-white py-3 px-7 rounded-full" >
              Join AYEN
            </button>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <footer className="bg-black pb-5">
        <div className="max-w-[1500px] px-4 pt-8 mx-auto sm:px-6 lg:px-0">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <a
                href="/"
                aria-label="AYEN"
                class="inline-flex items-center text-white text-3xl font-bold"
              >
                A<span className='text-blue-400'>YE</span>N
              </a>
            </div>

            <div className='lg:mt-0 mt-5'>
              {/* Socials */}
              <ul className='text-blue-500 text-3xl flex lg:justify-between justify-center items-center gap-x-10'>
                <li className='bg-marianaBlue'><a href='https://www.facebook.com/profile.php?id=61559557211019&mibextid=LQQJ4d'><ImFacebook2 /></a></li>
                <li><a href='https://www.instagram.com/tunecolors_africa?igsh=bXRkNjZncHpjY3Jk&utm_source=qr'><FaInstagram /></a></li>
                <li><a href='https://www.tiktok.com/@tunecolorsafrica?_t=8pM7FH59lbi&_r=1'><AiFillTikTok /></a></li>
                <li><a href='https://youtube.com/@tunecolorsafrica-tca?si=IKwSbtKhJU5WP9rf'><FaSquareYoutube /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
