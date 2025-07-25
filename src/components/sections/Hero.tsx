import React from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const stats = [
    { label: '10K+ Active Users', value: '10K+' },
    { label: '99.9% Performance', value: '99.9%' },
    { label: '4.9/5 Rating', value: '4.9/5' },
  ]

  return (
    <section className={`py-20 lg:py-32 bg-black text-white ${className}`}>
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            Now available for all teams
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            The modern way to
            <span className="block bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              manage projects
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Streamline your workflow, collaborate seamlessly, and deliver exceptional results with our intuitive project management platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white">
              Start Free Trial →
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              ▷ Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-gray-300">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
} 