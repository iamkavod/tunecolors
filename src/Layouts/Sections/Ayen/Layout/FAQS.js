import React, { useState } from 'react'

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-black">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-black transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-500">{children}</p>
                </div>
            )}
        </div>
    );
};

export default function FAQs() {
    return (
        <main>
            <div class="px-4 py-16 mx-auto max-w-[1500px] md:px-24 lg:px-0 lg:py-20 ">
                <div class="max-w-[1500px] sm:mx-auto">
                    <div class="mb-10 md:mx-auto sm:text-center max-w-[1500px] md:mb-12">
                        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto capitalize">
                            Frequently asked questions
                        </h2>
                    </div>
                    <div class="space-y-4">
                        <Item title="Who is eligible to register for AYEN?">
                            Business and Ornidary Participants
                        </Item>
                    </div>
                </div>
            </div>
        </main>
    )
}
