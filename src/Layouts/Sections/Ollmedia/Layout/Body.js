import React from 'react'
import { AboutLogo, Documentaries, Events, Lifestyle, Logo, Media, OlMediaHero } from '../../../../Assets'
import { MdEventAvailable, MdOutlinePermMedia } from "react-icons/md";
import { GrDocumentVideo } from "react-icons/gr";
import { GiLifeTap } from "react-icons/gi";
import { Swipper } from '../../../Constants';

const services = [
  {
    icon: 'bi-search',
    iconPath: (
      <>
        <MdEventAvailable />
      </>
    ),
    title: 'Events',
    description: 'We excel in planning and managing events including corporate functions, cultural festivals, talent shows, sporting events and community gatherings, ensuring memorable experiences for all attendees.',
    delay: '0s',
  },
  {
    icon: 'bi-chat-square-dots',
    iconPath: (
      <>
        <GrDocumentVideo />
      </>
    ),
    title: 'Documentaries',
    description: 'We produce captivating documentaries, handling everything from concept development and research to filming and post-production, ensuring an engaging and informative experience for audiences.',
    delay: '0.1s'
  },
  {
    icon: 'bi-badge-ad',
    iconPath: (
      <>
        <GiLifeTap />
      </>
    ),
    title: 'Lifestyle',
    description: 'We improve lifestyles by focusing on daily management, wellness, fitness, fashion, cuisine, travel and more, ensuring balanced and fulfilling lives for all we serve.',
    delay: '0.2s'
  },
  {
    icon: 'bi-card-checklist',
    iconPath: (
      <>
        <MdOutlinePermMedia />
      </>
    ),
    title: 'Media',
    description: "We specialize in content creation, distribution and engagement, creating compelling digital experiences across social media, online streaming and interactive platforms to connect with audiences.",
    delay: '0.3s'
  },
];

export default function Body() {
  return (
    <main>
      {/* Services */}
      <section className="relative pb-8 md:pb-0 bg-white py-20 overflow-x-hidden">
        <div className="max-w-[1500px] mx-auto px-0">
          <header className="text-center mx-auto mb-12 lg:px-0">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
              Our services</h2>
            <p className="text-black leading-relaxed font-light text-3xl mx-auto pb-2">
              What we offer
            </p>
          </header>
          <div className="grid lg:grid-cols-4 lg:px-0 px-4 -mx-4 text-center">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex-shrink px-4 max-w-[1500px] w-full lg:px-6 wow fadeInUp`}
                data-wow-duration="1s"
                data-wow-delay={service.delay}
                style={{ visibility: "visible", animationDuration: "1s", animationDelay: service.delay, animationName: "fadeInUp" }}
              >
                <div className="py-8 px-4 mb-12 bg-gray-50 border border-marianaBlue transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl h-[350px] lg:w-full">
                  <div className="inline-block text-gray-900 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      fill="currentColor"
                      className={`bi ${service.icon}`}
                      viewBox="0 0 16 16"
                    >
                      {service.iconPath}
                    </svg>
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section class="text-black body-font bg-marianaBlue mt-32">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-6xl mb-4 font-bold text-white">About Us</h1>
            <p class="mb-8 lg:text-2xl text-white">We specialize in lifestyle content, documentaries, events, and media. Our mission is to create and share engaging stories that inspire and inform. Whether it's the latest lifestyle trends, compelling documentaries, or exciting events & media projects, we are dedicated to bringing you fresh perspectives and valuable insights. </p>
            <div class="flex justify-center">
              <a href='/about' class="inline-flex font-bold bg-white border-0 py-2 px-6 focus:outline-none text-black rounded text-lg">Learn More</a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="Ollmedia" src={AboutLogo} />
          </div>
        </div>
      </section>

      {/* Sponsors */}
      {/* <Swipper /> */}
    </main>
  )
}
