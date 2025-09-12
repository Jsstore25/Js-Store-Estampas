import React from 'react';

export const JsStoreLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 160 155" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-label="JS Store Logo"
      role="img"
    >
      <style>
        {`
          .logo-js { 
            font-family: 'Times New Roman', Times, serif; 
            font-weight: normal; 
            font-size: 100px; 
            fill: #ffde59; 
          }
          .logo-store { 
            font-family: 'Montserrat', sans-serif; 
            font-weight: 500; 
            font-size: 32px; 
            fill: #ffde59;
            letter-spacing: 0.15em;
            text-anchor: middle;
          }
          .logo-strike {
            stroke: #ffde59;
            stroke-width: 8;
            stroke-linecap: round;
          }
        `}
      </style>
        <g>
            {/* J and S letters */}
            <text x="10" y="95" className="logo-js">J</text>
            <text x="60" y="95" className="logo-js">S</text>
            
            {/* STORE text */}
            <text x="80" y="130" className="logo-store">STORE</text>

            {/* Strike-through line */}
            <line x1="10" y1="110" x2="145" y2="20" className="logo-strike" />
        </g>
    </svg>
  );
};
