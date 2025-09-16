'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, PlayCircle, CheckCircle, Clock, Users, Star, ArrowRight, Award, Target, Lightbulb, TrendingUp, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const AdvancedLevel = () => {
  const modules = [
    {
      id: 1,
      title: 'Advanced Factor Strategies',
      duration: '75 min',
      lessons: 12,
      description: 'Deep dive into sophisticated factor combinations and multi-factor models.',
      topics: ['Factor interaction effects', 'Multi-factor models', 'Factor timing strategies', 'Risk-adjusted factor allocation'],
      completed: false,
      premium: true
    },
    {
      id: 2,
      title: 'Portfolio Optimization Techniques',
      duration: '90 min',
      lessons: 15,
      description: 'Advanced portfolio construction using modern optimization methods.',
      topics: ['Mean-variance optimization', 'Black-Litterman model', 'Risk parity', 'Alternative risk measures'],
      completed: false,
      premium: true
    },
    {
      id: 3,
      title: 'Alternative Risk Premia',
      duration: '80 min',
      lessons: 13,
      description: 'Explore alternative risk factors and market-neutral strategies.',
      topics: ['Carry strategies', 'Momentum across assets', 'Volatility strategies', 'Cross-asset arbitrage'],
      completed: false,
      premium: true
    },
    {
      id: 4,
      title: 'ESG Integration in Systematic Strategies',
      duration: '65 min',
      lessons: 10,
      description: 'Integrate environmental, social, and governance factors into systematic approaches.',
      topics: ['ESG factor construction', 'Impact measurement', 'ESG risk assessment', 'Sustainable alpha generation'],
      completed: false,
      premium: true
    },
    {
      id: 5,
      title: 'Advanced Risk Management',
      duration: '70 min',
      lessons: 11,
      description: 'Sophisticated risk management techniques for institutional portfolios.',
      topics: ['Tail risk management', 'Stress testing', 'Scenario analysis', 'Dynamic hedging'],
      completed: false,
      premium: true
    },
    {
      id: 6,
      title: 'Advanced Level Assessment',
      duration: '90 min',
      lessons: 1,
      description: 'Comprehensive assessment covering all advanced level concepts.',
      topics: ['Complex case studies', 'Portfolio construction exercise', 'Risk analysis project', 'Certification exam'],
      completed: false,
      premium: true
    }
  ]

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
              Advanced Level
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Master sophisticated systematic investing strategies and advanced portfolio management techniques. 
              Designed for experienced investors and professionals.
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
                Advanced Course Overview
              </h2>
              <div className="space-y-4 text-gray-600 font-lato leading-relaxed">
                <p>
                  The Advanced Level builds upon foundation knowledge to explore sophisticated systematic investing strategies. 
                  You'll learn advanced factor models, portfolio optimization techniques, and institutional-grade risk management.
                </p>
                <p>
                  This level is designed for experienced investors, portfolio managers, and financial professionals who want 
                  to implement advanced systematic strategies in their practice.
                </p>
                <p>
                  Prerequisites: Completion of Foundation Level or equivalent knowledge of systematic investing fundamentals.
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
                      <span className="text-gray-700 font-lato">Duration: 6-8 weeks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">6 Modules</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PlayCircle className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">62 Lessons</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">Self-paced</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">Advanced Certificate</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">
                        ₹50,000
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
              Advanced Modules
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Sophisticated modules covering advanced systematic investing strategies and techniques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-premium transition-all duration-300 border-0 bg-white group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-8 h-8 bg-gradient-copper rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {module.id}
                      </div>
                      {module.premium && (
                        <div className="px-2 py-1 bg-gradient-copper text-white text-xs font-bold rounded">
                          Premium
                        </div>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-navy font-playfair mb-3 group-hover:text-copper transition-colors">
                      {module.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 font-lato leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{module.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <PlayCircle className="w-4 h-4" />
                          <span>{module.lessons} lessons</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Key Topics:</h4>
                        <ul className="space-y-1">
                          {module.topics.slice(0, 3).map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center gap-2">
                              <Target className="w-3 h-3 text-copper flex-shrink-0" />
                              <span className="text-sm text-gray-600 font-lato">{topic}</span>
                            </li>
                          ))}
                          {module.topics.length > 3 && (
                            <li className="text-sm text-gray-500 font-lato">
                              +{module.topics.length - 3} more topics
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <Button 
                        variant="premium" 
                        size="sm" 
                        className="w-full group"
                        disabled={!module.completed}
                      >
                        {module.completed ? 'Continue' : 'Start Module'}
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Advanced Learning Outcomes
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Master advanced systematic investing techniques and strategies.
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
              <TrendingUp className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Advanced Strategies</h3>
              <p className="text-sm text-gray-600 font-lato">
                Implement sophisticated multi-factor and alternative risk premia strategies
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Shield className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Risk Management</h3>
              <p className="text-sm text-gray-600 font-lato">
                Master advanced risk management techniques for institutional portfolios
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
              <h3 className="text-lg font-semibold text-navy mb-2">Portfolio Optimization</h3>
              <p className="text-sm text-gray-600 font-lato">
                Learn modern portfolio optimization and construction techniques
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
              Ready to Master Advanced Strategies?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Take your systematic investing expertise to the next level with our comprehensive Advanced Level course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Enroll in Advanced Level
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                View Prerequisites
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AdvancedLevel
