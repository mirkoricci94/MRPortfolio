"use client";

import React, { useEffect, useRef, useState } from 'react';

export function Rocket() {
  const rocketRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !rocketRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!rocketRef.current) return;
      
      const rect = rocketRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Calculate rotation angles with much larger range (60 degrees)
      const rotateY = (deltaX / window.innerWidth) * 60;
      const rotateX = -(deltaY / window.innerHeight) * 60;
      
      // Directly manipulate DOM for better performance
     // rocketRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMounted]);

  return (
    <div className="cartoon-rocket-container">
      <div 
        ref={rocketRef}
        className="cartoon-rocket-wrapper"
        style={{
          transition: 'transform 0.2s ease-out',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Main Rocket */}
        <div className="cartoon-rocket">
          {/* Pointed Nose Cone */}
          <div className="rocket-nose-pointed">
            <div className="nose-highlight"></div>
          </div>
          
          {/* Main Body */}
          <div className="rocket-body-cartoon">
            {/* Window */}
            <div className="rocket-window-cartoon">
              <div className="window-glass"></div>
              <div className="window-highlight-cartoon"></div>
            </div>
            
            {/* Body Stripes */}
            <div className="body-band band-1"></div>
            <div className="body-band band-2"></div>
            
            {/* Side Details */}
            <div className="body-detail detail-left"></div>
            <div className="body-detail detail-right"></div>
          </div>
          
          {/* Fins - Rounded */}
          <div className="cartoon-fin fin-left-cartoon">
            <div className="fin-shine"></div>
          </div>
          <div className="cartoon-fin fin-right-cartoon">
            <div className="fin-shine"></div>
          </div>
          
          {/* Engine Base */}
          <div className="rocket-engine-cartoon">
            <div className="engine-rim"></div>
            <div className="engine-core-cartoon"></div>
          </div>
          
          {/* Realistic Flames */}
          <div className="realistic-flames">
            <div className="flame-layer flame-base"></div>
            <div className="flame-layer flame-mid"></div>
            <div className="flame-layer flame-tip"></div>
            <div className="flame-core"></div>
          </div>
        </div>
        
        {/* Sparkles */}
        <div className="sparkles-container">
          <div className="sparkle sp-1">✨</div>
          <div className="sparkle sp-2">✨</div>
          <div className="sparkle sp-3">⭐</div>
          <div className="sparkle sp-4">✨</div>
          <div className="sparkle sp-5">⭐</div>
        </div>
        
        {/* Smoke Puffs */}
        <div className="smoke-puffs">
          <div className="smoke-puff puff-1"></div>
          <div className="smoke-puff puff-2"></div>
          <div className="smoke-puff puff-3"></div>
        </div>
        
        {/* Glow */}
        <div className="cartoon-glow"></div>
      </div>
    </div>
  );
}
