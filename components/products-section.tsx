"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Shield,
  Workflow,
  CreditCard,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Zap,
  Download,
  PlayCircle,
} from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import ProductVideoModal from "@/components/product-video-modal"

export default function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
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

  const products = [
    {
      name: "SuccessGo",
      title: "Partner Onboarding & Offboarding",
      description:
        "Streamline partner onboarding and offboarding with digital document collection, automated workflows, and real-time tracking.",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Digital document collection and centralized vault",
        "Video KYC and site visit tracking",
        "Configurable approval workflows",
        "Real-time onboarding dashboards",
        "Automated compliance checks",
      ],
      benefits: [
        "70% faster partner onboarding",
        "100% digital documentation",
        "Improved compliance and audit trails",
        "Reduced operational costs",
      ],
      color: "orange",
      isAvailable: true,
      videoUrl: "/videos/successgo-demo.mp4",
    },
    {
      name: "SuccessScore",
      title: "Financial & Risk Evaluation",
      description:
        "Comprehensive partner evaluation using 30+ data sources for financial, behavioral, and operational health scoring.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "360-degree partner evaluation",
        "Financial and behavioral scoring",
        "Credit bureau integration",
        "Risk assessment reports",
        "Periodic re-evaluation",
      ],
      benefits: [
        "40% reduction in partner risk",
        "Data-driven decision making",
        "Early warning indicators",
        "Standardized evaluation criteria",
      ],
      color: "blue",
      isAvailable: true,
      videoUrl: "/videos/successscore-demo.mp4",
    },
    {
      name: "SuccessEz",
      title: "Workflow Automation",
      description:
        "Centralized platform for document-heavy, approval-driven processes with SLA tracking and automated escalations.",
      icon: <Workflow className="w-8 h-8" />,
      features: [
        "End-to-end workflow orchestration",
        "Real-time SLA tracking",
        "Automated escalations",
        "Exception handling",
        "ERP integration",
      ],
      benefits: [
        "60% reduction in process time",
        "Complete visibility into workflows",
        "Elimination of manual follow-ups",
        "Standardized processes across teams",
      ],
      color: "green",
      isAvailable: true,
      videoUrl: "/videos/successez-demo.mp4",
    },
    {
      name: "SuccessCollect",
      title: "Collections & Receivables",
      description:
        "Automated receivables and collections management to reduce delays and improve working capital efficiency.",
      icon: <CreditCard className="w-8 h-8" />,
      features: [
        "Automated NACH presentment",
        "Rule-based approval workflows",
        "Real-time collection monitoring",
        "Custom collection journeys",
        "Payment reconciliation",
      ],
      benefits: [
        "25% improvement in working capital",
        "Reduced DSO (Days Sales Outstanding)",
        "Automated follow-ups and reminders",
        "Better cash flow predictability",
      ],
      color: "purple",
      isAvailable: true,
      videoUrl: "/videos/successcollect-demo.mp4",
    },
    {
      name: "SuccessWiz",
      title: "AR/AP Automation & Insights",
      description:
        "Intelligent automation for accounts receivable and payable processes with smart reconciliation capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Invoice automation",
        "Smart reconciliation",
        "ERP and banking integration",
        "Aging analysis",
        "Cash flow optimization",
      ],
      benefits: [
        "80% reduction in manual processing",
        "Real-time financial insights",
        "Improved accuracy in reconciliation",
        "Optimized payment schedules",
      ],
      color: "indigo",
      comingSoon: true,
      isAvailable: false,
      videoUrl: "/videos/successwiz-preview.mp4",
    },
  ]

  const handleProductTabChange = (productName: string) => {
    trackEvent("product_tab_click", { product: productName })
  }

  const openVideoModal = (productName: string) => {
    setSelectedProduct(productName)
    trackEvent("product_video_open", { product: productName })
  }

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 mb-4">
            Our Solutions
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive suite of integrated solutions designed specifically for enterprise partner operations
          </p>
        </div>

        <div className="max-w-8xl mx-auto">
          <Tabs defaultValue={products[0].name.toLowerCase()} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-orange-50 dark:bg-gray-800 p-1 rounded-lg mb-8">
              {products.map((product, index) => (
                <TabsTrigger
                  key={index}
                  value={product.name.toLowerCase()}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-orange-600 dark:data-[state=active]:text-orange-400 data-[state=active]:shadow-sm"
                  onClick={() => handleProductTabChange(product.name)}
                >
                  <span className="text-blue-600 dark:text-blue-400">Success</span>
                  <span className="text-orange-500 dark:text-orange-400">{product.name.replace("Success", "")}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {products.map((product, index) => (
              <TabsContent
                key={index}
                value={product.name.toLowerCase()}
                className={`transition-all duration-500 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Product Info */}
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-${product.color}-50 rounded-lg flex items-center justify-center text-${product.color}-600`}
                        >
                          {product.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            <span className="text-blue-600 dark:text-blue-400">Success</span>
                            <span className="text-orange-500 dark:text-orange-400">
                              {product.name.replace("Success", "")}
                            </span>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">{product.title}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        {product.comingSoon ? (
                          <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-700">
                            <Clock className="w-3 h-3 mr-1" />
                            Coming Soon
                          </Badge>
                        ) : (
                          <Badge className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700">
                            Available
                          </Badge>
                        )}
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                        {product.description}
                      </p>

                      {/* Video Preview */}
                      <div
                        className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 mb-6 cursor-pointer hover:shadow-lg transition-all duration-300 group"
                        onClick={() => openVideoModal(product.name)}
                      >
                        <div className="flex items-center justify-center">
                          <div className="w-16 h-16 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <PlayCircle className="w-8 h-8 text-orange-500 dark:text-orange-400" />
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <p className="font-medium text-gray-900 dark:text-white">Watch Product Demo</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">3 min overview</p>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <Button
                          className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"
                          onClick={() =>
                            trackEvent("product_cta_click", { product: product.name, action: "request_demo" })
                          }
                        >
                          Request Demo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-orange-300 dark:border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950"
                          onClick={() =>
                            trackEvent("product_cta_click", { product: product.name, action: "learn_more" })
                          }
                        >
                          Learn More
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          onClick={() =>
                            trackEvent("product_cta_click", { product: product.name, action: "download_brochure" })
                          }
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Brochure
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Business Impact Sidebar */}
                  <div className="bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Business Impact</h4>
                    <div className="space-y-4 mb-6">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center">
                          <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-full text-orange-600 dark:text-orange-400 mr-3">
                            <Zap className="w-4 h-4" />
                          </div>
                          <span className="text-gray-800 dark:text-gray-200 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 border border-orange-200 dark:border-orange-700 rounded-lg bg-orange-50 dark:bg-orange-900/20 mb-4">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400 mr-2" />
                        <h5 className="font-medium text-gray-900 dark:text-white">Implementation</h5>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Typical enterprise implementation takes 4-6 weeks, with immediate value realization.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">ROI</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Achieved within 3 months</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Product Video Modal */}
      <ProductVideoModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct || ""}
        videoUrl={products.find((p) => p.name === selectedProduct)?.videoUrl || ""}
      />
    </section>
  )
}
