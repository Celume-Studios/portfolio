import React, { useState, useEffect } from 'react';

const VirtualTour = () => {
  // State to hold the iframe source URL
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    // Detect device and set the appropriate source URL
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Android specific Kuula URL
      setIframeSrc('https://kuula.co/share/collection/7KWkR?logo=1&info=0&logosize=40&fs=1&vr=1&sd=1&thumbs=-1&alpha=0.69');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS specific Kuula URL
      setIframeSrc('https://kuula.co/share/collection/7KWkR?logo=1&info=0&logosize=40&fs=0&vr=1&sd=1&gyro=0&thumbs=-1&alpha=0.69');
    } else {
      // Default URL (or for other devices)
      setIframeSrc('https://kuula.co/share/collection/7KWkR?logo=1&info=0&logosize=40&fs=1&vr=1&sd=1&thumbs=-1&alpha=0.69');
    }
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/* Render the iframe only when the source URL is set */}
      {iframeSrc ? (
        <iframe
          className="ku-embed"
          frameBorder="0"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          scrolling="no"
          src={iframeSrc} // Use the iframeSrc state for the src attribute
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      ) : (
        <p>Loading virtual tour...</p> // Display a loading message until the iframe source is set
      )}
    </div>
  );
};

export default VirtualTour;
