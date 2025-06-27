import React, { useState } from 'react';
import { Calendar, Award, User, BookOpen, MapPin, Clock, Hash, FileText } from 'lucide-react';

const CertificateGenerator = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    courseName: '',
    instructorName: '',
    institutionName: '',
    completionDate: '',
    duration: '',
    grade: '',
    creditsEarned: '',
    certificateType: 'completion',
    description: '',
    issueDate: new Date().toISOString().split('T')[0]
  });
  
  const [certificateId, setCertificateId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setCertificateId(null);
  
    try {
      const response = await fetch('http://localhost:8080/api/v1.0/certificates/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to generate certificate');
      }
  
      const data = await response.json();
      setCertificateId(data.id);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while generating certificate.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleDownload = () => {
    if (!certificateId) return;
    window.open(`http://localhost:8080/api/v1.0/certificates/download/${certificateId}`, '_blank');
  };

  const isFormValid = formData.studentName && formData.courseName && formData.institutionName && formData.completionDate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Certificate Generator</h1>
          </div>
          <p className="text-gray-600">Generate professional certificates with comprehensive details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Student Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Student Information
            </h3>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">Student Name *</label>
              <input
                type="text"
                value={formData.studentName}
                onChange={(e) => handleInputChange('studentName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter full student name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Grade/Score</label>
              <select
                value={formData.grade}
                onChange={(e) => handleInputChange('grade', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Grade</option>
                <option value="A+">A+ (Excellent)</option>
                <option value="A">A (Very Good)</option>
                <option value="B+">B+ (Good)</option>
                <option value="B">B (Satisfactory)</option>
                <option value="C+">C+ (Average)</option>
                <option value="C">C (Below Average)</option>
                <option value="Pass">Pass</option>
                <option value="Distinction">Distinction</option>
                <option value="Merit">Merit</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Credits Earned</label>
              <input
                type="number"
                value={formData.creditsEarned}
                onChange={(e) => handleInputChange('creditsEarned', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 3.0"
                step="0.1"
              />
            </div>
          </div>

          {/* Course Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-green-600" />
              Course Information
            </h3>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">Course Name *</label>
              <input
                type="text"
                value={formData.courseName}
                onChange={(e) => handleInputChange('courseName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter course name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Instructor Name</label>
              <input
                type="text"
                value={formData.instructorName}
                onChange={(e) => handleInputChange('instructorName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter instructor name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Course Duration</label>
              <select
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Duration</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
              </select>
            </div>
          </div>

          {/* Institution Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-purple-600" />
              Institution Details
            </h3>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">Institution Name *</label>
              <input
                type="text"
                value={formData.institutionName}
                onChange={(e) => handleInputChange('institutionName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter institution name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Certificate Type</label>
              <select
                value={formData.certificateType}
                onChange={(e) => handleInputChange('certificateType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="completion">Certificate of Completion</option>
                <option value="achievement">Certificate of Achievement</option>
                <option value="participation">Certificate of Participation</option>
                <option value="excellence">Certificate of Excellence</option>
                <option value="proficiency">Certificate of Proficiency</option>
              </select>
            </div>
          </div>

          {/* Date Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-orange-600" />
              Date Information
            </h3>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">Completion Date *</label>
              <input
                type="date"
                value={formData.completionDate}
                onChange={(e) => handleInputChange('completionDate', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Issue Date</label>
              <input
                type="date"
                value={formData.issueDate}
                onChange={(e) => handleInputChange('issueDate', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Description Field */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-4">
            <FileText className="w-5 h-5 mr-2 text-indigo-600" />
            Additional Details
          </h3>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Course Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Enter course description or special achievements..."
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleGenerate}
            disabled={loading || !isFormValid}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <Award className="w-5 h-5 mr-2" />
                Generate Certificate
              </>
            )}
          </button>

          {certificateId && (
            <button
              onClick={handleDownload}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
            >
              <Hash className="w-5 h-5 mr-2" />
              Download Certificate
            </button>
          )}
        </div>

        {/* Certificate ID Display */}
        {certificateId && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm">
              <strong>Certificate Generated Successfully!</strong>
              <br />
              Certificate ID: <span className="font-mono">{certificateId}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateGenerator;