'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, Building, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    investorType: '',
    investmentAmount: '',
    message: '',
    preferredContact: 'email',
    newsletter: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const investorTypes = [
    'Family Office',
    'UHNI Individual',
    'HNI Individual', 
    'Institution',
    'Corporate',
    'Other'
  ]

  const investmentRanges = [
    '₹1Cr - ₹5Cr',
    '₹5Cr - ₹10Cr',
    '₹10Cr - ₹25Cr',
    '₹25Cr - ₹50Cr',
    '₹50Cr+',
    'Prefer not to disclose'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        investorType: '',
        investmentAmount: '',
        message: '',
        preferredContact: 'email',
        newsletter: false
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@saphalata.com', 'investments@saphalata.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 22 4000 0000', '+91 22 4000 0001'],
      description: 'Mon-Fri, 9AM-6PM IST'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['Nariman Point', 'Mumbai, Maharashtra 400021', 'India'],
      description: 'By appointment only'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      description: 'IST (Indian Standard Time)'
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
              Contact Us
            </h1>
            <p className="text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
              Ready to explore systematic investing opportunities? We're here to provide confidential consultations 
              and answer your questions about our evidence-based investment strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Choose your preferred method of communication. We're committed to providing personalized service 
              to sophisticated investors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-premium transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-copper rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy font-playfair">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700 font-lato">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-copper font-medium">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-lightGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold text-navy font-playfair">
                    <MessageSquare className="w-6 h-6 text-copper" />
                    Request Confidential Consultation
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-lato">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Thank You!</h3>
                      <p className="text-gray-600 font-lato">
                        Your consultation request has been submitted successfully. 
                        We'll contact you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="font-lato"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="font-lato"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="font-lato"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Company/Organization
                          </label>
                          <Input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="font-lato"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Investor Type *
                          </label>
                          <select
                            name="investorType"
                            value={formData.investorType}
                            onChange={handleInputChange}
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-lato"
                          >
                            <option value="">Select investor type</option>
                            {investorTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Investment Range
                          </label>
                          <select
                            name="investmentAmount"
                            value={formData.investmentAmount}
                            onChange={handleInputChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-lato"
                          >
                            <option value="">Select range</option>
                            {investmentRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Preferred Contact Method
                        </label>
                        <div className="flex gap-4">
                          {[
                            { value: 'email', label: 'Email' },
                            { value: 'phone', label: 'Phone' },
                            { value: 'both', label: 'Both' }
                          ].map((method) => (
                            <label key={method.value} className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="preferredContact"
                                value={method.value}
                                checked={formData.preferredContact === method.value}
                                onChange={handleInputChange}
                                className="text-copper"
                              />
                              <span className="text-sm font-lato">{method.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-lato"
                          placeholder="Tell us about your investment objectives, timeline, and any specific questions you have..."
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="text-copper"
                        />
                        <label className="text-sm text-gray-600 font-lato">
                          Subscribe to our newsletter for market insights and research updates
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        variant="premium" 
                        size="lg" 
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Request Consultation
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-navy font-playfair">
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Initial Consultation</h4>
                        <p className="text-sm text-gray-600 font-lato">
                          We'll schedule a confidential call to understand your investment objectives and requirements.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Customized Proposal</h4>
                        <p className="text-sm text-gray-600 font-lato">
                          Receive a tailored investment proposal based on your specific needs and risk profile.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Ongoing Support</h4>
                        <p className="text-sm text-gray-600 font-lato">
                          Continuous monitoring, reporting, and strategic guidance throughout your investment journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-navy font-playfair">
                    Confidentiality Promise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-lato leading-relaxed mb-4">
                    We understand the sensitive nature of wealth management discussions. All consultations 
                    are strictly confidential and conducted with the highest level of discretion.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-copper" />
                      <span className="text-sm text-gray-700 font-lato">NDA protection available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-copper" />
                      <span className="text-sm text-gray-700 font-lato">Secure communication channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-copper" />
                      <span className="text-sm text-gray-700 font-lato">No information sharing without consent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-premium border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-navy font-playfair">
                    Quick Response
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-copper font-roboto-mono mb-2">
                      &lt; 24 Hours
                    </div>
                    <p className="text-gray-600 font-lato">
                      Average response time for consultation requests
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              Common questions about our systematic investing approach and services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-lightGrey">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-navy mb-2">What is systematic investing?</h4>
                  <p className="text-sm text-gray-600 font-lato">
                    Systematic investing uses rules-based, data-driven strategies to make investment decisions, 
                    removing emotion and bias from the process.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-lightGrey">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-navy mb-2">What are the minimum investment requirements?</h4>
                  <p className="text-sm text-gray-600 font-lato">
                    Minimum investments vary by client type: ₹10Cr+ for individuals, ₹50Cr+ for family offices, 
                    and ₹100Cr+ for institutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-lightGrey">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-navy mb-2">How do you ensure confidentiality?</h4>
                  <p className="text-sm text-gray-600 font-lato">
                    We maintain strict confidentiality protocols, offer NDA protection, and use secure 
                    communication channels for all client interactions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-lightGrey">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-navy mb-2">What makes Saphalata different?</h4>
                  <p className="text-sm text-gray-600 font-lato">
                    Our evidence-based approach combines academic rigor with practical implementation, 
                    focusing on factor investing and risk management.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-lightGrey">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-navy mb-2">How often do you report performance?</h4>
                  <p className="text-sm text-gray-600 font-lato">
                    We provide monthly performance reports, quarterly reviews, and annual comprehensive 
                    analysis to keep clients informed.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-lightGrey">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-navy mb-2">Do you offer customized strategies?</h4>
                  <p className="text-sm text-gray-600 font-lato">
                    Yes, we develop customized systematic strategies based on each client's specific 
                    objectives, constraints, and risk tolerance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Contact
