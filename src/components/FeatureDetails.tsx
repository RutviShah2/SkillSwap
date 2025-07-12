import React from 'react';
import { Users, Target, Network, ArrowLeft, Star, Zap, Heart, Shield, MessageSquare, Calendar, TrendingUp, Award, Globe, Lock, CheckCircle } from 'lucide-react';

interface FeatureDetailsProps {
  feature: string;
  onBack: () => void;
}

const FeatureDetails: React.FC<FeatureDetailsProps> = ({ feature, onBack }) => {
  const features = {
    connect: {
      title: "Connect with Skilled Individuals",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      description: "Build meaningful connections with experts and peers in your field",
      benefits: [
        "Find mentors and industry experts",
        "Discover like-minded professionals",
        "Build your professional network",
        "Access exclusive communities",
        "Get personalized recommendations"
      ],
      stats: [
        { label: "Active Users", value: "10,000+", icon: Users },
        { label: "Success Rate", value: "95%", icon: Star },
        { label: "Countries", value: "50+", icon: Globe }
      ],
      features: [
        "Advanced search and filtering",
        "Profile verification system",
        "Real-time messaging",
        "Video call integration",
        "Skill-based matching"
      ]
    },
    exchange: {
      title: "Exchange Skills Seamlessly",
      icon: Target,
      color: "from-indigo-500 to-purple-600",
      description: "Trade your expertise for new knowledge through our secure platform",
      benefits: [
        "Secure skill exchange system",
        "Progress tracking and milestones",
        "Flexible scheduling options",
        "Quality assurance ratings",
        "Dispute resolution support"
      ],
      stats: [
        { label: "Exchanges Made", value: "25,000+", icon: Target },
        { label: "Success Rate", value: "98%", icon: CheckCircle },
        { label: "Skills Available", value: "500+", icon: Zap }
      ],
      features: [
        "Secure payment system",
        "Session recording (optional)",
        "Progress documentation",
        "Skill verification badges",
        "Community guidelines"
      ]
    },
    network: {
      title: "Build Your Skill Network",
      icon: Network,
      color: "from-cyan-500 to-blue-600",
      description: "Grow your professional network while accelerating your learning journey",
      benefits: [
        "Expand your professional reach",
        "Access exclusive opportunities",
        "Learn from diverse perspectives",
        "Build lasting relationships",
        "Advance your career faster"
      ],
      stats: [
        { label: "Network Growth", value: "300%", icon: TrendingUp },
        { label: "Job Placements", value: "2,500+", icon: Award },
        { label: "Partnerships", value: "1,000+", icon: Heart }
      ],
      features: [
        "Network analytics dashboard",
        "Event and meetup organization",
        "Collaboration tools",
        "Mentorship programs",
        "Industry insights"
      ]
    }
  };

  const currentFeature = features[feature as keyof typeof features];
  const IconComponent = currentFeature.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-300 hover:text-yellow-300 transition-colors mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Login</span>
          </button>
          
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${currentFeature.color} rounded-3xl shadow-2xl mb-6`}>
              <IconComponent className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-300 mb-4">
              {currentFeature.title}
            </h1>
            <p className="text-blue-200 text-xl max-w-3xl mx-auto leading-relaxed">
              {currentFeature.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-500/30 p-8">
              <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center">
                <Star className="h-6 w-6 mr-3 text-yellow-400" />
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentFeature.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl border border-blue-500/20">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-blue-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-500/30 p-8">
              <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-green-400" />
                Platform Stats
              </h2>
              <div className="space-y-6">
                {currentFeature.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-700/30 rounded-xl border border-blue-500/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-300 mb-1">{stat.value}</div>
                    <div className="text-blue-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-500/30 p-8">
            <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center">
              <Zap className="h-6 w-6 mr-3 text-yellow-400" />
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentFeature.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-slate-700/30 rounded-xl border border-blue-500/20">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-blue-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-8">
            <h3 className="text-2xl font-bold text-blue-200 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already building their skills and networks on SkillSwap.
            </p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails; 