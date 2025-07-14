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
  emailAddress = "admissions@edu.in",
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
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:32px_32px]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Campus Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8h1m4 0h1" />
                    </svg>
                  </div>
                  Campus Address
                </h3>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:bg-white/8 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 leading-relaxed text-sm font-medium">{campusAddress.location}</p>
                      <p className="text-gray-400 text-sm mt-1">{campusAddress.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {Object.entries(contactInfo).map(([department, contact]) => (
                  <div key={department} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/8 transition-all duration-300">
                    <h4 className="font-semibold text-green-300 mb-3 text-sm uppercase tracking-wide">{department}</h4>
                    <a
                      href={`tel:${contact}`}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      <span className="font-medium">{contact}</span>
                    </a>
                  </div>
                ))}
                
                <div className="bg-orange-500/10 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center text-orange-200 hover:text-white transition-colors duration-300"
                  >
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-orange-300 uppercase tracking-wide font-medium">Email</p>
                      <span className="font-medium">{emailAddress}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* City Offices */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8h1m4 0h1" />
                  </svg>
                </div>
                Regional Offices
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {cityOffices.map((city, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/8 hover:border-purple-400/30 transition-all duration-300 text-center"
                  >
                    <span className="text-gray-300 text-sm font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className="space-y-8">
              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  Connect With Us
                </h3>
                
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-pink-400/30"
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  Newsletter
                </h3>
                
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all duration-300 text-sm"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                  >
                    Subscribe to Updates
                  </button>
                  
                  {isSubscribed && (
                    <div className="text-center p-3 bg-green-500/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
                      <span className="text-green-300 text-sm font-medium">✓ Successfully subscribed!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-sm font-medium">
                  © 2025 {institutionShort}. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {institutionName}
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-500 text-xs">
                  Developed by{" "}
                  <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium">
                    {websiteCredit}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EducationalFooter