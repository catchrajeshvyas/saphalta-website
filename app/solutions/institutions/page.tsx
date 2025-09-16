'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Shield, TrendingUp, Globe, ArrowRight, CheckCircle, Target, BarChart3, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Institutions = () => {
  const services = [
    {
      icon: Target,
      title: 'Institutional Frameworks',
      description: 'Robust investment frameworks designed specifically for institutional clients with complex requirements and governance structures.',
      features: [
        'Custom mandate development',
        'Institutional-grade reporting',
        'Governance framework support',
        'Compliance monitoring'
      ]
    },
    {
      icon: Shield,
      title: 'ESG Integration',
      description: 'Comprehensive ESG integration across all investment strategies with detailed reporting and impact measurement.',
      features: [
        'ESG factor integration',
        'Impact measurement and reporting',
        'Sustainable investment strategies',
        'ESG risk assessment'
      ]
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Advanced performance analytics and attribution reporting with institutional-grade risk metrics and benchmarking.',
      features: [
        'Real-time performance monitoring',
        'Advanced attribution analysis',
        'Risk metrics and stress testing',
        'Custom benchmark development'
      ]
    },
    {
      icon: Award,
      title: 'Regulatory Compliance',
      description: 'Comprehensive regulatory compliance support ensuring adherence to all applicable regulations and best practices.',
      features: [
        'Regulatory reporting support',
        'Compliance monitoring',
        'Audit preparation assistance',
        'Best practice implementation'
      ]
    }
  ]

  const strategies = [
    {
      name: 'Institutional Equity Core',
      allocation: '50-70%',
      description: 'Large-cap systematic equity strategies with ESG integration and institutional-grade risk management.',
      riskLevel: 'Moderate-High',
      expectedReturn: '11-15%',
      minInvestment: '₹100Cr'
    },
    {
      name: 'Alternative Risk Premia',
      allocation: '20-35%',
      description: 'Diversified alternative risk factors and market-neutral strategies for enhanced diversification.',
      riskLevel: 'Moderate',
      expectedReturn: '7-11%',
      minInvestment: '₹100Cr'
    },
    {
      name: 'Fixed Income Systematic',
      allocation: '15-25%',
      description: 'Duration and credit risk management through systematic approaches with ESG considerations.',
      riskLevel: 'Low-Moderate',
      expectedReturn: '5-8%',
      minInvestment: '₹100Cr'
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
              Institutional Solutions
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Institutional-grade systematic investing solutions for corporations, endowments, 
              and institutional investors seeking sophisticated, evidence-based strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
              Institutional-Grade Services
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our systematic approach delivers institutional-quality investment solutions with 
              comprehensive governance, compliance, and reporting frameworks.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-navy font-playfair mb-3">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 font-lato leading-relaxed text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-copper flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-lato">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
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
              Investment Strategies
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Diversified systematic strategies designed for institutional portfolios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-navy font-playfair mb-2">
                      {strategy.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-lato leading-relaxed">
                      {strategy.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-lightGrey rounded-lg">
                        <span className="text-sm font-medium text-gray-600">Allocation</span>
                        <span className="text-lg font-bold text-copper font-roboto-mono">
                          {strategy.allocation}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-lightGrey rounded-lg">
                        <span className="text-sm font-medium text-gray-600">Risk Level</span>
                        <span className="text-lg font-bold text-navy font-roboto-mono">
                          {strategy.riskLevel}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-lightGrey rounded-lg">
                        <span className="text-sm font-medium text-gray-600">Expected Return</span>
                        <span className="text-lg font-bold text-copper font-roboto-mono">
                          {strategy.expectedReturn}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-lightGrey rounded-lg">
                        <span className="text-sm font-medium text-gray-600">Min Investment</span>
                        <span className="text-lg font-bold text-navy font-roboto-mono">
                          {strategy.minInvestment}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Requirements */}
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
                Investment Requirements
              </h2>
              <div className="space-y-4 text-gray-600 font-lato leading-relaxed">
                <p>
                  Our institutional solutions are designed for sophisticated institutional investors 
                  who require institutional-grade investment management with comprehensive governance.
                </p>
                <p>
                  We work with institutions that value systematic approaches, transparency, 
                  and evidence-based investment strategies.
                </p>
                <p>
                  All strategies are customized to align with your institution's specific objectives, 
                  governance requirements, and regulatory constraints.
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
                    Minimum Investment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-copper font-roboto-mono mb-2">
                      ₹100Cr+
                    </div>
                    <p className="text-gray-600 font-lato">
                      Minimum investment for institutional solutions
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Dedicated relationship management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Custom mandate development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Institutional-grade reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Regulatory compliance support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Saphalata?
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our systematic approach delivers institutional-grade advantages for sophisticated institutional investors.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-premium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Institutional Returns</h3>
              <p className="text-sm text-gray-600 font-lato">
                Evidence-based strategies designed for institutional portfolios
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-premium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Shield className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Risk Management</h3>
              <p className="text-sm text-gray-600 font-lato">
                Institutional-grade risk controls and monitoring systems
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-premium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Globe className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">ESG Integration</h3>
              <p className="text-sm text-gray-600 font-lato">
                Comprehensive ESG integration and impact measurement
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-premium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <BarChart3 className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Transparency</h3>
              <p className="text-sm text-gray-600 font-lato">
                Full transparency with institutional-grade reporting
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
              Ready to Partner with Saphalata?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Discover how our institutional solutions can align with your organization's 
              investment objectives and governance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Request Institutional Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Download Institutional Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Institutions
