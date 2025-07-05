import React, { useState } from "react";
import {
  Users,
  Calendar,
  BookOpen,
  Award,
  Home,
  BarChart3,
  Clock,
  Target,
  TrendingUp,
  GraduationCap,
  FileText,
  MessageSquare,
  CheckSquare,
  LogOut,
  ArrowLeft,
  Download,
  MessageCircle,
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

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [teacherName] = useState("Dr. Sarah Johnson");
  const [selectedClass, setSelectedClass] = useState(null);
  // const [teacherDetails] = useState({
  //   name: 'Dr. Sarah Johnson',
  //   employeeId: 'TCH001',
  //   subject: 'Mathematics & Science',
  //   classes: 'Grade 8, 9, 10',
  //   experience: '12 years',
  //   phone: '+1 (555) 987-6543'
  // });

  // Sample data for charts
  const classPerformanceData = [
    { class: "Grade 8A", avgScore: 78 },
    { class: "Grade 8B", avgScore: 82 },
    { class: "Grade 9A", avgScore: 85 },
    { class: "Grade 9B", avgScore: 80 },
    { class: "Grade 10A", avgScore: 88 },
    { class: "Grade 10B", avgScore: 84 },
  ];

  const attendanceData = [
    { month: "Jan", attendance: 92 },
    { month: "Feb", attendance: 88 },
    { month: "Mar", attendance: 91 },
    { month: "Apr", attendance: 89 },
    { month: "May", attendance: 93 },
    { month: "Jun", attendance: 90 },
  ];

  const subjectData = [
    { name: "Mathematics", students: 150, avgScore: 85 },
    { name: "Physics", students: 90, avgScore: 82 },
    { name: "Chemistry", students: 85, avgScore: 88 },
  ];

  // const monthlyProgress = [
  //   { month: 'Jan', assignments: 45, tests: 12, projects: 8 },
  //   { month: 'Feb', assignments: 52, tests: 15, projects: 10 },
  //   { month: 'Mar', assignments: 48, tests: 18, projects: 12 },
  //   { month: 'Apr', assignments: 55, tests: 14, projects: 9 },
  //   { month: 'May', assignments: 50, tests: 16, projects: 11 },
  //   { month: 'Jun', assignments: 42, tests: 10, projects: 7 }
  // ];

  // const pieColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  const studentData = {
    "Grade 8A": [
      {
        sno: 1,
        name: "Amit Kumar",
        id: "STU001",
        age: 13,
        gender: "Male",
        grade: "A",
      },
      {
        sno: 2,
        name: "Priya Sinha",
        id: "STU002",
        age: 14,
        gender: "Female",
        grade: "B+",
      },
      {
        sno: 3,
        name: "Rahul Verma",
        id: "STU003",
        age: 13,
        gender: "Male",
        grade: "A-",
      },
      {
        sno: 4,
        name: "Sneha Singh",
        id: "STU004",
        age: 14,
        gender: "Female",
        grade: "B",
      },
      {
        sno: 5,
        name: "Rohit Kumar",
        id: "STU005",
        age: 13,
        gender: "Male",
        grade: "A",
      },
      {
        sno: 6,
        name: "Pooja Kumari",
        id: "STU006",
        age: 14,
        gender: "Female",
        grade: "B+",
      },
      {
        sno: 7,
        name: "Vikash Yadav",
        id: "STU007",
        age: 13,
        gender: "Male",
        grade: "A-",
      },
      {
        sno: 8,
        name: "Anjali Kumari",
        id: "STU008",
        age: 14,
        gender: "Female",
        grade: "A",
      },
      {
        sno: 9,
        name: "Saurabh Singh",
        id: "STU009",
        age: 13,
        gender: "Male",
        grade: "B",
      },
      {
        sno: 10,
        name: "Neha Kumari",
        id: "STU010",
        age: 14,
        gender: "Female",
        grade: "A-",
      },
      {
        sno: 11,
        name: "Deepak Kumar",
        id: "STU011",
        age: 13,
        gender: "Male",
        grade: "B+",
      },
      {
        sno: 12,
        name: "Shalini Sinha",
        id: "STU012",
        age: 14,
        gender: "Female",
        grade: "A",
      },
      {
        sno: 13,
        name: "Manish Kumar",
        id: "STU013",
        age: 13,
        gender: "Male",
        grade: "B",
      },
      {
        sno: 14,
        name: "Kavita Kumari",
        id: "STU014",
        age: 14,
        gender: "Female",
        grade: "A-",
      },
      {
        sno: 15,
        name: "Rakesh Singh",
        id: "STU015",
        age: 13,
        gender: "Male",
        grade: "B+",
      },
    ],
  };

  const sidebarItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "classes", icon: Users, label: "My Classes" },
    { id: "assignments", icon: FileText, label: "Assignments" },
    { id: "performance", icon: BarChart3, label: "Performance" },
    { id: "schedule", icon: Calendar, label: "Schedule" },
  ];

  const upcomingClasses = [
    {
      time: "09:00 AM",
      subject: "Mathematics",
      class: "Grade 10A",
      room: "Room 205",
    },
    {
      time: "11:00 AM",
      subject: "Physics",
      class: "Grade 9B",
      room: "Lab 301",
    },
    {
      time: "02:00 PM",
      subject: "Chemistry",
      class: "Grade 10B",
      room: "Lab 302",
    },
    {
      time: "03:30 PM",
      subject: "Mathematics",
      class: "Grade 8A",
      room: "Room 105",
    },
  ];

  const recentAssignments = [
    {
      title: "Quadratic Equations Test",
      class: "Grade 10A",
      dueDate: "Today",
      submitted: 28,
      total: 30,
    },
    {
      title: "Physics Lab Report",
      class: "Grade 9B",
      dueDate: "Tomorrow",
      submitted: 22,
      total: 25,
    },
    {
      title: "Chemical Bonding Quiz",
      class: "Grade 10B",
      dueDate: "Dec 18",
      submitted: 18,
      total: 28,
    },
  ];

  const pendingTasks = [
    {
      task: "Grade Chemistry Tests - Grade 10B",
      priority: "High",
      dueDate: "Today",
    },
    {
      task: "Prepare Physics Lab Materials",
      priority: "Medium",
      dueDate: "Tomorrow",
    },
    {
      task: "Update Student Progress Reports",
      priority: "High",
      dueDate: "Dec 20",
    },
    {
      task: "Parent-Teacher Meeting Prep",
      priority: "Medium",
      dueDate: "Dec 22",
    },
  ];
  const renderStudentDetails = (classInfo) => (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {classInfo.class} - Student Details
        </h1>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-colors"
          onClick={() => alert("Upload functionality coming soon!")}
        >
          Upload New Student Data
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSelectedClass(null)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Classes
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Class Information</h2>
            <p className="text-gray-600">
              Subject: {classInfo.subject} | Total Students:{" "}
              {classInfo.students} | Average Score: {classInfo.avgScore}%
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                  S.No
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                  ID
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Age
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Gender
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Grade
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {studentData[classInfo.class]?.map((student, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900">
                    {student.sno}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900 font-medium">
                    {student.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900">
                    {student.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900">
                    {student.age}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900">
                    {student.gender}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        student.grade === "A"
                          ? "bg-green-100 text-green-800"
                          : student.grade === "A-"
                          ? "bg-green-100 text-green-700"
                          : student.grade === "B+"
                          ? "bg-blue-100 text-blue-800"
                          : student.grade === "B"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {student.grade}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                    <button
                      className="text-blue-600 hover:text-blue-800 mr-2"
                      title="Download"
                    >
                      <Download className="inline h-5 w-5" />
                    </button>
                    <button
                      className="text-green-600 hover:text-green-800"
                      title="WhatsApp"
                    >
                      <MessageCircle className="inline h-5 w-5" />
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

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {teacherName}</h1>
        <p className="text-blue-100">
          Ready to inspire and educate today's future leaders!
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">325</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Classes Today</p>
              <p className="text-2xl font-bold text-gray-800">4</p>
            </div>
            <Calendar className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Tasks</p>
              <p className="text-2xl font-bold text-gray-800">
                {pendingTasks.length}
              </p>
            </div>
            <CheckSquare className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Avg Class Score</p>
              <p className="text-2xl font-bold text-gray-800">84%</p>
            </div>
            <Award className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-blue-500" />
            Today's Schedule
          </h2>
          <div className="space-y-3">
            {upcomingClasses.map((cls, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{cls.subject}</p>
                  <p className="text-sm text-gray-600">
                    {cls.class} • {cls.room}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-600">{cls.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Assignments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2 h-5 w-5 text-green-500" />
            Recent Assignments
          </h2>
          <div className="space-y-3">
            {recentAssignments.map((assignment, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-800">
                    {assignment.title}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {assignment.dueDate}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{assignment.class}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-green-600 font-medium">
                      {assignment.submitted}
                    </span>
                    <span className="text-gray-500">
                      /{assignment.total} submitted
                    </span>
                  </div>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (assignment.submitted / assignment.total) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart3 className="mr-2 h-5 w-5 text-purple-500" />
          Class Performance Overview
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={classPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="class" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="avgScore" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pending Tasks */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Clock className="mr-2 h-5 w-5 text-orange-500" />
          Pending Tasks
        </h2>
        <div className="space-y-3">
          {pendingTasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex-1">
                <p className="font-medium text-gray-800">{task.task}</p>
                <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {task.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderClasses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">My Classes</h1>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-colors"
          onClick={() => alert("Upload functionality coming soon!")}
        >
          Upload Class Data
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classPerformanceData.map((cls, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{cls.class}</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Subject: Mathematics</p>
              <p className="text-gray-600">Students: 30</p>
              <p className="text-gray-600">Average Score: {cls.avgScore}%</p>
              <div className="mt-4">
                <button
                  onClick={() =>
                    setSelectedClass({
                      class: cls.class,
                      subject: "Mathematics", // or dynamic if needed
                      students: studentData[cls.class]?.length || 0,
                      avgScore: cls.avgScore,
                    })
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Assignments</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Create New Assignment
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Submissions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentAssignments.map((assignment, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {assignment.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {assignment.class}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {assignment.dueDate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {assignment.submitted}/{assignment.total}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    View
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    Grade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Performance Analytics
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Class Average Scores</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={classPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgScore" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Monthly Attendance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Subject Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subjectData.map((subject, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg">{subject.name}</h3>
              <p className="text-gray-600">Students: {subject.students}</p>
              <p className="text-gray-600">Avg Score: {subject.avgScore}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Teaching Schedule</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
            (day) => (
              <div key={day} className="border rounded-lg p-4">
                <h3 className="font-semibold text-center mb-3">{day}</h3>
                <div className="space-y-2">
                  <div className="bg-blue-100 p-2 rounded text-sm">
                    <p className="font-medium">9:00 AM</p>
                    <p>Math - Grade 10A</p>
                  </div>
                  <div className="bg-green-100 p-2 rounded text-sm">
                    <p className="font-medium">11:00 AM</p>
                    <p>Physics - Grade 9B</p>
                  </div>
                  <div className="bg-purple-100 p-2 rounded text-sm">
                    <p className="font-medium">2:00 PM</p>
                    <p>Chemistry - Grade 10B</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (selectedClass) {
      return renderStudentDetails(selectedClass);
    }

    switch (activeSection) {
      case "dashboard":
        return renderDashboard();
      case "classes":
        return renderClasses();
      case "assignments":
        return renderAssignments();
      case "performance":
        return renderPerformance();
      case "schedule":
        return renderSchedule();
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
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Teacher Portal</h2>
              <p className="text-sm text-gray-600">{teacherName}</p>
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
                    ? "bg-blue-50 border-r-4 border-blue-500"
                    : ""
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${
                    activeSection === item.id
                      ? "text-blue-500"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                <span
                  className={`${
                    activeSection === item.id
                      ? "text-blue-500 font-medium"
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

export default TeacherDashboard;
