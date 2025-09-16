'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, Download, Calendar, TrendingUp, ArrowRight, Filter, Star, Eye, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const ResearchPapers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const researchPapers = [
    {
      id: 1,
      title: 'Factor-Based Investing in Indian Equity Markets',
      author: 'Dr. Rajesh Kumar',
      date: '2024-01-15',
      category: 'Equity Research',
      description: 'Comprehensive analysis of factor-based investing strategies in Indian markets, examining value, momentum, quality, and low volatility factors.',
      downloads: 1247,
      views: 3421,
      featured: true,
      premium: false,
      tags: ['Factor Investing', 'Indian Markets', 'Equity Strategy']
    },
    {
      id: 2,
      title: 'Systematic Risk Management for Family Offices',
      author: 'Dr. Priya Sharma',
      date: '2024-01-10',
      category: 'Risk Management',
      description: 'Advanced risk management frameworks specifically designed for family office portfolios with multi-generational wealth objectives.',
      downloads: 892,
      views: 2156,
      featured: true,
      premium: true,
      tags: ['Risk Management', 'Family Offices', 'Portfolio Strategy']
    },
    {
      id: 3,
      title: 'ESG Integration in Systematic Investment Strategies',
      author: 'Dr. Amit Patel',
      date: '2024-01-05',
      category: 'ESG Research',
      description: 'How environmental, social, and governance factors can be systematically integrated into investment decision-making processes.',
      downloads: 1563,
      views: 4123,
      featured: false,
      premium: false,
      tags: ['ESG', 'Sustainable Investing', 'Systematic Strategy']
    },
    {
      id: 4,
      title: 'Alternative Risk Premia in Indian Markets',
      author: 'Dr. Neha Gupta',
      date: '2023-12-28',
      category: 'Alternative Investments',
      description: 'Exploration of alternative risk premia strategies and their application in Indian investment markets.',
      downloads: 734,
      views: 1892,
      featured: false,
      premium: true,
      tags: ['Alternative Investments', 'Risk Premia', 'Market Analysis']
    },
    {
      id: 5,
      title: 'Tax-Efficient Investment Structures for UHNI',
      author: 'Dr. Vikram Singh',
      date: '2023-12-20',
      category: 'Tax Optimization',
      description: 'Comprehensive guide to tax-efficient investment structures and optimization strategies for ultra-high net worth individuals.',
      downloads: 2156,
      views: 5234,
      featured: true,
      premium: true,
      tags: ['Tax Optimization', 'UHNI', 'Investment Structures']
    },
    {
      id: 6,
      title: 'Fixed Income Systematic Strategies',
      author: 'Dr. Anjali Mehta',
      date: '2023-12-15',
      category: 'Fixed Income',
      description: 'Systematic approaches to fixed income investing with focus on duration and credit risk management.',
      downloads: 1087,
      views: 2765,
      featured: false,
      premium: false,
      tags: ['Fixed Income', 'Duration Management', 'Credit Risk']
    }
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Equity Research', label: 'Equity Research' },
    { value: 'Risk Management', label: 'Risk Management' },
    { value: 'ESG Research', label: 'ESG Research' },
    { value: 'Alternative Investments', label: 'Alternative Investments' },
    { value: 'Tax Optimization', label: 'Tax Optimization' },
    { value: 'Fixed Income', label: 'Fixed Income' }
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
              Research Papers
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              In-depth research and analysis on systematic investing, factor-based strategies, 
              and advanced portfolio management techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search research papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Papers */}
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
              Featured Research
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Our most popular and impactful research papers on systematic investing and portfolio management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.filter(paper => paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-premium transition-all duration-300 border-0 bg-white group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-copper fill-current" />
                        <span className="text-sm font-medium text-copper">Featured</span>
                      </div>
                      {paper.premium && (
                        <div className="px-2 py-1 bg-gradient-copper text-white text-xs font-bold rounded">
                          Premium
                        </div>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-navy font-playfair mb-3 group-hover:text-copper transition-colors">
                      {paper.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 font-lato leading-relaxed mb-4">
                      {paper.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="font-medium">By {paper.author}</span>
                        <span>{new Date(paper.date).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-lightGrey text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{paper.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{paper.downloads.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <Button 
                          variant="premium" 
                          size="sm"
                          className="group"
                        >
                          Download
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Papers */}
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
              All Research Papers
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Complete collection of our research and analysis on systematic investing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-premium transition-all duration-300 border-0 bg-white group">
                  <CardHeader>
                    {paper.premium && (
                      <div className="flex justify-end mb-3">
                        <div className="px-2 py-1 bg-gradient-copper text-white text-xs font-bold rounded">
                          Premium
                        </div>
                      </div>
                    )}
                    
                    <CardTitle className="text-xl font-bold text-navy font-playfair mb-3 group-hover:text-copper transition-colors">
                      {paper.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 font-lato leading-relaxed mb-4">
                      {paper.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="font-medium">By {paper.author}</span>
                        <span>{new Date(paper.date).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-lightGrey text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{paper.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{paper.downloads.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <Button 
                          variant="premium" 
                          size="sm"
                          className="group"
                        >
                          Download
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-white/80 font-lato max-w-2xl mx-auto leading-relaxed mb-8">
              Subscribe to our research newsletter and get access to exclusive insights 
              and analysis on systematic investing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="premium" size="lg" className="group">
                Subscribe
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ResearchPapers
