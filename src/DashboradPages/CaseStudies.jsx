import React, { useState } from "react";
import {
  BrainCircuit,
  Mail,
  Users,
  BookOpen,
  Calendar,
  BarChart3,
  TrendingUp,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Eye,
  CheckCircle,
  Clock,
  Search,
  Plus,
  Edit,
  Trash2,
  Download,
  Filter,
  MoreVertical,
  AlertCircle,
  Send,
  Star,
  MapPin,
  Building2,
  Tag,
  Briefcase,
  Package,
  Image as ImageIcon,
  Upload,
  Save,
  Brain,
  Sparkles,
  Target,
  Rocket,
  Lightbulb,
  Zap,
} from "lucide-react";

const CaseStudiesTab = () => {
  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1,
      industryType: "Manufacturing",
      projectName: "Invoice Processing Automation",
      companyName: "Local Manufacturing Company",
      challenge:
        "Manual invoice processing taking 3 days, high error rates, and frustrated accounting team spending 20+ hours weekly on data entry.",
      solution:
        "Implemented OCR technology with intelligent data extraction, automated approval workflows, and integration with existing ERP system.",
      results: [
        "70% reduction in processing time (3 days to 8 hours)",
        "95% accuracy improvement in data extraction",
        "20 hours weekly time savings for accounting team",
        "ROI achieved within 6 weeks",
      ],
      timeline: "8-12 weeks",
    },
    {
      id: 2,
      industryType: "Retail",
      projectName: "Customer Service AI Chatbot",
      companyName: "Texas Retail Group",
      challenge:
        "Overwhelmed customer service team handling 500+ daily inquiries, long wait times, and customer dissatisfaction.",
      solution:
        "Deployed AI-powered chatbot with natural language processing, integrated with CRM and order management systems.",
      results: [
        "60% of inquiries resolved automatically",
        "Average response time reduced from 15 minutes to instant",
        "Customer satisfaction increased by 35%",
        "Support team now focuses on complex issues",
      ],
      timeline: "6-10 weeks",
    },
  ]);

  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [caseStudyForm, setCaseStudyForm] = useState({
    industryType: "",
    projectName: "",
    companyName: "",
    challenge: "",
    solution: "",
    results: ["", "", "", ""],
    timeline: "",
  });

  const industryTypeOptions = [
    "Manufacturing",
    "Retail",
    "Healthcare",
    "Finance",
    "Real Estate",
    "Legal",
    "Professional Services",
    "Technology",
    "Hospitality",
    "Education",
  ];

  const openAddModal = () => {
    setCaseStudyForm({
      industryType: "",
      projectName: "",
      companyName: "",
      challenge: "",
      solution: "",
      results: ["", "", "", ""],
      timeline: "",
    });
    setEditingCaseStudy(null);
    setShowCaseStudyModal(true);
  };

  const openEditModal = (caseStudy) => {
    setCaseStudyForm({
      industryType: caseStudy.industryType,
      projectName: caseStudy.projectName,
      companyName: caseStudy.companyName,
      challenge: caseStudy.challenge,
      solution: caseStudy.solution,
      results: caseStudy.results,
      timeline: caseStudy.timeline,
    });
    setEditingCaseStudy(caseStudy.id);
    setShowCaseStudyModal(true);
  };

  const handleInputChange = (field, value) => {
    setCaseStudyForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleResultChange = (index, value) => {
    setCaseStudyForm((prev) => {
      const newResults = [...prev.results];
      newResults[index] = value;
      return {
        ...prev,
        results: newResults,
      };
    });
  };

  const handleRemoveResult = (index) => {
    setCaseStudyForm((prev) => {
      const newResults = prev.results.filter((_, i) => i !== index);
      if (newResults.length === 0) {
        newResults.push("");
      }
      return {
        ...prev,
        results: newResults,
      };
    });
  };

  const handleAddResult = () => {
    setCaseStudyForm((prev) => ({
      ...prev,
      results: [...prev.results, ""],
    }));
  };

  const handleSaveCaseStudy = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const validResults = caseStudyForm.results.filter(
        (result) => result.trim() !== ""
      );

      if (
        !caseStudyForm.industryType.trim() ||
        !caseStudyForm.projectName.trim() ||
        !caseStudyForm.companyName.trim() ||
        !caseStudyForm.challenge.trim() ||
        !caseStudyForm.solution.trim() ||
        validResults.length === 0
      ) {
        alert("Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }

      if (editingCaseStudy) {
        // Update existing case study
        setCaseStudies(
          caseStudies.map((cs) =>
            cs.id === editingCaseStudy
              ? {
                  ...caseStudyForm,
                  id: editingCaseStudy,
                  results: validResults,
                }
              : cs
          )
        );
      } else {
        // Add new case study
        setCaseStudies([
          ...caseStudies,
          { ...caseStudyForm, id: Date.now(), results: validResults },
        ]);
      }

      setShowCaseStudyModal(false);
    } catch (error) {
      console.error("Error saving case study:", error);
      alert("Failed to save case study. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteCaseStudy = (id) => {
    if (window.confirm("Are you sure you want to delete this case study?")) {
      setCaseStudies(caseStudies.filter((cs) => cs.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Case Studies Management
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Showcase your success stories and client results
            </p>
          </div>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Plus className="w-5 h-5" />
            Add Case Study
          </button>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-700">
                  {caseStudy.industryType}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditModal(caseStudy)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDeleteCaseStudy(caseStudy.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>

              <h3 className="font-bold text-xl text-gray-900 mb-2">
                {caseStudy.projectName}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {caseStudy.companyName}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-gray-700 uppercase mb-1">
                    Challenge
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-700 uppercase mb-1">
                    Solution
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-700 uppercase mb-2">
                    Results Achieved
                  </h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 3).map((result, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-600 flex items-start"
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{result}</span>
                      </li>
                    ))}
                    {caseStudy.results.length > 3 && (
                      <li className="text-xs text-blue-600 font-medium">
                        +{caseStudy.results.length - 3} more results
                      </li>
                    )}
                  </ul>
                </div>

                {caseStudy.timeline && (
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      <span className="font-medium">Project Timeline:</span>
                      <span className="ml-1">{caseStudy.timeline}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {showCaseStudyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingCaseStudy ? "Edit Case Study" : "Add New Case Study"}
              </h2>
              <button
                onClick={() => setShowCaseStudyModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* Industry Type */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Industry Type *
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={caseStudyForm.industryType}
                  onChange={(e) =>
                    handleInputChange("industryType", e.target.value)
                  }
                >
                  <option value="">Select industry...</option>
                  {industryTypeOptions.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Invoice Processing Automation"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={caseStudyForm.projectName}
                  onChange={(e) =>
                    handleInputChange("projectName", e.target.value)
                  }
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Local Manufacturing Company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={caseStudyForm.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                />
              </div>

              {/* Challenge */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Challenge *
                </label>
                <textarea
                  placeholder="Describe the challenge the client was facing..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={caseStudyForm.challenge}
                  onChange={(e) =>
                    handleInputChange("challenge", e.target.value)
                  }
                />
              </div>

              {/* Solution */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Solution *
                </label>
                <textarea
                  placeholder="Describe the solution you implemented..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={caseStudyForm.solution}
                  onChange={(e) =>
                    handleInputChange("solution", e.target.value)
                  }
                />
              </div>

              {/* Results Achieved */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Results Achieved *
                </label>
                <div className="space-y-3">
                  {caseStudyForm.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder={`Result ${index + 1}`}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        value={result}
                        onChange={(e) =>
                          handleResultChange(index, e.target.value)
                        }
                      />
                      {caseStudyForm.results.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveResult(index)}
                          className="text-red-500 hover:text-red-700 flex-shrink-0"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddResult}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" /> Add Another Result
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Project Timeline
                </label>
                <input
                  type="text"
                  placeholder="e.g., 8-12 weeks"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={caseStudyForm.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCaseStudyModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveCaseStudy}
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-5 h-5" />
                  {isSubmitting
                    ? "Saving..."
                    : editingCaseStudy
                    ? "Update Case Study"
                    : "Publish Case Study"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesTab;
