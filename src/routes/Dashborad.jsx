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
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Start closed on mobile
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sample data structure matching backend
  const [dashboardData, setDashboardData] = useState({
    stats: {
      contacts: 156,
      consultations: 48,
      newsletterSubscribers: 342,
      publishedPosts: 12,
      pendingConsultations: 12,
      caseStudies: 4,
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
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          {change && (
            <p className="text-sm text-green-600 mt-2 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {change}
            </p>
          )}
        </div>
        <div className={`${color} bg-opacity-10 p-3 rounded-lg`}>
          <Icon className={`w-6 h-6 ${color.replace("bg-", "text-")}`} />
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col fixed h-full z-30`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {isSidebarOpen ? (
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-lg p-2">
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900">Core Impl.</h2>
                <p className="text-xs text-gray-500">Admin Dashboard</p>
              </div>
            </div>
          ) : (
            <div className="bg-blue-600 rounded-lg p-2 mx-auto">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {[
          { id: "overview", icon: BarChart3, label: "Overview", badge: null },
          {
            id: "contacts",
            icon: MessageSquare,
            label: "Contact Forms",
            badge: "12",
          },
          {
            id: "consultations",
            icon: Calendar,
            label: "Consultations",
            badge: "5",
          },
          { id: "newsletter", icon: Mail, label: "Newsletter", badge: null },
          { id: "blog", icon: BookOpen, label: "Blog Posts", badge: null },
          {
            id: "case-studies",
            icon: FileText,
            label: "Case Studies",
            badge: null,
          },
          {
            id: "analytics",
            icon: TrendingUp,
            label: "Analytics",
            badge: null,
          },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
              activeTab === item.id
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isSidebarOpen && (
                <span className="font-medium">{item.label}</span>
              )}
            </div>
            {isSidebarOpen && item.badge && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
          <Settings className="w-5 h-5 flex-shrink-0" />
          {isSidebarOpen && <span className="font-medium">Settings</span>}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-core-0004";
          }}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {isSidebarOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );

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
          icon={Calendar}
          title="Consultations"
          value={dashboardData.stats.consultations}
          subtitle={`${dashboardData.stats.pendingConsultations} pending`}
          change="+15% this month"
          color="bg-purple-600"
        />
        <StatCard
          icon={Mail}
          title="Newsletter"
          value={dashboardData.stats.newsletterSubscribers}
          subtitle="Active subscribers"
          change="+8% this month"
          color="bg-green-600"
        />
        <StatCard
          icon={BookOpen}
          title="Published Posts"
          value={dashboardData.stats.publishedPosts}
          subtitle={`${dashboardData.stats.caseStudies} case studies`}
          change="+2 this month"
          color="bg-orange-600"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-colors">
            <Plus className="w-6 h-6 text-gray-400 mb-2" />
            <span className="text-sm font-medium text-gray-600">
              New Blog Post
            </span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-colors">
            <Plus className="w-6 h-6 text-gray-400 mb-2" />
            <span className="text-sm font-medium text-gray-600">
              Add Case Study
            </span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-colors">
            <Download className="w-6 h-6 text-gray-400 mb-2" />
            <span className="text-sm font-medium text-gray-600">
              Export Data
            </span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-colors">
            <Send className="w-6 h-6 text-gray-400 mb-2" />
            <span className="text-sm font-medium text-gray-600">
              Send Newsletter
            </span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contacts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Contacts
              </h3>
              <button
                onClick={() => setActiveTab("contacts")}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
              >
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {dashboardData.recentContacts.map((contact) => (
              <div
                key={contact._id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {contact.name}
                    </h4>
                    <p className="text-sm text-gray-500">{contact.company}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      contact.status === "new"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {contact.status}
                  </span>
                </div>
                <p className="text-xs text-gray-400 line-clamp-1">
                  {contact.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Consultations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Consultations
              </h3>
              <button
                onClick={() => setActiveTab("consultations")}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
              >
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {dashboardData.recentConsultations.map((consultation) => (
              <div
                key={consultation._id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {consultation.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {consultation.company}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      consultation.status === "requested"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {consultation.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 capitalize mb-1">
                  {consultation.consultationType} Session
                </p>
                <p className="text-xs text-gray-400">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {consultation.preferredDate} at {consultation.preferredTime}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Contacts Tab
  const ContactsTab = () => {
    // Filter contacts based on search term
    const filteredContacts = dashboardData.recentContacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.projectType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
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
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contacts Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredContacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {contact.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {contact.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {contact.company}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-500 capitalize">
                        {contact.projectType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
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
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="md:hidden divide-y divide-gray-100">
            {filteredContacts.map((contact) => (
              <div key={contact._id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
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
                    <span className="text-gray-700">{contact.company}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Tag className="w-3.5 h-3.5 mr-2 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700 capitalize">{contact.projectType}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                      <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                    </div>

                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
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

  const PlaceholderTab = ({ title, description, icon: Icon }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
      <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
        <Icon className="w-12 h-12 text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-500 mb-6">{description}</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className={`flex-1 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-500 hover:text-gray-700 md:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {activeTab.charAt(0).toUpperCase() +
                    activeTab.slice(1).replace("-", " ")}
                </h1>
                <p className="text-sm text-gray-600">Welcome back, Admin</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
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
          {activeTab === "consultations" && (
            <PlaceholderTab
              title="Consultation Management"
              description="View and manage all consultation bookings and schedule meetings"
              icon={Calendar}
            />
          )}
          {activeTab === "newsletter" && (
            <PlaceholderTab
              title="Newsletter Subscribers"
              description="Manage subscribers and send email campaigns"
              icon={Mail}
            />
          )}
          {activeTab === "blog" && (
            <PlaceholderTab
              title="Blog Posts & Resources"
              description="Create and manage blog posts, guides, and downloadable resources"
              icon={BookOpen}
            />
          )}
          {activeTab === "case-studies" && (
            <PlaceholderTab
              title="Case Studies"
              description="Showcase success stories and client results"
              icon={FileText}
            />
          )}
          {activeTab === "analytics" && (
            <PlaceholderTab
              title="Analytics & Reports"
              description="Track website performance and user engagement"
              icon={BarChart3}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
