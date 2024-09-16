'use client'

import { useState, useEffect, useNavigate } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Logo, TuneColorsLogo } from '../../Assets'
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaMusic } from "react-icons/fa6";

const resources = [
  {
    name: 'African Youths & Entrepreneurs Network [AYEN]',
    href: '/ayen',
    icon: HiMiniUserGroup
  },
  {
    name: 'Tune Colors',
    href: '/tunecolors',
    icon: FaMusic
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      setHasScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-marianaBlue">
      <nav aria-label="Global" className="mx-auto flex max-w-[1500px] items-center justify-between py-6 px-2 md:px-5 lg:px-0">
        <div className="flex lg:flex-1">
          <a
            href="/"
            aria-label="OllMedia"
            class="inline-flex items-center"
          >
            <img src={Logo} alt="Logo" className="lg:w-40 w-20" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
          <a href={"/"} className="text-xl font-bold leading-6 text-white">
            Home
          </a>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-xl font-bold leading-6 text-white focus:outline-none">
              Divisions
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {resources.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-primaryColor" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} clasxlame="block font-bold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a href={"/about"} className="text-xl font-bold leading-6 text-white">
            About Us
          </a>
          <a
            href={'/contact'}
            class="inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-whiteShade transition duration-200 shadow-md bg-white hover:bg-deepYellow hover:opacity-[.9] focus:shadow-outline focus:outline-none rounded-full"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-marianaBlue px-2 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
          <div className="flex items-center justify-between">
            <a
              href="/"
              aria-label="OllMedia"
              class="inline-flex items-center"
            >
              <img src={Logo} alt="Logo" className="w-20" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              {/* <img src={XMark} className='h-6 w-6' /> */}
            </button>
          </div>
          <div className="mt-6 flow-root px-1">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href={"/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-baxl font-bold leading-7 text-white hover:bg-gray-50"
                >
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-whitte font-bold leading-7 text-white hover:bg-gray-50">
                  Divisions
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...resources].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-xl font-bold leading-7 text-white hover:bg-gray-50"
                      >
                        {/* <Link
                          href={item.href}
                          className="block w-full h-full"
                        >
                          {item.name}
                        </Link> */}
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href={"/about"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-baxl font-bold leading-7 text-white hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href={"/contact"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-baxl font-bold leading-7 text-white hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
