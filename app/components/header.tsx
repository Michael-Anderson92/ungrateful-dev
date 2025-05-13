import React from 'react';

const Header = () => {
  return (
    <div className="w-full text-center fixed top-0 left-0 right-0 z-50 bg-gray-950 py-8">
      <h1 className="text-4xl md:text-5xl text-indigo-400 font-bold">
        The Ungrateful Developer
      </h1>
      <p className="text-gray-400 mt-4 italic">A testament to the futility of digital panhandling</p>
    </div>
  );
};

export default Header;