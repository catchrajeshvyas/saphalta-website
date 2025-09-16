'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, GraduationCap, Award, Users, Clock, CheckCircle, ArrowRight, Lock, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const Academy = () => {
  const [activeLevel, setActiveLevel] = useState('foundation')

  const levels = {
    foundation: {
      title: 'Foundation Level',
      subtitle: 'Building Investment Fundamentals',
      description: 'Master the core concepts of systematic investing and factor-based strategies.',
      duration: '4-6 weeks',
      moduleCount: 8,
      difficulty: 'Beginner',
      color: 'from-green-500 to-green-600',
      icon: BookOpen,
      modules: [
        {
          title: 'Introduction to Systematic Investing',
          duration: '45 min',
          description: 'Understanding the philosophy and benefits of systematic approaches',
          isPremium: false
        },
        {
          title: 'Market Efficiency and Factor Investing',
          duration: '60 min',
          description: 'Exploring market inefficiencies and persistent factors',
          isPremium: false
        },
        {
          title: 'Risk Management Fundamentals',
          duration: '50 min',
          description: 'Core risk management principles and practices',
          isPremium: true
        },
        {
          title: 'Portfolio Construction Basics',
          duration: '55 min',
          description: 'Building diversified portfolios using systematic methods',
          isPremium: true
        },
        {
          title: 'Performance Measurement',
          duration: '40 min',
          description: 'Understanding returns, risk metrics, and benchmarking',
          isPremium: false
        },
        {
          title: 'Cost Analysis and Optimization',
          duration: '35 min',
          description: 'Minimizing costs while maximizing returns',
          isPremium: true
        },
        {
          title: 'Behavioral Finance Insights',
          duration: '45 min',
          description: 'How psychology affects investment decisions',
          isPremium: false
        },
        {
          title: 'Case Study: Family Office Success',
          duration: '50 min',
          description: 'Real-world application of systematic investing',
          isPremium: true
        }
      ]
    },
    advanced: {
      title: 'Advanced Level',
      subtitle: 'Deep Dive into Factor Strategies',
      description: 'Advanced techniques for sophisticated investors and portfolio managers.',
      duration: '6-8 weeks',
      moduleCount: 10,
      difficulty: 'Intermediate',
      color: 'from-blue-500 to-blue-600',
      icon: GraduationCap,
      modules: [
        {
          title: 'Multi-Factor Model Development',
          duration: '75 min',
          description: 'Building and testing multi-factor investment models',
          isPremium: true
        },
        {
          title: 'Alternative Risk Premia',
          duration: '65 min',
          description: 'Exploring alternative risk factors and strategies',
          isPremium: true
        },
        {
          title: 'ESG Integration in Systematic Investing',
          duration: '60 min',
          description: 'Incorporating environmental, social, and governance factors',
          isPremium: true
        },
        {
          title: 'Dynamic Asset Allocation',
          duration: '70 min',
          description: 'Time-varying allocation strategies and market timing',
          isPremium: true
        },
        {
          title: 'Liquidity Management',
          duration: '55 min',
          description: 'Managing liquidity constraints in systematic strategies',
          isPremium: true
        },
        {
          title: 'Tax Optimization Strategies',
          duration: '50 min',
          description: 'Tax-efficient implementation of systematic strategies',
          isPremium: true
        },
        {
          title: 'Risk Parity and Alternative Weighting',
          duration: '65 min',
          description: 'Beyond market-cap weighting approaches',
          isPremium: true
        },
        {
          title: 'Machine Learning in Investment',
          duration: '80 min',
          description: 'Introduction to ML techniques in systematic investing',
          isPremium: true
        },
        {
          title: 'Regulatory Compliance',
          duration: '45 min',
          description: 'Understanding regulatory requirements and best practices',
          isPremium: false
        },
        {
          title: 'Client Communication and Reporting',
          duration: '40 min',
          description: 'Effective communication with sophisticated clients',
          isPremium: false
        }
      ]
    },
    expert: {
      title: 'Expert Level',
      subtitle: 'Mastery and Innovation',
      description: 'Cutting-edge strategies for institutional investors and thought leaders.',
      duration: '8-10 weeks',
      moduleCount: 12,
      difficulty: 'Advanced',
      color: 'from-purple-500 to-purple-600',
      icon: Award,
      modules: [
        {
          title: 'Advanced Quantitative Methods',
          duration: '90 min',
          description: 'Sophisticated mathematical and statistical techniques',
          isPremium: true
        },
        {
          title: 'Alternative Data Sources',
          duration: '85 min',
          description: 'Leveraging non-traditional data for investment insights',
          isPremium: true
        },
        {
          title: 'Cross-Asset Factor Investing',
          duration: '80 min',
          description: 'Factor strategies across multiple asset classes',
          isPremium: true
        },
        {
          title: 'Derivatives in Systematic Strategies',
          duration: '75 min',
          description: 'Using derivatives for enhanced returns and risk management',
          isPremium: true
        },
        {
          title: 'Private Markets Integration',
          duration: '70 min',
          description: 'Incorporating private equity and real estate factors',
          isPremium: true
        },
        {
          title: 'Crisis Management and Stress Testing',
          duration: '65 min',
          description: 'Preparing portfolios for extreme market conditions',
          isPremium: true
        },
        {
          title: 'Technology Infrastructure',
          duration: '60 min',
          description: 'Building robust technology systems for systematic investing',
          isPremium: true
        },
        {
          title: 'Research and Development',
          duration: '55 min',
          description: 'Conducting original research in systematic investing',
          isPremium: true
        },
        {
          title: 'Team Leadership and Management',
          duration: '50 min',
          description: 'Leading investment teams and managing talent',
          isPremium: true
        },
        {
          title: 'Innovation and Future Trends',
          duration: '45 min',
          description: 'Emerging trends and future of systematic investing',
          isPremium: true
        },
        {
          title: 'Capstone Project',
          duration: '120 min',
          description: 'Comprehensive project applying all learned concepts',
          isPremium: true
        },
        {
          title: 'Certification Exam',
          duration: '180 min',
          description: 'Final assessment for expert certification',
          isPremium: true
        }
      ]
    }
  }

  const currentLevel = levels[activeLevel as keyof typeof levels]

  return (
    <main className="min-h-screen bg-lightGrey">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-charcoal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Investment Academy
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Master systematic investing through our comprehensive, tiered learning program. 
              From fundamentals to expert-level strategies, advance your knowledge at your own pace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Levels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Three progressive levels designed for different experience levels and learning objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {Object.entries(levels).map(([key, level]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: Object.keys(levels).indexOf(key) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`h-full cursor-pointer transition-all duration-300 ${
                    activeLevel === key ? 'shadow-premium border-copper' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setActiveLevel(key)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <level.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy font-playfair">
                      {level.title}
                    </CardTitle>
                    <CardDescription className="text-copper font-semibold">
                      {level.subtitle}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 font-lato text-sm leading-relaxed">
                      {level.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-navy font-roboto-mono">{level.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-copper font-roboto-mono">{level.moduleCount}</div>
                        <div className="text-xs text-gray-600">Modules</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="px-3 py-1 bg-lightGrey text-gray-700 text-sm rounded-full font-medium">
                        {level.difficulty}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Level Details */}
      <section className="py-20 bg-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy font-playfair mb-4">
                {currentLevel.title}
              </h2>
              <p className="text-xl text-gray-600 font-lato max-w-2xl mx-auto">
                {currentLevel.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Modules List */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy font-playfair mb-6">
                  Course Modules
                </h3>
                {currentLevel.modules.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {index + 1}
                              </div>
                              <h4 className="font-semibold text-navy">{module.title}</h4>
                              {module.isPremium && (
                                <Lock className="w-4 h-4 text-copper" />
                              )}
                            </div>
                            <p className="text-gray-600 text-sm font-lato mb-3">
                              {module.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {module.duration}
                              </div>
                              {module.isPremium && (
                                <span className="text-copper font-medium">Premium</span>
                              )}
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="ml-4"
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Start
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Course Info */}
              <div className="space-y-6">
                <Card className="shadow-premium border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-navy font-playfair">
                      Course Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-lightGrey rounded-lg">
                      <span className="font-medium text-gray-700">Duration</span>
                      <span className="font-bold text-copper font-roboto-mono">{currentLevel.duration}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-lightGrey rounded-lg">
                      <span className="font-medium text-gray-700">Modules</span>
                      <span className="font-bold text-copper font-roboto-mono">{currentLevel.moduleCount}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-lightGrey rounded-lg">
                      <span className="font-medium text-gray-700">Difficulty</span>
                      <span className="font-bold text-copper font-roboto-mono">{currentLevel.difficulty}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-lightGrey rounded-lg">
                      <span className="font-medium text-gray-700">Format</span>
                      <span className="font-bold text-copper font-roboto-mono">Self-Paced</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-premium border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-navy font-playfair">
                      What You'll Learn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                        <span className="text-gray-700 font-lato">Master systematic investing principles</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                        <span className="text-gray-700 font-lato">Understand factor-based strategies</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                        <span className="text-gray-700 font-lato">Learn risk management techniques</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                        <span className="text-gray-700 font-lato">Apply knowledge through case studies</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                        <span className="text-gray-700 font-lato">Get certified upon completion</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button variant="premium" size="lg" className="w-full group">
                  Enroll in {currentLevel.title}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
              Expert Instructors
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Learn from industry veterans with decades of experience in systematic investing and portfolio management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-copper rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-copper font-medium mb-3">Chief Investment Officer</p>
              <p className="text-gray-600 text-sm font-lato">
                20+ years in systematic investing, former BlackRock portfolio manager, PhD in Finance from Wharton.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-navy to-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Priya Sharma</h3>
              <p className="text-copper font-medium mb-3">Head of Research</p>
              <p className="text-gray-600 text-sm font-lato">
                CFA Charterholder, former Dimensional Fund Advisors researcher, expert in factor investing and ESG integration.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Amit Patel</h3>
              <p className="text-copper font-medium mb-3">Senior Portfolio Manager</p>
              <p className="text-gray-600 text-sm font-lato">
                Former Goldman Sachs quantitative strategist, expert in risk management and alternative strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Master Systematic Investing?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Join hundreds of sophisticated investors who have transformed their approach through our comprehensive academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Start Your Learning Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Download Course Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Academy
