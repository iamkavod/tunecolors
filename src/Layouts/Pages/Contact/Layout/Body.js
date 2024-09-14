import React from 'react'
import { FaSquareYoutube } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function Body() {
  return (
    <main>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="bg-white max-w-[1500px] mx-auto w-full">
          <div class="grid lg:grid-cols-6 grid-cols-1 h-full">
            <div class="bg-marianaBlue p-10 col-span-2">
              <h2 class="mb-10 font-bold text-2xl text-white before:block before:absolute before:bg-deepYellow before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Contact Info</h2>
              <p class="font-bold text-blue-100 py-8 border-b border-white">
                Phone Number:
                <span class="font-normal text-lg text-deepYellow block">+234 816 279 6012 <br />  +22952241744</span>
              </p>
              <p class="font-bold text-blue-100 py-8 border-b border-white">
                Email Address:
                <span class="font-normal text-lg text-deepYellow block">info@ollmedia.online</span>
              </p>
              <ul className="flex items-center space-x-4 list-none text-white text-4xl py-10">
                <li className='bg-marianaBlue'><a href='https://www.facebook.com/profile.php?id=61559557211019&mibextid=LQQJ4d'><ImFacebook2 /></a></li>
                <li><a href='https://www.instagram.com/tunecolors_africa?igsh=bXRkNjZncHpjY3Jk&utm_source=qr'><FaInstagram /></a></li>
                <li><a href='https://www.tiktok.com/@tunecolorsafrica?_t=8pM7FH59lbi&_r=1'><AiFillTikTok /></a></li>
                <li><a href='https://youtube.com/@tunecolorsafrica-tca?si=IKwSbtKhJU5WP9rf'><FaSquareYoutube /></a></li>
              </ul>

            </div>
            <div class="bg-marianaBlue p-10 col-span-4">
              <h2 class="mb-14 font-bold text-4xl text-white before:block before:absolute before:bg-deepYellow before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Have Questions? Fill the form!</h2>
              <div class="grid gap-6 mb-6 lg:grid-cols-2 grid-cols-1">
                <div class="flex flex-col">
                  <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="First Name" placeholder="First Name" />
                </div>
                <div class="flex flex-col">
                  <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Last Name" placeholder="Last Name" />
                </div>
              </div>
              <div class="grid gap-6 mb-6 lg:grid-cols-2 grid-cols-1">
                <div class="flex flex-col">
                  <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Email Adress" placeholder="Email Adress" />
                </div>
                <div class="flex flex-col">
                  <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Subject" placeholder="Subject" />
                </div>
              </div>
              <div class="mb-6">
                <textarea class="w-full rounded-2xl placeholder:text-xs px-6 py-4" placeholder="Enter Your Message" name="" id="" rows="8"></textarea>
              </div>
              <div class="flex justify-center">
                <button class="rounded-full bg-deepYellow text-black font-bold py-4 px-6 w-full transition-all">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
