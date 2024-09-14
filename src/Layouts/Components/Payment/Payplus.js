import React, { useState } from 'react';
import axios from 'axios';

export default function Payplus() {
    const [paymentReference, setPaymentReference] = useState('');
    const [email, setEmail] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowPopup(false);

        try {
            const response = await axios.post('http://localhost:3000/api/verify-payment', {
                paymentReference,
                email,
            });

            if (response.data.message) {
                setPopupMessage(`Success! Your event code is: ${response.data.eventCode}`);
            } else {
                setPopupMessage('Payment verification failed.');
            }
        } catch (error) {
            console.error('Error verifying payment:', error);
            setPopupMessage('Error occurred while verifying payment.');
        }

        setShowPopup(true);
    };

    return (
        <div>
            <h2>Payment Verification</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Payment Reference:</label>
                    <input
                        type="text"
                        value={paymentReference}
                        onChange={(e) => setPaymentReference(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Verify Payment</button>
            </form>

            {showPopup && (
                <div className="popup">
                    <p>{popupMessage}</p>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
            )}

            <style jsx>{`
                .popup {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    padding: 20px;
                    background-color: white;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                }
                button {
                    margin-top: 10px;
                }
            `}</style>
        </div>
    );
};
