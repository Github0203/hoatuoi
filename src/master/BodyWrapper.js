import React from 'react';

const BodyWrapper = ({ children }) => {
  return (
    <div className="bodywrapper">
      <main className="main">       
          {children}
      </main>
    </div>
  );
};

export default BodyWrapper;
