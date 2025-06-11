"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import DifferenceSection from "@/components/difference-section"
import ProductsSection from "@/components/products-section"
import IndustriesSection from "@/components/industries-section"
import SuccessStoriesSection from "@/components/success-stories-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import InteractiveAssessmentModal from "@/components/interactive-assessment-modal"
import AnalyticsDashboard from "@/components/analytics-dashboard"
import { trackPage } from "@/lib/analytics"

export default function HomePage() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false)
  const [isAssessmentMinimized, setIsAssessmentMinimized] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false)

  useEffect(() => {
    trackPage("home")

    // Check if user has visited before
    const hasVisited = localStorage.getItem("succesship-visited")
    if (!hasVisited) {
      // First time visitor - show assessment after a short delay
      const timer = setTimeout(() => {
        setIsAssessmentOpen(true)
        localStorage.setItem("succesship-visited", "true")
      }, 3000) // Show after 3 seconds

      return () => clearTimeout(timer)
    } else {
      setHasVisitedBefore(true)
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section
      const sections = ["home", "about", "products", "industries", "customers", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            if (activeSection !== section) {
              setActiveSection(section)
              trackPage(section)
            }
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const openAssessment = () => {
    setIsAssessmentOpen(true)
    setIsAssessmentMinimized(false)
  }

  const minimizeAssessment = () => {
    setIsAssessmentMinimized(true)
  }

  const closeAssessment = () => {
    setIsAssessmentOpen(false)
    setIsAssessmentMinimized(false)
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900">
      <Navigation activeSection={activeSection} scrollY={scrollY} onOpenAssessment={openAssessment} />

      <main className="w-full">
        <HeroSection onOpenAssessment={openAssessment} />
        <DifferenceSection />
        <ProductsSection />
        <IndustriesSection />
        <SuccessStoriesSection />
        <ContactSection />
      </main>

      <Footer />

      <InteractiveAssessmentModal
        isOpen={isAssessmentOpen}
        isMinimized={isAssessmentMinimized}
        onClose={closeAssessment}
        onMinimize={minimizeAssessment}
        onMaximize={openAssessment}
      />

      <AnalyticsDashboard />
    </div>
  )
}
