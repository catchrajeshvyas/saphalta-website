'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, TrendingUp, Download, ArrowRight, BarChart3, PieChart, LineChart, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell } from 'recharts'

const QuarterlyReviews = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('Q4-2023')

  const quarterlyData = [
    {
      quarter: 'Q4-2023',
      title: 'Q4 2023 Market Review & Outlook',
      date: '2024-01-15',
      performance: {
        equity: 12.5,
        fixedIncome: 6.8,
        alternatives: 8.2,
        overall: 10.1
      },
      keyHighlights: [
        'Strong performance across all asset classes',
        'Factor-based strategies outperformed benchmarks',
        'ESG integration showing positive impact',
        'Risk management protocols effective'
      ]
    },
    {
      quarter: 'Q3-2023',
      title: 'Q3 2023 Performance Analysis',
      date: '2023-10-15',
      performance: {
        equity: 8.3,
        fixedIncome: 5.2,
        alternatives: 6.7,
        overall: 7.4
      },
      keyHighlights: [
        'Market volatility managed effectively',
        'Systematic strategies resilient',
        'Client portfolios maintained stability',
        'New risk management tools implemented'
      ]
    },
    {
      quarter: 'Q2-2023',
      title: 'Q2 2023 Strategic Insights',
      date: '2023-07-15',
      performance: {
        equity: 15.2,
        fixedIncome: 4.8,
        alternatives: 9.1,
        overall: 11.8
      },
      keyHighlights: [
        'Exceptional equity market performance',
        'Factor rotation strategies successful',
        'Alternative investments contributing positively',
        'Client satisfaction at all-time high'
      ]
    }
  ]

  const performanceData = [
    { month: 'Jan', equity: 2.1, fixedIncome: 0.8, alternatives: 1.2 },
    { month: 'Feb', equity: 1.8, fixedIncome: 0.6, alternatives: 0.9 },
    { month: 'Mar', equity: 3.2, fixedIncome: 0.9, alternatives: 1.5 },
    { month: 'Apr', equity: 2.8, fixedIncome: 0.7, alternatives: 1.3 },
    { month: 'May', equity: 2.5, fixedIncome: 0.8, alternatives: 1.1 },
    { month: 'Jun', equity: 3.1, fixedIncome: 0.9, alternatives: 1.4 }
  ]

  const assetAllocationData = [
    { name: 'Equity', value: 60, color: '#B87333' },
    { name: 'Fixed Income', value: 25, color: '#0B1D3A' },
    { name: 'Alternatives', value: 15, color: '#1E1E1E' }
  ]

  const currentQuarter = quarterlyData.find(q => q.quarter === selectedQuarter)

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
              Quarterly Reviews
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Comprehensive quarterly performance reviews, market analysis, and strategic insights 
              from our systematic investment approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quarter Selection */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {quarterlyData.map((quarter) => (
              <Button
                key={quarter.quarter}
                variant={selectedQuarter === quarter.quarter ? "premium" : "outline"}
                onClick={() => setSelectedQuarter(quarter.quarter)}
                className="min-w-[120px]"
              >
                {quarter.quarter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Current Quarter Review */}
      {currentQuarter && (
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
                {currentQuarter.title}
              </h2>
              <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
                Published on {new Date(currentQuarter.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </motion.div>

            {/* Performance Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardContent className="pt-6">
                    <TrendingUp className="w-12 h-12 text-copper mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-navy font-roboto-mono mb-2">
                      {currentQuarter.performance.equity}%
                    </h3>
                    <p className="text-gray-600 font-lato">Equity Performance</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardContent className="pt-6">
                    <BarChart3 className="w-12 h-12 text-copper mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-navy font-roboto-mono mb-2">
                      {currentQuarter.performance.fixedIncome}%
                    </h3>
                    <p className="text-gray-600 font-lato">Fixed Income</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardContent className="pt-6">
                    <PieChart className="w-12 h-12 text-copper mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-navy font-roboto-mono mb-2">
                      {currentQuarter.performance.alternatives}%
                    </h3>
                    <p className="text-gray-600 font-lato">Alternatives</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardContent className="pt-6">
                    <Target className="w-12 h-12 text-copper mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-navy font-roboto-mono mb-2">
                      {currentQuarter.performance.overall}%
                    </h3>
                    <p className="text-gray-600 font-lato">Overall Portfolio</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Performance Chart */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-navy font-playfair">
                      Monthly Performance Trend
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-lato">
                      Performance across asset classes over the quarter
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="month" stroke="#666" />
                          <YAxis stroke="#666" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#fff', 
                              border: '1px solid #e0e0e0',
                              borderRadius: '8px'
                            }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="equity" 
                            stroke="#B87333" 
                            strokeWidth={3}
                            name="Equity"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="fixedIncome" 
                            stroke="#0B1D3A" 
                            strokeWidth={3}
                            name="Fixed Income"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="alternatives" 
                            stroke="#1E1E1E" 
                            strokeWidth={3}
                            name="Alternatives"
                          />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Asset Allocation Chart */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-navy font-playfair">
                      Asset Allocation
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-lato">
                      Current portfolio allocation across asset classes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <RechartsPieChart
                            data={assetAllocationData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={120}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {assetAllocationData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </RechartsPieChart>
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#fff', 
                              border: '1px solid #e0e0e0',
                              borderRadius: '8px'
                            }} 
                          />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 space-y-2">
                      {assetAllocationData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-4 h-4 rounded-full" 
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-gray-700 font-lato">{item.name}</span>
                          </div>
                          <span className="font-bold text-navy font-roboto-mono">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-premium transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy font-playfair">
                    Key Highlights
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Major achievements and insights from this quarter
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {currentQuarter.keyHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 font-lato leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Download Full Quarterly Report
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Get the complete quarterly review with detailed analysis, charts, and strategic recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                <Download className="mr-2 w-5 h-5" />
                Download PDF Report
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                <Calendar className="mr-2 w-5 h-5" />
                Subscribe to Updates
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default QuarterlyReviews
