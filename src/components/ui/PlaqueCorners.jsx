import React from 'react';

export const PlaqueCorners = () => {
  const cornerStyles = "absolute w-4 h-4 border-gold pointer-events-none";
  return (
    <>
      <div className={`${cornerStyles} top-0 left-0 border-t-[1.5px] border-l-[1.5px]`} />
      <div className={`${cornerStyles} top-0 right-0 border-t-[1.5px] border-r-[1.5px]`} />
      <div className={`${cornerStyles} bottom-0 left-0 border-b-[1.5px] border-l-[1.5px]`} />
      <div className={`${cornerStyles} bottom-0 right-0 border-b-[1.5px] border-r-[1.5px]`} />
    </>);

};