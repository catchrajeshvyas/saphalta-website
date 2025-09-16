'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Calculator, Download, ArrowRight, TrendingUp, DollarSign, Calendar, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CompoundingCalculator = () => {
  const [principal, setPrincipal] = useState(10000000) // ₹1 Crore
  const [rate, setRate] = useState(12) // 12% annual return
  const [time, setTime] = useState(20) // 20 years
  const [chartData, setChartData] = useState<Array<{year: number; value: number; formattedValue: string}>>([])

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`
    } else {
      return `₹${amount.toLocaleString()}`
    }
  }

  const generateGrowthData = (principal: number, rate: number, years: number) => {
    const data = []
    let currentValue = principal
    
    for (let year = 0; year <= years; year++) {
      data.push({
        year: year,
        value: currentValue,
        formattedValue: formatCurrency(currentValue)
      })
      currentValue = currentValue * (1 + rate / 100)
    }
    
    return data
  }

  useEffect(() => {
    const data = generateGrowthData(principal, rate, time)
    setChartData(data.map(item => ({
      year: item.year,
      value: item.value,
      formattedValue: formatCurrency(item.value),
    })))
  }, [principal, rate, time])

  const finalValue = chartData[chartData.length - 1]?.value || 0
  const totalGain = finalValue - principal
  const totalGainPercentage = ((totalGain / principal) * 100)

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
              Compounding Calculator
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Calculate the power of compound interest and see how your investments can grow over time 
              with systematic investing strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Controls */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy font-playfair">
                    Investment Parameters
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Adjust the parameters to see how your investment will grow
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Principal Amount */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Initial Investment Amount
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="number"
                          value={principal}
                          onChange={(e) => setPrincipal(Number(e.target.value))}
                          className="pl-10 text-lg"
                          placeholder="10000000"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Current: {formatCurrency(principal)}
                      </p>
                    </div>

                    {/* Annual Return Rate */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Annual Return Rate (%)
                      </label>
                      <div className="relative">
                        <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="number"
                          value={rate}
                          onChange={(e) => setRate(Number(e.target.value))}
                          className="pl-10 text-lg"
                          placeholder="12"
                          step="0.1"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Systematic strategies typically target 10-15% annual returns
                      </p>
                    </div>

                    {/* Time Period */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Investment Period (Years)
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="number"
                          value={time}
                          onChange={(e) => setTime(Number(e.target.value))}
                          className="pl-10 text-lg"
                          placeholder="20"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Long-term investing maximizes compounding benefits
                      </p>
                    </div>

                    {/* Quick Presets */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quick Presets
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setPrincipal(1000000)
                            setRate(10)
                            setTime(10)
                          }}
                        >
                          ₹10L @ 10% for 10Y
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setPrincipal(10000000)
                            setRate(12)
                            setTime(20)
                          }}
                        >
                          ₹1Cr @ 12% for 20Y
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setPrincipal(50000000)
                            setRate(15)
                            setTime(25)
                          }}
                        >
                          ₹5Cr @ 15% for 25Y
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setPrincipal(100000000)
                            setRate(18)
                            setTime(30)
                          }}
                        >
                          ₹10Cr @ 18% for 30Y
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy font-playfair">
                    Investment Results
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Your investment growth projection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Final Value */}
                    <div className="text-center p-6 bg-gradient-to-r from-copper to-navy text-white rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Final Value After {time} Years</h3>
                      <div className="text-4xl font-bold font-roboto-mono">
                        {formatCurrency(finalValue)}
                      </div>
                    </div>

                    {/* Total Gain */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-lightGrey rounded-lg">
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Total Gain</h4>
                        <div className="text-2xl font-bold text-copper font-roboto-mono">
                          {formatCurrency(totalGain)}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-lightGrey rounded-lg">
                        <h4 className="text-sm font-medium text-gray-600 mb-1">Gain %</h4>
                        <div className="text-2xl font-bold text-navy font-roboto-mono">
                          {totalGainPercentage.toFixed(1)}%
                        </div>
                      </div>
                    </div>

                    {/* Key Insights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700">Key Insights:</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-copper" />
                          <span>Your money will multiply by {(finalValue / principal).toFixed(1)}x</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calculator className="w-4 h-4 text-copper" />
                          <span>Average annual growth: {formatCurrency(finalValue / time)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-copper" />
                          <span>Compounding effect: {formatCurrency(totalGain - (principal * rate * time / 100))}</span>
                        </div>
                      </div>
                    </div>

                    {/* Download Report */}
                    <Button variant="premium" size="lg" className="w-full group">
                      <Download className="mr-2 w-5 h-5" />
                      Download Report
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
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
              Growth Projection Chart
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Visualize how your investment will grow over time with the power of compounding
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-premium border-0 bg-white">
              <CardContent className="p-8">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="year" 
                        stroke="#666"
                        label={{ value: 'Years', position: 'insideBottom', offset: -10 }}
                      />
                      <YAxis 
                        stroke="#666"
                        tickFormatter={(value) => formatCurrency(value)}
                      />
                      <Tooltip 
                        formatter={(value: number) => [formatCurrency(value), 'Value']}
                        labelFormatter={(year) => `Year ${year}`}
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#B87333" 
                        strokeWidth={4}
                        dot={{ fill: '#B87333', strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, stroke: '#B87333', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Educational Content */}
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
              Understanding Compound Interest
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Learn why compound interest is called the "eighth wonder of the world"
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
              <h3 className="text-lg font-semibold text-navy mb-2">Exponential Growth</h3>
              <p className="text-sm text-gray-600 font-lato">
                Your returns earn returns, creating exponential growth over time
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Calendar className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Time is Key</h3>
              <p className="text-sm text-gray-600 font-lato">
                The longer you invest, the more powerful compounding becomes
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Consistent Returns</h3>
              <p className="text-sm text-gray-600 font-lato">
                Systematic strategies provide consistent returns for optimal compounding
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CompoundingCalculator
