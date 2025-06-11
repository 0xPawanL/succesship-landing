"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, PlayCircle, Award, TrendingUp, Users } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import VectorAnimation from "@/components/vector-animation"

interface HeroSectionProps {
  onOpenAssessment: () => void
}

export default function HeroSection({ onOpenAssessment }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleFindSolution = () => {
    onOpenAssessment()
    trackEvent("assessment_modal_open", { location: "hero" })
  }

  return (
    <section
      id="home"
      className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden w-full"
    >
      {/* Vector Animation Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <VectorAnimation />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className=" mx-auto">
          {/* Awards and Recognition Banner */}
          <div
            className={`text-center mb-8 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Featured in Economic Times</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600" />

              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Top 10 B2B SaaS 2024</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600" />

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trusted by 50+ Enterprises</span>
              </div>
            </div> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 mb-4">
                Enterprise Partner Management
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Welcome to <span className="text-blue-600 dark:text-blue-400">Success</span>
                <span className="text-orange-500 dark:text-orange-400">ship</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Your Enterprise Platform for B2B Partner Onboarding, Collections & Financial Health Reports
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                Digitize and manage the complete lifecycle of your business partners — from onboarding and evaluation to
                collections and workflow automation.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white group w-full sm:w-auto"
                  onClick={() => trackEvent("cta_click", { location: "hero", action: "request_demo" })}
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-300 dark:border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950 group w-full sm:w-auto"
                  onClick={handleFindSolution}
                >
                  <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Find Your Solution
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 group w-full sm:w-auto"
                  onClick={() => trackEvent("cta_click", { location: "hero", action: "watch_video" })}
                >
                  Watch Video
                  <PlayCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              {/* Key Stats */}
              {/* <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500 dark:text-orange-400 mb-1">70%</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Faster Onboarding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-500 dark:text-blue-400 mb-1">60%</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Process Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-500 dark:text-green-400 mb-1">50%</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Better Compliance</div>
                </div>
              </div> */}
            </div>

            {/* Right Content - Enhanced Visual */}
            <div
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-8 border border-gray-100 dark:border-gray-700">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30 rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <PlayCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
                        Watch Product Demo
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">2 min overview</p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        Partner Onboarding
                      </span>
                      <span className="text-xs sm:text-sm text-orange-600 dark:text-orange-400 font-semibold">
                        70% Faster
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        Risk Assessment
                      </span>
                      <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        Real-time
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        Collections
                      </span>
                      <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-semibold">
                        Automated
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 dark:bg-orange-600 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 dark:bg-blue-600 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <div
            className={`mt-12 sm:mt-16 p-4 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-1000 delay-500 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                The Challenge
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                Managing external partners across FMCG, manufacturing, retail, automotive, and distribution industries
                often means dealing with scattered documents, email-based approvals, inconsistent evaluations, and
                delayed payments. These inefficiencies impact revenue, compliance, and customer delivery.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Success</span>
                <span className="text-orange-500 dark:text-orange-400 font-semibold">ship</span> brings clarity, speed,
                and control to every partner interaction through our modular and configurable platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
