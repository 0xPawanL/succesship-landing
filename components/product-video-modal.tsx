"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ProductVideoModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  videoUrl: string
}

export default function ProductVideoModal({ isOpen, onClose, productName, videoUrl }: ProductVideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            <span className="text-blue-600">Success</span>
            <span className="text-orange-500">{productName.replace("Success", "")}</span> Demo
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="p-4">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-500 mb-2">Video Demo</div>
              <div className="text-sm text-gray-400">{videoUrl ? "Loading video..." : "Demo video coming soon"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
