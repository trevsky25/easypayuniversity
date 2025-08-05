'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { 
  Download, 
  FileText, 
  Video, 
  Image as ImageIcon,
  Search,
  Filter,
  Star,
  Eye,
  Calendar
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { getResourceContent } from '@/data/resourceContent'
import { useEBucks } from '@/lib/eBucks'

interface Resource {
  id: number
  title: string
  description: string
  type: 'pdf' | 'video' | 'template' | 'image' | 'checklist'
  category: 'marketing' | 'training' | 'compliance' | 'scripts' | 'tools'
  fileSize: string
  downloads: number
  rating: number
  lastUpdated: string
  featured: boolean
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'EasyPay Finance Program Overview Brochure',
    description: 'Professional brochure explaining all three financing programs for customer education',
    type: 'pdf',
    category: 'marketing',
    fileSize: '2.4 MB',
    downloads: 1247,
    rating: 4.9,
    lastUpdated: '2024-01-15',
    featured: true
  },
  {
    id: 2,
    title: 'Customer Objection Handling Scripts',
    description: 'Proven scripts for addressing common customer concerns about financing',
    type: 'pdf',
    category: 'scripts',
    fileSize: '890 KB',
    downloads: 892,
    rating: 4.8,
    lastUpdated: '2024-01-10',
    featured: true
  },
  {
    id: 3,
    title: 'Application Process Video Tutorial',
    description: 'Step-by-step video showing how to submit applications using the mobile app',
    type: 'video',
    category: 'training',
    fileSize: '45 MB',
    downloads: 654,
    rating: 4.7,
    lastUpdated: '2024-01-08',
    featured: false
  },
  {
    id: 4,
    title: 'Staff Training Checklist Template',
    description: 'Customizable checklist for training new team members on EasyPay processes',
    type: 'template',
    category: 'training',
    fileSize: '1.2 MB',
    downloads: 543,
    rating: 4.6,
    lastUpdated: '2024-01-05',
    featured: false
  },
  {
    id: 5,
    title: 'Compliance Documentation Template',
    description: 'Required documentation template for regulatory compliance',
    type: 'template',
    category: 'compliance',
    fileSize: '756 KB',
    downloads: 432,
    rating: 4.8,
    lastUpdated: '2024-01-03',
    featured: false
  },
  {
    id: 6,
    title: 'Point-of-Sale Display Materials',
    description: 'High-resolution images for in-store financing promotion displays',
    type: 'image',
    category: 'marketing',
    fileSize: '12.3 MB',
    downloads: 367,
    rating: 4.5,
    lastUpdated: '2023-12-28',
    featured: false
  },
  {
    id: 7,
    title: 'Monthly Performance Review Checklist',
    description: 'Checklist for reviewing team performance and identifying improvement areas',
    type: 'checklist',
    category: 'tools',
    fileSize: '445 KB',
    downloads: 298,
    rating: 4.4,
    lastUpdated: '2023-12-20',
    featured: false
  },
  {
    id: 8,
    title: 'Customer Success Stories Collection',
    description: 'Real customer testimonials and success stories for marketing use',
    type: 'pdf',
    category: 'marketing',
    fileSize: '3.1 MB',
    downloads: 287,
    rating: 4.7,
    lastUpdated: '2023-12-15',
    featured: false
  }
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [previewResource, setPreviewResource] = useState<number | null>(null)
  const [claimedResources, setClaimedResources] = useState<Set<number>>(new Set())
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const { awardBucks } = useEBucks()
  
  // Load claimed resources from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('claimed-resource-easter-eggs')
    if (saved) {
      setClaimedResources(new Set(JSON.parse(saved)))
    }
  }, [])
  
  // Function to handle easter egg claim
  const handleEasterEggClaim = (resourceId: number) => {
    if (claimedResources.has(resourceId)) return
    
    // Find the resource title
    const resource = resources.find(r => r.id === resourceId)
    const resourceTitle = resource ? resource.title : 'Unknown Resource'
    
    // Award eBucks
    awardBucks(10, `Easter Egg Discovery - ${resourceTitle}`, undefined, 'reward')
    
    // Update claimed resources
    const newClaimed = new Set(claimedResources)
    newClaimed.add(resourceId)
    setClaimedResources(newClaimed)
    
    // Save to localStorage
    localStorage.setItem('claimed-resource-easter-eggs', JSON.stringify([...newClaimed]))
    
    // Show celebration effect
    setShowEasterEgg(true)
    setTimeout(() => setShowEasterEgg(false), 3000)
  }
  
  // Function to handle resource downloads
  const handleDownload = (resourceId: number, resourceTitle: string) => {
    const content = getResourceContent(resourceId)
    if (!content) return
    
    let documentText = `${content.content.title}\n`
    documentText += '='.repeat(content.content.title.length) + '\n\n'
    
    content.content.sections.forEach(section => {
      documentText += `${section.heading}\n`
      documentText += '-'.repeat(section.heading.length) + '\n'
      
      if (typeof section.content === 'string') {
        documentText += section.content + '\n\n'
      } else if (Array.isArray(section.content)) {
        section.content.forEach(item => {
          documentText += `${item}\n`
        })
        documentText += '\n'
      } else if (typeof section.content === 'object') {
        documentText += formatObjectContent(section.content) + '\n\n'
      }
    })
    
    // Create and download the file
    const blob = new Blob([documentText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${resourceTitle.replace(/[^a-zA-Z0-9]/g, '_')}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  
  // Helper function to format complex content objects
  const formatObjectContent = (obj: any): string => {
    let result = ''
    
    if (obj.programs) {
      obj.programs.forEach((program: any) => {
        result += `\n${program.name}\n`
        result += `${program.description}\n`
        program.features.forEach((feature: string) => {
          result += `  ${feature}\n`
        })
        result += '\n'
      })
    }
    
    if (obj.departments) {
      obj.departments.forEach((dept: any) => {
        result += `\n${dept.name}\n`
        result += `Phone: ${dept.phone}\n`
        result += `Email: ${dept.email}\n`
        result += `Hours: ${dept.hours}\n\n`
      })
    }
    
    if (obj.objections) {
      obj.objections.forEach((item: any, index: number) => {
        result += `\n${index + 1}. Customer: "${item.objection}"\n`
        result += `Response: ${item.response}\n\n`
      })
    }
    
    if (obj.segments) {
      obj.segments.forEach((segment: any) => {
        result += `\n${segment.time} - ${segment.title}\n`
        result += `${segment.script}\n\n`
      })
    }
    
    if (obj.fields) {
      obj.fields.forEach((field: string) => {
        result += `${field}\n`
      })
    }
    
    if (obj.checklist) {
      obj.checklist.forEach((item: string) => {
        result += `${item}\n`
      })
    }
    
    if (obj.sections) {
      obj.sections.forEach((section: any) => {
        result += `\n${section.title}:\n`
        section.items.forEach((item: string) => {
          result += `  ${item}\n`
        })
      })
    }
    
    if (obj.items) {
      obj.items.forEach((item: string) => {
        result += `${item}\n`
      })
    }
    
    if (obj.materials) {
      obj.materials.forEach((material: any) => {
        result += `\n${material.name}\n`
        result += `Description: ${material.description}\n`
        result += `Content: ${material.content}\n`
        result += `Specifications: ${material.specs}\n\n`
      })
    }
    
    if (obj.colors) {
      result += '\nBrand Colors:\n'
      obj.colors.forEach((color: string) => {
        result += `  ${color}\n`
      })
    }
    
    if (obj.fonts) {
      result += '\nFonts:\n'
      obj.fonts.forEach((font: string) => {
        result += `  ${font}\n`
      })
    }
    
    if (obj.rules) {
      result += '\nBrand Rules:\n'
      obj.rules.forEach((rule: string) => {
        result += `  ${rule}\n`
      })
    }
    
    if (obj.approved_messages) {
      result += '\nApproved Messages:\n'
      obj.approved_messages.forEach((message: string) => {
        result += `  ${message}\n`
      })
    }
    
    if (obj.metrics) {
      obj.metrics.forEach((metric: any) => {
        result += `\n${metric.category}:\n`
        metric.items.forEach((item: string) => {
          result += `  ${item}\n`
        })
      })
    }
    
    if (obj.calculations) {
      result += '\nCalculations:\n'
      obj.calculations.forEach((calc: string) => {
        result += `  ${calc}\n`
      })
    }
    
    if (obj.planning) {
      obj.planning.forEach((item: string) => {
        result += `${item}\n`
      })
    }
    
    if (obj.tips) {
      obj.tips.forEach((tip: string) => {
        result += `${tip}\n`
      })
    }
    
    return result
  }
  
  // Function to render content for preview
  const renderContentForPreview = (content: any): JSX.Element => {
    if (typeof content === 'string') {
      return <p className="whitespace-pre-wrap text-gray-700 mb-4">{content}</p>
    }
    
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc list-inside space-y-1 mb-4">
          {content.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      )
    }
    
    if (typeof content === 'object') {
      return <div className="mb-4">{renderObjectForPreview(content)}</div>
    }
    
    return <div></div>
  }
  
  // Function to render object content for preview
  const renderObjectForPreview = (obj: any): JSX.Element => {
    const elements: JSX.Element[] = []
    
    if (obj.programs) {
      elements.push(
        <div key="programs" className="space-y-4">
          {obj.programs.map((program: any, index: number) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-easypay-green mb-2">{program.name}</h4>
              <p className="text-gray-600 mb-3">{program.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {program.features.map((feature: string, i: number) => (
                  <li key={i} className="text-gray-700 text-sm">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    }
    
    if (obj.departments) {
      elements.push(
        <div key="departments" className="space-y-3">
          {obj.departments.map((dept: any, index: number) => (
            <div key={index} className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-blue-800">{dept.name}</h4>
              <p className="text-sm text-gray-600">Phone: {dept.phone}</p>
              <p className="text-sm text-gray-600">Email: {dept.email}</p>
              <p className="text-sm text-gray-600">Hours: {dept.hours}</p>
            </div>
          ))}
        </div>
      )
    }
    
    if (obj.objections) {
      elements.push(
        <div key="objections" className="space-y-4">
          {obj.objections.map((item: any, index: number) => (
            <div key={index} className="border-l-4 border-teal-400 pl-4">
              <div className="bg-red-50 p-3 rounded mb-2">
                <strong className="text-red-800">Customer:</strong> "{item.objection}"
              </div>
              <div className="bg-green-50 p-3 rounded">
                <strong className="text-green-800">Response:</strong> {item.response}
              </div>
            </div>
          ))}
        </div>
      )
    }
    
    if (obj.segments) {
      elements.push(
        <div key="segments" className="space-y-3">
          {obj.segments.map((segment: any, index: number) => (
            <div key={index} className="bg-purple-50 p-3 rounded-lg">
              <h4 className="font-semibold text-purple-800">{segment.time} - {segment.title}</h4>
              <p className="text-gray-700 text-sm mt-2 whitespace-pre-wrap">{segment.script}</p>
            </div>
          ))}
        </div>
      )
    }
    
    if (obj.checklist || obj.items) {
      const items = obj.checklist || obj.items
      elements.push(
        <ul key="checklist" className="space-y-1">
          {items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-easypay-green">•</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      )
    }
    
    if (obj.fields) {
      elements.push(
        <div key="fields" className="bg-gray-50 p-3 rounded-lg">
          {obj.fields.map((field: string, index: number) => (
            <p key={index} className="text-gray-700 font-mono text-sm">{field}</p>
          ))}
        </div>
      )
    }
    
    if (obj.sections) {
      elements.push(
        <div key="sections" className="space-y-4">
          {obj.sections.map((section: any, index: number) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">{section.title}</h4>
              <ul className="space-y-1">
                {section.items.map((item: string, i: number) => (
                  <li key={i} className="text-gray-700 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    }
    
    if (obj.materials) {
      elements.push(
        <div key="materials" className="space-y-4">
          {obj.materials.map((material: any, index: number) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">{material.name}</h4>
              <p className="text-gray-600 text-sm mb-2">{material.description}</p>
              <div className="text-sm text-gray-700">
                <strong>Content:</strong> {material.content}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                <strong>Specs:</strong> {material.specs}
              </div>
            </div>
          ))}
        </div>
      )
    }
    
    if (obj.colors || obj.fonts || obj.rules) {
      elements.push(
        <div key="brand" className="space-y-3">
          {obj.colors && (
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Brand Colors</h4>
              {obj.colors.map((color: string, index: number) => (
                <p key={index} className="text-sm text-gray-700">{color}</p>
              ))}
            </div>
          )}
          {obj.fonts && (
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Fonts</h4>
              {obj.fonts.map((font: string, index: number) => (
                <p key={index} className="text-sm text-gray-700">{font}</p>
              ))}
            </div>
          )}
          {obj.rules && (
            <div className="bg-yellow-50 p-3 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Brand Rules</h4>
              {obj.rules.map((rule: string, index: number) => (
                <p key={index} className="text-sm text-gray-700">{rule}</p>
              ))}
            </div>
          )}
        </div>
      )
    }
    
    if (obj.approved_messages) {
      elements.push(
        <div key="messages" className="bg-teal-50 p-3 rounded-lg">
          <h4 className="font-semibold text-teal-800 mb-2">Approved Messages</h4>
          <ul className="space-y-1">
            {obj.approved_messages.map((message: string, index: number) => (
              <li key={index} className="text-sm text-gray-700">• {message}</li>
            ))}
          </ul>
        </div>
      )
    }
    
    if (obj.metrics) {
      elements.push(
        <div key="metrics" className="space-y-3">
          {obj.metrics.map((metric: any, index: number) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">{metric.category}</h4>
              <ul className="space-y-1">
                {metric.items.map((item: string, i: number) => (
                  <li key={i} className="text-sm text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    }
    
    if (obj.calculations) {
      elements.push(
        <div key="calculations" className="bg-purple-50 p-3 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">Calculations</h4>
          <ul className="space-y-1">
            {obj.calculations.map((calc: string, index: number) => (
              <li key={index} className="text-sm text-gray-700">{calc}</li>
            ))}
          </ul>
        </div>
      )
    }
    
    if (obj.planning) {
      elements.push(
        <div key="planning" className="bg-orange-50 p-3 rounded-lg">
          <h4 className="font-semibold text-orange-800 mb-2">Planning</h4>
          <ul className="space-y-1">
            {obj.planning.map((item: string, index: number) => (
              <li key={index} className="text-sm text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      )
    }
    
    if (obj.tips) {
      elements.push(
        <div key="tips" className="bg-green-50 p-3 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">Tips</h4>
          <ul className="space-y-1">
            {obj.tips.map((tip: string, index: number) => (
              <li key={index} className="text-sm text-gray-700">{tip}</li>
            ))}
          </ul>
        </div>
      )
    }
    
    return <div className="space-y-4">{elements}</div>
  }

  const categories = ['all', 'marketing', 'training', 'compliance', 'scripts', 'tools']
  const types = ['all', 'pdf', 'video', 'template', 'image', 'checklist']

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesType = selectedType === 'all' || resource.type === selectedType
    
    return matchesSearch && matchesCategory && matchesType
  })

  const featuredResources = resources.filter(r => r.featured)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />
      case 'video': return <Video className="w-5 h-5 text-blue-500" />
      case 'template': return <FileText className="w-5 h-5 text-green-500" />
      case 'image': return <ImageIcon className="w-5 h-5 text-purple-500" />
      case 'checklist': return <FileText className="w-5 h-5 text-orange-500" />
      default: return <FileText className="w-5 h-5 text-gray-500" />
    }
  }

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'marketing': return 'bg-blue-100 text-blue-700'
      case 'training': return 'bg-green-100 text-green-700'
      case 'compliance': return 'bg-red-100 text-red-700'
      case 'scripts': return 'bg-purple-100 text-purple-700'
      case 'tools': return 'bg-orange-100 text-orange-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Resource Library</h1>
        <p className="text-gray-600 mt-2">
          Access marketing materials, training resources, and tools to help grow your business
        </p>
      </div>

      {/* Featured Resources */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredResources.map((resource) => (
            <Card key={resource.id} className="relative overflow-hidden border-2 border-easypay-green/20">
              <div className="absolute top-2 right-2">
                <span className="bg-easypay-green text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div className="flex items-start gap-3 mb-3">
                {getTypeIcon(resource.type)}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {resource.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                {resource.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{resource.fileSize}</span>
                <div className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  <span>{resource.downloads}</span>
                </div>
              </div>
              <button 
                onClick={() => setPreviewResource(resource.id)}
                className="w-full bg-easypay-green text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-easypay-green-dark transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </Card>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-easypay-green focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-easypay-green focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <select
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-easypay-green focus:border-transparent"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* All Resources */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            All Resources ({filteredResources.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                {getTypeIcon(resource.type)}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{resource.title}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(resource.category)}`}>
                    {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {resource.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{resource.fileSize}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Updated {new Date(resource.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={() => setPreviewResource(resource.id)}
                    className="flex-1 bg-easypay-green text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-easypay-green-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button 
                    onClick={() => handleDownload(resource.id, resource.title)}
                    className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                    title="Download Resource"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {filteredResources.length === 0 && (
        <Card className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <FileText className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </Card>
      )}

      {/* Preview Modal */}
      {previewResource && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border-2 border-easypay-green">
            {(() => {
              const content = getResourceContent(previewResource)
              const resource = resources.find(r => r.id === previewResource)
              if (!content || !resource) return null
              
              return (
                <>
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      {getTypeIcon(resource.type)}
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{content.content.title}</h2>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(resource.category)} mt-1`}>
                          {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreviewResource(null)}
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                      {content.content.sections.map((section, index) => (
                        <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.heading}</h3>
                          {renderContentForPreview(section.content)}
                        </div>
                      ))}
                      
                      {/* Easter Egg */}
                      <div className="mt-8 pt-4 border-t border-gray-100">
                        <div className="text-center">
                          {claimedResources.has(resource.id) ? (
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Already claimed bonus eBucks for this resource
                            </div>
                          ) : (
                            <button
                              onClick={() => handleEasterEggClaim(resource.id)}
                              className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                            >
                              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                              <span className="group-hover:animate-bounce">Found the hidden bonus!</span>
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Click to earn 10 eBucks!
                              </div>
                            </button>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-2 text-center">
                          Thanks for reading through the entire resource! 🎉
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{resource.fileSize}</span>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setPreviewResource(null)}
                        className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        Close
                      </button>
                      <button 
                        onClick={() => {
                          handleDownload(resource.id, resource.title)
                          setPreviewResource(null)
                        }}
                        className="px-4 py-2 bg-easypay-green text-white rounded-lg hover:bg-easypay-green-dark transition-colors flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}

      {/* Easter Egg Celebration */}
      {showEasterEgg && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center transform animate-bounce shadow-2xl border-2 border-yellow-400">
            <div className="mb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">🎉 Easter Egg Found!</h2>
              <p className="text-gray-600 mb-4">Great job reading through the entire resource!</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold">You earned 10 eBucks! 💰</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}