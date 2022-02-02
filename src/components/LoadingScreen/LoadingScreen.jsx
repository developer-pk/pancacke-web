import React from 'react';

import './LoadingScreen.scss';

const LoadingScreen = () => {
  return (
    <div className="background-loading">
      <div className="background-loading__spinner">
        <div
          class="spinner-border text-warning"
          role="status"
          style={{ width: '3rem', height: '3rem' }}
        >
          {/* <span class="sr-only">Loading...</span> */}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
