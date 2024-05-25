import React from 'react';

function Works() {
    const services = [
        { name: "ML & AI", icon: "https://ezitech.org/wp-content/uploads/2022/05/artificial-intelligence-3-69x69.png" },
        { name: "Block Chain", icon: "https://ezitech.org/wp-content/uploads/2022/05/blockchain-69x69.png" },
        { name: "Amazon", icon: "https://ezitech.org/wp-content/uploads/2022/05/aaaa-69x69.png" },
        { name: "Cyber Security", icon: "https://ezitech.org/wp-content/uploads/2022/05/cccccc-69x69.png" },
        { name: "Development", icon: "https://ezitech.org/wp-content/uploads/2022/05/ffff-69x69.png" },
        { name: "Designing", icon: "https://ezitech.org/wp-content/uploads/2022/05/www-69x69.png" },
        { name: "Gaming", icon: "https://ezitech.org/wp-content/uploads/2022/05/vvvv-69x69.png" },
        { name: "Architecture", icon: "https://ezitech.org/wp-content/uploads/2022/05/ssss-69x69.png" },
        { name: "iOS & Android", icon: "https://ezitech.org/wp-content/uploads/2022/05/aaaaaaaaaaaaaaaaaaaaaa-69x69.png" },
        { name: "Marketing", icon: "https://ezitech.org/wp-content/uploads/2022/10/social-media-1-63x63.png" },
        { name: "3D", icon: "https://ezitech.org/wp-content/uploads/2023/03/3d-68x68.png" },
        { name: "Animation", icon: "https://ezitech.org/wp-content/uploads/2023/03/animation-68x68.png" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-bold text-center mt-14 mb-8">How it works?</h2>

            <div className="flex justify-center space-x-4 mb-12">
                <img src="hello.png" alt="meeting" className="w-1/4" />
                <img src="meeting.png" alt="meeting" className="w-1/4" />
                <img src="email_marketing.png" alt="meeting" className="w-1/4" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 cursor-pointer mt-12">
                {services.map(service => (
                    <div key={service.name} className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300 p-6 bg-white rounded-lg shadow-lg">
                        <div className="w-28 h-28 flex items-center justify-center mb-2">
                            <img src={service.icon} alt={service.name} className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className="text-base font-bold text-black">{service.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Works;
