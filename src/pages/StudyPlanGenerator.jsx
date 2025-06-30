import React, { useState } from 'react';
import {
  BookOpen, Plus, User, Target, Loader2, CheckCircle, Copy,
  Sparkles, Brain, Clock, TrendingUp, Star, Zap
} from 'lucide-react';

const StudyPlanGenerator = () => {
  const [studentName, setStudentName] = useState('');
  const [syllabus, setSyllabus] = useState([{ subject: '', topics: '' }]);
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedSyllabus = [...syllabus];
    updatedSyllabus[index][field] = value;
    setSyllabus(updatedSyllabus);
  };

  const addSubject = () => {
    setSyllabus([...syllabus, { subject: '', topics: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const syllabusMap = {};
    syllabus.forEach((item) => {
      if (item.subject && item.topics) {
        syllabusMap[item.subject] = item.topics;
      }
    });

    setLoading(true);
    setGeneratedPlan('');
    try {
      const response = await fetch('http://localhost:8080/api/v1.0/study-plan-ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentName,
          syllabus: syllabusMap,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate study plan');
      }

      const planText = await response.text();
      setGeneratedPlan(planText);
    } catch (error) {
      setGeneratedPlan('❌ Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPlan);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <Brain className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
            AI Study Planner
          </h1>

          <div className="flex items-center justify-center gap-2 my-4">
            <Sparkles className="w-5 h-5 text-yellow-500 animate-spin" />
            <p className="text-lg text-gray-600 font-medium">Powered by Advanced AI Technology</p>
            <Sparkles className="w-5 h-5 text-yellow-500 animate-spin" />
          </div>

          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Transform your learning journey with personalized study plans crafted by artificial intelligence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[{ icon: <TrendingUp />, text: '95%', label: 'Success Rate' },
          { icon: <Clock />, text: '2 Min', label: 'Avg Time' },
          { icon: <Star />, text: '10K+', label: 'Happy Students' }].map((stat, i) => (
            <div key={i} className="bg-gray-100 rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  {React.cloneElement(stat.icon, { className: "w-6 h-6 text-blue-600" })}
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.text}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Create Your Study Plan</h2>
                <p className="text-sm text-blue-100">Fill in your details to get started</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-lg font-medium text-gray-700">
                <User className="w-5 h-5 text-blue-600" />
                Your Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl text-gray-800"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Subjects */}
            <div>
              <label className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                Subjects & Topics
              </label>

              {syllabus.map((item, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-xl border border-gray-200 mb-4">
                  <h4 className="text-base font-semibold text-gray-700 mb-4">Subject {index + 1}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Subject Name"
                      value={item.subject}
                      onChange={(e) => handleChange(index, 'subject', e.target.value)}
                      className="p-3 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Topics to Cover"
                      value={item.topics}
                      onChange={(e) => handleChange(index, 'topics', e.target.value)}
                      className="p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addSubject}
                className="w-full mt-2 text-blue-600 border border-blue-300 rounded-full py-3 hover:bg-blue-50 transition"
              >
                <Plus className="inline w-4 h-4 mr-1" />
                Add Another Subject
              </button>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 hover:from-blue-500 hover:to-purple-500 transition"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Generate My Study Plan
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output */}
        {generatedPlan && (
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl shadow-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold">🎉 Study Plan Ready</h3>
                  <p className="text-sm text-green-100">Crafted using your input</p>
                </div>
              </div>
              <button
                onClick={copyToClipboard}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl flex items-center gap-2"
              >
                <Copy className="w-5 h-5" />
                Copy
              </button>
            </div>

            <div className="p-6">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
                {generatedPlan}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyPlanGenerator;
