'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, Download, Calendar, TrendingUp, BarChart3, FileText, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const InsightsHub = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const researchPapers = [
    {
      id: 1,
      title: 'Factor Investing in Indian Equity Markets: A Systematic Approach',
      author: 'Dr. Rajesh Kumar, CFA',
      date: 'Q4 2024',
      category: 'Research',
      description: 'Comprehensive analysis of factor-based investing strategies in Indian markets, examining value, momentum, quality, and low volatility factors.',
      downloadCount: 1247,
      isPremium: true,
      tags: ['Factor Investing', 'Equity Markets', 'Systematic Strategies']
    },
    {
      id: 2,
      title: 'Multi-Asset Allocation for Family Offices: Risk-Adjusted Returns',
      author: 'Saphalata Research Team',
      date: 'Q4 2024',
      category: 'Research',
      description: 'Strategic asset allocation framework designed specifically for family offices managing multi-generational wealth.',
      downloadCount: 892,
      isPremium: true,
      tags: ['Asset Allocation', 'Family Offices', 'Risk Management']
    },
    {
      id: 3,
      title: 'Quarterly Market Review: Q4 2024 Performance Analysis',
      author: 'Investment Committee',
      date: 'Q4 2024',
      category: 'Quarterly',
      description: 'Detailed analysis of market performance, factor attribution, and outlook for the coming quarter.',
      downloadCount: 2156,
      isPremium: false,
      tags: ['Market Review', 'Performance', 'Outlook']
    },
    {
      id: 4,
      title: 'ESG Integration in Systematic Investing: Evidence from Indian Markets',
      author: 'Dr. Priya Sharma, PhD',
      date: 'Q3 2024',
      category: 'Research',
      description: 'Exploring the impact of ESG factors on risk-adjusted returns in Indian equity markets.',
      downloadCount: 743,
      isPremium: true,
      tags: ['ESG', 'Sustainability', 'Risk-Adjusted Returns']
    },
    {
      id: 5,
      title: 'Interactive Dashboard: Portfolio Performance Analytics',
      author: 'Technology Team',
      date: 'Q4 2024',
      category: 'Dashboard',
      description: 'Real-time portfolio analytics dashboard with factor attribution and risk metrics.',
      downloadCount: 1834,
      isPremium: true,
      tags: ['Analytics', 'Dashboard', 'Performance']
    },
    {
      id: 6,
      title: 'Cost Analysis: Active vs Systematic Investing in India',
      author: 'Research Team',
      date: 'Q3 2024',
      category: 'Research',
      description: 'Comprehensive cost-benefit analysis comparing active management with systematic factor investing.',
      downloadCount: 967,
      isPremium: false,
      tags: ['Cost Analysis', 'Active vs Passive', 'Fees']
    }
  ]

  const categories = [
    { id: 'all', label: 'All Research', count: researchPapers.length },
    { id: 'Research', label: 'Research Papers', count: researchPapers.filter(p => p.category === 'Research').length },
    { id: 'Quarterly', label: 'Quarterly Reviews', count: researchPapers.filter(p => p.category === 'Quarterly').length },
    { id: 'Dashboard', label: 'Interactive Dashboards', count: researchPapers.filter(p => p.category === 'Dashboard').length }
  ]

  const filteredPapers = researchPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              Insights Hub
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Access our latest research, quarterly reviews, and interactive analytics. 
              Evidence-based insights for sophisticated investors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search research papers, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "premium" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-premium transition-all duration-300 group border-0 bg-white">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-navy font-playfair mb-2 group-hover:text-copper transition-colors">
                          {paper.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {paper.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {paper.downloadCount} downloads
                          </span>
                        </div>
                      </div>
                      {paper.isPremium && (
                        <div className="flex items-center gap-1 text-copper">
                          <Lock className="w-4 h-4" />
                          <span className="text-xs font-medium">Premium</span>
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-gray-600 font-lato leading-relaxed">
                      {paper.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-lightGrey text-gray-600 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500 font-lato">
                        By {paper.author}
                      </span>
                      <Button 
                        variant={paper.isPremium ? "premium" : "outline"}
                        size="sm"
                        className="group-hover:scale-105 transition-transform"
                      >
                        {paper.isPremium ? 'Access Premium' : 'Download Free'}
                        <Download className="ml-2 w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredPapers.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No research papers found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy font-playfair mb-6">
              Featured Insights
            </h2>
            <p className="text-gray-600 font-lato max-w-2xl mx-auto">
              Our most popular and impactful research pieces, curated for sophisticated investors.
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
              <TrendingUp className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Market Performance</h3>
              <p className="text-sm text-gray-600 font-lato">
                Real-time market analysis and factor attribution across our systematic strategies.
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
              <h3 className="text-lg font-semibold text-navy mb-2">Risk Analytics</h3>
              <p className="text-sm text-gray-600 font-lato">
                Advanced risk metrics and scenario analysis for portfolio optimization.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-lightGrey rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FileText className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Research Library</h3>
              <p className="text-sm text-gray-600 font-lato">
                Comprehensive collection of academic and practical research on systematic investing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default InsightsHub
