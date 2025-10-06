import React, { useState } from "react";
import {
  X,
  Plus,
  Edit,
  Trash2,
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

const ServicesTab = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "AI Strategy Consultation",
      logoId: "brain",
      problem: "Businesses struggle to identify where AI can add value",
      solution: "We provide expert analysis and roadmap for AI implementation",
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
                  onChange={(e) => handleInputChange("problem", e.target.value)}
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

export default ServicesTab;
