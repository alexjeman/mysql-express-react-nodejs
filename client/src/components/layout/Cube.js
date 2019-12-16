import React from "react";

const Cube = () => {
  return (
    <div className='scene'>
      <div className='cube rotate'>
        <div className='cube-face cube-face-front animated-bg'></div>
        <div className='cube-face cube-face-back animated-bg'></div>
        <div className='cube-face cube-face-right animated-bg'></div>
        <div className='cube-face cube-face-left animated-bg'></div>
        <div className='cube-face cube-face-top animated-bg'></div>
        <div className='cube-face cube-face-bottom animated-bg'></div>
      </div>
    </div>
  );
};

export default Cube;
