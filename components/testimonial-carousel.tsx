"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Responsive slides to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Head of Supply Chain",
      company: "Beiersdorf (Nivea India)",
      avatar: "/avatars/rajesh-kumar.jpg",
      quote:
        "Succesship has transformed how we onboard and manage our distributors across India. What used to take weeks now happens in days, with complete visibility and compliance.",
      product: "SuccessGo",
      companyLogo: "/logos/nivea-logo.svg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Regional Sales Manager",
      company: "Beiersdorf (Nivea India)",
      avatar: "/avatars/priya-sharma.jpg",
      quote:
        "The system is so intuitive that our field team adopted it immediately. Document collection and verification that used to be a nightmare is now seamless.",
      product: "SuccessGo",
      companyLogo: "/logos/nivea-logo.svg",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Finance Controller",
      company: "Signify (Philips Lighting)",
      avatar: "/avatars/amit-patel.jpg",
      quote:
        "The partner evaluation process that once took our team weeks of manual work is now automated and data-driven, giving us confidence in our partner selection.",
      product: "SuccessScore",
      companyLogo: "/logos/signify-logo.webp",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Procurement Specialist",
      company: "Signify (Philips Lighting)",
      avatar: "/avatars/sneha-reddy.jpg",
      quote:
        "I love how the system automatically pulls financial data and gives me a complete vendor health score. It's like having a research team at my fingertips.",
      product: "SuccessScore",
      companyLogo: "/logos/signify-logo.webp",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Procurement Head",
      company: "Dabur India Ltd.",
      avatar: "/avatars/vikram-singh.jpg",
      quote:
        "With Succesship, we've standardized our vendor onboarding and evaluation processes, resulting in significantly higher compliance rates and better partnerships.",
      product: "SuccessGo",
      companyLogo: "/logos/dabur-logo.avif",
    },
    {
      id: 6,
      name: "Meera Joshi",
      role: "Vendor Relationship Executive",
      company: "Dabur India Ltd.",
      avatar: "/avatars/meera-joshi.jpg",
      quote:
        "The automated reminders and document tracking have made my job so much easier. I can focus on building relationships instead of chasing paperwork.",
      product: "SuccessEz",
      companyLogo: "/logos/dabur-logo.avif",
    },
    {
      id: 7,
      name: "Arjun Nair",
      role: "Operations Director",
      company: "Eveready Industries",
      avatar: "/avatars/arjun-nair.jpg",
      quote:
        "The workflow automation capabilities have eliminated countless emails and manual follow-ups, allowing our team to focus on strategic initiatives.",
      product: "SuccessEz",
      companyLogo: "/logos/eveready-logo.png",
    },
    {
      id: 8,
      name: "Kavya Menon",
      role: "Collections Manager",
      company: "Asian Paints",
      avatar: "/avatars/kavya-menon.jpg",
      quote:
        "Our DSO has improved by 25% since implementing SuccessCollect. The automated NACH presentment and follow-ups have been game-changers.",
      product: "SuccessCollect",
      companyLogo: "/logos/asian-paints-logo.png",
    },
    {
      id: 9,
      name: "Rohit Gupta",
      role: "CFO",
      company: "Godrej Consumer Products",
      avatar: "/avatars/rohit-gupta.jpg",
      quote:
        "The real-time visibility into our partner financials and collections has significantly improved our working capital management.",
      product: "SuccessCollect",
      companyLogo: "/logos/godrej-logo.png",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / slidesToShow))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length, slidesToShow])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / slidesToShow))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(testimonials.length / slidesToShow)) % Math.ceil(testimonials.length / slidesToShow),
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            What Our Users Say
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real feedback from the people who use Succesship every day to transform their partner operations
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div
                  className={`grid grid-cols-1 ${slidesToShow === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"} gap-4 sm:gap-6 px-2 sm:px-4`}
                >
                  {testimonials
                    .slice(slideIndex * slidesToShow, slideIndex * slidesToShow + slidesToShow)
                    .map((testimonial) => (
                      <Card
                        key={testimonial.id}
                        className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                      >
                        <CardContent className="p-4 sm:p-6">
                          {/* Product Tag */}
                          <div className="mb-3 sm:mb-4">
                            <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-700 text-xs">
                              <span className="text-blue-600 dark:text-blue-400">Success</span>
                              <span className="text-orange-500 dark:text-orange-400">
                                {testimonial.product.replace("Success", "")}
                              </span>
                            </Badge>
                          </div>

                          {/* Quote */}
                          <div className="mb-4 sm:mb-6">
                            <div className="text-3xl sm:text-4xl text-orange-200 dark:text-orange-800 mb-1 sm:mb-2">
                              "
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed italic line-clamp-4 sm:line-clamp-none">
                              {testimonial.quote}
                            </p>
                          </div>

                          {/* Profile Section */}
                          <div className="flex items-center">
                            <div className="flex-shrink-0 mr-3 sm:mr-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-blue-500 dark:from-orange-500 dark:to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg">
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                            </div>
                            <div className="flex-grow">
                              <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                {testimonial.name}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                {testimonial.role}
                              </div>
                              <div className="flex items-center mt-1">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 flex items-center justify-center mr-2 p-1">
                                  <img
                                    src={testimonial.companyLogo || "/placeholder.svg"}
                                    alt={`${testimonial.company} logo`}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium truncate max-w-[120px] sm:max-w-none">
                                  {testimonial.company}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:shadow-xl transition-all duration-200 z-10 border border-gray-200 dark:border-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:shadow-xl transition-all duration-200 z-10 border border-gray-200 dark:border-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-orange-500 dark:bg-orange-400 w-6 sm:w-8"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-3 sm:mt-4">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {isAutoPlaying ? "Auto-playing • Hover to pause" : "Paused • Move cursor away to resume"}
          </div>
        </div>
      </div>
    </div>
  )
}
