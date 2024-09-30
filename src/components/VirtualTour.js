import React, { useState } from 'react';

const VirtualTour = () => {
  
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
       (
        <iframe
          className="ku-embed"
          frameBorder="0"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          scrolling="no"
          src="https://kuula.co/share/collection/7KWkR?logo=1&info=0&logosize=40&fs=1&vr=1&sd=1&thumbs=-1&alpha=0.69"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      )
    </div>
  );
};

export default VirtualTour;
