import React, { useState } from "react"

export const AboutInstitution = ({ 
  collegeName = "Manav RAchna University",
  description = "The group of institutions comprise a Deemed University - Manav Rachna International Institute of Research & Studies (MRIIRS) which also houses Manav Rachna Dental College & Hospital (MRDC); a State Private University - Manav Rachna University (MRU); and a slew of schools spread across the country - Manav Rachna International School (MRIS).",
  mission = "To create world-class engineers and innovators who contribute meaningfully to society through cutting-edge research, industry collaboration, and sustainable technological solutions.",
  websiteUrl = "https://manavrachna.edu.in/",
  stats = [
    { number: "41K+", label: "Total Alumini" },
    { number: "120+", label: "Global Acadmic Collaboartions" },
    { number: "100+", label: "Startup Incubated" },
    { number: "2800+", label: "Research Publications" }
  ]
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl text-white">🏫</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              About {collegeName}
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl transition-all duration-500">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">📖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Our Legacy</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {description}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/40 hover:shadow-lg transition-all duration-500">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h3>
                  <p className="text-slate-700 leading-relaxed">
                    {mission}
                  </p>
                </div>
              </div>
            </div>

            {/* Website Link */}
            <div className="flex justify-center lg:justify-start">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Visit Official Website</span>
                <div className={`transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">By the Numbers</h3>
              <p className="text-slate-600">Our achievements speak for themselves</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="mb-4">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-slate-600 font-medium text-sm leading-tight">
                    {stat.label}
                  </div>
                  
                  {/* Decorative element */}
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Additional decorative card */}
            <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/40 text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-bold text-slate-800 mb-2">Excellence in Education</h4>
              <p className="text-slate-600 text-sm">
                Ranked among India's top technical institutions with a commitment to innovation and research excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-500">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
            <span className="text-2xl">🎓</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}