import React, { useState } from "react";
import {
  Mail,
  Calendar,
  Eye,
  Search,
  Filter,
  MoreVertical,
  Building2,
  Tag,
} from "lucide-react";

const ContactsTab = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

export default ContactsTab;
