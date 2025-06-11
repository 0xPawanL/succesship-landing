"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, CheckCircle, Users, Building2, TrendingUp, Shield, Briefcase } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    role: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    trackEvent("form_field_interaction", { field: name })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackEvent("form_submit", { form: "contact", ...formData })
    alert("Thank you for your interest! We'll be in touch within 24 hours.")
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "",
      role: "",
      phone: "",
      message: "",
    })
  }

  const targetRoles = [
    {
      title: "Heads of Supply Chain",
      icon: <TrendingUp className="w-4 h-4" />,
      description: "Streamline distributor and vendor operations",
    },
    {
      title: "Heads of Operations",
      icon: <Building2 className="w-4 h-4" />,
      description: "Automate partner lifecycle management",
    },
    {
      title: "CFOs and Finance Controllers",
      icon: <Shield className="w-4 h-4" />,
      description: "Improve working capital and collections",
    },
    {
      title: "Procurement Heads",
      icon: <Briefcase className="w-4 h-4" />,
      description: "Enhance vendor evaluation and compliance",
    },
    {
      title: "Digital Transformation Teams",
      icon: <Users className="w-4 h-4" />,
      description: "Digitize partner operations end-to-end",
    },
  ]

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 mb-4">
              Get Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Transform Your Partner Operations
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to digitize your partner lifecycle? Let's discuss how{" "}
              <span className="text-blue-600 dark:text-blue-400">Success</span>
              <span className="text-orange-500 dark:text-orange-400">ship</span> can help your enterprise achieve
              operational excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mb-8">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-gray-900 dark:text-white text-lg sm:text-xl">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm">
                    Get in touch with our enterprise solutions team
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">+91 98765 43210</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Mon-Fri, 9 AM - 6 PM IST</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">hello@succesship.com</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Enterprise inquiries</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Mumbai, India</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Serving enterprises across India</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Target Audience */}
              <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-gray-900 dark:text-white text-lg sm:text-xl">
                    Who Should Contact Us
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm">
                    Decision makers and stakeholders in partner operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="space-y-3">
                    {targetRoles.map((role, index) => (
                      <div
                        key={index}
                        className="flex items-start p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center text-white mr-3">
                          {role.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">{role.title}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">{role.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-gray-900 dark:text-white text-lg sm:text-xl">
                    Request a Personalized Demo
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm">
                    See how <span className="text-blue-600 dark:text-blue-400">Success</span>
                    <span className="text-orange-500 dark:text-orange-400">ship</span> can streamline your specific
                    partner operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                          Company Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="Your company"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                          Industry *
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          required
                        >
                          <option value="">Select your industry</option>
                          <option value="FMCG">FMCG</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Retail">Retail</option>
                          <option value="Automotive">Automotive</option>
                          <option value="Construction">Construction</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Agri-inputs">Agri-inputs</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                          Your Role *
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                          required
                        >
                          <option value="">Select your role</option>
                          <option value="Head of Supply Chain">Head of Supply Chain</option>
                          <option value="Head of Operations">Head of Operations</option>
                          <option value="CFO/Finance Controller">CFO/Finance Controller</option>
                          <option value="Procurement Head">Procurement Head</option>
                          <option value="Digital Transformation">Digital Transformation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                        Tell us about your partner management challenges
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        placeholder="Describe your current partner onboarding, evaluation, or collections challenges..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-6 py-2 sm:px-8 sm:py-3 w-full sm:w-auto"
                      >
                        Request Demo
                      </Button>
                      <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 inline mr-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                        We'll respond within 24 hours
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Free Consultation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  30-minute discovery call to understand your needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Personalized Demo</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Customized demonstration based on your industry
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ROI Analysis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Detailed cost-benefit analysis for your use case
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
