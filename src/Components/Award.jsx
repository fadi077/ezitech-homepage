import React from 'react';

function Award() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl text-black-800 font-bold text-center mb-6">Best IT Services Award 2023</h1>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                <img className="w-64 h-auto rounded-lg mb-6 md:mb-0" src="https://ezitech.org/wp-content/uploads/2024/02/President-of-pakistan-259x299.png" alt="Award Presentation" />
                <div className="md:ml-8">
                    <p className="text-gray-600 mb-4">
                        Ezitech Is affiliated With Eziline Software House. Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field of IT and serves as a major milestone in its journey towards success.
                    </p>
                    <p className="text-gray-600 mb-4">
                        This award is a huge source of motivation and inspiration for the entire team at Eziline Software House. It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction. The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Ismail Shah, the CEO of Eziline Software House Pvt Ltd, received the Best Services Award in the IT sector from the President of Pakistan, Dr. Arif Alvi, in recognition of his remarkable contributions to the country’s technology industry.
                    </p>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">Eziline Profile</button>
                </div>
            </div>
        </div>
    );
}

export default Award;
