"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Quote, ArrowRight, TrendingUp, Users, Clock, CheckCircle, Building2, Award } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function SuccessStoriesSection() {
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

  const successStories = [
    {
      company: "Beiersdorf (Nivea India)",
      industry: "FMCG / Personal Care",
      logo: "/logos/nivea-logo.svg",
      products: ["SuccessGo", "SuccessScore", "SuccessCollect"],
      challenge:
        "Managing 500+ distributors across India with manual onboarding taking 3-4 weeks and inconsistent documentation",
      solution:
        "Implemented SuccessGo for digital onboarding, SuccessScore for distributor evaluation, and SuccessCollect for automated collections",
      results: [
        "70% faster distributor onboarding (from 4 weeks to 1.2 weeks)",
        "100% digital documentation with audit trails",
        "40% reduction in distributor defaults",
        "₹50 Cr+ in improved working capital efficiency",
      ],
      testimonials: [
        {
          quote:
            "Succesship has transformed how we onboard and manage our distributors across India. What used to take weeks now happens in days, with complete visibility and compliance.",
          person: "Rajesh Kumar",
          role: "Head of Supply Chain",
          type: "management",
        },
        {
          quote:
            "The system is so intuitive that our field team adopted it immediately. Document collection and verification that used to be a nightmare is now seamless.",
          person: "Priya Sharma",
          role: "Regional Sales Manager",
          type: "user",
        },
      ],
      timeline: "6 weeks implementation, 3 months full ROI",
    },
    {
      company: "Signify (Philips Lighting)",
      industry: "Electrical / Manufacturing",
      logo: "/logos/signify-logo.webp",
      products: ["SuccessGo", "SuccessScore", "SuccessEz"],
      challenge:
        "Complex vendor evaluation process taking 2-3 months with multiple stakeholders and inconsistent scoring criteria",
      solution:
        "Deployed SuccessScore for standardized vendor evaluation and SuccessEz for workflow automation across procurement teams",
      results: [
        "60% reduction in vendor evaluation time",
        "Standardized scoring across all categories",
        "90% improvement in procurement SLA adherence",
        "Enhanced vendor relationship quality",
      ],
      testimonials: [
        {
          quote:
            "The partner evaluation process that once took our team weeks of manual work is now automated and data-driven, giving us confidence in our partner selection.",
          person: "Amit Patel",
          role: "Finance Controller",
          type: "management",
        },
        {
          quote:
            "I love how the system automatically pulls financial data and gives me a complete vendor health score. It's like having a research team at my fingertips.",
          person: "Sneha Reddy",
          role: "Procurement Specialist",
          type: "user",
        },
      ],
      timeline: "4 weeks implementation, immediate value realization",
    },
    {
      company: "Dabur India Ltd.",
      industry: "FMCG / Healthcare",
      logo: "/logos/dabur-logo.avif",
      products: ["SuccessGo", "SuccessScore", "SuccessCollect"],
      challenge:
        "Managing diverse vendor base with varying compliance requirements and manual follow-ups for payments and documentation",
      solution: "Comprehensive partner lifecycle management with automated compliance tracking and collections",
      results: [
        "50% improvement in vendor compliance rates",
        "Reduced payment delays by 35%",
        "Streamlined onboarding for 200+ new vendors annually",
        "Enhanced audit readiness and documentation",
      ],
      testimonials: [
        {
          quote:
            "With Succesship, we've standardized our vendor onboarding and evaluation processes, resulting in significantly higher compliance rates and better partnerships.",
          person: "Vikram Singh",
          role: "Procurement Head",
          type: "management",
        },
        {
          quote:
            "The automated reminders and document tracking have made my job so much easier. I can focus on building relationships instead of chasing paperwork.",
          person: "Meera Joshi",
          role: "Vendor Relationship Executive",
          type: "user",
        },
      ],
      timeline: "5 weeks implementation, 4 months payback period",
    },
  ]

  const overallStats = [
    { label: "Average Time Savings", value: "60%", icon: <Clock className="w-5 h-5" /> },
    { label: "Process Automation", value: "80%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "User Adoption Rate", value: "95%", icon: <Users className="w-5 h-5" /> },
    { label: "Client Satisfaction", value: "4.8/5", icon: <Star className="w-5 h-5" /> },
  ]

  return (
    <section id="customers" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 mb-4">
            Success Stories & Case Studies
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real challenges, proven solutions, measurable results. See how leading enterprises transformed their partner
            operations.
          </p>
        </div>

        {/* Overall Impact Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {overallStats.map((stat, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Animated Testimonials Carousel */}
        <TestimonialCarousel />

        {/* Detailed Case Studies */}
        <div
          className={`transition-all duration-1000 delay-400 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50 dark:bg-gray-800 p-1 rounded-lg mb-8 h-auto">
              {successStories.map((story, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm p-4 h-auto flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center p-2">
                    <img
                      src={story.logo || "/placeholder.svg"}
                      alt={`${story.company} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-sm text-gray-900 dark:text-white">{story.company}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{story.industry}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {successStories.map((story, index) => (
              <TabsContent key={index} value={index.toString()}>
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Case Study Details */}
                  <div className="lg:col-span-2">
                    <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center p-3 border border-gray-200 dark:border-gray-600">
                            <img
                              src={story.logo || "/placeholder.svg"}
                              alt={`${story.company} logo`}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">{story.company}</CardTitle>
                            <CardDescription className="text-gray-600 dark:text-gray-300">
                              {story.industry}
                            </CardDescription>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {story.products.map((product, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700"
                            >
                              <span className="text-blue-600 dark:text-blue-400">Success</span>
                              <span className="text-orange-500 dark:text-orange-400">
                                {product.replace("Success", "")}
                              </span>
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Building2 className="w-4 h-4 mr-2 text-red-500 dark:text-red-400" />
                            The Challenge
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">{story.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
                            Our Solution
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">{story.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2 text-green-500 dark:text-green-400" />
                            Measurable Results
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {story.results.map((result, idx) => (
                              <div key={idx} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300 text-sm">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Clock className="w-4 h-4 text-orange-500 dark:text-orange-400 mr-2" />
                            <span className="font-medium text-gray-900 dark:text-white">Implementation Timeline</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{story.timeline}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Testimonials Sidebar */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What Our Clients Say</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Perspectives from management and end-users
                      </p>
                    </div>

                    {story.testimonials.map((testimonial, idx) => (
                      <Card
                        key={idx}
                        className="border-gray-200 dark:border-gray-700 bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-gray-800"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <Quote className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-2" />
                            <Badge
                              variant="outline"
                              className={
                                testimonial.type === "management"
                                  ? "border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-400"
                                  : "border-green-200 dark:border-green-700 text-green-700 dark:text-green-400"
                              }
                            >
                              {testimonial.type === "management" ? "Leadership" : "End User"}
                            </Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic">"{testimonial.quote}"</p>
                          <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                            <p className="font-medium text-gray-900 dark:text-white text-sm">{testimonial.person}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <div className="text-center">
                      <Button
                        variant="outline"
                        className="border-orange-300 text-orange-600 hover:bg-orange-50"
                        onClick={() => trackEvent("case_study_download", { company: story.company })}
                      >
                        Download Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Recognition Section */}
        <div
          className={`mt-16 bg-gradient-to-r from-orange-500 to-blue-600 dark:from-orange-600 dark:to-blue-700 rounded-2xl p-8 text-white text-center transition-all duration-1000 delay-600 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span className="font-medium">50+ Enterprise Clients</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6" />
              <span className="font-medium">4.8/5 Client Satisfaction</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <span className="font-medium">₹500+ Cr Transactions</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Join India's Leading Enterprises</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Transform your partner operations with proven solutions trusted by industry leaders across India.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
                trackEvent("navigation_click", { section: "contact" })
              }
            }}
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
