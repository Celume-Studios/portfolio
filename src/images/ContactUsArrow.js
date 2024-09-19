import React from 'react';

const ContactUsArrow = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none" {...props}>
    <path d="M18.42 12.3702C18.3724 12.2474 18.301 12.1353 18.21 12.0402L13.21 7.04019C13.1168 6.94695 13.0061 6.87299 12.8842 6.82253C12.7624 6.77207 12.6319 6.74609 12.5 6.74609C12.2337 6.74609 11.9783 6.85188 11.79 7.04019C11.6968 7.13342 11.6228 7.24411 11.5723 7.36594C11.5219 7.48776 11.4959 7.61833 11.4959 7.75019C11.4959 8.01649 11.6017 8.27188 11.79 8.46019L15.09 11.7502H7.5C7.23478 11.7502 6.98043 11.8555 6.79289 12.0431C6.60536 12.2306 6.5 12.485 6.5 12.7502C6.5 13.0154 6.60536 13.2698 6.79289 13.4573C6.98043 13.6448 7.23478 13.7502 7.5 13.7502H15.09L11.79 17.0402C11.6963 17.1331 11.6219 17.2437 11.5711 17.3656C11.5203 17.4875 11.4942 17.6182 11.4942 17.7502C11.4942 17.8822 11.5203 18.0129 11.5711 18.1348C11.6219 18.2566 11.6963 18.3672 11.79 18.4602C11.883 18.5539 11.9936 18.6283 12.1154 18.6791C12.2373 18.7298 12.368 18.756 12.5 18.756C12.632 18.756 12.7627 18.7298 12.8846 18.6791C13.0064 18.6283 13.117 18.5539 13.21 18.4602L18.21 13.4602C18.301 13.3651 18.3724 13.2529 18.42 13.1302C18.52 12.8867 18.52 12.6136 18.42 12.3702Z" fill="#CDCDCD"/>
  </svg>
);

export default ContactUsArrow;