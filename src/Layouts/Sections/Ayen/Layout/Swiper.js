import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import { Autoplay } from 'swiper/modules';
import { AboutLogo } from '../../../../Assets'

export default function Swipper() {
    return (
        <main>
            {/* Sponsors */}
            < section className="bg-white" >
                <div className="flex flex-col mx-3 bg-white rounded-lg">
                    <div className="w-full draggable overflow-hidden">
                        <div className="container flex flex-col items-center gap-8 mx-auto my-32">
                            <p className="text-base font-bold capitalize leading-7 text-center text-black">Our trusted partners</p>
                            <div className="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-0 lg:flex-nowrap lg:justify-between">
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={6}
                                    spaceBetween={20}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1000}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 16,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 24,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 24,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <img src={AboutLogo} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={AboutLogo} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={AboutLogo} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={AboutLogo} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={AboutLogo} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={AboutLogo} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={AboutLogo} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main>
    )
}


