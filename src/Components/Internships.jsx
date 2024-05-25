import React from 'react';
import { FaMapMarkerAlt, FaBusinessTime, FaLaptopCode } from 'react-icons/fa';

function Internships() {
    const internships = [
        {
            title: "HTML/CSS Javascript",
            institute: "Ezitech Institute",
            employmentType: "Hybrid",
            location: "Rawalpindi",
            jobType: ["Full Time", "Part Time"],
            imageUrl: "https://ezitech.org/wp-content/uploads/2024/02/web-design-511x511.png"
        },
        {
            title: "Graphic Designing",
            institute: "Ezitech Institute",
            employmentType: "Hybrid",
            location: "Rawalpindi",
            jobType: ["Full Time", "Part Time"],
            imageUrl: "https://ezitech.org/wp-content/uploads/2024/02/development-511x511.png"
        },
        {
            title: "Digital Marketing",
            institute: "Ezitech Institute",
            employmentType: "Hybrid",
            location: "Rawalpindi",
            jobType: ["Full Time", "Part Time"],
            imageUrl: "https://ezitech.org/wp-content/uploads/2024/02/digital-marketing-511x511.png"
        },
        {
            title: "Flutter Development",
            institute: "Ezitech Institute",
            employmentType: "Hybrid",
            location: "Rawalpindi",
            jobType: ["Full Time", "Part Time"],
            imageUrl: "https://ezitech.org/wp-content/uploads/2024/02/app-development-511x511.png"
        },
        {
            title: "Machine Learning",
            institute: "Ezitech Institute",
            employmentType: "Hybrid",
            location: "Rawalpindi",
            jobType: ["Full Time", "Part Time"],
            imageUrl: "https://ezitech.org/wp-content/uploads/2024/02/web-services-511x511.png"
        },
        {
            title: "MERN Development",
            institute: "Ezitech Institute",
            employmentType: "Hybrid",
            location: "Rawalpindi",
            jobType: ["Full Time", "Part Time"],
            imageUrl: "https://ezitech.org/wp-content/uploads/2024/02/clean-code-511x511.png"
        }
        // Add other internships similarly...
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-bold text-center mb-10">Perfect Internships For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 space-y-2">
                {internships.map((internship, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                        <div className="bg-[#2658A4] flex justify-between items-center p-4">
                            <div>
                                <h3 className="text-xl font-bold text-white">{internship.title}</h3>
                                <p className="text-sm text-white">{internship.institute}</p>
                            </div>
                            <img src={internship.imageUrl} alt={internship.title} className="w-16 h-16 rounded-full border-2 border-white shadow-sm"/>
                        </div>
                        <div className="p-4 text-xl flex flex-col justify-between space-y-8 mb-6 ">
                            <div className='space-y-4'>
                                <p className="flex items-center mb-1"><FaBusinessTime className="text-blue-500 mr-2" />Employment: {internship.employmentType}</p>
                                <p className="flex items-center mb-1"><FaMapMarkerAlt className="text-green-500 mr-2" />Location: {internship.location}</p>
                                <p className="flex items-center mb-4"><FaLaptopCode className="text-red-500 mr-2" />Job Type: {internship.jobType.join(" / ")}</p>
                            </div>
                            <button className="mx-auto bg-blue-500 text-white font-bold py-2  px-4 rounded hover:bg-blue-600 transition-colors">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Internships;
