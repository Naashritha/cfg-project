import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Calendar,
  BookOpen,
  Trophy,
  Home,
  BarChart3,
  Clock,
  Award,        
  Target,
  TrendingUp,
  Heart,
  Scale,
  Ruler,
  Utensils,
  LogOut,
  Brain,
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

// Mock LogoutButton component
const LogoutButton = () => (
  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md border border-gray-200 hover:border-gray-300">
    <LogOut className="h-4 w-4" />
    <span>Logout</span>
  </button>
);

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [studentName] = useState("Rohan");
  const [studentDetails] = useState({
    name: "Rohan Kumar",
    rollNo: "STU001",
    class: "Grade 10 - A",
    dateOfBirth: "March 15, 2008",
    parentMobile: "+91 94310 12345",
  });

  // Sample data for charts
  const attendanceData = [
    { month: "Jan", attendance: 85 },
    { month: "Feb", attendance: 92 },
    { month: "Mar", attendance: 88 },
    { month: "Apr", attendance: 95 },
    { month: "May", attendance: 90 },
    { month: "Jun", attendance: 87 },
  ];

  const academicData = [
    { subject: "Math", score: 85 },
    { subject: "Science", score: 92 },
    { subject: "English", score: 88 },
    { subject: "History", score: 90 },
    { subject: "Geography", score: 87 },
  ];

  const nonAcademicData = [
    { activity: "Sports", participation: 80 },
    { activity: "Music", participation: 65 },
    { activity: "Drama", participation: 70 },
    { activity: "Art", participation: 85 },
    { activity: "Debate", participation: 75 },
  ];

  const monthlyNonAcademic = [
    { month: "Jan", games: 12, tests: 8, events: 5 },
    { month: "Feb", games: 15, tests: 10, events: 7 },
    { month: "Mar", games: 18, tests: 12, events: 6 },
    { month: "Apr", games: 14, tests: 9, events: 8 },
    { month: "May", games: 16, tests: 11, events: 9 },
    { month: "Jun", games: 13, tests: 7, events: 4 },
  ];

  // Health data
  const healthData = {
    bmi: 21.5,
    height: 165, // cm
    weight: 58.5, // kg
    bmiCategory: "Normal",
    lastCheckup: "May 15, 2025",
  };

  const mealsData = [
    { day: "Mon", breakfast: 1, lunch: 1, snacks: 2 },
    { day: "Tue", breakfast: 1, lunch: 1, snacks: 1 },
    { day: "Wed", breakfast: 1, lunch: 1, snacks: 3 },
    { day: "Thu", breakfast: 1, lunch: 1, snacks: 2 },
    { day: "Fri", breakfast: 1, lunch: 1, snacks: 2 },
    { day: "Sat", breakfast: 1, lunch: 1, snacks: 1 },
    { day: "Sun", breakfast: 1, lunch: 1, snacks: 2 },
  ];

  const monthlyHealthData = [
    { month: "Jan", bmi: 21.2, height: 164 },
    { month: "Feb", bmi: 21.3, height: 164 },
    { month: "Mar", bmi: 21.4, height: 165 },
    { month: "Apr", bmi: 21.5, height: 165 },
    { month: "May", bmi: 21.5, height: 165 },
    { month: "Jun", bmi: 21.6, height: 165 },
  ];

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

  const sidebarItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "attendance", icon: Calendar, label: "Attendance" },
    { id: "academic", icon: BookOpen, label: "Academic" },
    { id: "nonacademic", icon: Trophy, label: "Non-Academic" },
    { id: "health", icon: Heart, label: "Health" },
    { id: "eqtest", icon: Brain, label: "EQ Test", isNavigation: true, path: "/page01" },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>

      {/* Student Details Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Student Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 font-medium">Name</p>
            <p className="text-lg font-bold text-blue-800">
              {studentDetails.name}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 font-medium">Roll No</p>
            <p className="text-lg font-bold text-green-800">
              {studentDetails.rollNo}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 font-medium">Class</p>
            <p className="text-lg font-bold text-purple-800">
              {studentDetails.class}
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 font-medium">Date of Birth</p>
            <p className="text-lg font-bold text-yellow-800">
              {studentDetails.dateOfBirth}
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 font-medium">Parent Mobile</p>
            <p className="text-lg font-bold text-red-800">
              {studentDetails.parentMobile}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Attendance Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Attendance
              </h3>
              <p className="text-3xl font-bold text-blue-600">89%</p>
              <p className="text-sm text-gray-500">This Month</p>
            </div>
            <Calendar className="h-12 w-12 text-blue-500" />
          </div>
        </div>

        {/* Overall Grade Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Overall Grade
              </h3>
              <p className="text-3xl font-bold text-green-600">A-</p>
              <p className="text-sm text-gray-500">Current GPA: 3.7</p>
            </div>
            <Target className="h-12 w-12 text-green-500" />
          </div>
        </div>

        {/* Activities Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Activities
              </h3>
              <p className="text-3xl font-bold text-purple-600">12</p>
              <p className="text-sm text-gray-500">This Month</p>
            </div>
            <Trophy className="h-12 w-12 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Present Days</p>
            <p className="text-xl font-bold text-blue-600">156</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Subjects</p>
            <p className="text-xl font-bold text-green-600">8</p>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Achievements</p>
            <p className="text-xl font-bold text-yellow-600">5</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Improvement</p>
            <p className="text-xl font-bold text-purple-600">+15%</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHealth = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Health Overview</h2>

      {/* Health Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">BMI</h3>
              <p className="text-3xl font-bold text-red-600">
                {healthData.bmi}
              </p>
              <p className="text-sm text-gray-500">{healthData.bmiCategory}</p>
            </div>
            <Scale className="h-12 w-12 text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Height</h3>
              <p className="text-3xl font-bold text-blue-600">
                {healthData.height} cm
              </p>
              <p className="text-sm text-gray-500">
                Weight: {healthData.weight} kg
              </p>
            </div>
            <Ruler className="h-12 w-12 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Last Checkup
              </h3>
              <p className="text-lg font-bold text-green-600">
                {healthData.lastCheckup}
              </p>
              <p className="text-sm text-gray-500">All Clear</p>
            </div>
            <Heart className="h-12 w-12 text-green-500" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            BMI & Height Tracking
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyHealthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="bmi"
                stroke="#EF4444"
                strokeWidth={3}
                name="BMI"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="height"
                stroke="#3B82F6"
                strokeWidth={3}
                name="Height (cm)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Weekly Meals Intake
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mealsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="breakfast" fill="#F59E0B" name="Breakfast" />
              <Bar dataKey="lunch" fill="#10B981" name="Lunch" />
              <Bar dataKey="snacks" fill="#8B5CF6" name="Snacks" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Health Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Health Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <Scale className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Current BMI</p>
            <p className="text-xl font-bold text-red-600">{healthData.bmi}</p>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Ruler className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Height</p>
            <p className="text-xl font-bold text-blue-600">
              {healthData.height} cm
            </p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <Utensils className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Meals/Day</p>
            <p className="text-xl font-bold text-green-600">4-5</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Health Status</p>
            <p className="text-xl font-bold text-purple-600">Good</p>
          </div>
        </div>
      </div>

      {/* Meal Details */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Meal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Breakfast</h4>
            <p className="text-sm text-gray-600">Daily intake: 100%</p>
            <p className="text-sm text-gray-600">Avg calories: 350 kcal</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Lunch</h4>
            <p className="text-sm text-gray-600">Daily intake: 100%</p>
            <p className="text-sm text-gray-600">Avg calories: 550 kcal</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Snacks</h4>
            <p className="text-sm text-gray-600">Daily intake: 2-3 items</p>
            <p className="text-sm text-gray-600">Avg calories: 200 kcal</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAttendance = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Attendance Overview</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Monthly Attendance
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#3B82F6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Attendance Summary
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-gray-700">Present Days</span>
              <span className="font-bold text-green-600">156 days</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
              <span className="text-gray-700">Absent Days</span>
              <span className="font-bold text-red-600">19 days</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <span className="text-gray-700">Late Arrivals</span>
              <span className="font-bold text-yellow-600">8 times</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-700">Overall Percentage</span>
              <span className="font-bold text-blue-600">89.1%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAcademic = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Academic Performance</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Subject Performance
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={academicData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Grade Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={academicData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ subject, score }) => `${subject}: ${score}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="score"
              >
                {academicData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Academic Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800">Highest Score</h4>
            <p className="text-2xl font-bold text-blue-600">92%</p>
            <p className="text-sm text-gray-600">Science</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800">Average Score</h4>
            <p className="text-2xl font-bold text-green-600">88.4%</p>
            <p className="text-sm text-gray-600">All Subjects</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800">Improvement</h4>
            <p className="text-2xl font-bold text-purple-600">+5.2%</p>
            <p className="text-sm text-gray-600">From Last Term</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNonAcademic = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Non-Academic Activities
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Activity Participation
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={nonAcademicData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="activity" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="participation" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Monthly Activities
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyNonAcademic}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="games"
                stroke="#3B82F6"
                strokeWidth={2}
                name="Games"
              />
              <Line
                type="monotone"
                dataKey="tests"
                stroke="#10B981"
                strokeWidth={2}
                name="Tests"
              />
              <Line
                type="monotone"
                dataKey="events"
                stroke="#F59E0B"
                strokeWidth={2}
                name="Events"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Activity Categories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Trophy className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-blue-800">Games</h4>
            <p className="text-2xl font-bold text-blue-600">88</p>
            <p className="text-sm text-gray-600">Total Participated</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-green-800">Tests</h4>
            <p className="text-2xl font-bold text-green-600">57</p>
            <p className="text-sm text-gray-600">Competitions</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <h4 className="font-semibold text-yellow-800">Events</h4>
            <p className="text-2xl font-bold text-yellow-600">39</p>
            <p className="text-sm text-gray-600">Cultural Activities</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Yearly Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-indigo-50 rounded-lg">
            <p className="text-sm text-gray-600">Sports Events</p>
            <p className="text-xl font-bold text-indigo-600">24</p>
          </div>
          <div className="text-center p-3 bg-pink-50 rounded-lg">
            <p className="text-sm text-gray-600">Cultural Programs</p>
            <p className="text-xl font-bold text-pink-600">18</p>
          </div>
          <div className="text-center p-3 bg-teal-50 rounded-lg">
            <p className="text-sm text-gray-600">Competitions</p>
            <p className="text-xl font-bold text-teal-600">32</p>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <p className="text-sm text-gray-600">Achievements</p>
            <p className="text-xl font-bold text-orange-600">7</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboard();
      case "attendance":
        return renderAttendance();
      case "academic":
        return renderAcademic();
      case "nonacademic":
        return renderNonAcademic();
      case "health":
        return renderHealth();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Student Portal
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-8 w-8 text-gray-400" />
                <span className="text-gray-700 font-medium">
                  Hello, {studentName}
                </span>
              </div>
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-5 px-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const handleClick = () => {
                  if (item.isNavigation && item.path) {
                    navigate(item.path);
                  } else {
                    setActiveSection(item.id);
                  }
                };
                
                return (
                  <button
                    key={item.id}
                    onClick={handleClick}
                    className={`${
                      activeSection === item.id && !item.isNavigation
                        ? "bg-blue-50 border-blue-500 text-blue-700"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md border-l-4 w-full text-left`}
                  >
                    <Icon
                      className={`${
                        activeSection === item.id && !item.isNavigation
                          ? "text-blue-500"
                          : "text-gray-400 group-hover:text-gray-500"
                      } mr-3 h-6 w-6`}
                    />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default StudentDashboard;