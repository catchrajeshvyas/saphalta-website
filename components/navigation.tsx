'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Philosophy',
      href: '/philosophy',
    },
    {
      label: 'Solutions',
      href: '/solutions',
      submenu: [
        { label: 'Family Offices', href: '/solutions/family-offices' },
        { label: 'UHNI/HNI', href: '/solutions/hni' },
        { label: 'Institutions', href: '/solutions/institutions' },
      ],
    },
    {
      label: 'Insights Hub',
      href: '/insights',
      submenu: [
        { label: 'Research Papers', href: '/insights/research' },
        { label: 'Quarterly Reviews', href: '/insights/quarterly' },
        { label: 'Interactive Dashboards', href: '/insights/dashboards' },
      ],
    },
    {
      label: 'Academy',
      href: '/academy',
      submenu: [
        { label: 'Foundation', href: '/academy/foundation' },
        { label: 'Advanced', href: '/academy/advanced' },
        { label: 'Expert', href: '/academy/expert' },
      ],
    },
    {
      label: 'Tools',
      href: '/tools',
      submenu: [
        { label: 'Compounding Calculator', href: '/tools/calculator' },
        { label: 'Cost Comparison', href: '/tools/cost-comparison' },
        { label: 'Benchmark Dashboards', href: '/tools/benchmarks' },
      ],
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-copper rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-playfair">S</span>
            </div>
            <span className="text-xl font-bold text-navy font-playfair">Saphalata</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-copper transition-colors duration-200 font-medium"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown className="inline-block ml-1 w-4 h-4" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-premium border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                      activeDropdown === item.label && "opacity-100 visible"
                    )}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-copper hover:bg-lightGrey transition-colors duration-150"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Client Portal
            </Button>
            <Button variant="premium" size="sm">
              Request Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-copper hover:bg-lightGrey transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-copper transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-copper transition-colors duration-200 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Client Portal
                </Button>
                <Button variant="premium" size="sm" className="w-full">
                  Request Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
