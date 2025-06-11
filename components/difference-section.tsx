"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Target, Globe, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

export default function DifferenceSection() {
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

  const differentiators = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description:
        "Built with bank-level security standards, ensuring your partner data is always protected with end-to-end encryption and compliance certifications.",
      color: "blue",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Implementation",
      description:
        "Unlike traditional ERP integrations that take months, our modular approach gets you operational in 4-6 weeks with immediate ROI.",
      color: "orange",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Industry-Specific Workflows",
      description:
        "Pre-configured workflows for FMCG, manufacturing, and retail industries, eliminating the need for extensive customization.",
      color: "green",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Unified Partner Ecosystem",
      description:
        "Single platform to manage distributors, vendors, suppliers, and service providers - no more juggling multiple systems.",
      color: "purple",
    },
  ]

  const corePhilosophy = [
    "Partner Success is Your Success",
    "Transparency Builds Trust",
    "Automation Enables Growth",
    "Data Drives Decisions",
  ]

  const competitiveAdvantages = [
    {
      title: "Purpose-Built for B2B",
      description: "Unlike generic CRM or ERP modules, we're designed specifically for partner lifecycle management",
    },
    {
      title: "No-Code Configuration",
      description: "Business users can configure workflows without IT dependency",
    },
    {
      title: "Real-Time Intelligence",
      description: "Live dashboards and alerts keep you ahead of potential issues",
    },
    {
      title: "Seamless Integration",
      description: "Works with your existing ERP, banking, and communication systems",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 mb-4">
              Our Philosophy
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">What Sets Us Apart</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We don't just digitize processes — we reimagine how enterprises build and maintain successful partner
              relationships.
            </p>
          </div>

          {/* Core Differentiators */}
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {differentiators.map((item, index) => (
              <Card
                key={index}
                className="border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-${item.color}-50 dark:bg-${item.color}-900/30 rounded-full flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Philosophy */}
          <div
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16 border border-gray-100 dark:border-gray-700 transition-all duration-1000 delay-400 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Core Philosophy</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                These principles guide every feature we build and every partnership we form.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {corePhilosophy.map((principle, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Advantages */}
          <div
            className={`transition-all duration-1000 delay-600 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Succesship?</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We've built what we wished existed when we were managing partner operations at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{advantage.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{advantage.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Recognition Section */}
          <div
            className={`mt-16 bg-gradient-to-r from-orange-500 to-blue-600 dark:from-orange-600 dark:to-blue-700 rounded-2xl p-8 text-white text-center transition-all duration-1000 delay-800 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6" />
                <span className="font-medium">Economic Times Featured</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                <span className="font-medium">Top 10 B2B SaaS 2024</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Recognized Innovation</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our commitment to transforming partner operations has been recognized by industry leaders and media
              outlets across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
