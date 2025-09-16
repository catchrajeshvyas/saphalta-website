'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle, FileText } from 'lucide-react'

const TrustStrip = () => {
  const trustItems = [
    {
      icon: Shield,
      title: 'SEBI Regulated',
      subtitle: 'AIF Category II',
      description: 'Registered Alternative Investment Fund under SEBI regulations'
    },
    {
      icon: Award,
      title: 'Big 4 Audited',
      subtitle: 'Annual Audits',
      description: 'Financial statements audited by leading audit firms'
    },
    {
      icon: CheckCircle,
      title: 'Compliance First',
      subtitle: 'Full Transparency',
      description: 'Adherence to all regulatory requirements and best practices'
    },
    {
      icon: FileText,
      title: 'Research Driven',
      subtitle: 'Evidence Based',
      description: 'Investment decisions backed by rigorous research and data'
    }
  ]

  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-navy font-playfair mb-4">
            Trusted by India's Leading Families
          </h2>
          <p className="text-gray-600 font-lato max-w-2xl mx-auto">
            Our commitment to regulatory excellence and transparent practices has earned the trust of discerning investors across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-copper/20 rounded-full animate-pulse-copper"></div>
              </div>
              
              <h3 className="text-lg font-semibold text-navy font-playfair mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-copper mb-2">
                {item.subtitle}
              </p>
              <p className="text-sm text-gray-600 font-lato leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-copper rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-copper rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-copper rounded-full"></div>
              <span>Cyber Security Audited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-copper rounded-full"></div>
              <span>Data Privacy Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustStrip
