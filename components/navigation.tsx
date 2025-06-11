"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavigationProps {
  activeSection: string
  scrollY: number
  onOpenAssessment: () => void
}

export default function Navigation({ activeSection, scrollY, onOpenAssessment }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      trackEvent("navigation_click", { section: sectionId })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-all duration-300 ${
        scrollY > 50 ? "shadow-sm dark:shadow-gray-900/20" : ""
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2 min-w-0">
            <img
              src="/logo.png"
              alt="Succesship Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">
              <span className="text-blue-600 dark:text-blue-400">Success</span>
              <span className="text-orange-500 dark:text-orange-400">ship</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
            {["Home", "About", "Products", "Industries", "Customers", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === item.toLowerCase()
                    ? "text-orange-500 dark:text-orange-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
                }`}
              >
                {item}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenAssessment}
              className="border-orange-300 dark:border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950 whitespace-nowrap"
            >
              <Search className="w-4 h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Find Solution</span>
              <span className="lg:hidden">Find</span>
            </Button>
            <ThemeToggle />
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white whitespace-nowrap"
              onClick={() => trackEvent("cta_click", { location: "header", action: "request_demo" })}
            >
              <span className="hidden lg:inline">Request Demo</span>
              <span className="lg:hidden">Demo</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2 flex-shrink-0">
            <ThemeToggle />
            <button
              className="p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 w-full">
            <div className="flex flex-col space-y-3 pt-4 w-full">
              {["Home", "About", "Products", "Industries", "Customers", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left py-2 px-1 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors w-full"
                >
                  {item}
                </button>
              ))}
              <Button
                variant="outline"
                onClick={() => {
                  onOpenAssessment()
                  setIsMenuOpen(false)
                }}
                className="border-orange-300 dark:border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950 w-full justify-start mt-2"
              >
                <Search className="w-4 h-4 mr-2" />
                Find Solution
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white w-full justify-start"
                onClick={() => {
                  trackEvent("cta_click", { location: "mobile_menu", action: "request_demo" })
                  setIsMenuOpen(false)
                }}
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
