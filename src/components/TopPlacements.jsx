import React, { useState } from "react"

export const TopPlacements = ({ 
  placements = [
    {
      id: 1,
      name: "Ananya Kamra",
      company: "Paloalto",
      role: "Software Development Engineer",
      year: "2022 Batch",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      companyLogo: "🔍",
      package: "₹54 LPA"
    },
    {
      id: 2,
      name: "Priya Patel",
      company: "Microsoft",
      role: "Data Scientist",
      year: "2025 Batch",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=150&h=150&fit=crop&crop=face",
      companyLogo: "🏢",
      package: "₹38 LPA"
    },
    {
      id: 3,
      name: "Lokdeep Sharma",
      company: "Tekion",
      role: "SDE-II",
      year: "2025 Batch",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      companyLogo: "📦",
      package: "₹24 LPA"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      company: "Goldman Sachs",
      role: "Quantitative Analyst",
      year: "2025 Batch",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      companyLogo: "💰",
      package: "₹55 LPA"
    },
    {
      id: 5,
      name: "Sarthak Rastogi",
      company: "Spacetime",
      role: "Product Manager",
      year: "2024 Batch",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      companyLogo: "👥",
      package: "₹54 LPA"
    },
    {
      id: 6,
      name: "Ananya Iyer",
      company: "Uber",
      role: "Software Engineer",
      year: "2024 Batch",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      companyLogo: "🚗",
      package: "₹35 LPA"
    }
  ]
}) => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const getCompanyColor = (company) => {
    const colors = {
      'Google': 'from-red-400 to-yellow-400',
      'Microsoft': 'from-blue-400 to-cyan-400',
      'Amazon': 'from-orange-400 to-yellow-400',
      'Goldman Sachs': 'from-purple-400 to-pink-400',
      'Meta': 'from-blue-400 to-purple-400',
      'Uber': 'from-green-400 to-teal-400'
    }
    return colors[company] || 'from-gray-400 to-slate-400'
  }

  const getRoleIcon = (role) => {
    if (role.toLowerCase().includes('software') || role.toLowerCase().includes('sde')) return '💻'
    if (role.toLowerCase().includes('data')) return '📊'
    if (role.toLowerCase().includes('analyst')) return '📈'
    if (role.toLowerCase().includes('product')) return '🚀'
    return '💼'
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl text-white">🎓</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Recent Campus Placements
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Celebrating our students' success stories and career achievements at top global companies
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200/60 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-600 mb-2">250+</div>
                <div className="text-slate-600 text-sm font-medium">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600 mb-2">₹55L</div>
                <div className="text-slate-600 text-sm font-medium">Highest Package</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-600 mb-2">₹8L</div>
                <div className="text-slate-600 text-sm font-medium">Average Package</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-orange-600 mb-2">95%</div>
                <div className="text-slate-600 text-sm font-medium">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Placements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placements.map((student, index) => (
            <div
              key={student.id}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${getCompanyColor(student.company)} transition-opacity duration-500`}></div>
              
              {/* Package badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCompanyColor(student.company)} shadow-lg`}>
                  {student.package}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Student Photo */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${getCompanyColor(student.company)} p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-full h-full rounded-xl object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 hidden items-center justify-center text-2xl">
                        👤
                      </div>
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                </div>

                {/* Student Details */}
                <div className="text-center space-y-3">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {student.name}
                  </h3>

                  {/* Company */}
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl">{student.companyLogo}</span>
                    <span className="font-semibold text-slate-700">{student.company}</span>
                  </div>

                  {/* Role */}
                  <div className="flex items-center justify-center space-x-2 text-slate-600">
                    <span className="text-lg">{getRoleIcon(student.role)}</span>
                    <span className="font-medium">{student.role}</span>
                  </div>

                  {/* Year */}
                  <div className="flex items-center justify-center space-x-2 text-slate-500">
                    <span className="text-sm">📅</span>
                    <span className="text-sm font-medium">{student.year}</span>
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2 text-sm font-medium text-slate-600">
                    {/* <span>View Details</span> */}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-400">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <span className="text-2xl">🏆</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-slate-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}