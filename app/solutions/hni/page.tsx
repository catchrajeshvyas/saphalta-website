'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Crown, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, Target, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const HNI = () => {
  const features = [
    {
      icon: Target,
      title: 'Factor-Based Equity Strategies',
      description: 'Systematic exposure to value, momentum, quality, and low volatility factors with global diversification.',
      benefits: [
        'Evidence-based factor selection',
        'Global market diversification',
        'Risk-adjusted return optimization',
        'Transparent performance attribution'
      ]
    },
    {
      icon: Shield,
      title: 'Tax Optimization',
      description: 'Strategic tax-efficient investment structures and optimization techniques to maximize after-tax returns.',
      benefits: [
        'Tax-efficient fund structures',
        'Loss harvesting strategies',
        'Asset location optimization',
        'Tax-aware rebalancing'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Liquidity Management',
      description: 'Sophisticated liquidity management solutions balancing return optimization with cash flow needs.',
      benefits: [
        'Flexible liquidity options',
        'Cash flow planning',
        'Emergency fund management',
        'Systematic withdrawal strategies'
      ]
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive performance reporting and analytics with detailed attribution and risk analysis.',
      benefits: [
        'Real-time performance tracking',
        'Factor attribution analysis',
        'Risk metrics monitoring',
        'Benchmark comparison'
      ]
    }
  ]

  const strategies = [
    {
      name: 'Systematic Equity Core',
      allocation: '60-80%',
      description: 'Core equity exposure through factor-based systematic strategies with global diversification.',
      riskLevel: 'Moderate-High',
      expectedReturn: '12-16%',
      minInvestment: '₹10Cr'
    },
    {
      name: 'Alternative Beta',
      allocation: '15-25%',
      description: 'Alternative risk premia and market-neutral strategies for enhanced diversification.',
      riskLevel: 'Moderate',
      expectedReturn: '8-12%',
      minInvestment: '₹10Cr'
    },
    {
      name: 'Fixed Income Systematic',
      allocation: '10-20%',
      description: 'Duration and credit risk management through systematic approaches.',
      riskLevel: 'Low-Moderate',
      expectedReturn: '6-9%',
      minInvestment: '₹10Cr'
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
              UHNI/HNI Solutions
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Evidence-based systematic investing solutions for ultra-high and high net worth individuals 
              seeking superior risk-adjusted returns with transparency and sophistication.
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
              Sophisticated Investment Solutions
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our systematic approach delivers institutional-grade investment solutions tailored 
              for discerning individual investors.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-navy font-playfair mb-3">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 font-lato leading-relaxed text-base">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-copper flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-lato">{benefit}</span>
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
              Diversified systematic strategies designed for sophisticated individual investors.
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
                  Our UHNI/HNI solutions are designed for sophisticated individual investors 
                  who value transparency, systematic approaches, and superior risk-adjusted returns.
                </p>
                <p>
                  We work with investors who understand the benefits of factor-based investing 
                  and appreciate the discipline of systematic strategies.
                </p>
                <p>
                  All strategies are customized to align with your specific objectives, 
                  risk tolerance, and liquidity requirements.
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
                      ₹10Cr+
                    </div>
                    <p className="text-gray-600 font-lato">
                      Minimum investment for UHNI/HNI solutions
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Direct access to portfolio managers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Customized risk management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Regular performance reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Tax optimization strategies</span>
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
              Our systematic approach delivers consistent advantages for sophisticated individual investors.
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
              <h3 className="text-lg font-semibold text-navy mb-2">Superior Returns</h3>
              <p className="text-sm text-gray-600 font-lato">
                Evidence-based strategies that consistently outperform benchmarks
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
                Comprehensive risk controls and drawdown protection
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
              <h3 className="text-lg font-semibold text-navy mb-2">Global Expertise</h3>
              <p className="text-sm text-gray-600 font-lato">
                International best practices adapted for Indian markets
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
                Clear reporting and full visibility into investment decisions
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
              Ready to Optimize Your Investment Strategy?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Discover how our systematic solutions can align with your investment objectives 
              and deliver superior risk-adjusted returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Request UHNI/HNI Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Download Investment Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default HNI
