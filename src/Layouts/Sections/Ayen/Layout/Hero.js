import React, { useState } from 'react'
import { BlackYouthMeet } from '../../../../Assets'
import { useNavigate } from 'react-router-dom';
import { RegistrationModal } from '../../../Constants';

export default function Hero() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    // Redirect to the payment form page
    navigate('/payplus');
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      <div className="relative pt-14 bg-black">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white lg:text-6xl">Our passion lies in bringing people together and creating moments that matters</h1>
              <p className="mt-6 text-lg leading-8 text-white">Uniting hearts through shared experiences, we craft unforgettable moments that inspire connection and leave a lasting impact.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button onClick={handleButtonClick} className="rounded-md bg-blue-500 px-10 py-3 text-xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Register Your Participation</button>
                {/* <a href='https://paylink.payplus.africa/ayen2024' className="rounded-md bg-blue-500 px-10 py-3 text-xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Register Your Participation</a> */}
              </div>
              {showModal && <RegistrationModal closeModal={handleCloseModal} />}
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 p-2  lg:-m-4">
                <img src={BlackYouthMeet} alt="MeetUp" width="2432" height="1442" className="rounded-md shadow-2xl ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
      </div>
    </main>
  )
}
