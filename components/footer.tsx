'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Linkedin, Twitter, FileText, Shield, Lock } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would integrate with an email service
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'News & Updates', href: '/news' },
    ],
    solutions: [
      { label: 'Family Offices', href: '/solutions/family-offices' },
      { label: 'UHNI/HNI', href: '/solutions/hni' },
      { label: 'Institutions', href: '/solutions/institutions' },
      { label: 'Investment Philosophy', href: '/philosophy' },
    ],
    resources: [
      { label: 'Research Papers', href: '/insights/research' },
      { label: 'Quarterly Reviews', href: '/insights/quarterly' },
      { label: 'Investment Academy', href: '/academy' },
      { label: 'Calculators', href: '/tools' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'SEBI Compliance', href: '/compliance' },
      { label: 'Risk Disclosure', href: '/risk-disclosure' },
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-navy to-charcoal text-white">
      {/* Newsletter Signup */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold font-playfair mb-4">
                Stay Informed with Our Latest Insights
              </h3>
              <p className="text-white/80 font-lato leading-relaxed">
                Receive our quarterly research reports, market insights, and exclusive content 
                directly in your inbox. No spam, just valuable information for sophisticated investors.
              </p>
            </div>
            
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      required
                    />
                    <Button 
                      type="submit" 
                      variant="premium"
                      disabled={isSubscribed}
                    >
                      {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                    </Button>
                  </div>
                  <p className="text-xs text-white/60">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-copper rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-playfair">S</span>
              </div>
              <span className="text-xl font-bold text-white font-playfair">Saphalata</span>
            </Link>
            
            <p className="text-white/80 font-lato leading-relaxed mb-6 max-w-md">
              SEBI-regulated Alternative Investment Fund delivering superior systematic investing 
              outcomes for discerning families and institutions across India.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-4 h-4 text-copper" />
                <span className="font-lato">contact@saphalata.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-4 h-4 text-copper" />
                <span className="font-lato">+91 22 4000 0000</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-4 h-4 text-copper" />
                <span className="font-lato">Mumbai, Maharashtra, India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="border-white/20 hover:bg-copper hover:border-copper">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 hover:bg-copper hover:border-copper">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h4 className="text-lg font-semibold font-playfair mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-white/80 hover:text-copper transition-colors font-lato"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold font-playfair mb-4">Solutions</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-white/80 hover:text-copper transition-colors font-lato"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold font-playfair mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-white/80 hover:text-copper transition-colors font-lato"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance & Legal */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-copper" />
                <span>SEBI Regulated AIF</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-copper" />
                <span>Registration No: IN/AIF/2023/001</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-copper" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-copper transition-colors font-lato"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-white/60 font-lato">
              © 2024 Saphalata Investment Advisors LLP. All rights reserved. 
              This website is for informational purposes only and does not constitute investment advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
