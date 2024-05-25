import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RecommendedCourses() {
    const courses = [
        {
            category: "iOS & Android",
            title: "Flutter & Dart - The Complete Course With Projects",
            duration: "3 Months",
            students: "8301",
            rating: "0.0",
            price: "PKR37,000",
            imageUrl: "https://ezitech.org/wp-content/uploads/2024/02/Flutter-Development-300x225.jpg"
        },
        {
            category: "Designing",
            title: "Adobe Illustrator Course With Projects",
            duration: "3 Months",
            students: "7565",
            rating: "0.0",
            price: "PKR35,000",
            imageUrl: "https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-300x225.webp"
        },
        {
            category: "Amazon",
            title: "Online Arbitrage Mastermind 2.0 [Resell Products from Home]",
            duration: "3 Months",
            students: "7454",
            rating: "0.0",
            price: "PKR34,000",
            imageUrl: "https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_-300x225.webp"
        },
        {
            category: "Development",
            title: "Front-End Course With Projects",
            duration: "65 Days",
            students: "5467",
            rating: "0.0",
            price: "PKR18,000",
            imageUrl: "https://ezitech.org/wp-content/uploads/2023/07/FrontEnd-870x440-1-300x300-1-300x225.webp"
        },
        {
            category: "Designing",
            title: "Adobe Photoshop Course",
            duration: "1 Month",
            students: "3338",
            rating: "0.0",
            price: "PKR15,000",
            imageUrl: "https://ezitech.org/wp-content/uploads/2023/07/photoshop-course-300x225.webp"
        }
        // Add other courses similarly...
    ];

    // Settings for the slider
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-bold text-center mb-10">Recommended Courses</h2>
            <Slider {...settings}>
                {courses.map(course => (
                    <div key={course.title} className="px-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" style={{ width: '300px', height: 'auto' }}>
                            <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                                <div className="text-gray-700 text-base mb-4">{course.category}</div>
                                <div className="flex justify-between items-center mb-4">
                                    <span>{course.duration}</span>
                                    <span>👨‍🎓 {course.students}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span>⭐ {course.rating}</span>
                                    <span className="text-lg font-bold">{course.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
