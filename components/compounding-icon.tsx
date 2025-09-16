'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CompoundingIcon = ({ size = 200 }: { size?: number }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Base Circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lightGrey to-gray-200"></div>
        
        {/* Growth Rings */}
        {[0, 1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0 rounded-full border-2 border-copper"
            style={{
              width: `${100 - ring * 15}%`,
              height: `${100 - ring * 15}%`,
              top: `${ring * 7.5}%`,
              left: `${ring * 7.5}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isVisible ? 1 : 0, 
              opacity: isVisible ? 0.8 - ring * 0.15 : 0 
            }}
            transition={{ 
              duration: 0.6, 
              delay: ring * 0.2,
              ease: "easeOut" 
            }}
          />
        ))}
        
        {/* Central Growth Symbol */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: isVisible ? 1 : 0, 
            rotate: isVisible ? 0 : -180 
          }}
          transition={{ 
            duration: 1, 
            delay: 0.4,
            ease: "easeOut" 
          }}
        >
          <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center shadow-copper">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
        </motion.div>
        
        {/* Floating Data Points */}
        {[
          { angle: 45, delay: 0.8 },
          { angle: 135, delay: 1.0 },
          { angle: 225, delay: 1.2 },
          { angle: 315, delay: 1.4 },
        ].map((point, index) => {
          const radius = size * 0.35
          const x = Math.cos((point.angle * Math.PI) / 180) * radius + size / 2
          const y = Math.sin((point.angle * Math.PI) / 180) * radius + size / 2
          
          return (
            <motion.div
              key={index}
              className="absolute w-3 h-3 bg-copper rounded-full shadow-copper"
              style={{ left: x - 6, top: y - 6 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isVisible ? 1 : 0, 
                opacity: isVisible ? 1 : 0 
              }}
              transition={{ 
                duration: 0.4, 
                delay: point.delay,
                ease: "easeOut" 
              }}
            />
          )
        })}
        
        {/* Pulsing Effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-copper"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  )
}

export default CompoundingIcon
