import React from 'react'
import { THeroBG } from '../../../../Assets'

export default function Hero() {
  return (
    <main>
      <section class="bg-black">

        <div class="mx-auto px-6 py-32 text-center">
          <div class="mx-auto max-w-xl py-20 flex flex-col justify-center items-center">
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Empowering Africans young music talents</h1>
            <p class="mt-6 text-white">Unlocking opportunities and amplifying voices to nurture the next generation of African music innovators.</p>
            <a href='#' class="mt-6 rounded-lg bg-white px-6 py-5 text-center text-sm font-bold capitalize leading-5 text-black focus:outline-none lg:mx-0 lg:w-80">Sign Up As A Contestant</a>
          </div>

          <div class="mt-10 flex justify-center">
            <img class="h-full w-full rounded-xl object-cover lg:max-w-[1500px]" src={THeroBG} />
          </div>
        </div>
      </section>
    </main>
  )
}
