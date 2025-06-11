"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShoppingCart,
  Factory,
  Building2,
  Car,
  Hammer,
  Wheat,
  Smartphone,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export default function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Reordered for better impact - high-volume industries first
  const industries = [
    {
      name: "FMCG",
      icon: <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Fast-moving consumer goods companies",
      stats: "500+ Distributors",
      impact: "70% faster onboarding",
      color: "orange",
    },
    {
      name: "Manufacturing",
      icon: <Factory className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Industrial and manufacturing enterprises",
      stats: "200+ Suppliers",
      impact: "60% cost reduction",
      color: "blue",
    },
    {
      name: "Retail",
      icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Retail chains and distribution networks",
      stats: "1000+ Partners",
      impact: "50% faster processing",
      color: "green",
    },
    {
      name: "Automotive",
      icon: <Car className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Auto manufacturers and suppliers",
      stats: "150+ Dealers",
      impact: "40% better compliance",
      color: "red",
    },
    {
      name: "Electronics",
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Consumer electronics and technology",
      stats: "300+ Retailers",
      impact: "80% digital adoption",
      color: "purple",
    },
    {
      name: "Construction",
      icon: <Hammer className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Construction and infrastructure",
      stats: "100+ Contractors",
      impact: "90% process automation",
      color: "yellow",
    },
    {
      name: "Agri-inputs",
      icon: <Wheat className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Agricultural inputs and equipment",
      stats: "250+ Dealers",
      impact: "65% efficiency gain",
      color: "emerald",
    },
  ]

  const industryHighlights = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Market Leadership",
      description: "Serving industry leaders across 7 major sectors in India",
      color: "blue",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Scale & Reach",
      description: "Managing 2500+ active partners across our client base",
      color: "green",
    },
    {
      icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Value Creation",
      description: "₹500+ Crores in partner transactions processed annually",
      color: "orange",
    },
  ]

  return (
    <section
      id="industries"
      className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 mb-4">
            Industry Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Purpose-built solutions for enterprises with complex partner networks across India's key industries
          </p>
        </div>

        {/* Industry Highlights */}
        <div
          className={`grid md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16 transition-all duration-1000 delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {industryHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-${highlight.color}-50 dark:bg-${highlight.color}-900/30 rounded-full flex items-center justify-center text-${highlight.color}-600 dark:text-${highlight.color}-400`}
                >
                  {highlight.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industries Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6 transition-all duration-1000 delay-400 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              onClick={() => trackEvent("industry_click", { industry: industry.name })}
            >
              <CardContent className="p-3 sm:p-6 text-center">
                <div
                  className={`w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 bg-${industry.color}-50 dark:bg-${industry.color}-900/30 rounded-lg flex items-center justify-center group-hover:bg-${industry.color}-100 dark:group-hover:bg-${industry.color}-900/50 transition-colors text-${industry.color}-600 dark:text-${industry.color}-400`}
                >
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">
                  {industry.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 line-clamp-2">
                  {industry.description}
                </p>

                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-400">{industry.stats}</div>
                  <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">{industry.impact}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry-Specific Value Props */}
        <div
          className={`mt-10 sm:mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-8 transition-all duration-1000 delay-600 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Industry-Specific Capabilities
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each industry has unique partner management challenges. Our solutions are configured to address these
              specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 border border-orange-200 dark:border-orange-700 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">FMCG & Retail</h4>
              <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Distributor territory management</li>
                <li>• SKU-wise performance tracking</li>
                <li>• Seasonal demand planning</li>
              </ul>
            </div>

            <div className="p-3 sm:p-4 border border-blue-200 dark:border-blue-700 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Manufacturing</h4>
              <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Supplier quality certifications</li>
                <li>• Raw material procurement</li>
                <li>• Production planning integration</li>
              </ul>
            </div>

            <div className="p-3 sm:p-4 border border-green-200 dark:border-green-700 rounded-lg bg-green-50 dark:bg-green-900/20">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automotive</h4>
              <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Dealer network management</li>
                <li>• Warranty claim processing</li>
                <li>• Service center coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
