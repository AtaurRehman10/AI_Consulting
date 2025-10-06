import React, { useState } from "react";
import {
  Mail,
  Calendar,
  TrendingUp,
  MessageSquare,
  FileText,
  Eye,
  MoreVertical,
  Star,
  Building2,
  Tag,
  Briefcase,
} from "lucide-react";

const OverviewTab = () => {
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

  return (
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

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">
            Recent Contact Forms
          </h3>
          <p className="text-sm text-gray-600 mt-1">Latest submissions</p>
        </div>

        {/* Desktop Table View */}
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
};

export default OverviewTab;
