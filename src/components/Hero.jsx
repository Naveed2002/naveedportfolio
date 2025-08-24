import React, { useRef, useEffect, useState, useCallback } from "react";
import BackgroundVideo from "../assets/roatatenew.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.15;
      
      // Handle video loading for mobile
      const handleVideoLoad = () => {
        setVideoLoaded(true);
        // For iOS autoplay policy
        if (isMobile) {
          videoRef.current.play().catch(e => {
            console.log("Autoplay prevented:", e);
            // Add fallback for when autoplay is blocked
            const playButton = document.createElement('button');
            playButton.innerHTML = 'Play Video';
            playButton.style.position = 'absolute';
            playButton.style.bottom = '20px';
            playButton.style.right = '20px';
            playButton.style.zIndex = '20';
            playButton.style.padding = '10px 15px';
            playButton.style.background = 'rgba(255,255,255,0.8)';
            playButton.style.color = '#000';
            playButton.style.border = 'none';
            playButton.style.borderRadius = '5px';
            playButton.style.cursor = 'pointer';
            playButton.onclick = () => {
              videoRef.current.play();
              playButton.remove();
            };
            document.querySelector('.relative').appendChild(playButton);
          });
        }
      };
      
      videoRef.current.addEventListener('loadeddata', handleVideoLoad);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleVideoLoad);
        }
      };
    }
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    // Only use mousemove on non-touch devices
    const handleMouseMove = (e) => !isMobile && setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  const videoOpacity = Math.max(0, 1 - scrollY / 400);
  const parallaxX = isMobile ? 0 : (mousePos.x - window.innerWidth / 2) * 0.01;
  const parallaxY = isMobile ? 0 : (mousePos.y - window.innerHeight / 2) * 0.01;

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center bg-black">
      {/* Background Video - Mobile optimized */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline // Essential for iOS
        loop // Better than onEnded handler for mobile
        className="absolute top-0 left-0 w-full h-full object-cover md:object-cover transition-opacity duration-500"
        src={BackgroundVideo}
        type="video/mp4"
        style={{
          opacity: videoOpacity,
          transform: isMobile ? 'none' : `translateX(${parallaxX}px) translateY(${parallaxY}px)`,
        }}
      />

      {/* Gradient Overlay - Enhanced for mobile */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30 md:bg-gradient-to-r md:from-black/90 md:via-black/60 md:to-black/10 pointer-events-none transition-opacity duration-500"
        style={{ opacity: videoOpacity }}
      />

      {/* Content container with mobile padding */}
      <div className="relative z-10 text-left px-5 sm:px-6 md:px-12 max-w-lg text-white w-full pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-5 text-gray-100 leading-tight">
          Naveed <span className="text-gray-300">Nawaz</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-5 sm:mb-6 text-gray-200 leading-relaxed">
          Full-Stack Developer & UI/UX Designer crafting modern, timeless digital experiences.
        </p>
        
        <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
          <p className="text-gray-300 text-base sm:text-lg flex items-center">
            <span className="mr-2">📍</span> Location: Dehiwala, Sri Lanka
          </p>
          <p className="text-gray-300 text-base sm:text-lg flex items-center">
            <span className="mr-2">✉️</span> Email: nawaznaveed@example.com
          </p>
          <p className="text-gray-300 text-base sm:text-lg flex items-center">
            <span className="mr-2">📞</span> Phone: 074-006 7507
          </p>
        </div>
        
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-300 text-base sm:text-lg w-full sm:w-auto">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;