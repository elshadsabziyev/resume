import React from 'react';

interface BackgroundPatternProps {
  className: string;
  children: React.ReactNode;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ className, children }) => {
  const patternId = `pattern-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`relative ${className}`}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="40" height="40">
            <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.2)" />
            <path d="M0 20H40M20 0V40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPattern;