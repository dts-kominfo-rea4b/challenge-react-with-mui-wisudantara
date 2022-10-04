// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div className='header'>
      <h1 className='Judul'>Call a Friend</h1>
      <h2 className='Subtitle'>Your friendly contact app</h2></div>
  );
};

export default Header;
