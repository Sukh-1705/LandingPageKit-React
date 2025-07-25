import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'
import { Container } from '../ui/Container'

interface FeaturesProps {
  className?: string
}

export function Features({ className }: FeaturesProps) {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Built for speed and performance. Experience instant loading times and smooth interactions.',
      icon: '⚡',
      color: 'text-orange-400'
    },
    {
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time updates, comments, and team notifications.',
      icon: '👥',
      color: 'text-blue-400'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.',
      icon: '🛡️',
      color: 'text-green-400'
    },
    {
      title: 'Advanced Analytics',
      description: 'Get insights into your team\'s productivity with detailed reports and metrics.',
      icon: '📊',
      color: 'text-purple-400'
    },
    {
      title: 'Time Tracking',
      description: 'Track time spent on tasks and projects with built-in time management tools.',
      icon: '⏰',
      color: 'text-orange-400'
    },
    {
      title: 'Smart Notifications',
      description: 'Stay updated with intelligent notifications that adapt to your workflow.',
      icon: '💬',
      color: 'text-pink-400'
    },
    {
      title: 'Git Integration',
      description: 'Connect with your Git repositories for seamless development workflow.',
      icon: '🔗',
      color: 'text-blue-400'
    },
    {
      title: 'Custom Alerts',
      description: 'Set up custom alerts and reminders to never miss important deadlines.',
      icon: '🔔',
      color: 'text-red-400'
    }
  ]

  return (
    <section id="features" className={`py-20 lg:py-32 bg-gray-900 ${className}`}>
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Powerful features designed to streamline your workflow and boost team productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors duration-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Join thousands of teams already using our platform to manage their projects more effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 