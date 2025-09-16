'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Shield, TrendingUp, Globe, ArrowRight, CheckCircle, Building, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const FamilyOffices = () => {
  const services = [
    {
      icon: Target,
      title: 'Customized Investment Frameworks',
      description: 'Tailored systematic strategies designed specifically for your family\'s unique objectives, risk tolerance, and legacy goals.',
      features: [
        'Multi-generational wealth planning',
        'Custom factor allocation models',
        'Family-specific risk management',
        'Legacy preservation strategies'
      ]
    },
    {
      icon: Shield,
      title: 'Comprehensive Risk Management',
      description: 'Advanced risk management protocols ensuring capital preservation while optimizing returns across market cycles.',
      features: [
        'Portfolio-level risk controls',
        'Stress testing and scenario analysis',
        'Drawdown protection mechanisms',
        'Liquidity management strategies'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of investment strategies to ensure superior risk-adjusted returns.',
      features: [
        'Real-time performance monitoring',
        'Factor attribution analysis',
        'Cost optimization strategies',
        'Tax-efficient implementation'
      ]
    },
    {
      icon: Building,
      title: 'Family Governance Support',
      description: 'Comprehensive support for family governance, education, and succession planning initiatives.',
      features: [
        'Investment committee support',
        'Family education programs',
        'Succession planning guidance',
        'Governance framework development'
      ]
    }
  ]

  const strategies = [
    {
      name: 'Multi-Factor Equity Core',
      allocation: '40-60%',
      description: 'Systematic exposure to value, momentum, quality, and low volatility factors across global equity markets.',
      riskLevel: 'Moderate-High',
      expectedReturn: '12-15%'
    },
    {
      name: 'Alternative Risk Premia',
      allocation: '20-30%',
      description: 'Diversified exposure to alternative risk factors and market inefficiencies for enhanced diversification.',
      riskLevel: 'Moderate',
      expectedReturn: '8-12%'
    },
    {
      name: 'Fixed Income Systematic',
      allocation: '20-30%',
      description: 'Duration and credit risk management through systematic approaches with ESG integration.',
      riskLevel: 'Low-Moderate',
      expectedReturn: '6-9%'
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
              Family Office Solutions
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Comprehensive systematic investing solutions designed specifically for family offices 
              managing complex, multi-generational wealth structures.
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
              Comprehensive Family Office Services
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our systematic approach adapts to your family's unique requirements, ensuring 
              optimal outcomes across generations.
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
              Diversified systematic strategies designed for family office portfolios.
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
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimum Investment */}
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
                  Our family office solutions are designed for sophisticated investors managing 
                  substantial wealth across multiple generations.
                </p>
                <p>
                  We work with families who value transparency, systematic approaches, and 
                  long-term wealth preservation.
                </p>
                <p>
                  All strategies are customized to align with your family's specific objectives, 
                  risk tolerance, and governance structure.
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
                      ₹50Cr+
                    </div>
                    <p className="text-gray-600 font-lato">
                      Minimum investment for family office solutions
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Customized investment frameworks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Direct access to investment committee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Family governance support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                      <span className="text-gray-700 font-lato">Succession planning guidance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              Ready to Transform Your Family's Investment Approach?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Discover how our systematic solutions can align with your family's investment objectives 
              and legacy goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Request Family Office Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Download Family Office Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default FamilyOffices
