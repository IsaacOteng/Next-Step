import React, { useState, useEffect } from 'react';
import Industryimages from './Industryimages.json';

const Industry = () => {    

  // ----------------------
  // 1. State for animation
  // ----------------------
    const [currentIndex, setCurrentIndex] = useState(0);     // Which logo "slot" is showing
    const [transitioning, setTransitioning] = useState(true); // Controls whether we animate or instantly jump

  // ----------------------
  // 2. Step size (in px)
  // ----------------------
    const logoWidth = 80; // matches your w-20 Tailwind sizing (~5rem = 80px, adjust as needed)
    const gap = 26;       // gap-x-26 in px (adjust if Tailwind spacing differs)
    const step = logoWidth + gap; // one movement distance

  // ----------------------
  // 3. Movement logic
  // ----------------------
    useEffect(() => {
    let timer;

    const moveNext = () => {
        setCurrentIndex(prev => {
        // If we reached halfway (duplicate set start), reset without animation
        if (prev >= Industryimages.length) {
            setTransitioning(false); // turn off animation // Jump to start instantly
            setTimeout(() => {
            setCurrentIndex(0);
            // Re-enable animation after the DOM update
            setTimeout(() => setTransitioning(true), 20);
            }, 20);
            
            return prev; // exit early to avoid extra increment
        }

        // Otherwise, move one step forward
        setTransitioning(true);
        return prev + 1;
        });
    };

    const schedule = () => {
    timer = setTimeout(() => {
        moveNext();
        schedule(); // keep looping
      }, 2000); // <-- pause duration between moves (2s)
    };

    schedule();

    return () => clearTimeout(timer);
    }, []);

  // ----------------------
  // 4. Render
  // ----------------------
    return (
    <div className="industries flex flex-row h-30 w-full mb-30 bg-gray-300 overflow-hidden">
      {/* Left static section */}
    <div className="flex-shrink-0 flex items-center justify-center px-4">
        <img
            src="/src/assets/audience_image.png"
            alt=""
            className="w-20 h-15"
        />
    </div>

    {/* Right sliding section */}
    <div className="overflow-hidden flex-1">
        <div
            className="flex gap-x-26"
            style={{
            transform: `translateX(-${currentIndex * step}px)`, // shift logos left
            transition: transitioning ? 'transform 0.5s ease-in-out' : 'none' // animate only when transitioning
        }}
        >
          {/* Duplicate logos for infinite loop */}
        {[...Industryimages, ...Industryimages].map((src, index) => (
            <img
                key={index}
                src={src}
                alt=""
                className="w-20 h-15 flex-shrink-0"
            />
            ))}
        </div>
        </div>
    </div>
    );
};

export default Industry;
