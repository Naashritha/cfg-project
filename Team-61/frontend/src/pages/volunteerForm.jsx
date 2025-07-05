import React, { useState } from 'react';

const VolunteerForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    availability: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        availability: checked
          ? [...prev.availability, value]
          : prev.availability.filter((a) => a !== value),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      name: '',
      email: '',
      phone: '',
      area: '',
      availability: [],
    });
  };

  const volunteerAreas = [
    { value: 'Teaching', icon: '📚', description: 'Educate and inspire children' },
    { value: 'Fundraising', icon: '💰', description: 'Help raise funds for programs' },
    { value: 'Community Outreach', icon: '🤝', description: 'Connect with communities' },
    { value: 'Event Organization', icon: '🎯', description: 'Plan and coordinate events' },
    { value: 'Mentorship', icon: '🌟', description: 'Guide and support students' },
    { value: 'Technology Support', icon: '💻', description: 'Help with digital learning' }
  ];

  const availabilityOptions = [
    { value: 'Weekdays', icon: '🌅', time: 'Mon - Fri' },
    { value: 'Weekends', icon: '🌤️', time: 'Sat - Sun' },
    { value: 'Evenings', icon: '🌙', time: '6 PM - 9 PM' },
    { value: 'Full Time', icon: '⏰', time: 'Any time' }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">
            {/* Success Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 text-center">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <h2 className="text-3xl font-bold mb-2">Welcome Aboard!</h2>
              <p className="text-green-100">Thank you for joining our mission</p>
            </div>

            {/* Success Content */}
            <div className="p-8 text-center">
              <div className="bg-green-50 rounded-2xl p-6 mb-6 border border-green-100">
                <div className="text-green-600 font-bold text-lg mb-2">
                  ✅ Registration Successful!
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Your volunteer application has been submitted successfully. 
                  Our team will review your information and contact you within 2-3 business days.
                </p>
              </div>

              {/* Next Steps */}
              <div className="bg-blue-50 rounded-2xl p-6 mb-6 border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-3 flex items-center justify-center">
                  <span className="text-xl mr-2">📋</span>
                  What's Next?
                </h3>
                <div className="space-y-3 text-sm text-blue-700">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mr-3">1</span>
                    Check your email for confirmation
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mr-3">2</span>
                    Attend volunteer orientation session
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mr-3">3</span>
                    Start making a difference!
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleReset}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Register Another Volunteer
                </button>
                <a 
                  href="https://dikshafoundation.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-gray-50 text-blue-600 font-bold py-3 px-6 rounded-xl border-2 border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Learn More About Diksha
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Join Our Mission</h2>
            <p className="text-blue-100 text-lg">
              Volunteer with Diksha Foundation and help transform lives through education
            </p>
            <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <span className="text-2xl mr-2">👥</span>
                <span>500+ Volunteers</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">📚</span>
                <span>250+ Students Impacted</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <form>
              <div className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <span className="text-2xl mr-2">👤</span>
                  Personal Information
                </h3>

                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      placeholder="Enter your full name"
                      className={`w-full p-4 pl-12 border-2 rounded-xl transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-blue-500 ring-4 ring-blue-100' 
                          : 'border-gray-200 hover:border-gray-300'
                      } focus:outline-none bg-gray-50 focus:bg-white`}
                    />
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                      👤
                    </span>
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      placeholder="your.email@example.com"
                      className={`w-full p-4 pl-12 border-2 rounded-xl transition-all duration-300 ${
                        focusedField === 'email' 
                          ? 'border-blue-500 ring-4 ring-blue-100' 
                          : 'border-gray-200 hover:border-gray-300'
                      } focus:outline-none bg-gray-50 focus:bg-white`}
                    />
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                      📧
                    </span>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      required
                      placeholder="+91 98765 43210"
                      className={`w-full p-4 pl-12 border-2 rounded-xl transition-all duration-300 ${
                        focusedField === 'phone' 
                          ? 'border-blue-500 ring-4 ring-blue-100' 
                          : 'border-gray-200 hover:border-gray-300'
                      } focus:outline-none bg-gray-50 focus:bg-white`}
                    />
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                      📱
                    </span>
                  </div>
                </div>
              </div>

              {/* Volunteer Preferences */}
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  Volunteer Preferences
                </h3>

                {/* Area of Volunteering */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Area of Volunteering *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {volunteerAreas.map((area) => (
                      <label 
                        key={area.value}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                          form.area === area.value
                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="area"
                          value={area.value}
                          checked={form.area === area.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-start space-x-3">
                          <span className="text-2xl">{area.icon}</span>
                          <div>
                            <div className="font-semibold text-gray-800">{area.value}</div>
                            <div className="text-sm text-gray-600">{area.description}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    When are you available? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {availabilityOptions.map((option) => (
                      <label 
                        key={option.value}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                          form.availability.includes(option.value)
                            ? 'border-green-500 bg-green-50 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="availability"
                          value={option.value}
                          checked={form.availability.includes(option.value)}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{option.icon}</span>
                            <div>
                              <div className="font-semibold text-gray-800">{option.value}</div>
                              <div className="text-sm text-gray-600">{option.time}</div>
                            </div>
                          </div>
                          {form.availability.includes(option.value) && (
                            <span className="text-green-500 text-xl">✓</span>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!form.name || !form.email || !form.phone || !form.area || form.availability.length === 0}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none text-lg"
                >
                  {form.name && form.email && form.phone && form.area && form.availability.length > 0 
                    ? '🚀 Submit My Application' 
                    : '📝 Complete Form to Submit'
                  }
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to join our volunteer community and help make a difference in children's lives.
                </p>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;