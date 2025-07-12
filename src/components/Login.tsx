import React, { useState } from 'react';
import { Users, Mail, Lock, Eye, EyeOff, LogIn, UserPlus, Sparkles, Target, Network } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onRegister: (name: string, email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onRegister }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && !formData.name) {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (isLogin) {
        onLogin(formData.email, formData.password);
      } else {
        onRegister(formData.name, formData.email, formData.password);
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFeatureClick = (feature: string) => {
    // Add smooth scrolling or navigation to specific sections
    console.log(`Feature clicked: ${feature}`);
    // You can add actual functionality here later
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full max-w-lg">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl mb-6 transform hover:scale-105 transition-transform duration-300">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-3">SkillSwap</h1>
          <p className="text-blue-600 text-lg md:text-xl font-medium">
            {isLogin ? 'Welcome back! Sign in to continue your journey' : 'Join our vibrant community of skill sharers'}
          </p>
        </div>

        {/* Login/Register Form */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200/50 p-8">
          {/* Toggle Buttons */}
          <div className="flex bg-blue-100/50 rounded-2xl p-2 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 text-base font-medium ${
                isLogin
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 text-base font-medium ${
                !isLogin
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Register only) */}
            {!isLogin && (
              <div>
                <label className="block text-base font-medium text-blue-700 mb-3">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <UserPlus className="h-5 w-5 text-blue-500" />
                  </div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full pl-12 pr-4 py-4 bg-blue-50/50 border-2 rounded-xl text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all ${
                      errors.name ? 'border-red-400' : 'border-blue-200'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.name}
                  </p>
                )}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-base font-medium text-blue-700 mb-3">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 bg-blue-50/50 border-2 rounded-xl text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all ${
                    errors.email ? 'border-red-400' : 'border-blue-200'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-base font-medium text-blue-700 mb-3">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full pl-12 pr-12 py-4 bg-blue-50/50 border-2 rounded-xl text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all ${
                    errors.password ? 'border-red-400' : 'border-blue-200'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-400/50 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
            >
              {isLogin ? <LogIn className="h-6 w-6" /> : <UserPlus className="h-6 w-6" />}
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
            <h4 className="text-base font-semibold text-blue-700 mb-3 flex items-center">
              <Sparkles className="h-4 w-4 mr-2" />
              Demo Credentials
            </h4>
            <div className="text-sm text-blue-600 space-y-2">
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <span className="font-medium">User Account:</span>
                <span className="font-mono text-xs">shahrutvi020@gmail.com</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <span className="font-medium">Admin Account:</span>
                <span className="font-mono text-xs">admin@skillswap.com</span>
              </div>
              <div className="text-center text-xs text-blue-500 mt-2">
                Password: <span className="font-mono">password123</span> (for both)
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-blue-600 text-base">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-700 hover:text-blue-800 font-semibold transition-colors underline decoration-2 underline-offset-2"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>

        {/* Interactive Features Preview */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <button
            onClick={() => handleFeatureClick('connect')}
            className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 hover:bg-white/80 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-blue-800 font-semibold text-base mb-2">Connect with Skilled Individuals</h3>
            <p className="text-blue-600 text-sm">Find and connect with talented people who share your interests</p>
          </button>
          
          <button
            onClick={() => handleFeatureClick('exchange')}
            className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 hover:bg-white/80 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-blue-800 font-semibold text-base mb-2">Exchange Skills Seamlessly</h3>
            <p className="text-blue-600 text-sm">Trade your expertise for new knowledge and experiences</p>
          </button>
          
          <button
            onClick={() => handleFeatureClick('network')}
            className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 hover:bg-white/80 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Network className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-blue-800 font-semibold text-base mb-2">Build Your Skill Network</h3>
            <p className="text-blue-600 text-sm">Grow your professional network while learning new skills</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;