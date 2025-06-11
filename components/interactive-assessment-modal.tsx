"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  TrendingDown,
  Users,
  DollarSign,
  BarChart3,
  Zap,
  X,
  Minus,
  Search,
  Building2,
  Workflow,
  CreditCard,
  Shield,
} from "lucide-react"
import { trackEvent } from "@/lib/analytics"

interface InteractiveAssessmentModalProps {
  isOpen: boolean
  isMinimized: boolean
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
}

const questions = [
  {
    id: 1,
    question: "What's your biggest partner management challenge?",
    description: "Help us understand your primary pain point",
    options: [
      {
        id: "onboarding",
        label: "Slow Partner Onboarding",
        icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Manual processes, document collection delays",
      },
      {
        id: "evaluation",
        label: "Partner Risk Assessment",
        icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Inconsistent evaluation, lack of data insights",
      },
      {
        id: "collections",
        label: "Payment Collections",
        icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Delayed payments, manual follow-ups",
      },
      {
        id: "workflows",
        label: "Process Automation",
        icon: <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Manual approvals, scattered communications",
      },
    ],
  },
  {
    id: 2,
    question: "What's your industry sector?",
    description: "This helps us customize our recommendations",
    options: [
      {
        id: "fmcg",
        label: "FMCG / Consumer Goods",
        icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Fast-moving consumer goods, retail distribution",
      },
      {
        id: "manufacturing",
        label: "Manufacturing",
        icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Industrial manufacturing, supplier networks",
      },
      {
        id: "retail",
        label: "Retail / Distribution",
        icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Retail chains, distribution networks",
      },
      {
        id: "automotive",
        label: "Automotive",
        icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Auto manufacturers, dealer networks",
      },
      {
        id: "other",
        label: "Other Industries",
        icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Construction, electronics, agri-inputs",
      },
    ],
  },
  {
    id: 3,
    question: "How many partners do you currently manage?",
    description: "This helps us understand your scale requirements",
    options: [
      {
        id: "small",
        label: "50-200 Partners",
        icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Small to medium partner network",
      },
      {
        id: "medium",
        label: "200-500 Partners",
        icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Medium scale operations",
      },
      {
        id: "large",
        label: "500-1000 Partners",
        icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Large scale partner management",
      },
      {
        id: "enterprise",
        label: "1000+ Partners",
        icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Enterprise-scale operations",
      },
    ],
  },
  {
    id: 4,
    question: "What's your current digitization level?",
    description: "Understanding your current setup helps us recommend the right approach",
    options: [
      {
        id: "manual",
        label: "Mostly Manual Processes",
        icon: <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Email-based, spreadsheets, paper documents",
      },
      {
        id: "basic",
        label: "Basic Digital Tools",
        icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Some digital tools, but not integrated",
      },
      {
        id: "intermediate",
        label: "Partially Automated",
        icon: <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Some automation, looking to expand",
      },
      {
        id: "advanced",
        label: "Highly Digital",
        icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
        description: "Advanced systems, seeking optimization",
      },
    ],
  },
]

const getRecommendation = (answers: Record<string, string>) => {
  const challenge = answers["1"]
  const industry = answers["2"]
  const scale = answers["3"]
  const digitization = answers["4"]

  // Primary recommendation based on main challenge
  if (challenge === "onboarding") {
    return {
      title: "SuccessGo",
      subtitle: "Partner Onboarding & Offboarding",
      description:
        "Transform your partner onboarding with our digital-first platform. Perfect for streamlining document collection, KYC processes, and approval workflows.",
      features: [
        "Digital document collection and centralized vault",
        "Video KYC and site visit tracking",
        "Configurable approval workflows",
        "Real-time onboarding dashboards",
        "Automated compliance checks",
      ],
      potentialImpact: "70% faster partner onboarding",
      additionalBenefits: [
        "Reduce onboarding time from weeks to days",
        "100% digital documentation with audit trails",
        "Improved compliance and reduced risk",
      ],
      color: "orange",
      secondaryProducts: ["SuccessScore", "SuccessEz"],
    }
  } else if (challenge === "evaluation") {
    return {
      title: "SuccessScore",
      subtitle: "Financial & Risk Evaluation",
      description:
        "Comprehensive partner evaluation using 30+ data sources for financial, behavioral, and operational health scoring.",
      features: [
        "360-degree partner evaluation",
        "Financial and behavioral scoring",
        "Credit bureau integration",
        "Risk assessment reports",
        "Periodic re-evaluation",
      ],
      potentialImpact: "40% reduction in partner risk",
      additionalBenefits: [
        "Data-driven partner selection",
        "Early warning indicators for risk",
        "Standardized evaluation criteria",
      ],
      color: "blue",
      secondaryProducts: ["SuccessGo", "SuccessCollect"],
    }
  } else if (challenge === "collections") {
    return {
      title: "SuccessCollect",
      subtitle: "Collections & Receivables",
      description:
        "Automated receivables and collections management to reduce delays and improve working capital efficiency.",
      features: [
        "Automated NACH presentment",
        "Rule-based approval workflows",
        "Real-time collection monitoring",
        "Custom collection journeys",
        "Payment reconciliation",
      ],
      potentialImpact: "25% improvement in working capital",
      additionalBenefits: [
        "Reduced DSO (Days Sales Outstanding)",
        "Automated follow-ups and reminders",
        "Better cash flow predictability",
      ],
      color: "green",
      secondaryProducts: ["SuccessScore", "SuccessWiz"],
    }
  } else if (challenge === "workflows") {
    return {
      title: "SuccessEz",
      subtitle: "Workflow Automation",
      description:
        "Centralized platform for document-heavy, approval-driven processes with SLA tracking and automated escalations.",
      features: [
        "End-to-end workflow orchestration",
        "Real-time SLA tracking",
        "Automated escalations",
        "Exception handling",
        "ERP integration",
      ],
      potentialImpact: "60% reduction in process time",
      additionalBenefits: [
        "Complete visibility into workflows",
        "Elimination of manual follow-ups",
        "Standardized processes across teams",
      ],
      color: "purple",
      secondaryProducts: ["SuccessGo", "SuccessWiz"],
    }
  } else {
    return {
      title: "SuccessWiz",
      subtitle: "AR/AP Automation & Insights",
      description:
        "Intelligent automation for accounts receivable and payable processes with smart reconciliation capabilities.",
      features: [
        "Invoice automation",
        "Smart reconciliation",
        "ERP and banking integration",
        "Aging analysis",
        "Cash flow optimization",
      ],
      potentialImpact: "80% reduction in manual processing",
      additionalBenefits: [
        "Real-time financial insights",
        "Improved accuracy in reconciliation",
        "Optimized payment schedules",
      ],
      color: "indigo",
      secondaryProducts: ["SuccessCollect", "SuccessEz"],
    }
  }
}

export default function InteractiveAssessmentModal({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  onMaximize,
}: InteractiveAssessmentModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>("")

  const handleAnswer = (optionId: string) => {
    setSelectedOption(optionId)
    const newAnswers = { ...answers, [questions[currentQuestion].id]: optionId }
    setAnswers(newAnswers)

    // Track the answer
    trackEvent("assessment_answer", {
      question: questions[currentQuestion].question,
      answer: optionId,
    })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(answers[questions[currentQuestion + 1]?.id] || "")
    } else {
      setIsComplete(true)
      trackEvent("assessment_complete", { answers })
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[questions[currentQuestion - 1].id] || "")
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setIsComplete(false)
    setSelectedOption("")
    trackEvent("assessment_restart")
  }

  const handleClose = () => {
    handleRestart()
    onClose()
  }

  const handleGetDetailedAnalysis = () => {
    trackEvent("assessment_cta_click", { action: "detailed_analysis", answers })
    // This would typically open a contact form or redirect to a demo booking page
    alert("Thank you for your interest! Our team will contact you within 24 hours with a detailed analysis.")
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const recommendation = isComplete ? getRecommendation(answers) : null

  // Show minimized floating button when minimized
  if (!isOpen) return null

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={onMaximize}
          className="bg-gradient-to-r from-orange-400 to-blue-500 hover:from-orange-500 hover:to-blue-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <Search className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold animate-pulse">
          ?
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between rounded-t-xl">
          <div>
            <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-700 text-xs">
              Find Your Perfect Solution
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onMinimize}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              title="Minimize"
            >
              <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleClose}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              title="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {isComplete && recommendation ? (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Perfect Match Found!
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Based on your responses, here's our AI-powered recommendation
                </p>
              </div>

              <div className="text-center bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 border border-orange-200 dark:border-orange-800">
                <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-700 mb-3 sm:mb-4 text-xs">
                  AI Recommendation
                </Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  <span className="text-blue-600 dark:text-blue-400">Success</span>
                  <span className="text-orange-500 dark:text-orange-400">
                    {recommendation.title.replace("Success", "")}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
                  {recommendation.subtitle}
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                  {recommendation.description}
                </p>
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 dark:text-orange-400 mb-1 sm:mb-2">
                  {recommendation.potentialImpact}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Projected improvement based on similar implementations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Key Features:</h4>
                  {recommendation.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    Additional Benefits:
                  </h4>
                  {recommendation.additionalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {recommendation.secondaryProducts && (
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                    Complementary Solutions:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2 sm:mb-3">
                    Consider these additional products for a complete solution:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.secondaryProducts.map((product, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-xs"
                      >
                        <span className="text-blue-600 dark:text-blue-400">Success</span>
                        <span className="text-orange-500 dark:text-orange-400">{product.replace("Success", "")}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <Button
                  onClick={handleGetDetailedAnalysis}
                  className="w-full bg-gradient-to-r from-orange-400 to-blue-500 hover:from-orange-500 hover:to-blue-600 text-white"
                >
                  Get Detailed Analysis & Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRestart}
                  className="w-full border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Take Assessment Again
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {currentQuestion === 0 && (
                <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    👋 Welcome to Succesship!
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3">
                    Let's find the perfect solution for your partner management needs. This quick 4-question assessment
                    will help us recommend the best Succesship product for your business.
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span>Takes less than 2 minutes</span>
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Find Your Perfect Solution
                  </h2>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {currentQuestion + 1} of {questions.length}
                  </span>
                </div>
                <Progress value={progress} className="h-2 mb-4 sm:mb-6" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {questions[currentQuestion].question}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                  {questions[currentQuestion].description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md ${
                      selectedOption === option.id
                        ? "border-orange-400 dark:border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                        : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div
                        className={`mt-1 ${selectedOption === option.id ? "text-orange-500 dark:text-orange-400" : "text-gray-500 dark:text-gray-400"}`}
                      >
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium mb-1 text-sm sm:text-base">{option.label}</div>
                        <div className="text-xs sm:text-sm opacity-75">{option.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className="bg-gradient-to-r from-orange-400 to-blue-500 hover:from-orange-500 hover:to-blue-600 text-white disabled:opacity-50 w-full sm:w-auto"
                >
                  {currentQuestion === questions.length - 1 ? "Get My Recommendation" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
