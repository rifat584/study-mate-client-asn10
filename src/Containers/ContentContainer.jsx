import React from 'react';

const ContentContainer = ({children}) => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 border-2 border-amber-500'>
      {children}
    </div>
  );
};

export default ContentContainer;