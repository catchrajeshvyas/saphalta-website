'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, TrendingUp, Download, ArrowRight, RefreshCw, Filter, Target, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts'

const BenchmarkDashboards = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y')
  const [selectedBenchmark, setSelectedBenchmark] = useState('Nifty50')

  const timeframes = ['1M', '3M', '6M', '1Y', '3Y', '5Y']
  const benchmarks = ['Nifty50', 'Nifty500', 'Sensex', 'Custom']

  const performanceData = [
    { month: 'Jan', portfolio: 2.1, nifty50: 1.8, nifty500: 1.9, sensex: 1.7 },
    { month: 'Feb', portfolio: 1.8, nifty50: 1.5, nifty500: 1.6, sensex: 1.4 },
    { month: 'Mar', portfolio: 3.2, nifty50: 2.8, nifty500: 2.9, sensex: 2.7 },
    { month: 'Apr', portfolio: 2.8, nifty50: 2.3, nifty500: 2.4, sensex: 2.2 },
    { month: 'May', portfolio: 2.5, nifty50: 2.1, nifty500: 2.2, sensex: 2.0 },
    { month: 'Jun', portfolio: 3.1, nifty50: 2.7, nifty500: 2.8, sensex: 2.6 },
    { month: 'Jul', portfolio: 2.9, nifty50: 2.4, nifty500: 2.5, sensex: 2.3 },
    { month: 'Aug', portfolio: 3.3, nifty50: 2.8, nifty500: 2.9, sensex: 2.7 },
    { month: 'Sep', portfolio: 2.7, nifty50: 2.2, nifty500: 2.3, sensex: 2.1 },
    { month: 'Oct', portfolio: 3.0, nifty50: 2.5, nifty500: 2.6, sensex: 2.4 },
    { month: 'Nov', portfolio: 2.8, nifty50: 2.3, nifty500: 2.4, sensex: 2.2 },
    { month: 'Dec', portfolio: 3.2, nifty50: 2.7, nifty500: 2.8, sensex: 2.6 }
  ]

  const riskMetrics = [
    { metric: 'Sharpe Ratio', portfolio: 1.85, benchmark: 1.42, difference: 0.43 },
    { metric: 'Max Drawdown', portfolio: -8.2, benchmark: -12.5, difference: 4.3 },
    { metric: 'Volatility', portfolio: 12.8, benchmark: 15.2, difference: -2.4 },
    { metric: 'VaR (95%)', portfolio: -2.1, benchmark: -2.8, difference: 0.7 },
    { metric: 'Beta', portfolio: 0.85, benchmark: 1.00, difference: -0.15 }
  ]

  const factorExposure = [
    { factor: 'Value', portfolio: 0.35, benchmark: 0.20, difference: 0.15 },
    { factor: 'Momentum', portfolio: 0.28, benchmark: 0.15, difference: 0.13 },
    { factor: 'Quality', portfolio: 0.42, benchmark: 0.25, difference: 0.17 },
    { factor: 'Low Vol', portfolio: 0.31, benchmark: 0.10, difference: 0.21 },
    { factor: 'Size', portfolio: -0.15, benchmark: 0.00, difference: -0.15 }
  ]

  const ytdPerformance = {
    portfolio: 12.8,
    nifty50: 10.5,
    nifty500: 11.2,
    sensex: 9.8
  }

  const renderPerformanceChart = () => (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={performanceData}>
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
            name="Saphalata Portfolio"
          />
          <Line 
            type="monotone" 
            dataKey="nifty50" 
            stroke="#0B1D3A" 
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Nifty 50"
          />
          <Line 
            type="monotone" 
            dataKey="nifty500" 
            stroke="#1E1E1E" 
            strokeWidth={2}
            strokeDasharray="3 3"
            name="Nifty 500"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )

  const renderRiskChart = () => (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={riskMetrics} layout="horizontal">
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

  const renderFactorChart = () => (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={factorExposure}>
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
          <Bar dataKey="portfolio" fill="#B87333" name="Portfolio" />
          <Bar dataKey="benchmark" fill="#0B1D3A" name="Benchmark" />
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
              Benchmark Dashboards
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Comprehensive performance analytics comparing our systematic strategies 
              against major market benchmarks with detailed risk and factor analysis.
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
              <span className="text-sm font-medium text-gray-700">Benchmark:</span>
              <div className="flex gap-2">
                {benchmarks.map((benchmark) => (
                  <Button
                    key={benchmark}
                    variant={selectedBenchmark === benchmark ? "premium" : "outline"}
                    size="sm"
                    onClick={() => setSelectedBenchmark(benchmark)}
                  >
                    {benchmark}
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

      {/* Performance Overview */}
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
              Performance vs Benchmarks
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              YTD performance comparison against major market indices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-premium transition-all duration-300 border-0 bg-white ring-2 ring-copper">
                <CardContent className="pt-6">
                  <TrendingUp className="w-12 h-12 text-copper mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-navy font-roboto-mono mb-2">
                    {ytdPerformance.portfolio}%
                  </h3>
                  <p className="text-gray-600 font-lato">Saphalata Portfolio</p>
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
                  <BarChart3 className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-navy font-roboto-mono mb-2">
                    {ytdPerformance.nifty50}%
                  </h3>
                  <p className="text-gray-600 font-lato">Nifty 50</p>
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
                  <Target className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-navy font-roboto-mono mb-2">
                    {ytdPerformance.nifty500}%
                  </h3>
                  <p className="text-gray-600 font-lato">Nifty 500</p>
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
                  <Award className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-navy font-roboto-mono mb-2">
                    {ytdPerformance.sensex}%
                  </h3>
                  <p className="text-gray-600 font-lato">Sensex</p>
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
                  Performance Trend Analysis
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

      {/* Risk Analysis */}
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
              Risk Analysis
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Comprehensive risk metrics comparison with benchmark indices
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
                  Portfolio risk metrics vs {selectedBenchmark} benchmark
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderRiskChart()}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Factor Analysis */}
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
              Factor Exposure Analysis
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Factor exposures and contributions compared to benchmark
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
                  Current factor exposures vs benchmark factor loadings
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderFactorChart()}
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  {factorExposure.map((factor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-lightGrey rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-copper rounded-full" />
                        <span className="font-medium text-gray-700">{factor.factor}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-navy font-roboto-mono">
                          {factor.difference > 0 ? '+' : ''}{factor.difference}
                        </div>
                        <div className="text-xs text-gray-500">
                          vs benchmark
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
              Download Benchmark Analysis
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Get comprehensive benchmark analysis reports and performance data for detailed analysis.
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

export default BenchmarkDashboards
