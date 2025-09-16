'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Crown, Building2, ArrowRight, CheckCircle, TrendingUp, Shield, Globe, Target, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('family-offices')

  const solutions = {
    'family-offices': {
      title: 'Family Office Solutions',
      subtitle: 'Multi-generational wealth preservation and growth',
      description: 'Comprehensive systematic investing solutions designed specifically for family offices managing complex, multi-generational wealth structures.',
      icon: Users,
      color: 'from-navy to-charcoal',
      minInvestment: '₹50Cr+',
      features: [
        'Customized investment frameworks tailored to family objectives',
        'Multi-asset class allocation with risk management protocols',
        'Succession planning and wealth transfer strategies',
        'Tax optimization and estate planning integration',
        'Family governance and education programs',
        'Direct access to investment committee and research team'
      ],
      strategies: [
        {
          name: 'Multi-Factor Equity Strategy',
          description: 'Systematic exposure to value, momentum, quality, and low volatility factors',
          allocation: '40-60%',
          riskLevel: 'Moderate'
        },
        {
          name: 'Alternative Risk Premia',
          description: 'Diversified exposure to alternative risk factors and market inefficiencies',
          allocation: '20-30%',
          riskLevel: 'Moderate-High'
        },
        {
          name: 'Fixed Income Systematic',
          description: 'Duration and credit risk management through systematic approaches',
          allocation: '20-30%',
          riskLevel: 'Low-Moderate'
        }
      ],
      testimonials: [
        {
          quote: "Saphalata's systematic approach has transformed our family's investment outcomes. The transparency and rigor are exactly what we needed.",
          author: "Rajesh Agarwal, Family Office Principal",
          family: "3rd Generation Manufacturing Family"
        }
      ]
    },
    'hni': {
      title: 'UHNI/HNI Solutions',
      subtitle: 'Sophisticated individual investors',
      description: 'Evidence-based systematic investing solutions for ultra-high and high net worth individuals seeking superior risk-adjusted returns.',
      icon: Crown,
      color: 'from-copper to-orange-600',
      minInvestment: '₹10Cr+',
      features: [
        'Factor-based equity strategies with global diversification',
        'Tax-efficient investment structures and optimization',
        'Liquidity management and cash flow planning',
        'Direct access to portfolio managers and research insights',
        'Customized risk management and drawdown protection',
        'Regular performance reporting and strategy updates'
      ],
      strategies: [
        {
          name: 'Systematic Equity Core',
          description: 'Core equity exposure through factor-based systematic strategies',
          allocation: '60-80%',
          riskLevel: 'Moderate-High'
        },
        {
          name: 'Alternative Beta',
          description: 'Alternative risk premia and market-neutral strategies',
          allocation: '15-25%',
          riskLevel: 'Moderate'
        },
        {
          name: 'Fixed Income Systematic',
          description: 'Duration and credit risk management through systematic approaches',
          allocation: '10-20%',
          riskLevel: 'Low-Moderate'
        }
      ],
      testimonials: [
        {
          quote: "The systematic approach has delivered consistent returns while keeping volatility in check. Exactly what I was looking for.",
          author: "Priya Sharma, Technology Entrepreneur",
          family: "UHNI Individual Investor"
        }
      ]
    },
    'institutions': {
      title: 'Institutional Solutions',
      subtitle: 'Corporate and institutional clients',
      description: 'Institutional-grade systematic investing solutions for corporations, endowments, and institutional investors.',
      icon: Building2,
      color: 'from-gray-700 to-gray-900',
      minInvestment: '₹100Cr+',
      features: [
        'Institutional frameworks with ESG integration',
        'Performance analytics and attribution reporting',
        'Regulatory compliance and governance support',
        'Custom mandate development and implementation',
        'Risk management and monitoring systems',
        'Dedicated relationship management and support'
      ],
      strategies: [
        {
          name: 'Institutional Equity Core',
          description: 'Large-cap systematic equity strategies with ESG integration',
          allocation: '50-70%',
          riskLevel: 'Moderate-High'
        },
        {
          name: 'Alternative Risk Premia',
          description: 'Diversified alternative risk factors and market inefficiencies',
          allocation: '20-35%',
          riskLevel: 'Moderate'
        },
        {
          name: 'Fixed Income Systematic',
          description: 'Duration and credit risk management through systematic approaches',
          allocation: '15-25%',
          riskLevel: 'Low-Moderate'
        }
      ],
      testimonials: [
        {
          quote: "Saphalata's institutional approach and systematic methodology align perfectly with our investment objectives.",
          author: "Dr. Amit Kumar, CIO",
          family: "Corporate Pension Fund"
        }
      ]
    }
  }

  const currentSolution = solutions[activeTab as keyof typeof solutions]

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
              Investment Solutions
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Tailored systematic investing solutions for every investor profile. 
              From family offices to institutional clients, we deliver evidence-based strategies that align with your objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {Object.entries(solutions).map(([key, solution]) => (
              <Button
                key={key}
                variant={activeTab === key ? "premium" : "outline"}
                size="lg"
                onClick={() => setActiveTab(key)}
                className="flex-1 justify-start gap-3"
              >
                <solution.icon className="w-5 h-5" />
                {solution.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Solution Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Solution Overview */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentSolution.color} rounded-full flex items-center justify-center`}>
                    <currentSolution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-navy font-playfair">
                      {currentSolution.title}
                    </h2>
                    <p className="text-copper font-semibold text-lg">
                      {currentSolution.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 font-lato leading-relaxed mb-8 text-lg">
                  {currentSolution.description}
                </p>
                
                <div className="bg-white rounded-lg p-6 shadow-premium">
                  <h3 className="text-xl font-semibold text-navy mb-4">Minimum Investment</h3>
                  <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">
                    {currentSolution.minInvestment}
                  </div>
                  <p className="text-gray-600 font-lato">
                    Flexible investment structures available for qualified investors
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-navy font-playfair mb-6">
                  Key Features & Benefits
                </h3>
                {currentSolution.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-lato">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Strategies */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-navy font-playfair text-center mb-12">
                Investment Strategies
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {currentSolution.strategies.map((strategy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="mb-16">
              <Card className="shadow-premium border-0 bg-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center mx-auto mb-6">
                      <currentSolution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <blockquote className="text-xl text-gray-700 font-lato leading-relaxed mb-6 italic">
                      "{currentSolution.testimonials[0].quote}"
                    </blockquote>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <p className="font-semibold text-navy mb-1">
                        {currentSolution.testimonials[0].author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {currentSolution.testimonials[0].family}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Saphalata */}
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
              Why Choose Saphalata?
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our systematic approach delivers consistent advantages across all client segments
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
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
              className="text-center p-6 bg-lightGrey rounded-lg"
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
              className="text-center p-6 bg-lightGrey rounded-lg"
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
              className="text-center p-6 bg-lightGrey rounded-lg"
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
              Ready to Transform Your Investment Approach?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Discover how our systematic solutions can align with your investment objectives. 
              Request a confidential consultation to explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Request Confidential Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Download Investment Note
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Solutions
