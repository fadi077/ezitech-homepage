import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

function Hero() {
  const [keywords] = useState(['Programming', 'Networking', 'Social Skills', 'Marketing']);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [keywords.length]);

  return (
    <div className="bg-[#7287B6] text-white text-center py-12 h-[90vh] overflow-hidden">
      <h1 className="text-6xl mt-4">
        Learn the fundamentals with our <br />
        Experts in
        <span className="text-[#00CBFF] mx-2" style={{ animation: 'fadeInOut 3s infinite' }}>
          {keywords[index]}
        </span>
      </h1>
      <h2 className="text-2xl mt-10">Utilize Effective Learning to Reach Your Potential!</h2>
      <div className="relative mt-4 inline-block">
        <input
          type="text"
          placeholder="Search courses..."
          style={{
            width: '400px',
            padding: '10px 40px 10px 20px',
            borderRadius: '30px',
            border: '3px solid #ccc',
            outline: 'none',
            color: '#333',
            fontSize: '16px'
          }}
        />
        <FaSearch style={{
          position: 'absolute',
          right: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#ccc',
          fontSize: '20px'
        }}/>
      </div>
      
      <div>
        <a href="#" className="text-xl text-white mt-4 inline-block">Explore our more useful products ❤️</a>
      </div>
      <div className='mt-6 flex justify-center items-center space-x-4'>
        <img src="https://ezitech.org/wp-content/uploads/2023/10/EZIBLOGS-DG.png" className='w-1/4 h-auto' alt="EZIBLOGS" />
        <img src="https://ezitech.org/wp-content/uploads/2023/11/white-ezipos.png" className='w-1/4 h-auto' alt="EZIPoS" />
        <img src="https://ezitech.org/wp-content/uploads/2023/10/white-lgooo-01.png" className='w-1/4 h-auto' alt="EZICODING" />
      </div>
      
      <style>{`
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
