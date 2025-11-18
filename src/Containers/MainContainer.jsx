import React from 'react';

const MainContainer = ({children}) => {
  return (
    <div className='max-w-[1920px] px-4 mx-auto'>
      {children}
    </div>
  );
};

export default MainContainer;