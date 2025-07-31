'use client'

import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  BookOpen, 
  Award,
  Clock,
  BarChart3,
  PieChart,
  Calendar,
  Download,
  RefreshCw,
  Eye,
  UserCheck,
  GraduationCap,
  Target,
  Activity,
  Globe,
  MapPin,
  AlertTriangle
} from 'lucide-react'
import { useState } from 'react'

export default function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')

  const periods = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: '1y', label: 'Last year' }
  ]

  // Mock data - in real app would come from API
  const platformStats = [
    {
      title: 'Total Merchants',
      value: '2,847',
      change: '+156',
      trend: 'up' as const,
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active This Month',
      value: '1,834',
      change: '+12.8%',
      trend: 'up' as const,
      icon: UserCheck,
      color: 'text-green-600'
    },
    {
      title: 'Total Completions',
      value: '8,912',
      change: '+24.1%',
      trend: 'up' as const,
      icon: GraduationCap,
      color: 'text-purple-600'
    },
    {
      title: 'Avg. Completion Time',
      value: '4.2 days',
      change: '-18.3%',
      trend: 'down' as const,
      icon: Clock,
      color: 'text-orange-600'
    }
  ]

  const moduleAnalytics = [
    {
      name: 'Module 1: Welcome to EasyPay Finance',
      enrollments: 2847,
      completions: 2683,
      completionRate: 94.2,
      avgScore: 87,
      avgTime: '42 min',
      certificates: 2683
    },
    {
      name: 'Module 2: How to Submit Applications',
      enrollments: 2683,
      completions: 2389,
      completionRate: 89.0,
      avgScore: 82,
      avgTime: '58 min',
      certificates: 2389
    },
    {
      name: 'Module 3: Establishing a Credit Culture',
      enrollments: 2389,
      completions: 1816,
      completionRate: 76.0,
      avgScore: 79,
      avgTime: '1h 32m',
      certificates: 1816
    },
    {
      name: 'Module 4: Advanced Topics',
      enrollments: 1816,
      completions: 1235,
      completionRate: 68.0,
      avgScore: 85,
      avgTime: '2h 15m',
      certificates: 1235
    }
  ]

  const recentActivity = [
    { merchant: 'Furniture Plus Dallas', action: 'Completed Module 2', time: '2 minutes ago', location: 'Dallas, TX' },
    { merchant: 'Auto Repair Central', action: 'Started Module 3', time: '5 minutes ago', location: 'Seattle, WA' },
    { merchant: 'Electronics World', action: 'Earned Certificate (Module 1)', time: '12 minutes ago', location: 'Phoenix, AZ' },
    { merchant: 'Home Solutions Pro', action: 'Failed Quiz (Module 2)', time: '18 minutes ago', location: 'Miami, FL' },
    { merchant: 'Retail Store #1247', action: 'Completed All Modules', time: '25 minutes ago', location: 'Los Angeles, CA' }
  ]

  const topPerformingStates = [
    { state: 'California', merchants: 387, completionRate: 92 },
    { state: 'Texas', merchants: 341, completionRate: 89 },
    { state: 'Florida', merchants: 298, completionRate: 87 },
    { state: 'New York', merchants: 256, completionRate: 91 },
    { state: 'Arizona', merchants: 234, completionRate: 88 }
  ]

  const alerts = [
    { type: 'warning', message: '23 merchants have been inactive for over 30 days', priority: 'medium' },
    { type: 'info', message: 'Module 4 completion rate is below target (68% vs 75% target)', priority: 'low' },
    { type: 'success', message: 'Overall platform engagement up 15% this month', priority: 'low' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/easypay-logo.svg" 
                alt="EasyPay Finance" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">EasyPay University Admin</h1>
                <p className="text-gray-600">Platform Analytics & Merchant Management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-easypay-green focus:border-transparent"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                {periods.map(period => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
              
              <button className="flex items-center gap-2 bg-easypay-green text-white px-4 py-2 rounded-lg hover:bg-easypay-green-dark transition-colors">
                <Download className="w-4 h-4" />
                Export Data
              </button>
              
              <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className={`flex items-center gap-3 p-4 rounded-lg border-l-4 ${
                alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                alert.type === 'info' ? 'bg-blue-50 border-blue-400' :
                'bg-green-50 border-green-400'
              }`}>
                <AlertTriangle className={`w-5 h-5 ${
                  alert.type === 'warning' ? 'text-yellow-600' :
                  alert.type === 'info' ? 'text-blue-600' :
                  'text-green-600'
                }`} />
                <span className="flex-1 text-sm">{alert.message}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  alert.priority === 'high' ? 'bg-red-100 text-red-700' :
                  alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {alert.priority}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Platform Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformStats.map((stat) => (
            <Card key={stat.title}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <div className={`flex items-center gap-1 mt-2 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Module Performance */}
          <div className="lg:col-span-2">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Module Performance Analytics</h3>
                <BarChart3 className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-6">
                {moduleAnalytics.map((module, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900 text-sm">{module.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{module.enrollments} enrolled</span>
                        <span>•</span>
                        <span>{module.certificates} certified</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Completion:</span>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={module.completionRate} className="flex-1" />
                          <span className="font-medium">{module.completionRate}%</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Avg Score:</span>
                        <p className="font-medium mt-1">{module.avgScore}%</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Avg Time:</span>
                        <p className="font-medium mt-1">{module.avgTime}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Completions:</span>
                        <p className="font-medium mt-1">{module.completions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-2 h-2 bg-easypay-green rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.merchant}</p>
                    <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-400">{activity.time}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-400">{activity.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Geographic Performance */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing States</h3>
            <Globe className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">State</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Merchants</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Completion Rate</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Progress</th>
                </tr>
              </thead>
              <tbody>
                {topPerformingStates.map((state, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? 'bg-yellow-100 text-yellow-700' :
                          index === 1 ? 'bg-gray-100 text-gray-700' :
                          index === 2 ? 'bg-orange-100 text-orange-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {index + 1}
                        </span>
                        <span className="font-medium text-gray-900">{state.state}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-medium">{state.merchants}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-medium">{state.completionRate}%</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-20">
                        <Progress value={state.completionRate} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center py-6">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Manage Merchants</h3>
            <p className="text-sm text-gray-600 mb-4">Add, remove, or update merchant accounts</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Manage Users
            </button>
          </Card>

          <Card className="text-center py-6">
            <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Content Management</h3>
            <p className="text-sm text-gray-600 mb-4">Update modules, quizzes, and resources</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
              Edit Content
            </button>
          </Card>

          <Card className="text-center py-6">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Certificates</h3>
            <p className="text-sm text-gray-600 mb-4">View and manage issued certificates</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
              View Certificates
            </button>
          </Card>

          <Card className="text-center py-6">
            <BarChart3 className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
            <p className="text-sm text-gray-600 mb-4">Deep dive into platform performance</p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
              View Analytics
            </button>
          </Card>
        </div>
      </div>
    </div>
  )
}