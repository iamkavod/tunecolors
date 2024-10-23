import React, { useState } from "react";

export default function RegistrationModal({ closeModal }) {
    const [showNigeriaOptions, setShowNigeriaOptions] = useState(false);

    const handleBeninClick = () => {
        // Redirect to Benin Republic registration page
        window.location.href = "https://paylink.payplus.africa/ayen2024";
    };

    const handleNigeriaClick = () => {
        // Show Nigeria options (Regular and VIP)
        setShowNigeriaOptions(true);
    };

    const handleRegularClick = () => {
        // Redirect to Nigeria Regular registration page
        window.location.href = "https://paystack.com/pay/ayen_rg";
    };

    const handleVIPClick = () => {
        // Redirect to Nigeria VIP registration page
        window.location.href = "https://paystack.com/pay/ayen_vip";
    };

    return (
        <div className="modal">
            <div className="modal-content">
                {/* Conditionally show titles based on Nigeria options */}
                {!showNigeriaOptions ? (
                    <h2 className="font-bold">Choose your country</h2>
                ) : (
                    <h3 className="font-bold">Nigeria Options</h3>
                )}

                {!showNigeriaOptions ? (
                    <div>
                        <div className="flex p-10 justify-between items-center gap-5">
                            <button onClick={handleBeninClick} className="bg-black text-white p-3 rounded w-[150px]">Benin Republic</button>
                            <button onClick={handleNigeriaClick} className="bg-black text-white p-3 rounded w-[150px]">Nigeria</button>
                        </div>
                        <button onClick={closeModal} className="bg-red-500 font-bold p-2 rounded-xl w-[150px]">Close</button>
                    </div>
                ) : (
                    <div>
                        <div className="flex p-10 w-[300px] h-[150px] justify-between items-center gap-5">
                            <button onClick={handleRegularClick} className="bg-black text-white p-3 rounded w-[150px]">Regular</button>
                            <button onClick={handleVIPClick} className="bg-black text-white p-3 rounded w-[150px]">VIP</button>
                        </div>
                        <button onClick={closeModal} className="bg-red-500 font-bold p-2 rounded-xl w-[150px]">Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};
