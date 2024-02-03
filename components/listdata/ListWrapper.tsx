import React, { useState, useEffect } from 'react';

interface ListWrapperProps {
  data: any[];
}

const ListWrapper = ({ data }: ListWrapperProps) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % (data.length - 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className='flex gap-12 mt-8'>
      <div className='flex flex-col justify-between py-4 text-center'>
        <div>
          <h1 className='tracking-wide font-semibold text-2xl'>HOT DEAL</h1>
          <p className='tracking-wider text-base'> [UP TO 34% OFF] HAPPY HOUR</p>
        </div>
        <div className='flex gap-10 justify-start text-3xl text-[#999999]'>
          <button onClick={handlePrevious}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <div className='righside flex flex-row justify-between items-center w-full '>
        {data.slice(startIndex, startIndex + 4).map((item, idx) => (
          <div key={idx} className='text-center'>
            <div className='relative'>
              <img
                src={item.imageUrl}
                alt='image'
                width={174}
                height={174}
                style={{ width: '174px', height: '174px' }}
              />
              <button className='absolute text-xs py-1 bottom-3 left-3 w-16 h-5 text-white bg-[#009E8A] tracking-tighter'>리턴 가능</button>
            </div>
            <p className='text-[#333333] tracking-tight'>{item.rightTitle}</p>
            <p className='text-gray-900 font-medium mt-3'><span className='text-[#FF5023] '>{item.percent}% </span>{item.count}</p>
            <div className='flex justify-center items-center'>
              <img
                src='/star.svg'
                alt='image'
                width={174}
                height={174}
                style={{ width: '12px', height: '12px' }}
              />
              <p>{item.star}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListWrapper;
