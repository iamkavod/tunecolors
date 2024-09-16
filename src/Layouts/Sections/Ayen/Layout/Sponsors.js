import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import { Autoplay } from 'swiper/modules';
import { SponsorA, SponsorB, SponsorC, SponsorD, SponsorE, SponsorF, SponsorG } from '../../../../Assets'

export default function Sponsors() {
    return (
        <main>
            {/* Sponsors */}
            < section className="bg-white" >
                <div className="flex flex-col mx-3 bg-white rounded-lg">
                    <div className="w-full draggable overflow-hidden">
                        <div className="container flex flex-col items-center gap-8 mx-auto lg:my-32 my-5">
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
                                        <img src={SponsorA} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={SponsorB} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={SponsorC} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={SponsorD} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={SponsorE} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={SponsorF} alt="cdss" className="w-28" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={SponsorG} alt="cdss" className="w-28" />
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


