import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

interface PricingProps {
  className?: string
}

export function Pricing({ className }: PricingProps) {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      price: 10,
      features: [
        'Up to 10 team members',
        'Basic project templates',
        'Email support',
        '1GB storage',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      description: 'Best for growing teams and businesses',
      price: 20,
      features: [
        'Up to 50 team members',
        'Advanced project templates',
        'Priority email support',
        '10GB storage',
        'Advanced analytics',
        'Custom integrations',
        'Time tracking'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
      price: 40,
      features: [
        'Unlimited team members',
        'Custom project templates',
        '24/7 phone support',
        'Unlimited storage',
        'Advanced analytics',
        'Custom integrations',
        'Time tracking',
        'SSO & advanced security',
        'Custom branding'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <section id="pricing" className={`py-20 lg:py-32 bg-black ${className}`}>
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, transparent
            <span className="block bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gray-900 border-gray-700 ${plan.popular ? 'ring-2 ring-gray-600 shadow-xl scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  variant={plan.popular ? 'primary' : 'secondary'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Have questions?{' '}
            <a href="#contact" className="text-gray-300 hover:text-white font-medium">
              Contact our sales team
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
} 