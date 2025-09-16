'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, PlayCircle, CheckCircle, Clock, Users, Star, ArrowRight, Award, Target, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'

const FoundationLevel = () => {
  const [selectedModule, setSelectedModule] = useState(0)

  const modules = [
    {
      id: 1,
      title: 'Introduction to Systematic Investing',
      duration: '45 min',
      lessons: 8,
      description: 'Learn the fundamentals of systematic investing and why it outperforms traditional approaches.',
      topics: [
        'What is systematic investing?',
        'Benefits over traditional investing',
        'Key principles and philosophy',
        'Historical performance evidence'
      ],
      completed: true,
      premium: false
    },
    {
      id: 2,
      title: 'Understanding Investment Factors',
      duration: '60 min',
      lessons: 10,
      description: 'Deep dive into the core factors that drive investment returns: value, momentum, quality, and low volatility.',
      topics: [
        'Value factor explained',
        'Momentum strategies',
        'Quality metrics',
        'Low volatility benefits',
        'Factor interactions'
      ],
      completed: true,
      premium: false
    },
    {
      id: 3,
      title: 'Risk Management Fundamentals',
      duration: '50 min',
      lessons: 9,
      description: 'Essential risk management concepts and how to protect your portfolio from major drawdowns.',
      topics: [
        'Types of investment risk',
        'Risk measurement tools',
        'Diversification strategies',
        'Position sizing',
        'Stop-loss mechanisms'
      ],
      completed: false,
      premium: false
    },
    {
      id: 4,
      title: 'Portfolio Construction Basics',
      duration: '55 min',
      lessons: 11,
      description: 'Learn how to build a well-diversified portfolio using systematic approaches.',
      topics: [
        'Asset allocation principles',
        'Rebalancing strategies',
        'Correlation analysis',
        'Portfolio optimization',
        'Tax considerations'
      ],
      completed: false,
      premium: false
    },
    {
      id: 5,
      title: 'Market Efficiency and Anomalies',
      duration: '40 min',
      lessons: 7,
      description: 'Understand market efficiency theory and the persistent anomalies that systematic strategies exploit.',
      topics: [
        'Efficient market hypothesis',
        'Market anomalies',
        'Behavioral biases',
        'Information processing',
        'Arbitrage opportunities'
      ],
      completed: false,
      premium: false
    },
    {
      id: 6,
      title: 'Performance Measurement',
      duration: '35 min',
      lessons: 6,
      description: 'Learn how to properly measure and evaluate investment performance.',
      topics: [
        'Return calculations',
        'Risk-adjusted metrics',
        'Benchmark comparison',
        'Attribution analysis',
        'Performance reporting'
      ],
      completed: false,
      premium: false
    },
    {
      id: 7,
      title: 'Costs and Fees Impact',
      duration: '30 min',
      lessons: 5,
      description: 'Understand how costs and fees impact long-term investment returns.',
      topics: [
        'Fee structures',
        'Cost analysis',
        'Impact on returns',
        'Fee optimization',
        'Value for money'
      ],
      completed: false,
      premium: false
    },
    {
      id: 8,
      title: 'Foundation Level Assessment',
      duration: '60 min',
      lessons: 1,
      description: 'Comprehensive assessment to test your understanding of foundation level concepts.',
      topics: [
        'Multiple choice questions',
        'Case study analysis',
        'Practical applications',
        'Certification exam'
      ],
      completed: false,
      premium: false
    }
  ]

  const currentModule = modules[selectedModule]

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
              Foundation Level
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Master the core concepts of systematic investing and factor-based strategies. 
              Build a solid foundation for advanced investment management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
                Course Overview
              </h2>
              <div className="space-y-4 text-gray-600 font-lato leading-relaxed">
                <p>
                  The Foundation Level provides comprehensive training in systematic investing fundamentals. 
                  You'll learn the core principles, factor-based strategies, and risk management techniques 
                  that form the basis of superior investment outcomes.
                </p>
                <p>
                  This level is designed for investors, advisors, and professionals who want to understand 
                  the systematic approach to investing and how it can improve portfolio performance.
                </p>
                <p>
                  Upon completion, you'll have a solid understanding of systematic investing principles 
                  and be ready to advance to more sophisticated strategies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy font-playfair">
                    Course Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">Duration: 4-6 weeks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">8 Modules</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PlayCircle className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">57 Lessons</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">Self-paced</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">Certificate included</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">
                        ₹25,000
                      </div>
                      <p className="text-gray-600 font-lato">One-time payment</p>
                    </div>
                    
                    <Button variant="premium" size="lg" className="w-full group">
                      Enroll Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-12 bg-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
              Course Modules
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Comprehensive modules covering all aspects of systematic investing fundamentals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Module List */}
            <div className="space-y-4">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 border-0 ${
                      selectedModule === index 
                        ? 'shadow-premium bg-white ring-2 ring-copper' 
                        : 'hover:shadow-premium bg-white'
                    }`}
                    onClick={() => setSelectedModule(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-copper rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {module.id}
                            </div>
                            <h3 className="text-lg font-bold text-navy font-playfair">
                              {module.title}
                            </h3>
                            {module.completed && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                          
                          <p className="text-gray-600 font-lato mb-3">
                            {module.description}
                          </p>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{module.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <PlayCircle className="w-4 h-4" />
                              <span>{module.lessons} lessons</span>
                            </div>
                            {module.premium && (
                              <div className="px-2 py-1 bg-gradient-copper text-white text-xs font-bold rounded">
                                Premium
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Module Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="sticky top-8 shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy font-playfair">
                    {currentModule.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    {currentModule.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{currentModule.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <PlayCircle className="w-4 h-4" />
                        <span>{currentModule.lessons} lessons</span>
                      </div>
                      {currentModule.completed && (
                        <div className="flex items-center gap-1 text-green-500">
                          <CheckCircle className="w-4 h-4" />
                          <span>Completed</span>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Topics Covered:</h4>
                      <ul className="space-y-2">
                        {currentModule.topics.map((topic, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-copper flex-shrink-0" />
                            <span className="text-gray-600 font-lato">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <Button 
                        variant="premium" 
                        size="lg" 
                        className="w-full group"
                        disabled={!currentModule.completed}
                      >
                        {currentModule.completed ? 'Continue Learning' : 'Start Module'}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Key learning outcomes from the Foundation Level course.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Lightbulb className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Systematic Principles</h3>
              <p className="text-sm text-gray-600 font-lato">
                Understand the core principles of systematic investing and why they work
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Factor Analysis</h3>
              <p className="text-sm text-gray-600 font-lato">
                Master the key factors that drive investment returns and how to use them
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Risk Management</h3>
              <p className="text-sm text-gray-600 font-lato">
                Learn essential risk management techniques to protect your portfolio
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
              Ready to Start Your Systematic Investing Journey?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Join thousands of investors who have mastered systematic investing through our comprehensive Foundation Level course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Enroll in Foundation Level
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                View Course Preview
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default FoundationLevel
