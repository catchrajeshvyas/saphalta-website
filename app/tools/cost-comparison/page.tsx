'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Download, ArrowRight, TrendingUp, DollarSign, BarChart3, Target, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CostComparison = () => {
  const [investmentAmount, setInvestmentAmount] = useState(10000000) // ₹1 Crore
  const [timeHorizon, setTimeHorizon] = useState(20) // 20 years
  const [expectedReturn, setExpectedReturn] = useState(12) // 12%

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`
    } else {
      return `₹${amount.toLocaleString()}`
    }
  }

  const calculateCosts = () => {
    const systematicFees = {
      managementFee: 0.75, // 0.75% annually
      performanceFee: 10, // 10% of alpha
      totalFees: 0.75
    }

    const traditionalFees = {
      managementFee: 1.5, // 1.5% annually
      performanceFee: 15, // 15% of alpha
      totalFees: 1.5
    }

    const activeFees = {
      managementFee: 2.0, // 2.0% annually
      performanceFee: 20, // 20% of alpha
      totalFees: 2.0
    }

    const systematicCost = (investmentAmount * systematicFees.totalFees / 100) * timeHorizon
    const traditionalCost = (investmentAmount * traditionalFees.totalFees / 100) * timeHorizon
    const activeCost = (investmentAmount * activeFees.totalFees / 100) * timeHorizon

    return {
      systematic: {
        ...systematicFees,
        totalCost: systematicCost,
        netReturn: expectedReturn - systematicFees.totalFees
      },
      traditional: {
        ...traditionalFees,
        totalCost: traditionalCost,
        netReturn: expectedReturn - traditionalFees.totalFees
      },
      active: {
        ...activeFees,
        totalCost: activeCost,
        netReturn: expectedReturn - activeFees.totalFees
      }
    }
  }

  const costs = calculateCosts()

  const chartData = [
    {
      strategy: 'Systematic',
      managementFee: costs.systematic.managementFee,
      totalCost: costs.systematic.totalCost / 100000,
      netReturn: costs.systematic.netReturn,
      color: '#B87333'
    },
    {
      strategy: 'Traditional',
      managementFee: costs.traditional.managementFee,
      totalCost: costs.traditional.totalCost / 100000,
      netReturn: costs.traditional.netReturn,
      color: '#0B1D3A'
    },
    {
      strategy: 'Active',
      managementFee: costs.active.managementFee,
      totalCost: costs.active.totalCost / 100000,
      netReturn: costs.active.netReturn,
      color: '#1E1E1E'
    }
  ]

  const savings = costs.traditional.totalCost - costs.systematic.totalCost
  const savingsPercentage = ((savings / costs.traditional.totalCost) * 100)

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
              Cost Comparison Tool
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Compare the total cost of different investment approaches and see how 
              systematic investing can save you significant money over time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Input Controls */}
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
              Investment Parameters
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Adjust the parameters to see cost comparisons for your specific situation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-navy font-playfair">
                    Investment Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent text-lg"
                      placeholder="10000000"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Current: {formatCurrency(investmentAmount)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-navy font-playfair">
                    Time Horizon (Years)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      value={timeHorizon}
                      onChange={(e) => setTimeHorizon(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent text-lg"
                      placeholder="20"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Investment period
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-navy font-playfair">
                    Expected Return (%)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent text-lg"
                      placeholder="12"
                      step="0.1"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Annual return expectation
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Results */}
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
              Cost Comparison Results
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              See how much you can save with systematic investing over {timeHorizon} years
            </p>
          </motion.div>

          {/* Savings Highlight */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-premium border-0 bg-gradient-to-r from-copper to-navy text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-playfair mb-4">
                  Systematic Investing Saves You
                </h3>
                <div className="text-5xl font-bold font-roboto-mono mb-2">
                  {formatCurrency(savings)}
                </div>
                <p className="text-xl opacity-90">
                  That's {savingsPercentage.toFixed(1)}% less than traditional investing!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Comparison */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {chartData.map((strategy, index) => (
              <motion.div
                key={strategy.strategy}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full hover:shadow-premium transition-all duration-300 border-0 ${
                  strategy.strategy === 'Systematic' ? 'ring-2 ring-copper' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-navy font-playfair">
                        {strategy.strategy}
                      </CardTitle>
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: strategy.color }}
                      />
                    </div>
                    <CardDescription className="text-gray-600 font-lato">
                      {strategy.strategy === 'Systematic' ? 'Our approach' : 
                       strategy.strategy === 'Traditional' ? 'Standard mutual funds' : 
                       'Active fund management'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-lightGrey rounded-lg">
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Management Fee</h4>
                        <div className="text-2xl font-bold text-navy font-roboto-mono">
                          {strategy.managementFee}%
                        </div>
                      </div>
                      
                      <div className="text-center p-4 bg-lightGrey rounded-lg">
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Total Cost ({timeHorizon}Y)</h4>
                        <div className="text-2xl font-bold text-copper font-roboto-mono">
                          {formatCurrency(strategy.totalCost * 100000)}
                        </div>
                      </div>
                      
                      <div className="text-center p-4 bg-lightGrey rounded-lg">
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Net Return</h4>
                        <div className="text-2xl font-bold text-navy font-roboto-mono">
                          {strategy.netReturn.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Cost Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-premium border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-navy font-playfair">
                  Total Cost Comparison
                </CardTitle>
                <CardDescription className="text-gray-600 font-lato">
                  Visual comparison of total costs over {timeHorizon} years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="strategy" stroke="#666" />
                      <YAxis 
                        stroke="#666"
                        tickFormatter={(value) => formatCurrency(value * 100000)}
                      />
                      <Tooltip 
                        formatter={(value: number) => [formatCurrency(value * 100000), 'Total Cost']}
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar dataKey="totalCost" fill="#B87333" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Insights */}
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
              Why Systematic Investing Costs Less
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Understanding the cost advantages of systematic approaches
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Calculator className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Lower Management Fees</h3>
              <p className="text-sm text-gray-600 font-lato">
                Systematic strategies require less active management, resulting in lower fees
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BarChart3 className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Reduced Trading Costs</h3>
              <p className="text-sm text-gray-600 font-lato">
                Systematic rebalancing reduces unnecessary trading and associated costs
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <AlertCircle className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">No Performance Fees</h3>
              <p className="text-sm text-gray-600 font-lato">
                Systematic strategies typically don't charge performance fees on alpha
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
              Ready to Save on Investment Costs?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Discover how systematic investing can reduce your costs while improving your returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                <Download className="mr-2 w-5 h-5" />
                Download Cost Analysis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CostComparison
