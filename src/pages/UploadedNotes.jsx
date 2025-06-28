import React, { useState, useEffect } from 'react'

export const UploadedNotes = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)
  const [downloadingId, setDownloadingId] = useState(null)

  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = async () => {
    try {
      
      const response = await fetch('http://localhost:8080/api/v1.0/notes')
      const data = await response.json()
      setNotes(data)
    } catch (err) {
      setError('Failed to fetch notes. Please try again later.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) {
      return
    }

    try {
      setDeletingId(id)
      await fetch(`http://localhost:8080/api/v1.0/notes/${id}`, { method: 'DELETE' })
      setNotes(notes.filter(note => note.id !== id))
    } catch (err) {
      console.error('Delete failed:', err)
      alert('Failed to delete the note. Please try again.')
    } finally {
      setDeletingId(null)
    }
  }

  const handleDownload = async (id, title) => {
    try {
      setDownloadingId(id)
      const response = await fetch(`http://localhost:8080/api/v1.0/notes/${id}/download`)
      const blob = await response.blob()
      
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${title.replace(/\s+/g, '-')}.pdf`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Download failed:', err)
      alert('Failed to download the file. Please try again.')
    } finally {
      setDownloadingId(null)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-cyan-50 flex justify-center items-center">
        <div className="text-center">
          <div className="relative inline-flex">
            <div className="w-20 h-20 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-cyan-400 rounded-full animate-spin animate-reverse"></div>
            <div className="absolute inset-2 w-16 h-16 border-4 border-transparent border-l-indigo-400 rounded-full animate-spin animation-delay-300"></div>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-lg font-semibold text-gray-700">Loading your notes</p>
            <p className="text-sm text-gray-500">Please wait while we fetch your content...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 flex items-center justify-center p-4">
        <div className="text-center p-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-red-100 max-w-lg transform hover:scale-105 transition-transform duration-300">
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
          <p className="text-red-600 mb-8 font-medium leading-relaxed">{error}</p>
          <button 
            onClick={() => {
              setLoading(true)
              setError(null)
              fetchNotes()
            }}
            className="group px-8 py-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-2xl hover:from-red-600 hover:via-red-700 hover:to-red-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
          >
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 via-indigo-50 to-violet-100">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 via-violet-600 to-blue-600">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-8 backdrop-blur-sm shadow-2xl border border-white/20">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              My Notes Library
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Your personal collection of educational materials, organized and ready for download
            </p>
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4 text-white/80 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Quick access • Secure downloads</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {notes.length > 0 ? (
          <>
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-600 font-medium">
                {notes.length} {notes.length === 1 ? 'note' : 'notes'} available
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {notes.map((note, index) => (
                <div
                  key={note.id}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-white/60 hover:border-indigo-200 hover:-translate-y-3 hover:rotate-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Enhanced Card Header */}
                  <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 via-violet-500 to-blue-500"></div>
                  
                  {/* Floating action button */}
                  <button
                    onClick={() => handleDelete(note.id)}
                    disabled={deletingId === note.id || downloadingId === note.id}
                    className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300 disabled:opacity-50 rounded-full shadow-lg hover:shadow-xl border border-gray-100 hover:border-red-200 transform hover:scale-110"
                    title="Delete note"
                  >
                    {deletingId === note.id ? (
                      <div className="w-4 h-4 border-2 border-red-300 border-t-red-500 rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    )}
                  </button>
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300 line-clamp-2 pr-8">
                        {note.title}
                      </h3>
                      <div className="inline-flex items-center text-sm text-gray-500 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full px-4 py-2 border border-gray-200">
                        <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(note.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3 text-sm">
                      {note.description}
                    </p>

                    <button
                      onClick={() => handleDownload(note.id, note.title)}
                      disabled={deletingId === note.id || downloadingId === note.id}
                      className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-600 to-violet-600 text-white rounded-2xl py-4 px-6 font-semibold transition-all duration-500 hover:from-indigo-600 hover:via-purple-700 hover:to-violet-700 disabled:opacity-50 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 border border-indigo-400/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      
                      {downloadingId === note.id ? (
                        <div className="relative flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          <span>Downloading...</span>
                        </div>
                      ) : (
                        <div className="relative flex items-center justify-center">
                          <svg className="w-5 h-5 mr-3 group-hover/btn:animate-bounce transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span>Download PDF</span>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 max-w-2xl mx-auto">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">No notes yet</h3>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Start building your knowledge library by uploading your first note
            </p>
            <button className="group px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-violet-600 text-white rounded-2xl font-semibold hover:from-indigo-600 hover:via-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Create Your First Note
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadedNotes