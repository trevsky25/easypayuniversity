'use client'

import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { 
  PlayCircle, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  HelpCircle,
  Award,
  Star,
  Image,
  Download,
  Phone,
  Clock as ClockIcon,
  AlertCircle,
  XCircle
} from 'lucide-react'
import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import trainingModules from '@/data/modules'
import { useEBucks } from '@/lib/eBucks'
import { InteractiveContent } from '@/components/interactive/InteractiveContent'

// ImageCarousel Component for handling multiple screenshots
const ImageCarousel = ({ images }: { images: Array<{ imageUrl: string; imageAlt: string; imageCaption: string; title: string }> }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Image Display */}
      <div className="relative bg-gray-50 rounded-lg p-6 mb-4">
        <div className="flex items-center justify-center">
          <img 
            src={currentImage.imageUrl} 
            alt={currentImage.imageAlt} 
            className="max-w-full h-auto border border-gray-200 rounded-lg shadow-lg"
            style={{ 
              maxHeight: '500px',
              maxWidth: '350px',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all"
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Image Info */}
      <div className="text-center mb-4">
        <h5 className="font-medium text-gray-900 mb-2">{currentImage.title}</h5>
        <p className="text-sm text-gray-600">
          <strong>Legend:</strong> {currentImage.imageCaption}
        </p>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-2 mb-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-easypay-green' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="text-center text-sm text-gray-500">
          {currentIndex + 1} of {images.length}
        </div>
      )}
    </div>
  )
}

// PillarsCarousel Component for the 4 pillars
const PillarsCarousel = ({ pillars }: { pillars: any[] }) => {
  const [currentPillarIndex, setCurrentPillarIndex] = React.useState(0)

  const nextPillar = () => {
    setCurrentPillarIndex((prevIndex) => (prevIndex + 1) % pillars.length)
  }

  const prevPillar = () => {
    setCurrentPillarIndex((prevIndex) => (prevIndex - 1 + pillars.length) % pillars.length)
  }

  const goToPillar = (index: number) => {
    setCurrentPillarIndex(index)
  }

  if (!pillars || pillars.length === 0) return null

  const currentPillar = pillars[currentPillarIndex]

  return (
    <div className="max-w-2xl mx-auto px-12 relative">
      {/* Navigation Arrows - Outside the content box */}
      {pillars.length > 1 && (
        <>
          <button 
            onClick={prevPillar}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all hover:shadow-xl"
            aria-label="Previous pillar"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextPillar}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all hover:shadow-xl"
            aria-label="Next pillar"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Main Pillar Display */}
      <div className="bg-white rounded-xl border-2 shadow-lg overflow-hidden" style={{ borderColor: currentPillar.color }}>
        {/* Pillar Header */}
        <div className="p-6 text-center" style={{ backgroundColor: currentPillar.color + '10' }}>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold text-white" style={{ backgroundColor: currentPillar.color }}>
            {currentPillar.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Pillar {currentPillar.id}: {currentPillar.title}
          </h3>
          <p className="text-gray-600 font-medium">{currentPillar.description}</p>
        </div>
        
        {/* Pillar Content */}
        <div className="p-6">
          <div className="space-y-3 mb-4">
            {currentPillar.details?.map((detail, detailIndex) => (
              <div key={detailIndex} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: currentPillar.color }}></div>
                <span className="text-gray-700 text-sm">{detail}</span>
              </div>
            ))}
          </div>
          
          {/* Example Section */}
          {currentPillar.example && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
              <h5 className="font-semibold text-gray-800 mb-3">Example:</h5>
              {currentPillar.example.wrong && currentPillar.example.right ? (
                <div className="space-y-2">
                  <div className="p-2 bg-red-50 border border-red-200 rounded text-sm">
                    <span className="text-red-600 font-medium">❌ Avoid:</span> {currentPillar.example.wrong}
                  </div>
                  <div className="p-2 bg-green-50 border border-green-200 rounded text-sm">
                    <span className="text-green-600 font-medium">✅ Better:</span> {currentPillar.example.right}
                  </div>
                </div>
              ) : currentPillar.example.components ? (
                <div className="space-y-1">
                  {currentPillar.example.components.map((component, componentIndex) => (
                    <div key={componentIndex} className="text-sm text-gray-600 flex items-center gap-2">
                      <span style={{ color: currentPillar.color }}>•</span>
                      {component}
                    </div>
                  ))}
                </div>
              ) : currentPillar.example.ideas ? (
                <div className="space-y-1">
                  {currentPillar.example.ideas.map((idea, ideaIndex) => (
                    <div key={ideaIndex} className="text-sm text-gray-600 flex items-center gap-2">
                      <span style={{ color: currentPillar.color }}>•</span>
                      {idea}
                    </div>
                  ))}
                </div>
              ) : currentPillar.example.actions ? (
                <div className="space-y-1">
                  {currentPillar.example.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="text-sm text-gray-600 flex items-center gap-2">
                      <span style={{ color: currentPillar.color }}>•</span>
                      {action}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* Pillar Navigation Dots */}
      {pillars.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {pillars.map((pillar, index) => (
            <button
              key={pillar.id}
              onClick={() => goToPillar(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPillarIndex 
                  ? 'bg-easypay-green' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to pillar ${index + 1}: ${pillar.title}`}
            />
          ))}
        </div>
      )}

      {/* Pillar Counter */}
      {pillars.length > 1 && (
        <div className="text-center text-sm text-gray-500 mt-2">
          Pillar {currentPillarIndex + 1} of {pillars.length}: {currentPillar.title}
        </div>
      )}
    </div>
  )
}

// Psychology Insights Carousel - shows one insight at a time
const PsychologyInsightsCarousel = ({ insights }: { insights: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  if (!insights || insights.length === 0) return null

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % insights.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + insights.length) % insights.length)
  }

  const currentInsight = insights[currentIndex]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg border-2 border-purple-200 p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {currentIndex + 1}
            </div>
          </div>
          <div className="flex-1">
            <h5 className="font-bold text-purple-900 mb-3 text-lg">{currentInsight.insight}</h5>
            <p className="text-gray-700 mb-4">{currentInsight.description}</p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 italic">"{currentInsight.example}"</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-center mt-6 gap-4">
        <button
          onClick={goToPrevious}
          disabled={insights.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>
        
        <div className="flex space-x-2">
          {insights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-purple-600' : 'bg-purple-200 hover:bg-purple-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          disabled={insights.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="text-center mt-3 text-sm text-gray-600">
        {currentIndex + 1} of {insights.length} Psychology Insights
      </div>
    </div>
  )
}

// Objection Categories Carousel - shows one category at a time
const ObjectionCategoriesCarousel = ({ categories }: { categories: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  if (!categories || categories.length === 0) return null

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length)
  }

  const category = categories[currentIndex]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg border-2 p-6 shadow-lg hover:shadow-xl transition-shadow" style={{ borderColor: category.color + '40' }}>
        <div className="text-center mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl" style={{ backgroundColor: category.color + '10' }}>
            <span>{category.icon}</span>
          </div>
          <h5 className="text-xl font-bold text-gray-900">{category.category}</h5>
          <p className="text-gray-600 mt-2">{category.description}</p>
        </div>
        
        <div className="mb-4">
          <h6 className="font-semibold text-gray-800 mb-3">What Customers Say:</h6>
          <div className="space-y-2">
            {category.examples?.map((example, exampleIndex) => (
              <div key={exampleIndex} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 p-2 rounded">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: category.color }}></div>
                <span className="italic">"{example}"</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3">
          <h6 className="font-semibold text-gray-800 mb-2">How to Respond:</h6>
          <p className="text-gray-700">{category.strategy}</p>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-center mt-6 gap-4">
        <button
          onClick={goToPrevious}
          disabled={categories.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>
        
        <div className="flex space-x-2">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-easypay-green' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          disabled={categories.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="text-center mt-3 text-sm text-gray-600">
        {currentIndex + 1} of {categories.length} Objection Types
      </div>
    </div>
  )
}

// Golden Rules Carousel - shows one rule at a time
const GoldenRulesCarousel = ({ rules }: { rules: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  if (!rules || rules.length === 0) return null

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rules.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + rules.length) % rules.length)
  }

  const rule = rules[currentIndex]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg border-2 border-yellow-300 p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Star className="w-8 h-8 text-yellow-600" />
          </div>
          <h5 className="text-xl font-bold text-yellow-900">{rule.rule}</h5>
          <p className="text-yellow-700 mt-2">{rule.description}</p>
        </div>
        
        <div className="space-y-3">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800">Do This:</span>
            </div>
            <p className="text-green-700 italic">"{rule.correct}"</p>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-800">Don't Do This:</span>
            </div>
            <p className="text-red-700 italic">"{rule.incorrect}"</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-center mt-6 gap-4">
        <button
          onClick={goToPrevious}
          disabled={rules.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>
        
        <div className="flex space-x-2">
          {rules.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-yellow-600' : 'bg-yellow-200 hover:bg-yellow-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          disabled={rules.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="text-center mt-3 text-sm text-gray-600">
        Rule {currentIndex + 1} of {rules.length}
      </div>
    </div>
  )
}

// Objection Response Cards Carousel - shows one response script at a time
const ObjectionResponseCarousel = ({ responseCards }: { responseCards: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  if (!responseCards || responseCards.length === 0) return null

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % responseCards.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + responseCards.length) % responseCards.length)
  }

  const card = responseCards[currentIndex]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg border-2 p-6 shadow-lg" style={{ borderColor: card.color + '40' }}>
        <div className="text-center mb-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white mb-3" style={{ backgroundColor: card.color }}>
            {card.category} Objection
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-800 font-medium text-lg italic">"{card.objection}"</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="font-semibold text-blue-800 mb-2">1. HALT - Stop and Listen</div>
            <p className="text-blue-700 text-sm">{card.hearResponse?.halt}</p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <div className="font-semibold text-purple-800 mb-2">2. EMPATHIZE - Show Understanding</div>
            <p className="text-purple-700 text-sm italic">"{card.hearResponse?.empathize}"</p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="font-semibold text-orange-800 mb-2">3. ASK - Get More Information</div>
            <p className="text-orange-700 text-sm italic">"{card.hearResponse?.ask}"</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="font-semibold text-green-800 mb-2">4. RESPOND - Provide Solution</div>
            <p className="text-green-700 text-sm italic">"{card.hearResponse?.respond}"</p>
          </div>
        </div>
        
        <div className="mt-4 bg-gray-50 rounded-lg p-3">
          <div className="font-semibold text-gray-800 mb-2">Remember These Key Points:</div>
          <div className="space-y-1">
            {card.keyPoints?.map((point, pointIndex) => (
              <div key={pointIndex} className="flex items-start gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: card.color }}></div>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-center mt-6 gap-4">
        <button
          onClick={goToPrevious}
          disabled={responseCards.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>
        
        <div className="flex space-x-2">
          {responseCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-easypay-green' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          disabled={responseCards.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="text-center mt-3 text-sm text-gray-600">
        Script {currentIndex + 1} of {responseCards.length}
      </div>
    </div>
  )
}

// Multiple Objections Strategy Carousel - shows one strategy at a time
const MultipleObjectionsCarousel = ({ strategies }: { strategies: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  if (!strategies || strategies.length === 0) return null

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % strategies.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + strategies.length) % strategies.length)
  }

  const strategy = strategies[currentIndex]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg border-2 border-indigo-200 p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {currentIndex + 1}
            </div>
          </div>
          <div className="flex-1">
            <h5 className="font-bold text-indigo-900 mb-2 text-lg">{strategy.situation}</h5>
            <p className="text-gray-700 mb-4">{strategy.description}</p>
            
            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h6 className="font-semibold text-blue-800 mb-2">Approach:</h6>
                <p className="text-blue-700 text-sm">{strategy.approach}</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h6 className="font-semibold text-purple-800 mb-2">Technique:</h6>
                <p className="text-purple-700 text-sm">{strategy.technique}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <h6 className="font-semibold text-gray-800 mb-2">Example:</h6>
              <p className="text-gray-700 text-sm italic">{strategy.example}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-center mt-6 gap-4">
        <button
          onClick={goToPrevious}
          disabled={strategies.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>
        
        <div className="flex space-x-2">
          {strategies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-indigo-200 hover:bg-indigo-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          disabled={strategies.length <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="text-center mt-3 text-sm text-gray-600">
        Strategy {currentIndex + 1} of {strategies.length}
      </div>
    </div>
  )
}

export default function ModulePage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.id as string
  
  // Add error handling for module lookup
  let module
  try {
    module = trainingModules.find(m => m.id === `module-${moduleId}`)
  } catch (error) {
    console.error('Error finding module:', error)
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Error loading module</h1>
        <button 
          onClick={() => router.push('/modules')}
          className="mt-4 text-easypay-green hover:underline"
        >
          Back to modules
        </button>
      </div>
    )
  }
  
  const { awardEBucks } = useEBucks()
  
  const [selectedLesson, setSelectedLesson] = useState(0)
  const [showLessonContent, setShowLessonContent] = useState(false)
  
  // Reset lesson selection when module changes
  React.useEffect(() => {
    setSelectedLesson(0)
    setShowLessonContent(false)
  }, [moduleId])

  if (!module) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Module not found</h1>
        <button 
          onClick={() => router.push('/modules')}
          className="mt-4 text-easypay-green hover:underline"
        >
          Back to modules
        </button>
      </div>
    )
  }

  // Mock completion status for now
  const completedLessons = Math.floor(module.lessons.length * 0.6) // 60% completed for demo
  const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100)
  
  // Use estimated time from module
  const duration = module.estimatedTime
  
  const handleLessonComplete = () => {
    // Function kept for InteractiveContent component compatibility
  }
  
  const getTypeIcon = (lesson: any) => {
    if (!lesson || !lesson.content || !Array.isArray(lesson.content)) {
      return <FileText className="w-4 h-4" />
    }
    try {
      const hasInteractive = lesson.content.some((c: any) => c && c.type === 'interactive')
      const hasImage = lesson.content.some((c: any) => c && c.type === 'image')
      if (hasInteractive) return <PlayCircle className="w-4 h-4" />
      if (hasImage) return <Image className="w-4 h-4" />
      return <FileText className="w-4 h-4" />
    } catch (error) {
      return <FileText className="w-4 h-4" />
    }
  }

  // Ensure selectedLesson is within bounds
  const safeSelectedLesson = Math.max(0, Math.min(selectedLesson, module.lessons.length - 1))
  const currentLesson = module.lessons[safeSelectedLesson]
  
  if (!currentLesson) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Lesson not found</h1>
        <button 
          onClick={() => router.push('/modules')}
          className="mt-4 text-easypay-green hover:underline"
        >
          Back to modules
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => {
            try {
              router.push('/modules')
            } catch (error) {
              window.location.href = '/modules'
            }
          }}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{module.title}</h1>
          <p className="text-gray-600 mt-1">{module.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="min-h-96">
            {!showLessonContent ? (
              <div className="flex items-center justify-center h-96 bg-gray-50">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {getTypeIcon(currentLesson)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentLesson.title}</h3>
                  <p className="text-gray-600 mb-4">Duration: {currentLesson.duration}</p>
                  <button 
                    onClick={() => {
                      setShowLessonContent(true)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors"
                  >
                    {currentLesson.type === 'video' ? 'Play Video' : 
                     currentLesson.type === 'interactive' ? 'Start Interactive' : 'Read Content'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">{currentLesson.title}</h3>
                  <button 
                    onClick={() => setShowLessonContent(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="prose max-w-none">
                  {currentLesson.content && currentLesson.content.length > 0 ? (
                    <div className="space-y-6">
                      {currentLesson.content.map((section, index) => (
                        <div key={index}>
                          {section.type === 'interactive' ? (
                            <InteractiveContent 
                              type={section.interactiveType || 'knowledge-quiz'} 
                              data={section}
                              onComplete={() => handleLessonComplete()}
                            />
                          ) : section.type === 'image' ? (
                            <div className="flex flex-col items-center justify-center my-8 px-4">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
                              )}
                              <div className="flex items-center justify-center w-full">
                                <img 
                                  src={section.imageUrl} 
                                  alt={section.imageAlt || section.title || 'Image'} 
                                  className="max-w-full h-auto border border-gray-200 rounded-lg shadow-lg mx-auto block"
                                  style={{ 
                                    maxHeight: '800px',
                                    maxWidth: '800px',
                                    width: 'auto',
                                    height: 'auto',
                                    objectFit: 'contain'
                                  }}
                                />
                              </div>
                              {section.imageCaption && (
                                <p className="text-sm text-gray-600 mt-4 text-center max-w-md">
                                  <strong>Legend:</strong> {section.imageCaption}
                                </p>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mt-4 max-w-2xl text-center">{section.content}</p>
                              )}
                            </div>
                          ) : section.type === 'image-carousel' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center">{section.title}</h4>
                              )}
                              <ImageCarousel images={section.images} />
                              {section.content && (
                                <p className="text-gray-700 mt-6 max-w-2xl mx-auto text-center">{section.content}</p>
                              )}
                            </div>
                          ) : section.type === 'download' ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
                              {section.title && (
                                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                                  <Download className="w-5 h-5" />
                                  {section.title}
                                </h4>
                              )}
                              {section.content && (
                                <p className="text-green-700 mb-4">{section.content}</p>
                              )}
                              {section.description && (
                                <p className="text-sm text-green-600 mb-4">{section.description}</p>
                              )}
                              <a
                                href={section.downloadUrl}
                                download={section.downloadFileName}
                                className="inline-flex items-center gap-2 bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors font-medium shadow-lg hover:shadow-xl"
                              >
                                <Download className="w-5 h-5" />
                                {section.buttonText || 'Download File'}
                              </a>
                            </div>
                          ) : section.type === 'contact-info' ? (
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
                              {section.title && (
                                <h4 className="font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                                  <Phone className="w-5 h-5" />
                                  {section.title}
                                </h4>
                              )}
                              {section.content && (
                                <p className="text-yellow-700 mb-6">{section.content}</p>
                              )}
                              <div className="space-y-4">
                                {section.contacts && section.contacts.map((contact, index) => (
                                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-yellow-200">
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <h5 className="font-semibold text-gray-900 mb-2">{contact.type}</h5>
                                        <p className="text-sm text-gray-600 mb-3">{contact.description}</p>
                                        <div className="flex items-center gap-4">
                                          <a
                                            href={`tel:${contact.phone.replace(/[^\d]/g, '')}`}
                                            className="inline-flex items-center gap-2 bg-easypay-green text-white px-4 py-2 rounded-lg hover:bg-easypay-green-dark transition-colors text-sm font-medium"
                                          >
                                            <Phone className="w-4 h-4" />
                                            {contact.phone}
                                          </a>
                                          {contact.hours && (
                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                              <ClockIcon className="w-4 h-4" />
                                              <span>{contact.hours}</span>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : section.type === 'pillars' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">{section.content}</p>
                              )}
                              <PillarsCarousel pillars={section.pillars} />
                            </div>
                          ) : section.type === 'timeline' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <div className="space-y-6">
                                {section.phases?.map((phase, index) => (
                                  <div key={index} className="flex items-start gap-4">
                                    <div className="flex flex-col items-center">
                                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: phase.color + '20', color: phase.color }}>
                                        {phase.icon}
                                      </div>
                                      {index < section.phases.length - 1 && (
                                        <div className="w-0.5 h-12 mt-2" style={{ backgroundColor: phase.color + '40' }}></div>
                                      )}
                                    </div>
                                    <div className="flex-1 bg-white rounded-lg border-2 p-4 shadow-sm" style={{ borderColor: phase.color + '30' }}>
                                      <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 text-sm font-semibold text-white rounded-full" style={{ backgroundColor: phase.color }}>
                                          {phase.period}
                                        </span>
                                        <h5 className="font-bold text-gray-900">{phase.title}</h5>
                                      </div>
                                      <div className="space-y-2">
                                        {phase.tasks?.map((task, taskIndex) => (
                                          <div key={taskIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: phase.color }}></div>
                                            {task}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : section.type === 'training-calendar' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {section.months?.map((month, index) => (
                                  <div key={index} className="bg-white rounded-lg border-2 border-easypay-green/20 p-4 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-center mb-3">
                                      <h5 className="font-bold text-easypay-green text-lg">{month.month}</h5>
                                      <h6 className="font-semibold text-gray-900 text-sm">{month.topic}</h6>
                                    </div>
                                    <div className="text-xs text-gray-600 mb-3 italic">
                                      Focus: {month.focus}
                                    </div>
                                    <div className="space-y-1">
                                      {month.activities?.map((activity, activityIndex) => (
                                        <div key={activityIndex} className="flex items-start gap-2 text-xs text-gray-700">
                                          <div className="w-1 h-1 rounded-full mt-1.5 bg-easypay-green flex-shrink-0"></div>
                                          {activity}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : section.type === 'conversation-flow' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <div className="max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                  {section.steps?.map((step, index) => (
                                    <div key={index} className="bg-white rounded-lg border-2 border-easypay-green/20 p-4 shadow-sm hover:shadow-md transition-shadow">
                                      <div className="text-center mb-3">
                                        <div className="w-10 h-10 bg-easypay-green text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                                          {index + 1}
                                        </div>
                                        <h5 className="font-bold text-gray-900 text-sm">{step.phase}</h5>
                                      </div>
                                      <div className="space-y-2">
                                        {step.actions?.map((action, actionIndex) => (
                                          <div key={actionIndex} className="flex items-start gap-2 text-xs text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 bg-easypay-green flex-shrink-0"></div>
                                            {action}
                                          </div>
                                        ))}
                                      </div>
                                      {step.example && (
                                        <div className="mt-3 p-2 bg-easypay-green/5 rounded text-xs text-easypay-green border border-easypay-green/20">
                                          <strong>Example:</strong> "{step.example}"
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : section.type === 'customer-signals' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <div className="space-y-6">
                                {section.categories?.map((category, index) => (
                                  <div key={index} className="bg-white rounded-lg border-2 p-6 shadow-sm" style={{ borderColor: category.color + '40' }}>
                                    <div className="text-center mb-4">
                                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl" style={{ backgroundColor: category.color + '10' }}>
                                        {category.icon}
                                      </div>
                                      <h5 className="text-xl font-bold text-gray-900">{category.type}</h5>
                                      <p className="text-gray-600 mt-2">{category.description}</p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {/* Positive Signals */}
                                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <h6 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4" />
                                          Positive Signals
                                        </h6>
                                        <div className="space-y-2">
                                          {category.positiveSignals?.map((signal, signalIndex) => (
                                            <div key={signalIndex} className="flex items-start gap-2 text-sm text-green-700">
                                              <div className="w-1.5 h-1.5 rounded-full mt-2 bg-green-600 flex-shrink-0"></div>
                                              {signal}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      {/* Warning Signals */}
                                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <h6 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                                          <AlertCircle className="w-4 h-4" />
                                          Warning Signals
                                        </h6>
                                        <div className="space-y-2">
                                          {category.warningSignals?.map((signal, signalIndex) => (
                                            <div key={signalIndex} className="flex items-start gap-2 text-sm text-red-700">
                                              <div className="w-1.5 h-1.5 rounded-full mt-2 bg-red-600 flex-shrink-0"></div>
                                              {signal}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : section.type === 'stats-overview' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {section.stats?.map((stat, index) => (
                                  <div key={index} className="bg-white rounded-lg border-2 p-6 text-center shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: stat.color + '30' }}>
                                    <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                                      {stat.value}
                                    </div>
                                    <div className="font-semibold text-gray-900 mb-1">
                                      {stat.label}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {stat.description}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : section.type === 'state-grid' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-6 text-center">{section.content}</p>
                              )}
                              <div className="bg-white rounded-lg border-2 p-6 shadow-sm" style={{ borderColor: section.color + '30' }}>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                  {section.states?.map((state, index) => (
                                    <div key={index} className="text-center p-3 rounded-lg border hover:shadow-md transition-all" style={{ borderColor: section.color + '20', backgroundColor: section.color + '05' }}>
                                      <div className="font-bold text-lg" style={{ color: section.color }}>
                                        {state.abbr}
                                      </div>
                                      <div className="text-xs text-gray-600 mt-1">
                                        {state.name}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-4 text-center">
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: section.color }}>
                                    {section.stateCategory}: {section.states?.length} States
                                  </span>
                                </div>
                              </div>
                            </div>
                          ) : section.type === 'info-panel' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                {section.content && (
                                  <p className="text-gray-700 mb-4 font-medium">{section.content}</p>
                                )}
                                <div className="space-y-2 mb-6">
                                  {section.details?.map((detail, index) => (
                                    <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                      <div className="w-1.5 h-1.5 rounded-full mt-2 bg-gray-400 flex-shrink-0"></div>
                                      {detail}
                                    </div>
                                  ))}
                                </div>
                                {section.unavailableStates && (
                                  <div className="bg-white rounded-lg border p-4">
                                    <h5 className="font-semibold text-gray-800 mb-3">States Not Served:</h5>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm">
                                      {section.unavailableStates.map((state, index) => (
                                        <div key={index} className="text-gray-500 text-center py-1">
                                          {state}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : section.type === 'program-overview' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              <div className="bg-white rounded-lg border-2 p-6 shadow-lg" style={{ borderColor: section.color + '40' }}>
                                <div className="text-center mb-6">
                                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white mb-3" style={{ backgroundColor: section.color }}>
                                    {section.programType} Program
                                  </div>
                                  <p className="text-gray-700">{section.content}</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                  {section.features?.map((feature, index) => (
                                    <div key={index} className="text-center p-4 rounded-lg border" style={{ borderColor: section.color + '20', backgroundColor: section.color + '05' }}>
                                      <h5 className="font-semibold text-gray-900 mb-2">{feature.title}</h5>
                                      <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                  ))}
                                </div>
                                
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-gray-800 mb-3 text-center">Process Flow</h5>
                                  <div className="flex flex-wrap justify-center gap-2">
                                    {section.flowSteps?.map((step, index) => (
                                      <div key={index} className="flex items-center">
                                        <div className="bg-white rounded-lg border px-3 py-2 text-sm text-gray-700">
                                          {step}
                                        </div>
                                        {index < section.flowSteps.length - 1 && (
                                          <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : section.type === 'feature-highlights' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-6 text-center">{section.content}</p>
                              )}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {section.highlights?.map((highlight, index) => (
                                  <div key={index} className="bg-white rounded-lg border-2 p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: section.color + '30' }}>
                                    <div className="flex items-start gap-4">
                                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style={{ backgroundColor: section.color }}>
                                        {index + 1}
                                      </div>
                                      <div className="flex-1">
                                        <h5 className="font-semibold text-gray-900 mb-2">{highlight.title}</h5>
                                        <p className="text-gray-700 text-sm mb-2">{highlight.description}</p>
                                        <div className="text-xs px-2 py-1 rounded" style={{ backgroundColor: section.color + '10', color: section.color }}>
                                          {highlight.benefit}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : section.type === 'objection-psychology' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <PsychologyInsightsCarousel insights={section.psychologyInsights} />
                            </div>
                          ) : section.type === 'objection-categories' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <ObjectionCategoriesCarousel categories={section.categories} />
                            </div>
                          ) : section.type === 'objections-vs-concerns' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Objections */}
                                <div className="bg-white rounded-lg border-2 border-red-300 p-6 shadow-lg">
                                  <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                      <AlertCircle className="w-8 h-8 text-red-600" />
                                    </div>
                                    <h5 className="text-xl font-bold text-red-900">Objections</h5>
                                    <p className="text-red-700 mt-2 text-sm">{section.comparison?.objections?.definition}</p>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <h6 className="font-semibold text-red-800 mb-3">Characteristics:</h6>
                                    <div className="space-y-2">
                                      {section.comparison?.objections?.characteristics?.map((char, index) => (
                                        <div key={index} className="flex items-start gap-2 text-sm text-red-700">
                                          <div className="w-1.5 h-1.5 rounded-full mt-2 bg-red-600 flex-shrink-0"></div>
                                          {char}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <h6 className="font-semibold text-red-800 mb-2">How to Respond:</h6>
                                    <p className="text-red-700 text-sm bg-red-50 p-3 rounded-lg">{section.comparison?.objections?.response}</p>
                                  </div>
                                  
                                  <div className="bg-red-50 rounded-lg p-3">
                                    <h6 className="font-semibold text-red-800 mb-2">Example:</h6>
                                    <p className="text-red-700 text-sm italic">"{section.comparison?.objections?.example}"</p>
                                  </div>
                                </div>
                                
                                {/* Concerns */}
                                <div className="bg-white rounded-lg border-2 border-green-300 p-6 shadow-lg">
                                  <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                      <HelpCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h5 className="text-xl font-bold text-green-900">Concerns</h5>
                                    <p className="text-green-700 mt-2 text-sm">{section.comparison?.concerns?.definition}</p>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <h6 className="font-semibold text-green-800 mb-3">Characteristics:</h6>
                                    <div className="space-y-2">
                                      {section.comparison?.concerns?.characteristics?.map((char, index) => (
                                        <div key={index} className="flex items-start gap-2 text-sm text-green-700">
                                          <div className="w-1.5 h-1.5 rounded-full mt-2 bg-green-600 flex-shrink-0"></div>
                                          {char}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <h6 className="font-semibold text-green-800 mb-2">How to Respond:</h6>
                                    <p className="text-green-700 text-sm bg-green-50 p-3 rounded-lg">{section.comparison?.concerns?.response}</p>
                                  </div>
                                  
                                  <div className="bg-green-50 rounded-lg p-3">
                                    <h6 className="font-semibold text-green-800 mb-2">Example:</h6>
                                    <p className="text-green-700 text-sm italic">"{section.comparison?.concerns?.example}"</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : section.type === 'golden-rules' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <GoldenRulesCarousel rules={section.rules} />
                            </div>
                          ) : section.type === 'hear-method' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              
                              <div className="bg-white rounded-lg border-2 border-easypay-green p-8 shadow-lg mb-8">
                                <h5 className="text-center text-2xl font-bold text-easypay-green mb-6">H.E.A.R Method</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                  {section.method?.steps?.map((step, index) => (
                                    <div key={index} className="text-center">
                                      <div className="w-20 h-20 bg-easypay-green rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl font-bold">{step.letter}</span>
                                      </div>
                                      <h6 className="font-bold text-easypay-green text-lg mb-2">{step.step}</h6>
                                      <p className="text-gray-700 text-sm mb-3">{step.action}</p>
                                      <div className="bg-gray-50 rounded-lg p-3 text-left">
                                        <p className="text-xs text-gray-600 mb-2">{step.details}</p>
                                        <div className="bg-easypay-green/10 rounded p-2 mb-2">
                                          <p className="text-xs text-easypay-green italic">"{step.example}"</p>
                                        </div>
                                        <div className="space-y-1">
                                          {step.tips?.map((tip, tipIndex) => (
                                            <div key={tipIndex} className="flex items-start gap-1 text-xs text-gray-600">
                                              <div className="w-1 h-1 rounded-full mt-1.5 bg-easypay-green flex-shrink-0"></div>
                                              {tip}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : section.type === 'objection-response-cards' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <ObjectionResponseCarousel responseCards={section.responseCards} />
                            </div>
                          ) : section.type === 'objection-flow-process' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              
                              <div className="bg-white rounded-lg border-2 border-easypay-green p-6 shadow-lg mb-6">
                                <div className="text-center mb-6">
                                  <h5 className="font-bold text-easypay-green text-lg">Scenario: {section.conversationFlow?.scenario}</h5>
                                </div>
                                
                                <div className="space-y-6">
                                  {section.conversationFlow?.stages?.map((stage, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                      <div className="flex flex-col items-center flex-shrink-0">
                                        <div className="w-12 h-12 bg-easypay-green text-white rounded-full flex items-center justify-center font-bold">
                                          {stage.stage}
                                        </div>
                                        {index < section.conversationFlow.stages.length - 1 && (
                                          <div className="w-0.5 h-12 bg-easypay-green/30 mt-2"></div>
                                        )}
                                      </div>
                                      
                                      <div className="flex-1 bg-gray-50 rounded-lg p-4">
                                        <h6 className="font-bold text-gray-900 mb-3">{stage.title}</h6>
                                        
                                        {stage.customer && (
                                          <div className="mb-3 bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                                            <div className="font-semibold text-blue-800 text-sm mb-1">Customer:</div>
                                            <p className="text-blue-700 text-sm italic">"{stage.customer}"</p>
                                          </div>
                                        )}
                                        
                                        {stage.merchantThinking && (
                                          <div className="mb-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                                            <div className="font-semibold text-yellow-800 text-sm mb-1">Merchant Thinking:</div>
                                            <p className="text-yellow-700 text-sm">{stage.merchantThinking}</p>
                                          </div>
                                        )}
                                        
                                        {stage.merchant && (
                                          <div className="mb-3 bg-green-50 border-l-4 border-green-400 p-3 rounded">
                                            <div className="font-semibold text-green-800 text-sm mb-1">Merchant Response:</div>
                                            <p className="text-green-700 text-sm italic">"{stage.merchant}"</p>
                                          </div>
                                        )}
                                        
                                        {stage.action && (
                                          <div className="mb-3 bg-purple-50 border-l-4 border-purple-400 p-3 rounded">
                                            <div className="font-semibold text-purple-800 text-sm mb-1">Action:</div>
                                            <p className="text-purple-700 text-sm">{stage.action}</p>
                                          </div>
                                        )}
                                        
                                        {stage.result && (
                                          <div className="bg-gray-100 p-3 rounded">
                                            <div className="font-semibold text-gray-800 text-sm mb-1">Result:</div>
                                            <p className="text-gray-700 text-sm">{stage.result}</p>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : section.type === 'multiple-objections-strategy' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <MultipleObjectionsCarousel strategies={section.strategies} />
                            </div>
                          ) : section.type === 'yes-and-technique' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Wrong Way */}
                                <div className="bg-white rounded-lg border-2 border-red-300 p-6 shadow-lg">
                                  <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                      <XCircle className="w-8 h-8 text-red-600" />
                                    </div>
                                    <h5 className="text-xl font-bold text-red-900">{section.comparison?.wrongWay?.title}</h5>
                                    <p className="text-red-700 mt-2 text-sm font-medium">{section.comparison?.wrongWay?.pattern}</p>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <h6 className="font-semibold text-red-800 mb-3">Problems:</h6>
                                    <div className="space-y-2">
                                      {section.comparison?.wrongWay?.problems?.map((problem, index) => (
                                        <div key={index} className="flex items-start gap-2 text-sm text-red-700">
                                          <div className="w-1.5 h-1.5 rounded-full mt-2 bg-red-600 flex-shrink-0"></div>
                                          {problem}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {section.comparison?.wrongWay?.examples?.map((example, index) => (
                                    <div key={index} className="bg-red-50 rounded-lg p-3 mb-3">
                                      <div className="mb-2">
                                        <h6 className="font-semibold text-red-800 mb-1 text-sm">Customer:</h6>
                                        <p className="text-red-700 text-xs italic">"{example.objection}"</p>
                                      </div>
                                      <div className="mb-2">
                                        <h6 className="font-semibold text-red-800 mb-1 text-sm">Wrong Response:</h6>
                                        <p className="text-red-700 text-xs italic">"{example.response}"</p>
                                      </div>
                                      <div className="text-xs text-red-600 bg-red-100 p-2 rounded">
                                        <strong>Why it's wrong:</strong> {example.why_wrong}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Right Way */}
                                <div className="bg-white rounded-lg border-2 border-green-300 p-6 shadow-lg">
                                  <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                      <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h5 className="text-xl font-bold text-green-900">{section.comparison?.rightWay?.title}</h5>
                                    <p className="text-green-700 mt-2 text-sm font-medium">{section.comparison?.rightWay?.pattern}</p>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <h6 className="font-semibold text-green-800 mb-3">Benefits:</h6>
                                    <div className="space-y-2">
                                      {section.comparison?.rightWay?.benefits?.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-2 text-sm text-green-700">
                                          <div className="w-1.5 h-1.5 rounded-full mt-2 bg-green-600 flex-shrink-0"></div>
                                          {benefit}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {section.comparison?.rightWay?.examples?.map((example, index) => (
                                    <div key={index} className="bg-green-50 rounded-lg p-3 mb-3">
                                      <div className="mb-2">
                                        <h6 className="font-semibold text-green-800 mb-1 text-sm">Customer:</h6>
                                        <p className="text-green-700 text-xs italic">"{example.objection}"</p>
                                      </div>
                                      <div className="mb-2">
                                        <h6 className="font-semibold text-green-800 mb-1 text-sm">Better Response:</h6>
                                        <p className="text-green-700 text-xs italic">"{example.response}"</p>
                                      </div>
                                      <div className="text-xs text-green-600 bg-green-100 p-2 rounded">
                                        <strong>Why it works:</strong> {example.why_right}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : section.type === 'emotional-de-escalation' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              
                              <div className="mb-8">
                                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">Emotional Situations & Approaches</h5>
                                <div className="space-y-6">
                                  {section.emotionalSituations?.map((situation, index) => (
                                    <div key={index} className="bg-white rounded-lg border-2 border-orange-200 p-6 shadow-lg">
                                      <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                          <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                            {index + 1}
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <h6 className="font-bold text-orange-900 mb-2">{situation.situation}</h6>
                                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                              <h6 className="font-semibold text-yellow-800 mb-2 text-sm">Warning Signs:</h6>
                                              <div className="space-y-1">
                                                {situation.signs?.map((sign, signIndex) => (
                                                  <div key={signIndex} className="text-xs text-yellow-700">• {sign}</div>
                                                ))}
                                              </div>
                                            </div>
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                              <h6 className="font-semibold text-blue-800 mb-2 text-sm">Immediate Action:</h6>
                                              <p className="text-xs text-blue-700">{situation.approach?.immediate}</p>
                                            </div>
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                              <h6 className="font-semibold text-green-800 mb-2 text-sm">Solution Focus:</h6>
                                              <p className="text-xs text-green-700">{situation.approach?.solution}</p>
                                            </div>
                                          </div>
                                          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                                            <h6 className="font-semibold text-purple-800 mb-2 text-sm">Empathetic Response:</h6>
                                            <p className="text-xs text-purple-700 italic">"{situation.approach?.empathy}"</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">De-escalation Techniques</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {section.deEscalationTechniques?.map((technique, index) => (
                                    <div key={index} className="bg-white rounded-lg border-2 border-teal-200 p-4 shadow-sm">
                                      <h6 className="font-bold text-teal-900 mb-2">{technique.technique}</h6>
                                      <p className="text-teal-700 text-sm mb-2">{technique.description}</p>
                                      <div className="bg-teal-50 rounded p-2">
                                        <p className="text-teal-600 text-xs"><strong>Why it works:</strong> {technique.why}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : section.type === 'credit-conversation-guide' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Avoid Phrases */}
                                <div className="bg-white rounded-lg border-2 border-red-300 p-6 shadow-lg">
                                  <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                      <XCircle className="w-8 h-8 text-red-600" />
                                    </div>
                                    <h5 className="text-xl font-bold text-red-900">Never Say</h5>
                                  </div>
                                  <div className="space-y-2">
                                    {section.creditApproaches?.avoidPhrases?.map((phrase, index) => (
                                      <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                                        <p className="text-red-700 text-sm italic">"{phrase}"</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* Use Phrases */}
                                <div className="bg-white rounded-lg border-2 border-green-300 p-6 shadow-lg">
                                  <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                      <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h5 className="text-xl font-bold text-green-900">Better to Say</h5>
                                  </div>
                                  <div className="space-y-2">
                                    {section.creditApproaches?.usePhrases?.map((phrase, index) => (
                                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                                        <p className="text-green-700 text-sm italic">"{phrase}"</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="bg-white rounded-lg border-2 border-blue-300 p-6 shadow-lg">
                                <h5 className="text-lg font-bold text-blue-900 text-center mb-4">Credit Conversation Flow</h5>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                  {Object.entries(section.creditApproaches?.conversationFlow || {}).map(([key, value], index) => (
                                    <div key={index} className="text-center">
                                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                        {index + 1}
                                      </div>
                                      <h6 className="font-bold text-blue-900 text-sm mb-2 capitalize">{key}</h6>
                                      <p className="text-blue-700 text-xs">{value}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : section.type === 'graceful-exit-strategy' ? (
                            <div className="my-8">
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">{section.title}</h4>
                              )}
                              {section.content && (
                                <p className="text-gray-700 mb-8 text-center">{section.content}</p>
                              )}
                              
                              <div className="mb-6">
                                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">When to Exit</h5>
                                <div className="bg-white rounded-lg border-2 border-yellow-300 p-6 shadow-lg">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {section.exitSignals?.map((signal, index) => (
                                      <div key={index} className="flex items-start gap-2 text-sm text-yellow-800 bg-yellow-50 p-3 rounded-lg">
                                        <AlertCircle className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" />
                                        {signal}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mb-6">
                                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">5-Step Exit Strategy</h5>
                                <div className="space-y-4">
                                  {section.exitStrategy?.steps?.map((step, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-white rounded-lg border-2 border-gray-200 p-4 shadow-sm">
                                      <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        {step.step}
                                      </div>
                                      <div className="flex-1">
                                        <h6 className="font-bold text-gray-900 mb-2">{step.action}</h6>
                                        <div className="bg-gray-50 rounded-lg p-3">
                                          <p className="text-gray-700 text-sm italic">"{step.script}"</p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h5 className="font-semibold text-green-800 mb-3">Benefits of Graceful Exit:</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {section.exitStrategy?.benefits?.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-2 text-sm text-green-700">
                                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                                      {benefit}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className={`
                              ${section.type === 'example' ? 'bg-blue-50 border-l-4 border-blue-400 p-4' :
                                section.type === 'tip' ? 'bg-green-50 border-l-4 border-green-400 p-4' :
                                section.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-400 p-4' :
                                ''}
                            `}>
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-2">{section.title}</h4>
                              )}
                              <div className="whitespace-pre-line text-gray-700">
                                {section.type === 'example' ? (
                                  <div 
                                    dangerouslySetInnerHTML={{
                                      __html: section.content
                                        .replace(/^(Option \d+:.*?)$/gm, '<strong>$1</strong>')
                                        .replace(/\n/g, '<br>')
                                    }}
                                  />
                                ) : section.type === 'tip' && section.content.includes('<a href') ? (
                                  <div 
                                    dangerouslySetInnerHTML={{
                                      __html: section.content
                                    }}
                                  />
                                ) : (
                                  section.content
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <p>Lesson content would be displayed here.</p>
                      <p className="mt-2">This is a preview of the lesson structure.</p>
                    </div>
                  )}
                </div>
                
                {currentLesson.keyTakeaways && currentLesson.keyTakeaways.length > 0 && (
                  <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-3">Key Takeaways</h4>
                    <div className="space-y-2">
                      {currentLesson.keyTakeaways.map((takeaway, index) => (
                        <div key={index} className="flex items-start gap-2 text-emerald-800">
                          <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-start mt-8 pt-6 border-t">
                  <button 
                    onClick={() => {
                      setShowLessonContent(false)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    ← Back to Overview
                  </button>
                </div>
              </div>
            )}
          </Card>

          <div className="flex justify-between mt-6">
            <button 
              onClick={() => {
                setSelectedLesson(Math.max(0, selectedLesson - 1))
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              disabled={selectedLesson === 0}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>
            
            <button 
              onClick={() => {
                setSelectedLesson(Math.min(module.lessons.length - 1, selectedLesson + 1))
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              disabled={selectedLesson === module.lessons.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-easypay-green text-white rounded-lg hover:bg-easypay-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Progress</h3>
            <div className="space-y-4">
              <Progress value={progressPercentage} />
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{completedLessons}/{module.lessons.length} lessons</span>
                <span className="text-gray-600">{progressPercentage}% complete</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{duration} total</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lessons</h3>
            <div className="space-y-2">
              {module.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLesson(index)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedLesson === index 
                      ? 'bg-easypay-green text-white' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index < completedLessons ? (
                      <CheckCircle className={`w-5 h-5 ${
                        selectedLesson === index ? 'text-white' : 'text-green-500'
                      }`} />
                    ) : (
                      <div className={selectedLesson === index ? 'text-white' : 'text-gray-400'}>
                        {getTypeIcon(lesson)}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="font-medium">{lesson.title}</div>
                      <div className={`text-xs ${
                        selectedLesson === index ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {lesson.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Quiz</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Questions:</span>
                <span>{module.quiz.questions.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Passing Score:</span>
                <span>{module.quiz.passingScore}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">eBucks Reward:</span>
                <span className="text-easypay-green font-semibold">{module.ebucksReward}</span>
              </div>
              <button 
                onClick={() => router.push(`/modules/${moduleId}/quiz`)}
                className="w-full mt-4 bg-easypay-green text-white py-2 rounded-lg hover:bg-easypay-green-dark transition-colors"
              >
                Take Quiz
              </button>
            </div>
          </Card>

          {progressPercentage === 100 && (
            <Card className="bg-green-50 border-green-200">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Module Complete!</h3>
                  <p className="text-sm text-green-600">You&apos;ve earned your certificate</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}