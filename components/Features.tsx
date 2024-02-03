import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ImageData {
  imageUrl: string;
}

const Features: React.FC = () => {
  const [data, setData] = useState<ImageData[]>([]);

  useEffect(() => {
    axios.get('https://api.testvalley.kr/main-shortcut/all')
      .then(response => {
        setData(response.data);
        console.log('the data is fetched', data);
      })
      .catch(error => {
        console.error('Error fetching image data:', error);
      });
  }, []);

  return (
    <div className="flex space-x-4 pt-16 justify-center gap-8">
      {data.map((image, index) => (
        <img
          key={index}
          src={image.imageUrl}
          alt={`Image ${index + 1}`}
          className="w-16 h-16 rounded-lg"
        />
      ))}
    </div>
  );
};

export default Features;
