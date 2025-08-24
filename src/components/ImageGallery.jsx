import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import otaku from "../assets/otaku.png";
import logipage from "../assets/login.png";
import ph1 from "../assets/weather.png";
import bknew from "../assets/bknew.png";
import hotel_img from "../assets/hotel_img.png";
import wakeme from "../assets/wakeme.png";

const images = [
  { 
    src: otaku, 
    height: 200, 
    title: "Otaku Hub",
    description: "Anime discovery platform",
    category: "web"
  },
  { 
    src: logipage, 
    height: 250, 
    title: "Auth System",
    description: "Modern authentication interface",
    category: "ui"
  },
  { 
    src: ph1, 
    height: 180, 
    title: "Weather App",
    description: "Real-time weather forecasts",
    category: "mobile"
  },
  { 
    src: bknew, 
    height: 300, 
    title: "Banking App",
    description: "Financial management solution",
    category: "web"
  },
  { 
    src: hotel_img, 
    height: 220, 
    title: "Hotel Booking",
    description: "Luxury accommodation finder",
    category: "web"
  },
  { 
    src: logipage, 
    height: 260, 
    title: "Dashboard",
    description: "Analytics overview panel",
    category: "ui"
  },
  { 
    src: otaku, 
    height: 210, 
    title: "Anime Community",
    description: "Fan engagement platform",
    category: "web"
  },
  { 
    src: wakeme, 
    height: 240, 
    title: "WakeMe App",
    description: "Smart alarm application",
    category: "mobile"
  },
  { 
    src: hotel_img, 
    height: 190, 
    title: "Travel Planner",
    description: "Vacation itinerary builder",
    category: "mobile"
  },
  { 
    src: otaku, 
    height: 280, 
    title: "Streaming Service",
    description: "Media content platform",
    category: "web"
  },
];

const MasonryGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ui", label: "UI/UX Design" }
  ];

  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section className="bg-black text-white py-20 px-4 flex flex-col items-center">
      <motion.h2 
        className="text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project Portfolio
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 mb-12 max-w-2xl text-center text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        A collection of my work showcasing design and development projects
      </motion.p>

      {/* Filter buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter.id 
                ? 'bg-white text-black' 
                : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 w-full max-w-7xl">
        <AnimatePresence>
          {filteredImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="mb-6 relative group cursor-pointer overflow-hidden rounded-lg"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImage(img)}
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={img.src}
                  alt={`Project ${idx + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ height: `${img.height}px` }}
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-lg mb-1">{img.title}</h3>
                <p className="text-gray-300 text-sm">{img.description}</p>
                <div className="h-px bg-gray-700 my-3 w-10"></div>
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {img.category === 'web' && 'Web Development'}
                  {img.category === 'mobile' && 'Mobile Application'}
                  {img.category === 'ui' && 'UI/UX Design'}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal for image preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-4xl max-h-full bg-gray-900 rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage.src} 
                alt="Enlarged preview" 
                className="w-full max-h-[60vh] object-contain"
              />
              <div className="p-6 border-t border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">
                    {selectedImage.category === 'web' && 'Web Development'}
                    {selectedImage.category === 'mobile' && 'Mobile Application'}
                    {selectedImage.category === 'ui' && 'UI/UX Design'}
                  </span>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      View Project
                    </button>
                    <button className="px-4 py-2 border border-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="text-center mt-16 pt-8 border-t border-gray-800 w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-gray-400 mb-4">
          Interested in working together or want to see more?
        </p>
        <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
          Get In Touch
        </button>
      </motion.div>
    </section>
  );
};

export default MasonryGallery;