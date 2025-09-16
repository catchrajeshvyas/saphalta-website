'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Calculator, TrendingUp, BarChart3, Download, ArrowRight, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { calculateCompoundInterest, generateGrowthData, formatCurrency, formatNumber, formatPercentage } from '@/lib/utils'

const Tools = () => {
  const [activeTool, setActiveTool] = useState('calculator')

  // Compounding Calculator State
  const [principal, setPrincipal] = useState(10000000)
  const [rate, setRate] = useState(12)
  const [time, setTime] = useState(20)
  const [frequency, setFrequency] = useState(1)

  // Cost Comparison State
  const [activeFee, setActiveFee] = useState(1.5)
  const [passiveFee, setPassiveFee] = useState(0.2)
  const [investmentAmount, setInvestmentAmount] = useState(10000000)
  const [investmentPeriod, setInvestmentPeriod] = useState(20)

  // Benchmark Dashboard State
  const [selectedBenchmark, setSelectedBenchmark] = useState('nifty50')

  const tools = [
    {
      id: 'calculator',
      title: 'Compounding Calculator',
      description: 'Calculate the power of compound interest and visualize wealth growth over time.',
      icon: Calculator,
      color: 'from-copper to-orange-600'
    },
    {
      id: 'cost-comparison',
      title: 'Cost Comparison Tool',
      description: 'Compare the impact of different fee structures on your long-term returns.',
      icon: TrendingUp,
      color: 'from-navy to-charcoal'
    },
    {
      id: 'benchmarks',
      title: 'Benchmark Dashboards',
      description: 'Track performance against various market benchmarks and indices.',
      icon: BarChart3,
      color: 'from-gray-700 to-gray-900'
    }
  ]

  const compoundingData = generateGrowthData(principal, rate, time).map(item => ({
    year: item.year,
    value: item.value,
    formattedValue: formatCurrency(item.value)
  }))

  const finalValue = calculateCompoundInterest(principal, rate / 100, time, frequency)
  const totalGain = finalValue - principal
  const gainPercentage = ((totalGain / principal) * 100)

  // Cost Comparison Calculations
  const activeFinalValue = calculateCompoundInterest(investmentAmount, (12 - activeFee) / 100, investmentPeriod)
  const passiveFinalValue = calculateCompoundInterest(investmentAmount, (12 - passiveFee) / 100, investmentPeriod)
  const costDifference = activeFinalValue - passiveFinalValue
  const costSavings = (costDifference / activeFinalValue) * 100

  const costComparisonData = [
    { name: 'Active Management', value: activeFinalValue, color: '#B87333' },
    { name: 'Systematic Investing', value: passiveFinalValue, color: '#0B1D3A' }
  ]

  // Benchmark Data
  const benchmarkData = {
    nifty50: {
      name: 'Nifty 50',
      ytd: 8.5,
      oneYear: 12.3,
      threeYear: 15.2,
      fiveYear: 11.8,
      volatility: 18.5,
      sharpe: 0.65
    },
    niftyNext50: {
      name: 'Nifty Next 50',
      ytd: 6.8,
      oneYear: 9.7,
      threeYear: 13.4,
      fiveYear: 10.2,
      volatility: 22.1,
      sharpe: 0.45
    },
    niftyMidcap: {
      name: 'Nifty Midcap 100',
      ytd: 4.2,
      oneYear: 7.1,
      threeYear: 11.8,
      fiveYear: 8.9,
      volatility: 25.3,
      sharpe: 0.35
    }
  }

  const currentBenchmark = benchmarkData[selectedBenchmark as keyof typeof benchmarkData]

  const performanceData = [
    { period: 'YTD', systematic: 9.2, benchmark: currentBenchmark.ytd },
    { period: '1Y', systematic: 13.8, benchmark: currentBenchmark.oneYear },
    { period: '3Y', systematic: 16.5, benchmark: currentBenchmark.threeYear },
    { period: '5Y', systematic: 12.9, benchmark: currentBenchmark.fiveYear }
  ]

  const handleReset = () => {
    setPrincipal(10000000)
    setRate(12)
    setTime(20)
    setFrequency(1)
  }

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
              Investment Tools & Calculators
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Powerful tools to analyze, compare, and optimize your investment strategies. 
              Make data-driven decisions with our comprehensive suite of calculators and dashboards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Selection */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={activeTool === tool.id ? "premium" : "outline"}
                size="lg"
                onClick={() => setActiveTool(tool.id)}
                className="flex-1 justify-start gap-3"
              >
                <tool.icon className="w-5 h-5" />
                {tool.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Compounding Calculator */}
      {activeTool === 'calculator' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy font-playfair mb-4">
                  Compounding Calculator
                </h2>
                <p className="text-xl text-gray-600 font-lato max-w-2xl mx-auto">
                  Visualize the power of compound interest and see how your investments can grow over time.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator Controls */}
                <Card className="shadow-premium border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl font-bold text-navy font-playfair">
                      <Calculator className="w-6 h-6 text-copper" />
                      Investment Parameters
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-lato">
                      Adjust the parameters to see the compounding effect
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

                    {/* Compounding Frequency */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Compounding Frequency
                      </label>
                      <div className="flex gap-2">
                        {[
                          { value: 1, label: 'Annual' },
                          { value: 2, label: 'Semi-Annual' },
                          { value: 4, label: 'Quarterly' },
                          { value: 12, label: 'Monthly' }
                        ].map((freq) => (
                          <Button
                            key={freq.value}
                            variant={frequency === freq.value ? "premium" : "outline"}
                            size="sm"
                            onClick={() => setFrequency(freq.value)}
                            className="text-xs"
                          >
                            {freq.label}
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

                    <div className="flex gap-2">
                      <Button 
                        variant="premium" 
                        className="flex-1"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleReset}
                      >
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Chart Visualization */}
                <Card className="shadow-premium border-0 bg-white">
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
                        <LineChart data={compoundingData}>
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
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Cost Comparison Tool */}
      {activeTool === 'cost-comparison' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              key="cost-comparison"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy font-playfair mb-4">
                  Cost Comparison Tool
                </h2>
                <p className="text-xl text-gray-600 font-lato max-w-2xl mx-auto">
                  Compare the long-term impact of different fee structures on your investment returns.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Input Controls */}
                <Card className="shadow-premium border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-navy font-playfair">
                      Fee Comparison Parameters
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Investment Amount (₹)
                      </label>
                      <Input
                        type="number"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="text-lg font-roboto-mono"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Investment Period (Years)
                      </label>
                      <Input
                        type="number"
                        value={investmentPeriod}
                        onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                        className="text-lg font-roboto-mono"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Active Management Fee (%)
                      </label>
                      <Input
                        type="number"
                        value={activeFee}
                        onChange={(e) => setActiveFee(Number(e.target.value))}
                        className="text-lg font-roboto-mono"
                        step="0.1"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Systematic Investing Fee (%)
                      </label>
                      <Input
                        type="number"
                        value={passiveFee}
                        onChange={(e) => setPassiveFee(Number(e.target.value))}
                        className="text-lg font-roboto-mono"
                        step="0.1"
                      />
                    </div>

                    <div className="bg-lightGrey rounded-lg p-6">
                      <h4 className="font-semibold text-navy mb-4">Cost Impact Summary</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Fee Difference</span>
                          <span className="font-bold text-copper">
                            {(activeFee - passiveFee).toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cost Savings</span>
                          <span className="font-bold text-copper">
                            {formatCurrency(costDifference)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Savings %</span>
                          <span className="font-bold text-copper">
                            {costSavings.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Comparison Chart */}
                <Card className="shadow-premium border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-navy font-playfair">
                      Long-term Value Comparison
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="h-80 w-full mb-6">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={costComparisonData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="name" stroke="#666" fontSize={12} />
                          <YAxis 
                            stroke="#666" 
                            fontSize={12} 
                            tickFormatter={(value) => `${(value / 10000000).toFixed(1)}Cr`}
                          />
                          <Tooltip 
                            formatter={(value: number) => [formatCurrency(value), 'Final Value']}
                            contentStyle={{
                              backgroundColor: 'white',
                              border: '1px solid #e5e5e5',
                              borderRadius: '8px',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                          />
                          <Bar dataKey="value" fill="#B87333" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-lightGrey rounded-lg">
                        <div className="text-2xl font-bold text-navy font-roboto-mono mb-1">
                          {formatCurrency(activeFinalValue)}
                        </div>
                        <div className="text-sm text-gray-600">Active Management</div>
                      </div>
                      <div className="text-center p-4 bg-lightGrey rounded-lg">
                        <div className="text-2xl font-bold text-copper font-roboto-mono mb-1">
                          {formatCurrency(passiveFinalValue)}
                        </div>
                        <div className="text-sm text-gray-600">Systematic Investing</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Benchmark Dashboards */}
      {activeTool === 'benchmarks' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              key="benchmarks"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy font-playfair mb-4">
                  Benchmark Performance Dashboard
                </h2>
                <p className="text-xl text-gray-600 font-lato max-w-2xl mx-auto">
                  Track our systematic strategies against major market benchmarks and indices.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Benchmark Selection */}
                <Card className="shadow-premium border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-navy font-playfair">
                      Select Benchmark
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {Object.entries(benchmarkData).map(([key, benchmark]) => (
                      <div
                        key={key}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          selectedBenchmark === key 
                            ? 'bg-copper text-white' 
                            : 'bg-lightGrey hover:bg-gray-200'
                        }`}
                        onClick={() => setSelectedBenchmark(key)}
                      >
                        <h4 className="font-semibold mb-2">{benchmark.name}</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>YTD: {benchmark.ytd}%</div>
                          <div>1Y: {benchmark.oneYear}%</div>
                          <div>Volatility: {benchmark.volatility}%</div>
                          <div>Sharpe: {benchmark.sharpe}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Performance Comparison */}
                <Card className="shadow-premium border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-navy font-playfair">
                      Performance vs {currentBenchmark.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="h-80 w-full mb-6">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="period" stroke="#666" fontSize={12} />
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
                          <Bar dataKey="benchmark" fill="#0B1D3A" name={currentBenchmark.name} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-lightGrey rounded-lg">
                        <div className="text-2xl font-bold text-copper font-roboto-mono mb-1">
                          9.2%
                        </div>
                        <div className="text-sm text-gray-600">Systematic YTD</div>
                      </div>
                      <div className="text-center p-4 bg-lightGrey rounded-lg">
                        <div className="text-2xl font-bold text-navy font-roboto-mono mb-1">
                          {currentBenchmark.ytd}%
                        </div>
                        <div className="text-sm text-gray-600">{currentBenchmark.name} YTD</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Insights */}
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
              Key Investment Insights
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Use these tools to make informed investment decisions and optimize your portfolio strategy.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Calculator className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Compound Growth</h3>
              <p className="text-sm text-gray-600 font-lato">
                Time is your greatest ally in wealth building. Start early and stay consistent for maximum impact.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Cost Efficiency</h3>
              <p className="text-sm text-gray-600 font-lato">
                Small differences in fees compound significantly over time. Choose cost-efficient strategies.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <BarChart3 className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Performance Tracking</h3>
              <p className="text-sm text-gray-600 font-lato">
                Regular benchmarking helps ensure your strategies remain competitive and aligned with goals.
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
              Ready to Optimize Your Investment Strategy?
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Use our systematic approach to maximize returns while minimizing costs and risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Start Your Analysis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-navy">
                Download All Tools
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Tools
