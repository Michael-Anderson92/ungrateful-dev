import React from 'react';

const Header = () => {
  return (
    <div className="w-full text-center fixed top-0 left-0 right-0 z-50 bg-gray-950 pt-8">
      <h1 className="text-4xl md:text-5xl text-indigo-400 font-bold mb-4">
        The Ungrateful Developer
      </h1>
      <nav className="text-red-400 w-screen flex flex-row justify-center gap-16 border-b border-indigo-700 pb-4">
        <ul>Chapter 1</ul>
        <ul>Chapter 2</ul>
        <ul>Chapter 3</ul>
        <ul>Chapter 4</ul>
      </nav>
    </div>
  );
};

export default Header;