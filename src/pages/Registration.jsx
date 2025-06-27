import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    rollNumber: '',
    studentClass: '', // ✅ Corrected here
    semester: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    else if (formData.age < 16 || formData.age > 100) newErrors.age = 'Age must be between 16 and 100';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.rollNumber.trim()) newErrors.rollNumber = 'Roll number is required';
    if (!formData.studentClass) newErrors.studentClass = 'Class is required'; // ✅ fixed
    if (!formData.semester) newErrors.semester = 'Semester is required';

    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:8080/api/v1.0/student/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.text(); // Change to text if backend returns plain string
        if (response.ok && result.toLowerCase().includes('success')) {
          setIsSubmitted(true);
        } else {
          alert(result || 'Something went wrong!');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong!');
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      email: '',
      rollNumber: '',
      studentClass: '', // ✅ fixed
      semester: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">Your student registration has been submitted successfully.</p>
          <button
            onClick={handleReset}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register Another Student
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Registration Portal</h1>
          <p className="text-gray-600">Enter your details to register in the system</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h2 className="text-xl font-semibold">Registration Form</h2>
          </div>

          <div className="p-6 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Age & Roll Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="16"
                  max="100"
                  className={`w-full px-4 py-3 border rounded-lg ${errors.age ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  placeholder="Enter your age"
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
              </div>

              <div>
                <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-2">Roll Number *</label>
                <input
                  type="text"
                  id="rollNumber"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.rollNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  placeholder="Enter roll number"
                />
                {errors.rollNumber && <p className="text-red-500 text-sm mt-1">{errors.rollNumber}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Class & Semester */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="studentClass" className="block text-sm font-medium text-gray-700 mb-2">Class *</label>
                <select
                  id="studentClass"
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.studentClass ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                >
                  <option value="">Select your class</option>
                  <option value="B.Tech CSE">B.Tech Computer Science</option>
                  <option value="B.Tech ECE">B.Tech Electronics</option>
                  <option value="B.Tech ME">B.Tech Mechanical</option>
                  <option value="B.Tech CE">B.Tech Civil</option>
                  <option value="BBA">BBA</option>
                  <option value="BCA">BCA</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MBA">MBA</option>
                </select>
                {errors.studentClass && <p className="text-red-500 text-sm mt-1">{errors.studentClass}</p>}
              </div>

              <div>
                <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">Semester *</label>
                <select
                  id="semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.semester ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                >
                  <option value="">Select semester</option>
                  {[...Array(8)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{`${i + 1} Semester`}</option>
                  ))}
                </select>
                {errors.semester && <p className="text-red-500 text-sm mt-1">{errors.semester}</p>}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700"
              >
                Register Student
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-400"
              >
                Reset Form
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p>Fields marked with * are mandatory</p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
