import React from 'react';
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function AppPromotion() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="flex-1 flex justify-center relative">
                {/* Adjusting the circle size and position */}
                <div className="bg-blue-600 rounded-full w-96 h-96 absolute -right-30 -top-10"></div>
                {/* Increasing the width of the phone image */}
                <img src="https://ezitech.org/wp-content/uploads/2022/11/phone-copy.webp" alt="Phone" className="z-10" style={{ width: '350px', height: '500px' }} />
            </div>
            <div className="flex-1 text-center md:text-left md:pl-12">
                <h2 className="text-4xl font-bold">
                    Learning <span className="text-blue-600">anytime</span>
                </h2>
                <h2 className="text-4xl font-bold mb-6">from anywhere</h2>
                <p className="text-gray-600 text-lg mb-6">
                    Increase the mobility level with Eziline Technologies LMS app. Take your courses in your pocket and access them whenever you want without any limits. Make your learning more engaging and productive using modern LMS app.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    <button className="bg-black flex items-center text-white font-bold py-2 px-4 rounded transition-colors">
                        <FaApple className="mr-2 text-xl" />
                        Download on the <br /> Coming Soon
                    </button>
                    <button className="bg-black flex items-center text-white font-bold py-2 px-4 rounded transition-colors">
                        <IoLogoGooglePlaystore className="mr-2 text-xl" />
                        GET IT ON Google Play
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AppPromotion;
