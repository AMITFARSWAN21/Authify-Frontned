import React, { useState } from "react"

export const EducationalFooter = ({
  institutionName = "Manav Rachna Educational Institutions",
  institutionShort = "Manav Rachna Vidyanatariksha",
  websiteCredit = "Sterco Digitex",
  campusAddress = {
    location: "Sector – 43, Aravalli Hills, Delhi – Surajkund Road",
    city: "Faridabad – 121004, (Haryana), India"
  },
  contactInfo = {
    MRIIRS: "+91-129-4198000",
    MRU: "+91-129-4268500", 
  },
  emailAddress = "admissions@manavrachna.edu.in",
  cityOffices = [
    "Delhi", "Guwahati", "Indore", "Kota", 
    "Lucknow", "Varanasi", "Patna", "Hyderabad"
  ],
  socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" }
  ]
}) => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Campus Information - Enhanced */}
            <div className="lg:col-span-1 space-y-6">
              <div className="group">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"></div>
                    <span className="text-3xl relative z-10">🏫</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      MREI Campus
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:shadow-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <span>📍</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300 leading-relaxed font-medium">{campusAddress.location}</p>
                      <p className="text-gray-400 leading-relaxed">{campusAddress.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information - Enhanced */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl">📞</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Contact Us
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                {Object.entries(contactInfo).map(([department, contact]) => (
                  <div key={department} className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <h4 className="font-bold text-emerald-300 mb-3 text-lg">{department}</h4>
                    {Array.isArray(contact) ? (
                      <div className="space-y-2">
                        {contact.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone}`}
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2 p-2 rounded-lg hover:bg-white/10"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                            <span className="font-medium">{phone}</span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={`tel:${contact}`}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2 p-2 rounded-lg hover:bg-white/10"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                        <span className="font-medium">{contact}</span>
                      </a>
                    )}
                  </div>
                ))}
                
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-xl p-4 border border-yellow-500/30 w-100">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center space-x-3 text-yellow-200 hover:text-white transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <span>✉️</span>
                    </div>
                    <div>
                      <p className="text-xs text-yellow-300 uppercase tracking-wider font-semibold">Email</p>
                      <span className="font-medium">{emailAddress}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* City Offices - Enhanced */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    City Offices
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {cityOffices.map((city, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <div className="relative z-10 text-center">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-semibold text-sm">
                          {city}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media & Newsletter - Enhanced */}
            <div className="lg:col-span-1 space-y-8">
              {/* Follow Us */}
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-3xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                      Follow Us
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mt-2"></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="relative w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/20 hover:border-pink-400/50 group overflow-hidden"
                      title={social.name}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter - Enhanced */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Newsletter</h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400/50 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                  <button
                    onClick={handleNewsletterSubmit}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400/50"
                  >
                    Subscribe
                  </button>
                  
                  {isSubscribed && (
                    <div className="text-center p-3 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-xl">
                      <span className="text-green-300 font-medium">✅ Subscribed successfully!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Copyright Section */}
        <div className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="text-center md:text-left space-y-2">
                <p className="text-gray-300 font-medium">
                  © Copyright 2025 - {institutionShort}
                </p>
                <p className="text-gray-400 text-sm">
                  {institutionName}. All Rights Reserved.
                </p>
                <p className="text-gray-500 text-xs">
                  Website Design & Development by{" "}
                  <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer font-semibold">
                    {websiteCredit}
                  </span>
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="flex justify-center md:justify-end items-center space-x-6 text-gray-400 text-sm">
                  <a href="#" className="hover:text-white transition-colors duration-300 hover:underline decoration-blue-400">
                    Privacy Policy
                  </a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="hover:text-white transition-colors duration-300 hover:underline decoration-green-400">
                    Terms of Service
                  </a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="hover:text-white transition-colors duration-300 hover:underline decoration-purple-400">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EducationalFooter