"use client"

import React, { useState, useEffect } from 'react';
import { Type, Eye } from 'lucide-react';
import styles from '../main.module.css';
import processStyles from '../components/process.module.css';
import navStyles from '../components/navbar.module.css';

const CustomCursor = ({ 
  color = "#008B64",
  size = {
    dot: 16,
    ring: 32,
  }
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);
  const [clickAnimation, setClickAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Start with true to prevent flash on mobile

  useEffect(() => {
    // Check if we're on mobile/tablet
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024); // Using 1024px as breakpoint
    };

    // Initial check
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);

    // Only add cursor styles if not mobile
    if (!isMobile) {
      // Rest of your existing useEffect code
      const styleSheet = document.createElement("style");
      styleSheet.textContent = `
        * {
          cursor: none !important;
        }
        
        @keyframes pulseRing {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @keyframes clickScale {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(0.9); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `;
      document.head.appendChild(styleSheet);

      const updateCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        const target = e.target;
        
        const hasModuleClass = (element) => {
          const classNames = element.className || '';
          return (
            classNames.includes(styles.workItem) ||
            classNames.includes(styles.serviceName) ||
            classNames.includes(processStyles.processTitle) ||
            classNames.includes(navStyles.link) ||
            classNames.includes(navStyles.menuIcon) ||
            classNames.includes(navStyles.closeIcon) ||
            classNames.includes(navStyles.logo) ||
            element.matches('button, a')
          );
        };

        let currentElement = target;
        let isTargetInteractive = false;
        while (currentElement && !isTargetInteractive) {
          if (hasModuleClass(currentElement)) {
            isTargetInteractive = true;
            break;
          }
          currentElement = currentElement.parentElement;
        }
        
        const isTextArea = target.matches('input[type="text"], input[type="email"], input[type="tel"], input[type="password"], input[type="search"], textarea, [contenteditable="true"]');
        
        setIsTextInput(isTextArea);
        setIsHovering(isTargetInteractive || isTextArea);
      };

      const handleMouseDown = () => {
        setClickAnimation(true);
        setTimeout(() => setClickAnimation(false), 500);
      };

      window.addEventListener('mousemove', updateCursor);
      window.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.head.removeChild(styleSheet);
        window.removeEventListener('mousemove', updateCursor);
        window.removeEventListener('mousedown', handleMouseDown);
      };
    }

    // Cleanup resize listener
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, [isMobile]); // Added isMobile to dependency array

  // Don't render anything on mobile/tablet
  if (isMobile) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {/* Rest of your cursor JSX */}
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {clickAnimation && (
          <div
            style={{
              position: 'absolute',
              width: size.ring,
              height: size.ring,
              left: '50%',
              top: '50%',
              border: `2px solid ${color}`,
              borderRadius: '50%',
              animation: 'pulseRing 0.5s ease-out forwards'
            }}
          />
        )}

        <div
          style={{
            position: 'absolute',
            width: size.dot,
            height: size.dot,
            backgroundColor: color,
            borderRadius: '50%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            animation: clickAnimation ? 'clickScale 0.3s ease-out forwards' : 'none'
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            width: size.ring,
            height: size.ring,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: isHovering ? color : 'transparent',
            border: `2px solid ${color}`,
            borderRadius: '50%',
            transition: 'background-color 0.3s ease',
            animation: clickAnimation ? 'clickScale 0.3s ease-out forwards' : 'none'
          }}
        />

        {isHovering && (
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              opacity: isHovering ? 1 : 0,
              transition: 'opacity 0.3s ease',
              transitionDelay: isHovering ? '0.15s' : '0s',
              animation: clickAnimation ? 'clickScale 0.3s ease-out forwards' : 'none'
            }}
          >
            {isTextInput ? <Type size={16} /> : <Eye size={16} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;