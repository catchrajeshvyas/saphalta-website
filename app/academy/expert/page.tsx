'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, PlayCircle, Clock, Users, ArrowRight, Award, Target, TrendingUp, Shield, Brain, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const ExpertLevel = () => {
  const modules = [
    {
      id: 1,
      title: 'Institutional Portfolio Management',
      duration: '120 min',
      lessons: 18,
      description: 'Master institutional-grade portfolio management for large-scale systematic strategies.',
      topics: ['Large-scale implementation', 'Liquidity management', 'Transaction cost analysis', 'Capacity constraints'],
      premium: true
    },
    {
      id: 2,
      title: 'Quantitative Research & Development',
      duration: '100 min',
      lessons: 15,
      description: 'Learn to develop and test new systematic strategies using quantitative methods.',
      topics: ['Strategy development', 'Backtesting methodologies', 'Out-of-sample testing', 'Strategy validation'],
      premium: true
    },
    {
      id: 3,
      title: 'Alternative Data Integration',
      duration: '90 min',
      lessons: 12,
      description: 'Integrate alternative data sources into systematic investment strategies.',
      topics: ['Satellite data', 'Social sentiment', 'Economic indicators', 'Data quality assessment'],
      premium: true
    },
    {
      id: 4,
      title: 'Expert Level Assessment',
      duration: '120 min',
      lessons: 1,
      description: 'Comprehensive assessment covering all expert level concepts and practical applications.',
      topics: ['Complex case studies', 'Strategy development project', 'Portfolio management exercise', 'Expert certification'],
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
              Expert Level
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Master institutional-grade systematic investing and quantitative strategy development. 
              Designed for senior professionals and institutional investors.
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
                Expert Course Overview
              </h2>
              <div className="space-y-4 text-gray-600 font-lato leading-relaxed">
                <p>
                  The Expert Level represents the pinnacle of systematic investing education. You'll master institutional-grade 
                  portfolio management, quantitative strategy development, and advanced implementation techniques.
                </p>
                <p>
                  This level is designed for senior portfolio managers, CIOs, and institutional investors who need to implement 
                  large-scale systematic strategies and develop proprietary investment approaches.
                </p>
                <p>
                  Prerequisites: Completion of Advanced Level or equivalent experience in systematic investing.
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
                      <span className="text-gray-700 font-lato">Duration: 8-10 weeks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">4 Modules</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PlayCircle className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">46 Lessons</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">Self-paced</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-copper" />
                      <span className="text-gray-700 font-lato">Expert Certificate</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">
                        ₹1,00,000
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
              Expert Modules
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Master-level modules covering institutional systematic investing and strategy development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
                      <div className="px-2 py-1 bg-gradient-copper text-white text-xs font-bold rounded">
                        Premium
                      </div>
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
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center gap-2">
                              <Target className="w-3 h-3 text-copper flex-shrink-0" />
                              <span className="text-sm text-gray-600 font-lato">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        variant="premium" 
                        size="sm" 
                        className="w-full group"
                      >
                        Start Module
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
              Expert Learning Outcomes
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Achieve mastery in institutional systematic investing and strategy development.
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
              <Brain className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Strategy Development</h3>
              <p className="text-sm text-gray-600 font-lato">
                Develop and validate proprietary systematic investment strategies
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Zap className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Implementation</h3>
              <p className="text-sm text-gray-600 font-lato">
                Master large-scale implementation and institutional portfolio management
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
              <h3 className="text-lg font-semibold text-navy mb-2">Leadership</h3>
              <p className="text-sm text-gray-600 font-lato">
                Lead systematic investing initiatives at institutional level
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
              Ready to Achieve Expert Mastery?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Join the elite group of systematic investing experts with our comprehensive Expert Level program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Enroll in Expert Level
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ExpertLevel
