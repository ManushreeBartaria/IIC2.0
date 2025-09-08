import React from 'react';
import { Shield, Search, Building, Users, CheckCircle, AlertTriangle, Eye, TrendingUp, MapPin } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (view: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-10 w-10 text-white" />
              <div>
                <h1 className="text-2xl font-bold text-white">Digital Police & Tourist Safety</h1>
                <p className="text-blue-100 text-sm">Management System</p>
              </div>
            </div>
            <div className="text-white text-right">
              <p className="text-sm">Government of India</p>
              <p className="text-xs text-blue-200">Ministry of Home Affairs</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Modernizing Law Enforcement & Tourist Safety
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            A modern web and mobile platform designed to ensure tamper-proof case management, tourist safety, and public accountability, making it easier for citizens and tourists to register complaints, track cases transparently, receive real-time safety alerts, and build trust in law enforcement.
          </p>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Tamper-proof FIRs</h3>
              <p className="text-blue-100 text-sm">Secure registration & immutable storage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-blue-100 text-sm">Live case updates & accountability</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <AlertTriangle className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Citizen Escalation</h3>
              <p className="text-blue-100 text-sm">Report negligence & seek justice</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Eye className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Smart Surveillance</h3>
              <p className="text-blue-100 text-sm">Data-driven CCTV management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPin className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Tourist Safety</h3>
              <p className="text-blue-100 text-sm">GPS alerts & geo-fencing protection</p>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <button
              onClick={() => onNavigate('police-login')}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
            >
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4 group-hover:text-blue-700" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Police Dashboard</h3>
              <p className="text-gray-600">FIR registration, case management & officer tools</p>
            </button>

            <button
              onClick={() => onNavigate('government-login')}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
            >
              <Building className="h-16 w-16 text-orange-600 mx-auto mb-4 group-hover:text-orange-700" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Government Portal</h3>
              <p className="text-gray-600">Oversight, monitoring & policy implementation</p>
            </button>

            <button
              onClick={() => onNavigate('citizen-login')}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
            >
              <Users className="h-16 w-16 text-purple-600 mx-auto mb-4 group-hover:text-purple-700" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Citizen Portal</h3>
              <p className="text-gray-600">Report issues, track cases & community safety</p>
            </button>

            <button
              onClick={() => onNavigate('tourist-login')}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
            >
              <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4 group-hover:text-red-700" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Tourist Portal</h3>
              <p className="text-gray-600">Safety alerts, emergency FIR & geo-protection</p>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-blue-100">
            <p className="mb-2">Digital Police & Tourist Safety Management System</p>
            <p className="text-sm">© 2025 Government of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;