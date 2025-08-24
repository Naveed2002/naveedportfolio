
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import positiveEnergyImg from '../assets/new1.png';
import PHONE_PROJECT from '../assets/hotel_ui2.mp4';
import bk_project from '../assets/bk_1.mp4'
import wake_me from '../assets/wake_me.mp4'
import blenerpr from '../assets/music_demo.mp4'
import weatherapp from '../assets/weatherapp.mp4'
import otakubay from '../assets/otaku_bay.mp4'
import formula from '../assets/formula_f1.mp4'
import newwakeme from '../assets/newwakeme.mp4'
import burgerui from '../assets/burgerui.mp4'



const projects = [
  { 
    title: "HOTEL BOOKING PROJECT", 
    category: "Photography", 
    year: "2025", 
    video: PHONE_PROJECT
  },
  { 
    title: "WAKE ME APP", 
    category: "UI", 
    year: "2023", 
    video: wake_me
  },
  { 
    title: "BABY GOODS SHOP", 
    category: "Distortion Collection", 
    year: "2025", 
    video: bk_project 
  },
  { 
    title: "LISTEN ME ", 
    category: "App Dev", 
    year: "2023", 
    video: blenerpr 
  },
  { 
    title: "WEATHER APP DEMO", 
    category: "Lifestyle", 
    year: "2024", 
    video: weatherapp 
  },
  {
  title: "ANIME STORE", 
    category: "Story", 
    year: "2023", 
    video: otakubay 
},
{
 title: "FORMULA F1 DEMO", 
    category: "Hobbies", 
    year: "2025", 
    video: formula  
},
{
title: "WAKE ME APP ", 
    category: "Map", 
    year: "2025", 
    video: newwakeme  
},
{
title: "RESTURANT WEB APP ", 
    category: "Map", 
    year: "2025", 
    video: burgerui  
}

];

const Projects = () => {
  useEffect(() => {
    const removeSplineLogo = () => {
      const iframe = document.querySelector('iframe[src*="spline.design"]');
      if (iframe) {
        iframe.addEventListener('load', () => {
          try {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            const splineViewer = iframeDocument.querySelector('spline-viewer');
            if (splineViewer) {
              const shadowRoot = splineViewer.shadowRoot;
              if (shadowRoot) {
                const logo = shadowRoot.querySelector('#logo');
                if (logo) logo.remove();
              }
            }
          } catch (e) {
            console.log("Couldn't access iframe due to CORS policy");
          }
        });
      }
    };

    removeSplineLogo();

    const observer = new MutationObserver(() => removeSplineLogo());
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const handleVideoPlay = (video) => {
    if (!video) return;
    if (video.paused) {
      video.play().catch((err) => {
        // Ignore the interrupted error
        if (err.name !== "NotAllowedError") console.log(err);
      });
    }
  };

  const handleVideoPause = (video) => {
    if (!video) return;
    if (!video.paused) {
      video.pause();
    }
  };

  return (
    <div className="bg-black min-h-screen p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-16 md:mb-24">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Media Section */}
              <div className="w-full h-[300px] md:h-[400px] border border-gray-600 rounded-t-xl overflow-hidden">
                {project.iframe ? (
                  <iframe
                    src={project.iframe}
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="rounded-t-xl"
                    allow="autoplay"
                    loading="lazy"
                  ></iframe>
                ) : project.video ? (
                  <motion.video
  src={project.video}
  className="w-full h-full object-cover"
  muted
  loop
  playsInline
  initial={{ scale: 1 }}
  whileHover={{ scale: 1.05 }} // Zoom a little on hover
  onMouseEnter={(e) => handleVideoPlay(e.currentTarget)}
  onMouseLeave={(e) => handleVideoPause(e.currentTarget)}
/>

                ) : (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                  />
                )}
              </div>

              {/* Details Section */}
              <div className="p-4 border-t border-gray-600 bg-black-900 rounded-b-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                <p className="text-gray-400">{project.category}</p>
                <div className="mt-2 inline-block bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
