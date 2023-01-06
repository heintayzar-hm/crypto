import { useEffect, useState } from 'react';

const Loading = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const newDots = dots.length + 1 > 3 ? '' : `${dots}.`;
      setDots(newDots);
    }, 100);

    return () => clearInterval(interval);
  }, [dots]);

  return (
    <div className="w-full h-screen text-white font-black flex text-2xl justify-center items-center">
      <span>
        Loading
        {dots}
      </span>
    </div>
  );
};

export default Loading;
