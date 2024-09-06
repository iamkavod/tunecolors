import React from 'react'
import { GoDotFill } from "react-icons/go";
import { AboutAYEN } from '../../../../Assets';
import { AFAQS, ASwiper } from '.';

export default function Body() {
  return (
    <main>

      {/* Swiper */}
      <ASwiper />

      {/* Services */}
      <section class="text-gray-700 body-font border-t border-gray-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h2 class="text-xl text-blue-500 tracking-widest font-bold uppercase title-font mb-1">Crafting Memorable Moments</h2>
            <h1 class="text-xl font-medium title-font text-black">From corporate to community, we bring your event vision to life with precision and creativity.</h1>
          </div>
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div class="p-4 border rounded-lg">
              <div class="flex h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <GoDotFill />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Corporate Functions</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Tailored event solutions for corporate meetings, product launches, conferences, and team-building activities.</p>
                </div>
              </div>
            </div>
            <div class="p-4 border rounded-lg">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <GoDotFill />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Cultural Festivals</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Celebrate diversity and heritage with immersive experiences, vibrant performances, and meticulous planning.</p>
                </div>
              </div>
            </div>
            <div class="p-4 border rounded-lg">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <GoDotFill />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Talent Shows</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Showcase creativity and talent with seamless event management, from auditions to final performances.</p>
                </div>
              </div>
            </div>
            <div class="p-4 border rounded-lg">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <GoDotFill />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Sports Events</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">From small tournaments to large-scale competitions, we handle logistics, coordination, and crowd management.</p>
                </div>
              </div>
            </div>
            <div class="p-4 border rounded-lg">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <GoDotFill />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Community Gatherings</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Bring people together with engaging and inclusive community events, designed to foster connections and fun.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="px-4 py-16 mx-auto max-w-screen md:px-24 lg:px-48 lg:py-60 bg-black">
        <div className="max-w-[1500px] mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            Our Registration Process
          </h2>
          <p className="text-base text-white md:text-lg">
            A very easy registration process
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
          <div className='border p-4 border-blue-500'>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-white">Step 1</p>
              <svg
                className="w-6 text-white transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="#FFF"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-white">
              Click on <span className='text-white bg-blue-500 p-2'>Get Started</span> Button above and a form will open
            </p>
          </div>
          <div className='border p-4 border-blue-500'>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-white">Step 2</p>
              <svg
                className="w-6 text-white transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-white">
              Select either <span className='text-green-500'>Nigeria</span> or <span className='text-yellow-500'>Benin</span> and choose <span className='text-blue-500 font-bold'>Business</span> or <span className='text-blue-500 font-bold'>Participant</span> and fill the form.
            </p>
          </div>
          <div className='border p-4 border-blue-500'>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-white">Step 3</p>
              <svg
                className="w-6 text-white transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-white">
              Make Neccessary Payment based on the choice of country and participation
            </p>
          </div>
          <div className='border p-4 border-blue-500'>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-white">Success</p>
              <svg
                className="w-8 text-white"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </div>
            <p className="text-white">
              Once sucessful, an event code will be sent to your mail.
            </p>
          </div>
        </div>
      </section>

      {/* About AYEN */}
      <section className="px-4 py-16 mx-auto max-w-[1500px] md:px-24 lg:px-0 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-[800px] mb-6">
              <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                About Our AYEN
              </h2>
              <p className="text-base text-black md:text-lg text-justify">
                The African Youths & Entrepreneurs Network is a dynamic platform dedicated to bringing together youths, entrepreneurs, and business owners from across Africa. Our goal is to connect and empower individuals by providing opportunities for networking, learning, and growth. We believe that by fostering connections and sharing knowledge, we can contribute to the economic development of Africa.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-blue-500">
                <div className="h-full p-3 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-bold leading-5">
                    Previous Editions
                  </h6>
                  <p className="text-sm text-black text-justify">
                    In 2023, our networking event in Cotonou, Benin Republic, was a resounding success. Attendees enjoyed a vibrant atmosphere filled with valuable connections, exciting business opportunities, and engaging entertainment. The event left participants with positive experiences and new collaborations. We are excited to build on this success and look forward to more impactful editions in the near future.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-blue-500">
                <div className="h-full p-3 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-bold leading-5">
                    Coming Editions
                  </h6>
                  <div className='flex flex-col gap-5'>
                    <p className="text-sm text-black text-justify">
                      In October 2024, we will bring together youths, entrepreneurs, and business owners in Cotonou, Benin Republic, for an evening filled with connection, learning, and empowerment. Join us for an event featuring entertainment, relaxation, exhibitions, and much more. It's an opportunity to network, grow, and enjoy a memorable experience with like-minded individuals.
                    </p>
                    <p className="text-sm text-black text-justify">
                      In November 2024, we look forward to a vibrant evening in Lagos, Nigeria, where entrepreneurs, business owners, and youths will come together on a shared platform. This event will offer opportunities for idea exchange, networking, and creating new possibilities, all while enjoying entertainment and relaxation. Join us for an inspiring and enjoyable experience in the heart of Lagos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:h-full"
              src={AboutAYEN}
              alt="AYEN"
            />
          </div>
        </div>
      </section>

      {/* FAQS */}
      <AFAQS />
    </main>
  )
}
