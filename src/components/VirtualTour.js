import React, { useState, useEffect } from "react";

const VirtualTour = ({ iframeSrc: propIframeSrc }) => {
  const [iframeSrc, setIframeSrc] = useState(propIframeSrc || "");

  useEffect(() => {
    if (!propIframeSrc) {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) {
        setIframeSrc(
          "https://kuula.co/share/collection/7KWkR?logo=1&info=0&logosize=40&fs=0&vr=1&sd=1&thumbs=-1&alpha=0.69"
        );
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        setIframeSrc(
          "https://kuula.co/share/collection/7KWkR?logo=1&info=0&logosize=40&fs=0&vr=1&sd=1&gyro=0&thumbs=-1&alpha=0.69"
        );
      } else {
        setIframeSrc(
          "https://kuula.co/share/collection/7KWkR?logo=1&info=0&logosize=40&fs=0&vr=1&sd=1&thumbs=-1&alpha=0.69"
        );
      }
    }
  }, [propIframeSrc]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {iframeSrc ? (
        <iframe
          className="ku-embed"
          frameBorder="0"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          scrolling="no"
          src={iframeSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      ) : (
        <p>Loading virtual tour...</p>
      )}
    </div>
  );
};

export default VirtualTour;
