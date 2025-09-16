'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, TrendingUp, PieChart, Activity, ArrowRight, RefreshCw, Download, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, PieChart as RechartsPieChart, Cell } from 'recharts'

const InteractiveDashboards = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y')
  const [selectedMetric, setSelectedMetric] = useState('performance')

  const timeframes = ['1M', '3M', '6M', '1Y', '3Y', '5Y']
  const metrics = ['performance', 'risk', 'allocation', 'factors']

  const performanceData = [
    { month: 'Jan', portfolio: 2.1, benchmark: 1.8, alpha: 0.3 },
    { month: 'Feb', portfolio: 1.8, benchmark: 1.5, alpha: 0.3 },
    { month: 'Mar', portfolio: 3.2, benchmark: 2.8, alpha: 0.4 },
    { month: 'Apr', portfolio: 2.8, benchmark: 2.3, alpha: 0.5 },
    { month: 'May', portfolio: 2.5, benchmark: 2.1, alpha: 0.4 },
    { month: 'Jun', portfolio: 3.1, benchmark: 2.7, alpha: 0.4 },
    { month: 'Jul', portfolio: 2.9, benchmark: 2.4, alpha: 0.5 },
    { month: 'Aug', portfolio: 3.3, benchmark: 2.8, alpha: 0.5 },
    { month: 'Sep', portfolio: 2.7, benchmark: 2.2, alpha: 0.5 },
    { month: 'Oct', portfolio: 3.0, benchmark: 2.5, alpha: 0.5 },
    { month: 'Nov', portfolio: 2.8, benchmark: 2.3, alpha: 0.5 },
    { month: 'Dec', portfolio: 3.2, benchmark: 2.7, alpha: 0.5 }
  ]

  const riskData = [
    { metric: 'Sharpe Ratio', portfolio: 1.85, benchmark: 1.42, difference: 0.43 },
    { metric: 'Max Drawdown', portfolio: -8.2, benchmark: -12.5, difference: 4.3 },
    { metric: 'Volatility', portfolio: 12.8, benchmark: 15.2, difference: -2.4 },
    { metric: 'VaR (95%)', portfolio: -2.1, benchmark: -2.8, difference: 0.7 },
    { metric: 'Beta', portfolio: 0.85, benchmark: 1.00, difference: -0.15 }
  ]

  const allocationData = [
    { name: 'Large Cap', value: 35, color: '#B87333' },
    { name: 'Mid Cap', value: 25, color: '#0B1D3A' },
    { name: 'Small Cap', value: 15, color: '#1E1E1E' },
    { name: 'International', value: 15, color: '#666666' },
    { name: 'Fixed Income', value: 10, color: '#999999' }
  ]

  const factorData = [
    { factor: 'Value', exposure: 0.35, contribution: 2.1, color: '#B87333' },
    { factor: 'Momentum', exposure: 0.28, contribution: 1.8, color: '#0B1D3A' },
    { factor: 'Quality', exposure: 0.42, contribution: 2.3, color: '#1E1E1E' },
    { factor: 'Low Vol', exposure: 0.31, contribution: 1.5, color: '#666666' },
    { factor: 'Size', exposure: -0.15, contribution: -0.8, color: '#999999' }
  ]

  const renderPerformanceChart = () => (
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
            dataKey="portfolio" 
            stroke="#B87333" 
            strokeWidth={3}
            name="Portfolio"
          />
          <Line 
            type="monotone" 
            dataKey="benchmark" 
            stroke="#0B1D3A" 
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Benchmark"
          />
          <Line 
            type="monotone" 
            dataKey="alpha" 
            stroke="#1E1E1E" 
            strokeWidth={2}
            name="Alpha"
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )

  const renderRiskChart = () => (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={riskData} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" stroke="#666" />
          <YAxis dataKey="metric" type="category" stroke="#666" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e0e0e0',
              borderRadius: '8px'
            }} 
          />
          <Bar dataKey="portfolio" fill="#B87333" name="Portfolio" />
          <Bar dataKey="benchmark" fill="#0B1D3A" name="Benchmark" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )

  const renderAllocationChart = () => (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <RechartsPieChart
            data={allocationData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
          >
            {allocationData.map((entry, index) => (
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
  )

  const renderFactorChart = () => (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={factorData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="factor" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e0e0e0',
              borderRadius: '8px'
            }} 
          />
          <Bar dataKey="exposure" fill="#B87333" name="Factor Exposure" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )

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
              Interactive Dashboards
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Real-time performance analytics, risk metrics, and portfolio insights 
              with interactive visualizations and detailed analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Timeframe:</span>
              <div className="flex gap-2">
                {timeframes.map((timeframe) => (
                  <Button
                    key={timeframe}
                    variant={selectedTimeframe === timeframe ? "premium" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTimeframe(timeframe)}
                  >
                    {timeframe}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex gap-2">
                {metrics.map((metric) => (
                  <Button
                    key={metric}
                    variant={selectedMetric === metric ? "premium" : "outline"}
                    size="sm"
                    onClick={() => setSelectedMetric(metric)}
                    className="capitalize"
                  >
                    {metric}
                  </Button>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm" className="group">
              <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" />
              Refresh Data
            </Button>
          </div>
        </div>
      </section>

      {/* Performance Dashboard */}
      {selectedMetric === 'performance' && (
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
                Performance Analytics
              </h2>
              <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
                Portfolio performance vs benchmark with alpha generation analysis
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardContent className="pt-6">
                    <TrendingUp className="w-12 h-12 text-copper mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-navy font-roboto-mono mb-2">
                      12.8%
                    </h3>
                    <p className="text-gray-600 font-lato">YTD Return</p>
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
                    <h3 className="text-3xl font-bold text-navy font-roboto-mono mb-2">
                      1.85
                    </h3>
                    <p className="text-gray-600 font-lato">Sharpe Ratio</p>
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
                    <Activity className="w-12 h-12 text-copper mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-navy font-roboto-mono mb-2">
                      0.5%
                    </h3>
                    <p className="text-gray-600 font-lato">Monthly Alpha</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-premium transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy font-playfair">
                    Performance vs Benchmark
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Monthly performance comparison over {selectedTimeframe}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {renderPerformanceChart()}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Risk Dashboard */}
      {selectedMetric === 'risk' && (
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
                Risk Analytics
              </h2>
              <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
                Comprehensive risk metrics and portfolio risk analysis
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-premium transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy font-playfair">
                    Risk Metrics Comparison
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Portfolio risk metrics vs benchmark
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {renderRiskChart()}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Allocation Dashboard */}
      {selectedMetric === 'allocation' && (
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
                Portfolio Allocation
              </h2>
              <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
                Current portfolio allocation across asset classes and regions
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
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
                      Current portfolio allocation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {renderAllocationChart()}
                    <div className="mt-4 space-y-2">
                      {allocationData.map((item, index) => (
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-navy font-playfair">
                      Allocation Summary
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-lato">
                      Key allocation metrics and targets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center p-4 bg-lightGrey rounded-lg">
                        <span className="text-gray-700 font-lato">Equity Allocation</span>
                        <span className="text-2xl font-bold text-copper font-roboto-mono">75%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-lightGrey rounded-lg">
                        <span className="text-gray-700 font-lato">Fixed Income</span>
                        <span className="text-2xl font-bold text-navy font-roboto-mono">10%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-lightGrey rounded-lg">
                        <span className="text-gray-700 font-lato">Alternatives</span>
                        <span className="text-2xl font-bold text-charcoal font-roboto-mono">15%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-lightGrey rounded-lg">
                        <span className="text-gray-700 font-lato">International</span>
                        <span className="text-2xl font-bold text-copper font-roboto-mono">15%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Factor Dashboard */}
      {selectedMetric === 'factors' && (
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
                Factor Analysis
              </h2>
              <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
                Factor exposures and contributions to portfolio performance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-premium transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy font-playfair">
                    Factor Exposures
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Current factor exposures and performance contributions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {renderFactorChart()}
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {factorData.map((factor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-lightGrey rounded-lg">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: factor.color }}
                          />
                          <span className="font-medium text-gray-700">{factor.factor}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-navy font-roboto-mono">
                            {factor.exposure > 0 ? '+' : ''}{factor.exposure}
                          </div>
                          <div className="text-xs text-gray-500">
                            {factor.contribution > 0 ? '+' : ''}{factor.contribution}% contrib
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

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
              Export Dashboard Data
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Download comprehensive reports and data exports for detailed analysis and reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                <Download className="mr-2 w-5 h-5" />
                Download Full Report
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Export Data (CSV)
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default InteractiveDashboards
