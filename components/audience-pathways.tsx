'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Users, Crown, Building2, TrendingUp, Shield, Globe } from 'lucide-react'

const AudiencePathways = () => {
  const pathways = [
    {
      title: 'Family Offices',
      subtitle: 'Multi-generational wealth preservation',
      description: 'Comprehensive systematic strategies designed for family offices managing complex, multi-generational wealth structures.',
      icon: Users,
      features: [
        'Customized investment frameworks',
        'Multi-asset class allocation',
        'Risk management protocols',
        'Succession planning support'
      ],
      stats: '₹50Cr+ minimum investment',
      color: 'from-navy to-charcoal',
      iconColor: 'text-navy'
    },
    {
      title: 'UHNI/HNI',
      subtitle: 'Sophisticated individual investors',
      description: 'Evidence-based systematic investing solutions for ultra-high and high net worth individuals seeking superior risk-adjusted returns.',
      icon: Crown,
      features: [
        'Factor-based strategies',
        'Global diversification',
        'Tax optimization',
        'Liquidity management'
      ],
      stats: '₹10Cr+ minimum investment',
      color: 'from-copper to-orange-600',
      iconColor: 'text-copper'
    },
    {
      title: 'Institutions',
      subtitle: 'Corporate and institutional clients',
      description: 'Institutional-grade systematic investing solutions for corporations, endowments, and institutional investors.',
      icon: Building2,
      features: [
        'Institutional frameworks',
        'ESG integration',
        'Performance analytics',
        'Regulatory compliance'
      ],
      stats: '₹100Cr+ minimum investment',
      color: 'from-gray-700 to-gray-900',
      iconColor: 'text-gray-700'
    }
  ]

  return (
    <section className="bg-lightGrey py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
            Tailored Solutions for Every Investor Profile
          </h2>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
            Our systematic investing approach adapts to your unique requirements, whether you're managing family wealth, individual portfolios, or institutional assets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-premium transition-all duration-300 group border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${pathway.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <pathway.icon className={`w-10 h-10 ${pathway.iconColor === 'text-navy' ? 'text-white' : pathway.iconColor === 'text-copper' ? 'text-white' : 'text-white'}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-copper/20 rounded-full animate-pulse-copper"></div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-navy font-playfair mb-2">
                    {pathway.title}
                  </CardTitle>
                  <CardDescription className="text-copper font-semibold text-lg mb-4">
                    {pathway.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 font-lato leading-relaxed">
                    {pathway.description}
                  </p>
                  
                  <div className="space-y-3">
                    {pathway.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-copper rounded-full"></div>
                        <span className="text-sm text-gray-700 font-lato">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-500 mb-3">Minimum Investment</p>
                      <p className="text-lg font-bold text-navy font-roboto-mono">{pathway.stats}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-copper group-hover:text-white group-hover:border-copper transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Differentiators */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-premium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-navy font-playfair text-center mb-8">
            What Sets Us Apart
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-navy mb-2">Systematic Excellence</h4>
              <p className="text-gray-600 text-sm font-lato">
                Evidence-based factor investing with rigorous backtesting and continuous optimization.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-navy to-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-navy mb-2">Regulatory Rigor</h4>
              <p className="text-gray-600 text-sm font-lato">
                Full SEBI compliance with transparent reporting and institutional-grade governance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-navy mb-2">Global Perspective</h4>
              <p className="text-gray-600 text-sm font-lato">
                Internationally benchmarked strategies with local market expertise and global best practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AudiencePathways
