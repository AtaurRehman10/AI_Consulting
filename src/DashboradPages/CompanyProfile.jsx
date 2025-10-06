import React, { useState } from "react";
import { Plus, Edit, Trash2, Save } from "lucide-react";

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

export default CompanyProfileTab;
