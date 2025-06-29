import React, { useState, useEffect } from "react";
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  BarChart3, 
  Calculator, 
  Search, 
  Filter, 
  Eye, 
  Download,
  TrendingUp,
  Award,
  Calendar,
  Users,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import axios from "axios";

const StudentMarksViewer = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
 

  // Fetch data from API
  const fetchStudentMarks = async () => {
    setIsLoading(true);
    setError("");
  
    try {
      const response = await axios.get("http://localhost:8080/api/v1.0/marks");
      setStudentsData(response.data);
      setFilteredData(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch student data. Please check your API connection.");
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    fetchStudentMarks();
  }, []);

  // Filter data based on search and filters
  useEffect(() => {
    let filtered = studentsData;

    if (searchTerm) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedClass) {
      filtered = filtered.filter(student => student.studClass === selectedClass);
    }

    if (selectedSubject) {
      filtered = filtered.filter(student => student.subject === selectedSubject);
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedClass, selectedSubject, studentsData]);

  // Calculate total marks
  const calculateTotal = (student) => {
    return parseInt(student.midTerm) + parseInt(student.assignment) + 
           parseInt(student.tutorials) + parseInt(student.presentation) + 
           parseInt(student.endTerm);
  };

  // Calculate percentage
  const calculatePercentage = (student) => {
    const total = calculateTotal(student);
    return ((total / 200) * 100).toFixed(1);
  };

  // Get grade based on percentage
  const getGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'O', color: 'text-green-600 bg-green-100' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-600 bg-green-100' };
    if (percentage >= 70) return { grade: 'B+', color: 'text-blue-600 bg-blue-100' };
    if (percentage >= 60) return { grade: 'B', color: 'text-blue-600 bg-blue-100' };
    if (percentage >= 50) return { grade: 'C', color: 'text-yellow-600 bg-yellow-100' };
    return { grade: 'F', color: 'text-red-600 bg-red-100' };
  };

  // Get unique values for filters
  const uniqueClasses = [...new Set(studentsData.map(s => s.studClass))];
  const uniqueSubjects = [...new Set(studentsData.map(s => s.subject))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Academic Management System</h1>
              <p className="text-gray-600 mt-1">Student Marks Overview Portal</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={fetchStudentMarks}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh Data
              </button>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Class Filter */}
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Classes</option>
              {uniqueClasses.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>

            {/* Subject Filter */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Subjects</option>
              {uniqueSubjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-gray-50 rounded-lg px-4 py-2">
              <span className="text-sm text-gray-600">
                {filteredData.length} Student{filteredData.length !== 1 ? 's' : ''} Found
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600">Loading student data from API...</p>
            <p className="text-sm text-gray-500 mt-2">GET http://localhost:8080/api/v1.0/marks/register</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="max-w-7xl mx-auto mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="w-5 h-5" />
              <p className="font-medium">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-lg">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Student Academic Performance
            </h2>
            <p className="text-blue-100 mt-1">Comprehensive marks and grade overview</p>
          </div>

          {/* Table Content */}
          {!isLoading && !error && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Details</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Academic Info</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mid Term</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutorials</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Presentation</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Term</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((student, index) => {
                    const percentage = calculatePercentage(student);
                    const gradeInfo = getGrade(percentage);
                    
                    return (
                      <tr key={student.id || index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                              <User className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{student.name}</div>
                              <div className="text-sm text-gray-500">ID: {student.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            <div className="font-medium">{student.subject}</div>
                            <div className="text-gray-500">{student.studClass} - Section {student.section}</div>
                            <div className="text-gray-500">{student.course}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">{student.midTerm}/40</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">{student.assignment}/20</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">{student.tutorials}/20</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">{student.presentation}/20</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">{student.endTerm}/100</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">
                            <div className="font-bold text-gray-900">{calculateTotal(student)}/200</div>
                            <div className="text-gray-500">{percentage}%</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${gradeInfo.color}`}>
                            {gradeInfo.grade}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => setSelectedStudent(student)}
                            className="text-blue-600 hover:text-blue-900 text-sm font-medium flex items-center gap-1"
                          >
                            <Eye className="w-4 h-4" />
                            View Details
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && filteredData.length === 0 && studentsData.length > 0 && (
            <div className="p-12 text-center">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Student Performance Details</h3>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="text-white hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Student Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {selectedStudent.name}</p>
                    <p><strong>Class:</strong> {selectedStudent.studClass}</p>
                    <p><strong>Section:</strong> {selectedStudent.section}</p>
                    <p><strong>Course:</strong> {selectedStudent.course}</p>
                    <p><strong>Subject:</strong> {selectedStudent.subject}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Performance Summary</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Total Marks:</strong> {calculateTotal(selectedStudent)}/200</p>
                    <p><strong>Percentage:</strong> {calculatePercentage(selectedStudent)}%</p>
                    <p><strong>Grade:</strong> {getGrade(calculatePercentage(selectedStudent)).grade}</p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium text-gray-900 mb-4">Detailed Marks Breakdown</h4>
              <div className="grid grid-cols-5 gap-4">
              {[
  { label: 'Mid Term', value: selectedStudent.midTerm, icon: Calculator, max: 40 },
  { label: 'Assignment', value: selectedStudent.assignment, icon: FileText, max: 20 },
  { label: 'Tutorials', value: selectedStudent.tutorials, icon: BookOpen, max: 20 },
  { label: 'Presentation', value: selectedStudent.presentation, icon: BarChart3, max: 20 },
  { label: 'End Term', value: selectedStudent.endTerm, icon: Calculator, max: 100 }
].map((item, index) => {
  const IconComponent = item.icon;
  return (
    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
      <IconComponent className="w-6 h-6 text-blue-600 mx-auto mb-2" />
      <div className="text-xs text-gray-600 mb-1">{item.label}</div>
      <div className="font-bold text-lg">{item.value}</div>
      <div className="text-xs text-gray-500">/ {item.max}</div>
    </div>
  );
})}

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-8 text-center text-sm text-gray-500">
        <p>© 2024 Academic Management System. Data fetched from API endpoint.</p>
      </div>
    </div>
  );
};

export default StudentMarksViewer;