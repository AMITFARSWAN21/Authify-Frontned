import React, { useState } from "react";
import { User, GraduationCap, BookOpen, FileText, BarChart3, Calculator, Save, X } from "lucide-react";
import axios from "axios";

const AddMarksForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    studClass: "",
    course: "",
    section: "",
    midTerm: "",
    assignment: "",
    tutorials: "",
    presentation: "",
    subject: "",
    endTerm: ""
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const res = await axios.post("http://localhost:8080/api/v1.0/marks/register", formData);
      setResponseMsg(res.data);
    } catch (error) {
      if (error.response && error.response.data) {
        setResponseMsg(error.response.data);
      } else {
        setResponseMsg("Failed to add marks. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleReset = () => {
    setFormData({
      name: "",
      studClass: "",
      course: "",
      section: "",
      midTerm: "",
      assignment: "",
      tutorials: "",
      presentation: "",
      subject: "",
      endTerm: ""
    });
    setResponseMsg("");
  };

  const fieldConfig = [
    { name: "name", label: "Student Name", icon: User, type: "text", placeholder: "Enter full name" },
    { name: "studClass", label: "Class", icon: GraduationCap, type: "text", placeholder: "e.g., 10th, 12th" },
    { name: "course", label: "Course", icon: BookOpen, type: "text", placeholder: "e.g., Computer Science" },
    { name: "section", label: "Section", icon: FileText, type: "text", placeholder: "e.g., A, B, C" },
    { name: "subject", label: "Subject", icon: BookOpen, type: "text", placeholder: "Enter subject name" },
    { name: "midTerm", label: "Mid Term Marks", icon: Calculator, type: "number", placeholder: "Out of 40" },
    { name: "assignment", label: "Assignment Marks", icon: FileText, type: "number", placeholder: "Out of 20" },
    { name: "tutorials", label: "Tutorial Marks", icon: BookOpen, type: "number", placeholder: "Out of 20" },
    { name: "presentation", label: "Presentation Marks", icon: BarChart3, type: "number", placeholder: "Out of 20" },
    { name: "endTerm", label: "End Term Marks", icon: Calculator, type: "number", placeholder: "Out of 100" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Academic Management</h1>
              <p className="text-gray-600 mt-1">Student Marks Entry Portal</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-lg">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Add Student Marks
            </h2>
            <p className="text-blue-100 mt-1">Enter comprehensive academic performance data</p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fieldConfig.map((field) => {
                const IconComponent = field.icon;
                return (
                  <div key={field.name} className="space-y-2">
                    <label 
                      htmlFor={field.name} 
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <IconComponent className="w-4 h-4 text-blue-600" />
                      {field.label}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        min={field.type === "number" ? "0" : undefined}
                        max={field.type === "number" ? "100" : undefined}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 font-medium"
              >
                <X className="w-4 h-4" />
                Reset Form
              </button>
              
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Submit Marks
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Response Message */}
          {responseMsg && (
            <div className="mx-6 mb-6">
              <div className={`p-4 rounded-lg border-l-4 ${
                responseMsg.includes('successfully') 
                  ? 'bg-green-50 border-green-400 text-green-700' 
                  : 'bg-red-50 border-red-400 text-red-700'
              }`}>
                <div className="flex items-center gap-2">
                  {responseMsg.includes('successfully') ? (
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  ) : (
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  )}
                  <p className="font-medium">{responseMsg}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>© 2024 Academic Management System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AddMarksForm;