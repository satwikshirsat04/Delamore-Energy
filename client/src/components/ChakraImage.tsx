// // ChakraImage.jsx
// // import React from 'react';
// import chakra from '/images/circle.png';

// const ChakraImage = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-white">
//       <div className="group">
//         <img
//           src={chakra}
//           alt="Chakra"
//           className="w-40 h-40 animate-chakraSpin [animation-play-state:running] group-hover:[animation-play-state:paused]"
//         />
//       </div>
//     </div>
//   );
// };

// export default ChakraImage;

import chakra from '/images/circle.png';

interface ChakraImageProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const ChakraImage = ({ size = 'md', className = '' }: ChakraImageProps) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-40 h-40',
    lg: 'w-56 h-56',
    xl: 'w-64 h-64'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="group">
        <img
          src={chakra}
          alt="Sustainable Energy Cycle"
          className={`${sizeClasses[size]} animate-chakraSpin [animation-play-state:running] group-hover:[animation-play-state:paused] transition-all hover:scale-105`}
        />
      </div>
    </div>
  );
};

export default ChakraImage;