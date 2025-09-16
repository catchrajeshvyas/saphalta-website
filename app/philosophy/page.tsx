'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Target, Shield, Globe, BarChart3, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts'

const Philosophy = () => {
  const factorData = [
    { factor: 'Value', return: 12.5, risk: 8.2, sharpe: 1.52 },
    { factor: 'Momentum', return: 14.8, risk: 9.1, sharpe: 1.63 },
    { factor: 'Quality', return: 11.2, risk: 6.8, sharpe: 1.65 },
    { factor: 'Low Vol', return: 9.8, risk: 5.2, sharpe: 1.88 },
    { factor: 'Size', return: 13.1, risk: 10.5, sharpe: 1.25 },
  ]

  const performanceData = [
    { year: '2019', systematic: 15.2, benchmark: 12.8 },
    { year: '2020', systematic: 8.7, benchmark: 6.1 },
    { year: '2021', systematic: 22.4, benchmark: 18.9 },
    { year: '2022', systematic: -3.2, benchmark: -8.4 },
    { year: '2023', systematic: 18.6, benchmark: 14.2 },
    { year: '2024', systematic: 16.8, benchmark: 13.1 },
  ]

  const principles = [
    {
      icon: Target,
      title: 'Evidence-Based Decision Making',
      description: 'Every investment decision is backed by rigorous research, historical data analysis, and statistical validation.',
      details: [
        'Academic research integration',
        'Backtesting and validation',
        'Continuous model refinement',
        'Risk-adjusted performance focus'
      ]
    },
    {
      icon: BarChart3,
      title: 'Systematic Factor Investing',
      description: 'We identify and exploit persistent market factors that drive returns across different market conditions.',
      details: [
        'Multi-factor approach',
        'Dynamic factor allocation',
        'Risk factor diversification',
        'Cost-efficient implementation'
      ]
    },
    {
      icon: Shield,
      title: 'Risk Management Excellence',
      description: 'Comprehensive risk management framework ensuring capital preservation while seeking superior returns.',
      details: [
        'Portfolio-level risk controls',
        'Factor exposure management',
        'Drawdown protection',
        'Stress testing protocols'
      ]
    },
    {
      icon: Globe,
      title: 'Global Best Practices',
      description: 'Integration of international best practices adapted for Indian market characteristics and regulations.',
      details: [
        'International research adoption',
        'Local market customization',
        'Regulatory compliance',
        'Technology integration'
      ]
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Research & Discovery',
      description: 'Identify market inefficiencies and factor opportunities through comprehensive research.',
      icon: TrendingUp
    },
    {
      step: '02',
      title: 'Model Development',
      description: 'Develop systematic models with rigorous backtesting and validation protocols.',
      icon: BarChart3
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute strategies with precision, monitoring performance and risk metrics continuously.',
      icon: Target
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously refine and optimize strategies based on market evolution and new insights.',
      icon: Shield
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
              Our Investment Philosophy
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Systematic, evidence-driven investing that combines academic rigor with practical implementation. 
              We believe in the power of disciplined, factor-based strategies to deliver superior risk-adjusted returns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
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
              Core Investment Principles
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our philosophy is built on four fundamental pillars that guide every investment decision and strategy implementation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center flex-shrink-0">
                        <principle.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-navy font-playfair mb-3">
                          {principle.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 font-lato leading-relaxed text-base">
                          {principle.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {principle.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-copper flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-lato">{detail}</span>
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

      {/* Factor Performance */}
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
              Factor Performance Analysis
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our systematic approach focuses on exploiting persistent market factors that have historically delivered superior risk-adjusted returns.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy font-playfair">
                    Factor Risk-Return Profile
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Historical performance metrics for key investment factors (2019-2024)
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {factorData.map((factor, index) => (
                      <div key={factor.factor} className="flex items-center justify-between p-4 bg-lightGrey rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-navy">{factor.factor}</h4>
                          <div className="flex gap-4 text-sm text-gray-600 mt-1">
                            <span>Return: {factor.return}%</span>
                            <span>Risk: {factor.risk}%</span>
                            <span>Sharpe: {factor.sharpe}</span>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg font-roboto-mono">
                            {factor.sharpe}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                    Systematic vs Benchmark Performance
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Annual returns comparison (2019-2024)
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="year" stroke="#666" fontSize={12} />
                        <YAxis stroke="#666" fontSize={12} tickFormatter={(value) => `${value}%`} />
                        <Tooltip 
                          formatter={(value: number) => [`${value}%`, 'Return']}
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e5e5',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                          }}
                        />
                        <Bar dataKey="systematic" fill="#B87333" name="Systematic Strategy" />
                        <Bar dataKey="benchmark" fill="#0B1D3A" name="Benchmark" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
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
              Our Systematic Investment Process
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              A disciplined, four-step process that ensures every investment decision is grounded in evidence and executed with precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-copper rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold font-roboto-mono">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-navy font-playfair mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-lato leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Systematic Investing */}
      <section className="py-20 bg-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
                Why Systematic Investing?
              </h2>
              <p className="text-xl text-gray-600 font-lato leading-relaxed mb-8">
                Systematic investing removes emotion from investment decisions and focuses on exploiting persistent market inefficiencies through disciplined, rules-based strategies.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Emotion-Free Decision Making</h4>
                    <p className="text-gray-600 font-lato">Eliminates behavioral biases that often lead to poor investment outcomes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Cost Efficiency</h4>
                    <p className="text-gray-600 font-lato">Lower transaction costs and management fees compared to active strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Scalability</h4>
                    <p className="text-gray-600 font-lato">Strategies can be scaled efficiently across different portfolio sizes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Transparency</h4>
                    <p className="text-gray-600 font-lato">Clear, rules-based strategies that can be easily understood and monitored.</p>
                  </div>
                </div>
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
                    Key Advantages
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Systematic investing delivers consistent advantages over traditional approaches
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-4 bg-lightGrey rounded-lg">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">2.1x</div>
                      <div className="text-sm text-gray-600 font-lato">Higher Sharpe Ratio</div>
                    </div>
                    
                    <div className="text-center p-4 bg-lightGrey rounded-lg">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">-40%</div>
                      <div className="text-sm text-gray-600 font-lato">Lower Volatility</div>
                    </div>
                    
                    <div className="text-center p-4 bg-lightGrey rounded-lg">
                      <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">85%</div>
                      <div className="text-sm text-gray-600 font-lato">Consistent Outperformance</div>
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
              Ready to Experience Systematic Excellence?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Discover how our evidence-based approach can transform your investment outcomes. 
              Request a confidential consultation to learn more about our strategies.
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

export default Philosophy
