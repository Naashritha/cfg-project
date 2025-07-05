import React, { useState } from "react";
import {
  Users,
  Calendar,
  BookOpen,
  Settings,
  Home,
  BarChart3,
  UserCheck,
  TrendingUp,
  Shield,
  Database,
  FileText,
  AlertTriangle,
  LogOut,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import LogoutButton from "./LogoutButtonNew";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [adminName] = useState("Dr. Rajesh Kumar");

  // Sample data for charts
  const enrollmentData = [
    { month: "Jan", students: 1200, teachers: 85 },
    { month: "Feb", students: 1250, teachers: 88 },
    { month: "Mar", students: 1180, teachers: 85 },
    { month: "Apr", students: 1300, teachers: 90 },
    { month: "May", students: 1350, teachers: 92 },
    { month: "Jun", students: 1280, teachers: 90 },
  ];

  const performanceData = [
    { grade: "Grade 6", avgScore: 78 },
    { grade: "Grade 7", avgScore: 82 },
    { grade: "Grade 8", avgScore: 85 },
    { grade: "Grade 9", avgScore: 80 },
    { grade: "Grade 10", avgScore: 88 },
    { grade: "Grade 11", avgScore: 84 },
    { grade: "Grade 12", avgScore: 90 },
  ];

  const departmentData = [
    { name: "Mathematics", value: 25 },
    { name: "Science", value: 20 },
    { name: "English", value: 18 },
    { name: "Social Studies", value: 15 },
    { name: "Arts", value: 12 },
    { name: "Physical Ed", value: 10 },
  ];

  const financeData = [
    { month: "Jan", income: 850000, expenses: 720000 },
    { month: "Feb", income: 900000, expenses: 750000 },
    { month: "Mar", income: 880000, expenses: 730000 },
    { month: "Apr", income: 920000, expenses: 780000 },
    { month: "May", income: 950000, expenses: 800000 },
    { month: "Jun", income: 890000, expenses: 740000 },
  ];

  const pieColors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
  ];

  const sidebarItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "users", icon: Users, label: "User Management" },
    { id: "academics", icon: BookOpen, label: "Academic Overview" },
    { id: "finance", icon: BarChart3, label: "Finance" },
    { id: "reports", icon: FileText, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  const recentActivities = [
    {
      activity: "New teacher registration - Priya Sinha",
      time: "2 hours ago",
      type: "user",
    },
    {
      activity: "Monthly report generated",
      time: "4 hours ago",
      type: "report",
    },
    {
      activity: "System backup completed",
      time: "6 hours ago",
      type: "system",
    },
    {
      activity: "Fee payment processed - 45 students",
      time: "8 hours ago",
      type: "finance",
    },
    {
      activity: "New student enrolled - Grade 9",
      time: "1 day ago",
      type: "user",
    },
  ];

  const alerts = [
    {
      message: "Server maintenance scheduled for tonight",
      type: "warning",
      time: "1 hour ago",
    },
    {
      message: "Low attendance in Grade 8B - Math class",
      type: "alert",
      time: "3 hours ago",
    },
    {
      message: "Quarterly budget review due next week",
      type: "info",
      time: "1 day ago",
    },
  ];

  const upcomingEvents = [
    { event: "Parent-Teacher Meeting", date: "Dec 20, 2024", time: "10:00 AM" },
    {
      event: "Staff Development Workshop",
      date: "Dec 22, 2024",
      time: "2:00 PM",
    },
    { event: "Winter Break Begins", date: "Dec 23, 2024", time: "All Day" },
    {
      event: "New Semester Registration",
      date: "Jan 5, 2025",
      time: "9:00 AM",
    },
  ];

  const pendingApprovals = [
    {
      item: "New Course Proposal - Advanced AI",
      submittedBy: "Dr. Sarah Johnson",
      type: "Course",
    },
    {
      item: "Budget Request - Science Lab Equipment",
      submittedBy: "Physics Department",
      type: "Budget",
    },
    {
      item: "Leave Application - Personal Leave",
      submittedBy: "Mark Wilson",
      type: "Leave",
    },
    {
      item: "Grade Appeal - Student ID: 2024001",
      submittedBy: "Emily Davis",
      type: "Academic",
    },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {adminName}</h1>
        <p className="text-purple-100">
          Administrative control center for Diksha Foundation
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">1,280</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Teaching Staff</p>
              <p className="text-2xl font-bold text-gray-800">90</p>
            </div>
            <UserCheck className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Approvals</p>
              <p className="text-2xl font-bold text-gray-800">
                {pendingApprovals.length}
              </p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-800">₹8.9L</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Database className="mr-2 h-5 w-5 text-blue-500" />
            Recent Activities
          </h2>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "user"
                      ? "bg-blue-500"
                      : activity.type === "report"
                      ? "bg-green-500"
                      : activity.type === "system"
                      ? "bg-purple-500"
                      : "bg-yellow-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.activity}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
            System Alerts
          </h2>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  alert.type === "warning"
                    ? "bg-yellow-50 border-yellow-400"
                    : alert.type === "alert"
                    ? "bg-red-50 border-red-400"
                    : "bg-blue-50 border-blue-400"
                }`}
              >
                <p className="text-sm text-gray-800">{alert.message}</p>
                <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-green-500" />
            Upcoming Events
          </h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">{event.event}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-xs text-gray-500">{event.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Trends */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Enrollment Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="students"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="teachers"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Department Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Department Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pending Approvals */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Shield className="mr-2 h-5 w-5 text-orange-500" />
          Pending Approvals
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingApprovals.map((approval, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {approval.item}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {approval.submittedBy}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {approval.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900 mr-2">
                      Approve
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Add New User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Students</h3>
          <p className="text-3xl font-bold text-blue-600">1,280</p>
          <p className="text-gray-600">Active enrollments</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Teachers</h3>
          <p className="text-3xl font-bold text-green-600">90</p>
          <p className="text-gray-600">Teaching staff</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Admin Staff</h3>
          <p className="text-3xl font-bold text-purple-600">25</p>
          <p className="text-gray-600">Administrative staff</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Recent User Activities</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivities
              .filter((activity) => activity.type === "user")
              .map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-800">
                      {activity.activity}
                    </p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-900">
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAcademics = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Academic Overview</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Grade Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grade" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgScore" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Academic Calendar</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">{event.event}</h3>
                <p className="text-sm text-gray-600">
                  {event.date} at {event.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinance = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Financial Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
          <p className="text-2xl font-bold text-green-600">₹54.2L</p>
          <p className="text-sm text-gray-600">This semester</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <h3 className="text-lg font-semibold mb-2">Total Expenses</h3>
          <p className="text-2xl font-bold text-red-600">₹45.2L</p>
          <p className="text-sm text-gray-600">This semester</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-2">Net Profit</h3>
          <p className="text-2xl font-bold text-blue-600">₹9.0L</p>
          <p className="text-sm text-gray-600">This semester</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Income vs Expenses</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={financeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="income" fill="#82ca9d" name="Income" />
            <Bar dataKey="expenses" fill="#8884d8" name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Reports & Analytics
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Academic Performance",
          "Attendance Report",
          "Financial Summary",
          "Student Progress",
          "Teacher Evaluation",
          "Infrastructure Report",
        ].map((report, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{report}</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive {report.toLowerCase()} analysis
            </p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              View Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">System Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Institution Name
              </label>
              <input
                type="text"
                value="Diksha Foundation"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Academic Year
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2">
                <option>2024-2025</option>
                <option>2025-2026</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password Policy
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Strong (recommended)</option>
                <option>Medium</option>
                <option>Basic</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                value="30"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Update Security
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboard();
      case "users":
        return renderUsers();
      case "academics":
        return renderAcademics();
      case "finance":
        return renderFinance();
      case "reports":
        return renderReports();
      case "settings":
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Admin Portal</h2>
              <p className="text-sm text-gray-600">{adminName}</p>
            </div>
          </div>
        </div>

        <nav className="mt-6 flex-1 flex flex-col">
          <div className="flex-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeSection === item.id
                    ? "bg-purple-50 border-r-4 border-purple-500"
                    : ""
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${
                    activeSection === item.id
                      ? "text-purple-500"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                <span
                  className={`${
                    activeSection === item.id
                      ? "text-purple-500 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
          <div className="p-6 border-t border-gray-200">
            <LogoutButton className="w-full justify-center" />
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
