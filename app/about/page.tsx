'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Award, TrendingUp, Shield, Globe, Target, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chief Investment Officer',
      credentials: 'CFA, PhD Finance',
      experience: '20+ years',
      background: 'Former BlackRock portfolio manager, Wharton PhD, expert in systematic equity strategies',
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Research',
      credentials: 'CFA Charterholder',
      experience: '15+ years',
      background: 'Former Dimensional Fund Advisors researcher, specialist in factor investing and ESG integration',
      image: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      position: 'Senior Portfolio Manager',
      credentials: 'FRM, CAIA',
      experience: '12+ years',
      background: 'Former Goldman Sachs quantitative strategist, expert in risk management and alternative strategies',
      image: '👨‍💻'
    },
    {
      name: 'Dr. Neha Gupta',
      position: 'Head of Risk Management',
      credentials: 'PhD Statistics',
      experience: '10+ years',
      background: 'Former JP Morgan risk manager, specialist in portfolio risk modeling and stress testing',
      image: '👩‍🔬'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Evidence-Based Decisions',
      description: 'Every investment decision is grounded in rigorous research, historical data analysis, and statistical validation.'
    },
    {
      icon: Shield,
      title: 'Risk Management Excellence',
      description: 'Comprehensive risk management framework ensuring capital preservation while seeking superior returns.'
    },
    {
      icon: Globe,
      title: 'Global Best Practices',
      description: 'Integration of international best practices adapted for Indian market characteristics and regulations.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Constant evolution of strategies based on market developments and new research insights.'
    }
  ]

  const milestones = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'Saphalata Investment Advisors LLP established with focus on systematic investing'
    },
    {
      year: '2012',
      title: 'SEBI Registration',
      description: 'Registered as Alternative Investment Fund Category II with SEBI'
    },
    {
      year: '2015',
      title: 'First ₹100Cr',
      description: 'Reached ₹100 crore in assets under management'
    },
    {
      year: '2018',
      title: 'Research Excellence',
      description: 'Published first comprehensive research paper on factor investing in Indian markets'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched advanced portfolio management and risk monitoring systems'
    },
    {
      year: '2023',
      title: '₹500Cr Milestone',
      description: 'Crossed ₹500 crore in assets under management'
    }
  ]

  const certifications = [
    'SEBI Registered AIF Category II',
    'ISO 27001:2013 Certified',
    'GDPR Compliant',
    'Cyber Security Audited',
    'Big 4 Audited Financial Statements',
    'Data Privacy Certified'
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
              About Saphalata
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Pioneering systematic investing in India with evidence-based strategies, 
              rigorous risk management, and unwavering commitment to client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 font-lato leading-relaxed">
                <p>
                  Founded in 2008, Saphalata Investment Advisors LLP emerged from a vision to bring 
                  institutional-grade systematic investing to India's sophisticated investors. Our founders, 
                  with decades of experience at leading global asset managers, recognized the opportunity 
                  to apply evidence-based investment strategies in the Indian market.
                </p>
                <p>
                  Today, we manage over ₹500 crore in assets for discerning families, institutions, 
                  and high net worth individuals who value transparency, discipline, and superior 
                  risk-adjusted returns.
                </p>
                <p>
                  Our systematic approach removes emotion from investment decisions, focusing instead 
                  on persistent market factors and rigorous risk management to deliver consistent 
                  long-term performance.
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
                    By the Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">₹500Cr+</div>
                      <div className="text-sm text-gray-600 font-lato">Assets Under Management</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">15+</div>
                      <div className="text-sm text-gray-600 font-lato">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">200+</div>
                      <div className="text-sm text-gray-600 font-lato">Client Families</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">25+</div>
                      <div className="text-sm text-gray-600 font-lato">Team Members</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              The principles that guide every decision we make and every strategy we implement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy font-playfair">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 font-lato leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our experienced team brings together decades of expertise from leading global 
              asset managers and financial institutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-copper rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                      {member.image}
                    </div>
                    <CardTitle className="text-lg font-bold text-navy font-playfair">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-copper font-semibold">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <div className="font-medium">{member.credentials}</div>
                      <div>{member.experience}</div>
                    </div>
                    <p className="text-sm text-gray-600 font-lato leading-relaxed">
                      {member.background}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Key milestones in our evolution as India's leading systematic investment firm.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-copper"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="shadow-premium border-0 bg-white">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-copper font-roboto-mono mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-navy font-playfair mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 font-lato">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-copper rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
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
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our commitment to regulatory excellence and industry best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-premium transition-all duration-300 border-0 bg-lightGrey">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-copper rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-navy font-lato">
                      {cert}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Partner with India's Systematic Investing Leader
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Join the growing number of sophisticated investors who trust Saphalata 
              for evidence-based, systematic investment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Start Your Investment Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Download Company Profile
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default About
