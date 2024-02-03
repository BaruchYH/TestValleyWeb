'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ImageData {
  pcImageUrl: string;
}

const ImageSlider: React.FC = () => {
  const [data, setData] = useState<ImageData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCircleIndex, setActiveCircleIndex] = useState(0);

  useEffect(() => {
    axios.get<ImageData[]>('https://api.testvalley.kr/main-banner/all')
      .then(response => {
        console.log('this is the data', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching image links:', error);
      });
  }, []);

  useEffect(() => {
    setActiveCircleIndex(currentImageIndex);
  }, [currentImageIndex]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000); 

    return () => {
      clearInterval(slideInterval);
    };
  }, [data.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="w-full h-auto grid grid-flow-col grid-cols-8 gap-10  bg-white opacity-85 ">
      <div className='relative col-span-1'>
        <img
          src={data[(currentImageIndex - 1 + data.length) % data.length]?.pcImageUrl || ''}
          alt={`Image ${currentImageIndex + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-6 bg-black ">
        {data.length > 0 && (
          <>
            <img
              src={data[currentImageIndex]?.pcImageUrl || ''}
              alt={`Image ${currentImageIndex + 1}`}
              className="h-full w-full object-cover transition-opacity duration-500"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {data.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2  z-10 rounded-full bg-gray-500 ${index === activeCircleIndex ? 'bg-white' : 'bg-blue-500'}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </>
        )}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full shadow-md w-12 h-12 flex justify-center items-center bg-opacity-50 text-white text-4xl z-10"
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full shadow-md w-12 h-12 flex justify-center items-center bg-opacity-50 text-white text-4xl z-10"
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
      <div className='relative col-span-1 bg-black w-full'>
        <img
          src={data[(currentImageIndex + 1) % data.length]?.pcImageUrl || ''}
          alt={`Image ${currentImageIndex + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
