
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', textColor = 'text-resto-primary' }) => {
  const fontSize = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  }[size];

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center p-2 rounded-full bg-resto-primary">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 10V3L4 14h7v7l9-11h-7z" 
          />
        </svg>
      </div>
      <span className={`font-bold ${fontSize} ${textColor}`}>RestroHub</span>
    </div>
  );
};

export default Logo;
