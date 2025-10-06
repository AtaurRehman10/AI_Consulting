import React, { useState, useEffect } from "react";
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

// Company Profile Tab
const CompanyProfileTab = () => {
  const [companyData, setCompanyData] = useState({
    companyName: "Core Implementations",
    completeProjects: "50+",
    headline: "Streamline Your Business with AI",
    description:
      "We help Texas SMBs unlock AI automation for efficiency and growth. Transform your operations with intelligent solutions designed for your business.",
    teamMembers: [
      {
        id: 1,
        name: "John Smith",
        role: "CEO & Founder",
        description:
          "15+ years in AI and machine learning, leading innovation in SMB solutions.",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        role: "CTO",
        description:
          "Expert in automation systems with a passion for simplifying complex technology.",
      },
      {
        id: 3,
        name: "Mike Chen",
        role: "Lead Developer",
        description:
          "Full-stack developer specializing in AI integration and custom solutions.",
      },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...companyData });

  const handleSave = () => {
    setCompanyData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(companyData);
    setIsEditing(false);
  };

  const addTeamMember = () => {
    setEditData({
      ...editData,
      teamMembers: [
        ...editData.teamMembers,
        {
          id: Date.now(),
          name: "",
          role: "",
          description: "",
        },
      ],
    });
  };

  const updateTeamMember = (id, field, value) => {
    setEditData({
      ...editData,
      teamMembers: editData.teamMembers.map((member) =>
        member.id === id ? { ...member, [field]: value } : member
      ),
    });
  };

  const removeTeamMember = (id) => {
    setEditData({
      ...editData,
      teamMembers: editData.teamMembers.filter((member) => member.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Company Profile
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Manage your company information and team
            </p>
          </div>
          {!isEditing ? (
            <button
              onClick={() => {
                setEditData({ ...companyData });
                setIsEditing(true);
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Edit className="w-5 h-5" />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Company Information */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Company Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Company Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.companyName}
                onChange={(e) =>
                  setEditData({ ...editData, companyName: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter company name"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-semibold">
                {companyData.companyName}
              </div>
            )}
          </div>

          {/* Complete Projects */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Complete Projects
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.completeProjects}
                onChange={(e) =>
                  setEditData({ ...editData, completeProjects: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="e.g., 50+"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-semibold">
                {companyData.completeProjects}
              </div>
            )}
          </div>

          {/* Website Headline */}
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Website Headline
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.headline}
                onChange={(e) =>
                  setEditData({ ...editData, headline: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter website headline"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-semibold">
                {companyData.headline}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Company Description
            </label>
            {isEditing ? (
              <textarea
                rows={4}
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter company description"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">
                {companyData.description}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Our Team</h3>
          {isEditing && (
            <button
              onClick={addTeamMember}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
            >
              <Plus className="w-4 h-4" />
              Add Member
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(isEditing ? editData : companyData).teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
            >
              {isEditing && (
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => removeTeamMember(member.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              )}

              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg">
                {member.name
                  ? member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                  : "??"}
              </div>

              {/* Name */}
              {isEditing ? (
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) =>
                    updateTeamMember(member.id, "name", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 text-center font-bold focus:ring-2 focus:ring-blue-500"
                  placeholder="Name"
                />
              ) : (
                <h4 className="font-bold text-lg text-gray-900 text-center mb-1">
                  {member.name}
                </h4>
              )}

              {/* Role */}
              {isEditing ? (
                <input
                  type="text"
                  value={member.role}
                  onChange={(e) =>
                    updateTeamMember(member.id, "role", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 text-center text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Role"
                />
              ) : (
                <p className="text-sm text-blue-600 font-semibold text-center mb-3">
                  {member.role}
                </p>
              )}

              {/* Description */}
              {isEditing ? (
                <textarea
                  rows={3}
                  value={member.description}
                  onChange={(e) =>
                    updateTeamMember(member.id, "description", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Description"
                />
              ) : (
                <p className="text-sm text-gray-600 text-center">
                  {member.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reviews Tab
const ReviewsTab = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Maria Johnson",
      designation: "Operations Manager, Austin Manufacturing",
      rating: 5,
      description:
        "Core Implementations transformed our invoice processing from a 3-day manual nightmare to a 2-hour automated process. The ROI was clear within the first month.",
    },
    {
      id: 2,
      name: "Robert Chen",
      designation: "CEO, Dallas Professional Services",
      rating: 5,
      description:
        "Finally, a tech company that speaks our language. They understood our business needs and delivered exactly what we needed—no overselling, just results.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Director of Operations, Houston Logistics",
      rating: 4,
      description:
        "Great service and support. The team was responsive and helped us implement AI solutions that actually work for our business size.",
    },
  ]);

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    designation: "",
    rating: 5,
    description: "",
  });

  const openAddModal = () => {
    setReviewForm({
      name: "",
      designation: "",
      rating: 5,
      description: "",
    });
    setEditingReview(null);
    setShowReviewModal(true);
  };

  const openEditModal = (review) => {
    setReviewForm(review);
    setEditingReview(review.id);
    setShowReviewModal(true);
  };

  const handleSaveReview = () => {
    if (editingReview) {
      // Update existing review
      setReviews(
        reviews.map((r) =>
          r.id === editingReview ? { ...reviewForm, id: editingReview } : r
        )
      );
    } else {
      // Add new review
      setReviews([...reviews, { ...reviewForm, id: Date.now() }]);
    }
    setShowReviewModal(false);
  };

  const handleDeleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews(reviews.filter((r) => r.id !== id));
    }
  };

  const StarRating = ({ rating, editable = false, onChange }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => editable && onChange && onChange(star)}
            className={`${
              editable ? "cursor-pointer" : "cursor-default"
            } transition-colors`}
            disabled={!editable}
          >
            <Star
              className={`w-6 h-6 ${
                star <= rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Reviews Management
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Manage customer testimonials and reviews
            </p>
          </div>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Plus className="w-5 h-5" />
            Add Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <StarRating rating={review.rating} />
              <div className="flex gap-2">
                <button
                  onClick={() => openEditModal(review)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => handleDeleteReview(review.id)}
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              "{review.description}"
            </p>

            <div className="flex items-center pt-4 border-t border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                {review.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-600">{review.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingReview ? "Edit Review" : "Add New Review"}
              </h2>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Maria Johnson"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={reviewForm.name}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, name: e.target.value })
                  }
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Designation *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Operations Manager, Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={reviewForm.designation}
                  onChange={(e) =>
                    setReviewForm({
                      ...reviewForm,
                      designation: e.target.value,
                    })
                  }
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Rating *
                </label>
                <StarRating
                  rating={reviewForm.rating}
                  editable={true}
                  onChange={(rating) =>
                    setReviewForm({ ...reviewForm, rating })
                  }
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Review Description *
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter the customer's review..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={reviewForm.description}
                  onChange={(e) =>
                    setReviewForm({
                      ...reviewForm,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveReview}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Save className="w-5 h-5" />
                  {editingReview ? "Update Review" : "Save Review"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [dashboardData, setDashboardData] = useState({
    stats: {
      contacts: 156,
      services: 8,
      caseStudies: 40,
      reviews: 12,
    },
    recentContacts: [
      {
        _id: "1",
        name: "John Doe",
        company: "Tech Innovations",
        email: "john@techinnovations.com",
        projectType: "strategy",
        message: "Looking for AI automation solutions",
        status: "new",
        createdAt: "2024-03-15T10:30:00Z",
      },
      {
        _id: "2",
        name: "Sarah Martinez",
        company: "Local Manufacturing Co",
        email: "sarah@localmfg.com",
        projectType: "automation",
        message: "Need help with process automation",
        status: "contacted",
        createdAt: "2024-03-14T15:20:00Z",
      },
      {
        _id: "3",
        name: "Mike Johnson",
        company: "Texas Retail Group",
        email: "mike@txretail.com",
        projectType: "data",
        message: "Data insights dashboard request",
        status: "new",
        createdAt: "2024-03-14T09:15:00Z",
      },
    ],
    recentConsultations: [
      {
        _id: "1",
        name: "Emily Chen",
        consultationType: "strategy",
        preferredDate: "2024-04-15",
        preferredTime: "14:00",
        status: "requested",
        company: "DataFlow Inc",
      },
      {
        _id: "2",
        name: "Robert Williams",
        consultationType: "discovery",
        preferredDate: "2024-04-16",
        preferredTime: "10:00",
        status: "confirmed",
        company: "Smart Solutions",
      },
    ],
  });

  const StatCard = ({ icon: Icon, title, value, change, color, subtitle }) => (
    <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 cursor-pointer overflow-hidden">
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-600 mb-2">{title}</p>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
            {value}
          </h3>
          {subtitle && (
            <p className="text-xs text-gray-500 font-medium">{subtitle}</p>
          )}
          {change && (
            <p className="text-sm text-green-600 mt-3 flex items-center font-semibold">
              <TrendingUp className="w-4 h-4 mr-1" />
              {change}
            </p>
          )}
        </div>
        <div
          className={`${color} bg-opacity-10 p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-lg`}
        >
          <Icon
            className={`w-7 h-7 ${color.replace("bg-", "text-")}`}
            strokeWidth={2}
          />
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 transition-all duration-300 flex flex-col fixed h-full z-30 shadow-xl`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {isSidebarOpen ? (
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-2 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BrainCircuit
                    className="w-8 h-8 text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">
                  Core Implem...
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  Admin Dashboard
                </p>
              </div>
            </div>
          ) : (
            <div className="relative group cursor-pointer mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-2 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BrainCircuit
                  className="w-8 h-8 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {[
          { id: "overview", icon: BarChart3, label: "Overview" },
          {
            id: "company",
            icon: Building2,
            label: "Company Profile",
          },
          {
            id: "contacts",
            icon: MessageSquare,
            label: "Contact Forms",
          },
          { id: "services", icon: Briefcase, label: "Services" },
          { id: "blog", icon: BookOpen, label: "Blog Posts" },
          {
            id: "case-studies",
            icon: FileText,
            label: "Case Studies",
          },
          { id: "reviews", icon: Star, label: "Reviews" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
              activeTab === item.id
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:bg-gray-100 hover:scale-102"
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
              {isSidebarOpen && (
                <span className="font-semibold">{item.label}</span>
              )}
            </div>
            {isSidebarOpen && item.badge && (
              <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-md">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-core-0004";
          }}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all hover:scale-102"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
          {isSidebarOpen && <span className="font-semibold">Logout</span>}
        </button>
      </div>
    </div>
  );

  // Services Tab
  const ServicesTab = () => {
    const [services, setServices] = useState([
      {
        id: 1,
        name: "AI Strategy Consultation",
        logoId: "brain",
        problem: "Businesses struggle to identify where AI can add value",
        solution:
          "We provide expert analysis and roadmap for AI implementation",
        points: [
          "Custom AI roadmap",
          "ROI analysis",
          "Implementation plan",
          "Ongoing support",
        ],
        image: null,
      },
      {
        id: 2,
        name: "Process Automation",
        logoId: "rocket",
        problem: "Manual processes waste time and resources",
        solution: "Automate repetitive tasks to increase efficiency",
        points: [
          "Workflow analysis",
          "Custom automation",
          "Integration support",
          "Training",
        ],
        image: null,
      },
      {
        id: 3,
        name: "Data Analytics",
        logoId: "target",
        problem: "Data insights are hard to extract and visualize",
        solution: "Transform raw data into actionable business intelligence",
        points: [
          "Dashboard creation",
          "Predictive analytics",
          "Real-time reporting",
          "Data integration",
        ],
        image: null,
      },
    ]);

    const [showServiceModal, setShowServiceModal] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedLogo, setSelectedLogo] = useState("");
    const [serviceForm, setServiceForm] = useState({
      name: "",
      problem: "",
      solution: "",
      points: ["", "", "", ""],
      image: null,
    });

    const logoOptions = [
      { id: "brain", name: "Brain", icon: Brain },
      { id: "sparkles", name: "Sparkles", icon: Sparkles },
      { id: "target", name: "Target", icon: Target },
      { id: "rocket", name: "Rocket", icon: Rocket },
      { id: "lightbulb", name: "Lightbulb", icon: Lightbulb },
      { id: "zap", name: "Zap", icon: Zap },
    ];

    const getIconComponent = (logoId) => {
      const logo = logoOptions.find((l) => l.id === logoId);
      return logo ? logo.icon : Brain;
    };

    const openAddModal = () => {
      setServiceForm({
        name: "",
        problem: "",
        solution: "",
        points: ["", "", "", ""],
        image: null,
      });
      setSelectedLogo("");
      setEditingService(null);
      setShowServiceModal(true);
    };

    const openEditModal = (service) => {
      setServiceForm({
        name: service.name,
        problem: service.problem,
        solution: service.solution,
        points: service.points,
        image: service.image,
      });
      setSelectedLogo(service.logoId);
      setEditingService(service.id);
      setShowServiceModal(true);
    };

    const handleInputChange = (field, value) => {
      setServiceForm((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

    const handlePointChange = (index, value) => {
      setServiceForm((prev) => {
        const newPoints = [...prev.points];
        newPoints[index] = value;
        return {
          ...prev,
          points: newPoints,
        };
      });
    };

    const handleRemovePoint = (index) => {
      setServiceForm((prev) => {
        const newPoints = prev.points.filter((_, i) => i !== index);
        if (newPoints.length === 0) {
          newPoints.push("");
        }
        return {
          ...prev,
          points: newPoints,
        };
      });
    };

    const handleAddPoint = () => {
      setServiceForm((prev) => ({
        ...prev,
        points: [...prev.points, ""],
      }));
    };

    const handleFileChange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        setServiceForm((prev) => ({
          ...prev,
          image: file,
        }));
      }
    };

    const handleSaveService = async () => {
      if (isSubmitting) return;
      setIsSubmitting(true);

      try {
        const validPoints = serviceForm.points.filter(
          (point) => point.trim() !== ""
        );

        if (
          !serviceForm.name.trim() ||
          !serviceForm.problem.trim() ||
          !serviceForm.solution.trim() ||
          validPoints.length === 0 ||
          !selectedLogo
        ) {
          alert("Please fill in all required fields");
          setIsSubmitting(false);
          return;
        }

        if (editingService) {
          // Update existing service
          setServices(
            services.map((s) =>
              s.id === editingService
                ? {
                    ...serviceForm,
                    id: editingService,
                    logoId: selectedLogo,
                    points: validPoints,
                  }
                : s
            )
          );
        } else {
          // Add new service
          setServices([
            ...services,
            {
              ...serviceForm,
              id: Date.now(),
              logoId: selectedLogo,
              points: validPoints,
            },
          ]);
        }

        setShowServiceModal(false);
      } catch (error) {
        console.error("Error saving service:", error);
        alert("Failed to save service. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleDeleteService = (id) => {
      if (window.confirm("Are you sure you want to delete this service?")) {
        setServices(services.filter((s) => s.id !== id));
      }
    };

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Services Management
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Manage your service offerings
              </p>
            </div>
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              Add Service
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = getIconComponent(service.logoId);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl shadow-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(service)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDeleteService(service.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {service.name}
                </h3>

                <div className="mb-3">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Problem
                  </p>
                  <p className="text-sm text-gray-700">{service.problem}</p>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Solution
                  </p>
                  <p className="text-sm text-gray-700">{service.solution}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                    Key Points
                  </p>
                  <ul className="space-y-1">
                    {service.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-600 flex items-start"
                      >
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Modal */}
        {showServiceModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 ">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingService ? "Edit Service" : "Add New Service"}
                </h2>
                <button
                  onClick={() => setShowServiceModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-6 ">
                {/* Service Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Service Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., AI Strategy Consultation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={serviceForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>

                {/* Logo Selection */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Choose Icon *
                  </label>
                  <div className="grid grid-cols-6 gap-3">
                    {logoOptions.map((logo) => {
                      const IconComponent = logo.icon;
                      return (
                        <button
                          key={logo.id}
                          type="button"
                          onClick={() => setSelectedLogo(logo.id)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            selectedLogo === logo.id
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 mx-auto ${
                              selectedLogo === logo.id
                                ? "text-blue-600"
                                : "text-gray-600"
                            }`}
                          />
                          <p className="text-xs mt-2 text-gray-600 font-medium">
                            {logo.name}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Problem */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Problem Statement *
                  </label>
                  <textarea
                    placeholder="What problem does this service solve?"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={serviceForm.problem}
                    onChange={(e) =>
                      handleInputChange("problem", e.target.value)
                    }
                  />
                </div>

                {/* Solution */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Solution Description *
                  </label>
                  <textarea
                    placeholder="How does your service solve this problem?"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={serviceForm.solution}
                    onChange={(e) =>
                      handleInputChange("solution", e.target.value)
                    }
                  />
                </div>

                {/* Key Points */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Key Points *
                  </label>
                  <div className="space-y-3">
                    {serviceForm.points.map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <input
                          type="text"
                          placeholder={`Key point ${index + 1}`}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          value={point}
                          onChange={(e) =>
                            handlePointChange(index, e.target.value)
                          }
                        />
                        {serviceForm.points.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemovePoint(index)}
                            className="text-red-500 hover:text-red-700 flex-shrink-0"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddPoint}
                      className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" /> Add Another Point
                    </button>
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Service Image
                  </label>
                  <input
                    type="file"
                    id="service-image-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="service-image-upload"
                    className="block border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
                  >
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-600 font-medium mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG or WEBP (max. 2MB)
                    </p>
                    {serviceForm.image && (
                      <p className="text-sm text-green-600 font-medium mt-2">
                        ✓ {serviceForm.image.name}
                      </p>
                    )}
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowServiceModal(false)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveService}
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Save className="w-5 h-5" />
                    {isSubmitting
                      ? "Saving..."
                      : editingService
                      ? "Update Service"
                      : "Save Service"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Overview Tab
  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={MessageSquare}
          title="Contact Forms"
          value={dashboardData.stats.contacts}
          subtitle="Total submissions"
          change="+12% this month"
          color="bg-blue-600"
        />
        <StatCard
          icon={Briefcase}
          title="Services"
          value={dashboardData.stats.services}
          subtitle="Active offerings"
          change="+2 this month"
          color="bg-orange-600"
        />
        <StatCard
          icon={FileText}
          title="Case studies"
          value={dashboardData.stats.caseStudies}
          subtitle="Total clients"
          change="+18% this month"
          color="bg-green-600"
        />
        <StatCard
          icon={Star}
          title="Reviews"
          value={dashboardData.stats.reviews}
          subtitle="Total clients"
          change="+18% this month"
          color="bg-gray-600"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Plus, label: "New Blog Post", color: "blue" },
            { icon: Plus, label: "Add Case Study", color: "purple" },
            { icon: Plus, label: "Add Service", color: "green" },
            { icon: Plus, label: "Add Review", color: "orange" },
          ].map((action, i) => (
            <button
              key={i}
              className="flex flex-col items-center p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              <div className={`bg-${action.color}-100 p-3 rounded-xl mb-3`}>
                <action.icon className={`w-6 h-6 text-${action.color}-600`} />
              </div>
              <span className="text-sm font-bold text-gray-700">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      {/* Desktop Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">
            Recent Contact Forms
          </h3>
          <p className="text-sm text-gray-600 mt-1">Latest submissions</p>
        </div>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Project Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {dashboardData.recentContacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        {contact.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {contact.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {contact.company}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-700 capitalize font-medium">
                      {contact.projectType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        contact.status === "new"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Recent Contact Forms - Mobile Card View */}

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-gray-100">
          {dashboardData.recentContacts.map((contact) => (
            <div
              key={contact._id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 truncate">
                    {contact.name}
                  </h3>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Mail className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                    <span className="truncate">{contact.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <button className="text-blue-600 hover:text-blue-900 p-1 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Building2 className="w-3.5 h-3.5 mr-2 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {contact.company}
                  </span>
                </div>

                <div className="flex items-center text-sm">
                  <Tag className="w-3.5 h-3.5 mr-2 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 capitalize font-medium">
                    {contact.projectType}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                    <span>
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                      contact.status === "new"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {contact.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Contacts Tab
  const ContactsTab = () => {
    const filteredContacts = dashboardData.recentContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.projectType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Form Submissions
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Manage inquiries from your website
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 font-semibold transition-all">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Project Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredContacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-bold text-gray-900">
                          {contact.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {contact.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {contact.company}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-700 capitalize font-medium">
                        {contact.projectType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full ${
                          contact.status === "new"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {contact.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-gray-100">
            {filteredContacts.map((contact) => (
              <div
                key={contact._id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 truncate">
                      {contact.name}
                    </h3>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Mail className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                      <span className="truncate">{contact.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <button className="text-blue-600 hover:text-blue-900 p-1 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Building2 className="w-3.5 h-3.5 mr-2 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">
                      {contact.company}
                    </span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Tag className="w-3.5 h-3.5 mr-2 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700 capitalize font-medium">
                      {contact.projectType}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                      <span>
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        contact.status === "new"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Blog Tab
  const BlogTab = () => {
    const [blogPosts, setBlogPosts] = useState([
      {
        id: 1,
        blogType: "Getting Started",
        blogName: "5 Ways AI Saves Time in Your Business",
        description:
          "Discover the most impactful automation opportunities that can immediately reduce manual work and boost productivity.",
        content:
          "Artificial Intelligence is revolutionizing how small and medium businesses operate. In this guide, we'll explore five practical ways you can implement AI to save time and increase efficiency...",
        publishDate: "2024-03-15",
        readTime: "5 min read",
      },
      {
        id: 2,
        blogType: "Strategy",
        blogName: "Building an AI Roadmap for SMBs",
        description:
          "A step-by-step guide to creating your AI implementation strategy",
        content:
          "Creating an effective AI strategy doesn't have to be complicated. Here's how to build a practical roadmap...",
        publishDate: "2024-03-10",
        readTime: "7 min read",
      },
    ]);

    const [showBlogModal, setShowBlogModal] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [blogForm, setBlogForm] = useState({
      blogType: "",
      blogName: "",
      description: "",
      content: "",
      readTime: "",
    });

    const blogTypeOptions = [
      "Getting Started",
      "Strategy",
      "Implementation",
      "Case Study",
      "Industry Insights",
      "Best Practices",
      "Technology",
      "Automation",
    ];

    const openAddModal = () => {
      setBlogForm({
        blogType: "",
        blogName: "",
        description: "",
        content: "",
        readTime: "",
      });
      setEditingBlog(null);
      setShowBlogModal(true);
    };

    const openEditModal = (blog) => {
      setBlogForm({
        blogType: blog.blogType,
        blogName: blog.blogName,
        description: blog.description,
        content: blog.content,
        readTime: blog.readTime,
      });
      setEditingBlog(blog.id);
      setShowBlogModal(true);
    };

    const handleInputChange = (field, value) => {
      setBlogForm((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

    const handleSaveBlog = async () => {
      if (isSubmitting) return;
      setIsSubmitting(true);

      try {
        if (
          !blogForm.blogType.trim() ||
          !blogForm.blogName.trim() ||
          !blogForm.description.trim() ||
          !blogForm.content.trim()
        ) {
          alert("Please fill in all required fields");
          setIsSubmitting(false);
          return;
        }

        if (editingBlog) {
          // Update existing blog
          setBlogPosts(
            blogPosts.map((b) =>
              b.id === editingBlog
                ? {
                    ...blogForm,
                    id: editingBlog,
                    publishDate: new Date().toISOString().split("T")[0],
                  }
                : b
            )
          );
        } else {
          // Add new blog
          setBlogPosts([
            ...blogPosts,
            {
              ...blogForm,
              id: Date.now(),
              publishDate: new Date().toISOString().split("T")[0],
            },
          ]);
        }

        setShowBlogModal(false);
      } catch (error) {
        console.error("Error saving blog:", error);
        alert("Failed to save blog post. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleDeleteBlog = (id) => {
      if (window.confirm("Are you sure you want to delete this blog post?")) {
        setBlogPosts(blogPosts.filter((b) => b.id !== id));
      }
    };

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Blog Posts Management
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Create and manage your blog content
              </p>
            </div>
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              Add Blog Post
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-700">
                    {blog.blogType}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(blog)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {blog.blogName}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    <span>
                      {new Date(blog.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Modal */}
        {showBlogModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingBlog ? "Edit Blog Post" : "Add New Blog Post"}
                </h2>
                <button
                  onClick={() => setShowBlogModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                {/* Blog Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Blog Type *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={blogForm.blogType}
                    onChange={(e) =>
                      handleInputChange("blogType", e.target.value)
                    }
                  >
                    <option value="">Select blog type...</option>
                    {blogTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Blog Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 5 Ways AI Saves Time in Your Business"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={blogForm.blogName}
                    onChange={(e) =>
                      handleInputChange("blogName", e.target.value)
                    }
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Short Description *
                  </label>
                  <textarea
                    placeholder="Brief summary of the blog post (shown in preview)"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={blogForm.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                  />
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Read Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 5 min read"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={blogForm.readTime}
                    onChange={(e) =>
                      handleInputChange("readTime", e.target.value)
                    }
                  />
                </div>

                {/* Blog Content */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Blog Content *
                  </label>
                  <textarea
                    placeholder="Write your blog post content here..."
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-mono text-sm"
                    value={blogForm.content}
                    onChange={(e) =>
                      handleInputChange("content", e.target.value)
                    }
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    {blogForm.content.length} characters
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBlogModal(false)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveBlog}
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Save className="w-5 h-5" />
                    {isSubmitting
                      ? "Saving..."
                      : editingBlog
                      ? "Update Post"
                      : "Publish Post"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Case Studies Tab
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div
        className={`flex-1 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-5 sticky top-0 z-20 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-500 hover:text-gray-700 md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900">
                  {activeTab.charAt(0).toUpperCase() +
                    activeTab.slice(1).replace("-", " ")}
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  Welcome back, Admin
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-xl font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Houston, TX</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "contacts" && <ContactsTab />}
          {activeTab === "services" && <ServicesTab />}
          {activeTab === "blog" && <BlogTab />}
          {activeTab === "case-studies" && <CaseStudiesTab />}
          {activeTab === "company" && <CompanyProfileTab />}
          {activeTab === "reviews" && <ReviewsTab />}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
