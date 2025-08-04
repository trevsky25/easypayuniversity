'use client'

import { Award, CheckCircle, Star, Sparkles } from 'lucide-react'
import { EBucksIcon } from './eBucksIcon'

interface CertificateProps {
  recipientName: string
  shopName: string
  moduleTitle: string
  moduleId: number
  completionDate: string
  score: number
}

export function Certificate({
  recipientName,
  shopName,
  moduleTitle,
  moduleId,
  completionDate,
  score
}: CertificateProps) {
  const certificateId = `EP-CERT-${moduleId}-${Date.now().toString(36).toUpperCase()}`
  
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto" id="certificate">
      {/* Certificate Border */}
      <div className="border-8 border-double border-easypay-green p-8 relative">
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-easypay-green"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-easypay-green"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-easypay-green"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-easypay-green"></div>
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <EBucksIcon className="w-12 h-12" />
            <h1 className="text-4xl font-bold text-easypay-green">EasyPay University</h1>
            <EBucksIcon className="w-12 h-12" />
          </div>
          <div className="h-1 bg-gradient-to-r from-transparent via-easypay-green to-transparent mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-800">Certificate of Completion</h2>
        </div>

        {/* Certificate Content */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-lg text-gray-700">This certifies that</p>
            <p className="text-3xl font-bold text-gray-900 border-b-2 border-dotted border-gray-300 pb-2 mx-16">
              {recipientName}
            </p>
            <p className="text-lg text-gray-700">representing</p>
            <p className="text-2xl font-semibold text-easypay-green">
              {shopName}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-lg text-gray-700">has successfully completed</p>
            <p className="text-2xl font-bold text-gray-900 bg-gray-50 py-3 px-6 rounded-lg border">
              {moduleTitle}
            </p>
            <p className="text-lg text-gray-700">Module {moduleId}</p>
          </div>

          {/* Score Badge */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-easypay-green to-teal-600 text-white px-8 py-4 rounded-full flex items-center gap-3">
              <Star className="w-6 h-6 fill-current" />
              <span className="text-xl font-bold">Final Score: {score}%</span>
              <Star className="w-6 h-6 fill-current" />
            </div>
          </div>

          {/* Achievement Icons */}
          <div className="flex justify-center gap-8 py-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="text-sm text-gray-600">Certified</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600">Excellence</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-between items-end">
          <div className="text-left">
            <div className="border-t-2 border-gray-400 pt-2 w-48">
              <p className="text-sm text-gray-600">Date of Completion</p>
              <p className="font-semibold text-gray-800">{completionDate}</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-easypay-green/10 rounded-full flex items-center justify-center mb-2">
              <EBucksIcon className="w-12 h-12" />
            </div>
            <p className="text-xs text-gray-500">Official Seal</p>
          </div>
          
          <div className="text-right">
            <div className="border-t-2 border-gray-400 pt-2 w-48">
              <p className="text-sm text-gray-600">Certificate ID</p>
              <p className="font-mono text-xs text-gray-800">{certificateId}</p>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 italic">
            "Easy Payment Solutions - No Perfect Credit Required" - Advancing Excellence in Merchant Finance Training
          </p>
        </div>
      </div>
    </div>
  )
}

export function CertificateModal({
  isOpen,
  onClose,
  certificateData
}: {
  isOpen: boolean
  onClose: () => void
  certificateData: CertificateProps
}) {
  const handleDownload = () => {
    // Create a new window with the certificate
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const certificateElement = document.getElementById('certificate')
    if (!certificateElement) return

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>EasyPay University Certificate</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <script>
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'easypay-green': '#2E7D32',
                    'easypay-green-dark': '#1B5E20'
                  }
                }
              }
            }
          </script>
          <style>
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body class="bg-white">
          ${certificateElement.outerHTML}
          <div class="text-center mt-8 no-print">
            <button onclick="window.print()" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4">
              Print Certificate
            </button>
            <button onclick="window.close()" class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Close
            </button>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
  }

  const handleSave = async () => {
    try {
      // Use html2canvas if available, otherwise fall back to download
      if (typeof window !== 'undefined' && (window as any).html2canvas) {
        const certificateElement = document.getElementById('certificate')
        if (certificateElement) {
          const canvas = await (window as any).html2canvas(certificateElement, {
            backgroundColor: '#ffffff',
            scale: 2
          })
          
          const link = document.createElement('a')
          link.download = `EasyPay-Certificate-Module-${certificateData.moduleId}.png`
          link.href = canvas.toDataURL()
          link.click()
        }
      } else {
        // Fallback to print dialog
        handleDownload()
      }
    } catch (error) {
      console.error('Error saving certificate:', error)
      handleDownload()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
        {/* Fixed Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-900">🎉 Congratulations! Certificate Earned</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Certificate Display */}
        <div className="p-6">
          <Certificate {...certificateData} />
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4 p-6 pt-4 border-t border-gray-200 justify-center">
          <button
            onClick={handleSave}
            className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors font-medium flex items-center gap-2"
          >
            <Award className="w-5 h-5" />
            Save Certificate
          </button>
          <button
            onClick={handleDownload}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Print Certificate
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}