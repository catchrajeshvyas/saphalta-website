'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, TrendingUp, Globe } from 'lucide-react'
import CompoundingIcon from './compounding-icon'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-lightGrey to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #B87333 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #0B1D3A 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-playfair leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Systematic, Evidence-Driven Investing for{' '}
                <span className="text-gradient">Families Who Value Legacy</span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 font-lato leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                SEBI-regulated AIF delivering superior systematic investing outcomes for HNIs, UHNI, and family offices through evidence-based factor-driven strategies.
              </motion.p>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-copper" />
                <span className="font-medium">SEBI-Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-copper" />
                <span className="font-medium">Factor-Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-copper" />
                <span className="font-medium">Globally Benchmarked</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                variant="premium" 
                size="xl"
                className="group"
              >
                Request Confidential Investment Note
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-copper text-copper hover:bg-copper hover:text-white"
              >
                Explore Our Philosophy
              </Button>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-navy font-roboto-mono">₹500Cr+</div>
                <div className="text-sm text-gray-600">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-copper font-roboto-mono">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy font-roboto-mono">200+</div>
                <div className="text-sm text-gray-600">Client Families</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <CompoundingIcon size={400} />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <TrendingUp className="w-8 h-8 text-copper" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Shield className="w-6 h-6 text-navy" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-copper rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-copper rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
