'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TrendingUp, Calculator, Download } from 'lucide-react'
import { calculateCompoundInterest, generateGrowthData, formatCurrency } from '@/lib/utils'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CompoundingCalculator = () => {
  const [principal, setPrincipal] = useState(10000000) // ₹1 Crore
  const [rate, setRate] = useState(12) // 12% annual return
  const [time, setTime] = useState(20) // 20 years
  const [chartData, setChartData] = useState<Array<{year: number; value: number; formattedValue: string}>>([])

  useEffect(() => {
    const data = generateGrowthData(principal, rate, time)
    setChartData(data.map(item => ({
      year: item.year,
      value: item.value,
      formattedValue: formatCurrency(item.value)
    })))
  }, [principal, rate, time])

  const finalValue = calculateCompoundInterest(principal, rate / 100, time)
  const totalGain = finalValue - principal
  const gainPercentage = ((totalGain / principal) * 100)

  const handleDownload = () => {
    // In a real implementation, this would generate and download a PDF report
    alert('Download feature will be available in the full version')
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-6">
            The Power of Systematic Compounding
          </h2>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
            Experience how disciplined, systematic investing can transform your wealth over time. 
            Adjust the parameters below to see the potential impact on your portfolio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-premium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold text-navy font-playfair">
                  <Calculator className="w-6 h-6 text-copper" />
                  Investment Calculator
                </CardTitle>
                <CardDescription className="text-gray-600 font-lato">
                  Customize your investment parameters to see the compounding effect
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Principal Amount */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Initial Investment (₹)
                  </label>
                  <Input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="text-lg font-roboto-mono"
                    placeholder="Enter amount"
                  />
                  <div className="flex gap-2">
                    {[1000000, 5000000, 10000000, 25000000].map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        size="sm"
                        onClick={() => setPrincipal(amount)}
                        className="text-xs"
                      >
                        {formatCurrency(amount)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Annual Return Rate */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Expected Annual Return (%)
                  </label>
                  <Input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="text-lg font-roboto-mono"
                    placeholder="Enter percentage"
                    step="0.1"
                  />
                  <div className="flex gap-2">
                    {[8, 10, 12, 15].map((rateValue) => (
                      <Button
                        key={rateValue}
                        variant="outline"
                        size="sm"
                        onClick={() => setRate(rateValue)}
                        className="text-xs"
                      >
                        {rateValue}%
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Time Period */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Investment Period (Years)
                  </label>
                  <Input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(Number(e.target.value))}
                    className="text-lg font-roboto-mono"
                    placeholder="Enter years"
                  />
                  <div className="flex gap-2">
                    {[10, 15, 20, 25].map((timeValue) => (
                      <Button
                        key={timeValue}
                        variant="outline"
                        size="sm"
                        onClick={() => setTime(timeValue)}
                        className="text-xs"
                      >
                        {timeValue} Years
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Results Summary */}
                <div className="bg-lightGrey rounded-lg p-6 space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Final Portfolio Value</p>
                    <p className="text-3xl font-bold text-navy font-roboto-mono">
                      {formatCurrency(finalValue)}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Gain</p>
                      <p className="text-xl font-bold text-copper font-roboto-mono">
                        {formatCurrency(totalGain)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Gain %</p>
                      <p className="text-xl font-bold text-copper font-roboto-mono">
                        {gainPercentage.toFixed(1)}%
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="premium" 
                  className="w-full"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-premium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold text-navy font-playfair">
                  <TrendingUp className="w-6 h-6 text-copper" />
                  Growth Projection
                </CardTitle>
                <CardDescription className="text-gray-600 font-lato">
                  Visual representation of your investment growth over time
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="year" 
                        stroke="#666"
                        fontSize={12}
                        tickFormatter={(value) => `Year ${value}`}
                      />
                      <YAxis 
                        stroke="#666"
                        fontSize={12}
                        tickFormatter={(value) => `${(value / 10000000).toFixed(1)}Cr`}
                      />
                      <Tooltip 
                        formatter={(value: number) => [formatCurrency(value), 'Portfolio Value']}
                        labelFormatter={(label) => `Year ${label}`}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e5e5',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#B87333" 
                        strokeWidth={3}
                        dot={{ fill: '#B87333', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#B87333', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-copper/10 to-navy/10 rounded-lg">
                  <p className="text-sm text-gray-700 font-lato text-center">
                    <strong>Note:</strong> This is a simplified projection based on constant returns. 
                    Actual results may vary due to market volatility, fees, and other factors.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Key Insights */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-lightGrey rounded-lg">
            <h4 className="text-lg font-semibold text-navy mb-2">Time is Your Ally</h4>
            <p className="text-sm text-gray-600 font-lato">
              The longer you stay invested, the more powerful compounding becomes. 
              Start early to maximize your wealth potential.
            </p>
          </div>
          
          <div className="text-center p-6 bg-lightGrey rounded-lg">
            <h4 className="text-lg font-semibold text-navy mb-2">Consistency Matters</h4>
            <p className="text-sm text-gray-600 font-lato">
              Regular, systematic investing often outperforms trying to time the market. 
              Discipline beats timing.
            </p>
          </div>
          
          <div className="text-center p-6 bg-lightGrey rounded-lg">
            <h4 className="text-lg font-semibold text-navy mb-2">Quality Returns</h4>
            <p className="text-sm text-gray-600 font-lato">
              Focus on consistent, risk-adjusted returns rather than chasing the highest possible gains.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompoundingCalculator
