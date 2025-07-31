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
import { useState } from 'react'

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
              <button className="w-full bg-easypay-green text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-easypay-green-dark transition-colors">
                Download
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
                  <button className="flex-1 bg-easypay-green text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-easypay-green-dark transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    <Eye className="w-4 h-4" />
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
    </div>
  )
}