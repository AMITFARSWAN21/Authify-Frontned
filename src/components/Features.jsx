import React, { useState } from "react"

// Local Card Component Definitions
const Card = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${className}`}
    {...props}
  >
    {children}
  </div>
))
Card.displayName = "Card"

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`flex flex-col space-y-3 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ className = "", children, ...props }) => (
  <h3 
    className={`text-xl font-bold leading-tight tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors duration-300 ${className}`} 
    {...props}
  >
    {children}
  </h3>
)

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`px-6 pb-6 ${className}`} {...props}>
    {children}
  </div>
)

export const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const features = [
    {
      icon: "🚀",
      title: "Secure Authentication",
      subtitle: "Jwt-Auth",
      description: "Enterprise-grade security with modern authentication protocols and best practices.",
      accent: "emerald"
    },
    {
      icon: "⚡️",
      title: "Quick Setup",
      subtitle: "5 mins",
      description: "Get started in minutes with our streamlined integration process.",
      accent: "blue"
    },
    {
      icon: "🛡️",
      title: "Data Protection",
      subtitle: "",
      description: "Advanced encryption and security measures to protect user data.",
      accent: "purple"
    },
    {
      icon: "📊",
      title: "Analytics",
      subtitle: "",
      description: "Comprehensive insights into authentication patterns and user behavior.",
      accent: "orange"
    },
  ]

  const getAccentClasses = (accent, isHovered) => {
    const baseClasses = {
      emerald: isHovered ? "border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white" : "",
      blue: isHovered ? "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white" : "",
      purple: isHovered ? "border-purple-200 bg-gradient-to-br from-purple-50 via-white to-white" : "",
      orange: isHovered ? "border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white" : ""
    }
    return baseClasses[accent] || ""
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Why Choose Edu-Notes?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Secure, scalable, and developer-friendly authentication solution for modern applications
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden cursor-pointer ${getAccentClasses(feature.accent, hoveredCard === index)}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-4xl transform group-hover:scale-125 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  {feature.subtitle && (
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold transform group-hover:scale-105 transition-all duration-300 ${
                      feature.accent === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                      feature.accent === 'blue' ? 'bg-blue-100 text-blue-700' :
                      feature.accent === 'purple' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    } shadow-sm group-hover:shadow-md`}>
                      {feature.subtitle}
                    </div>
                  )}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-b-3xl bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}