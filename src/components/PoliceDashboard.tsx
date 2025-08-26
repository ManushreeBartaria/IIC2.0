import React, { useState } from 'react';
import { 
  Shield, 
  LogOut, 
  Plus, 
  FileText, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Users,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { User } from '../App';
import FIRRegistration from './FIRRegistration';

interface PoliceDashboardProps {
  user: User;
  onLogout: () => void;
  onNavigate: (view: string) => void;
}

const PoliceDashboard: React.FC<PoliceDashboardProps> = ({ user, onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showFIRForm, setShowFIRForm] = useState(false);

  const stats = {
    activeCases: 42,
    closedCases: 158,
    alerts: 7,
    wantedCriminals: 23
  };

  const recentFIRs = [
    {
      id: 'PS001-FIR-001',
      title: 'Mobile Phone Theft',
      complainant: 'Rajesh Kumar',
      status: 'Under Investigation',
      date: '2025-01-15',
      officer: 'SI Priya Patel',
      location: 'MG Road Market'
    },
    {
      id: 'PS001-FIR-002',
      title: 'Domestic Violence',
      complainant: 'Sunita Devi',
      status: 'Under Investigation',
      date: '2025-01-14',
      officer: 'Inspector Rajesh Kumar',
      location: 'Sector 15 Residential'
    },
    {
      id: 'PS001-FIR-003',
      title: 'Vehicle Accident',
      complainant: 'Mohan Lal',
      status: 'Evidence Collection',
      date: '2025-01-13',
      officer: 'Constable Amit Kumar',
      location: 'Highway Junction'
    }
  ];

  const closedFIRs = [
    {
      id: 'PS001-FIR-004',
      title: 'Burglary Case',
      complainant: 'Priya Sharma',
      status: 'Investigation Complete',
      date: '2025-01-10',
      officer: 'SI Priya Patel',
      location: 'Residential Colony'
    },
    {
      id: 'PS001-FIR-005',
      title: 'Chain Snatching',
      complainant: 'Meera Gupta',
      status: 'Closed - Accused Arrested',
      date: '2025-01-08',
      officer: 'Constable Sunita Devi',
      location: 'Main Market Area'
    },
    {
      id: 'PS001-FIR-006',
      title: 'Fraud Case',
      complainant: 'Vikram Singh',
      status: 'Investigation Complete',
      date: '2025-01-05',
      officer: 'Inspector Rajesh Kumar',
      location: 'Commercial Complex'
    }
  ];

  const stationMembers = [
    { name: 'Inspector Rajesh Kumar', rank: 'Inspector', id: 'POL001' },
    { name: 'SI Priya Patel', rank: 'Sub Inspector', id: 'POL002' },
    { name: 'Constable Amit Kumar', rank: 'Constable', id: 'POL003' },
    { name: 'Constable Sunita Devi', rank: 'Constable', id: 'POL004' }
  ];

  if (showFIRForm) {
    return <FIRRegistration user={user} onClose={() => setShowFIRForm(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Police Dashboard</h1>
                <p className="text-sm text-gray-600">Station ID: {user.stationId}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-600">{user.rank}</p>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setShowFIRForm(true)}
                  className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                  <span>Register New FIR</span>
                </button>
                <button
                  onClick={() => onNavigate('fir-search')}
                  className="w-full flex items-center space-x-3 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Search className="h-5 w-5" />
                  <span>All-India FIR Database</span>
                </button>
              </div>
            </div>

            {/* Station FIR Search */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Station FIR Search
              </h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Search station FIRs..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <div className="text-xs text-gray-500">
                  <p>Search within {user.stationId} records only</p>
                  <p>• FIR ID • Complainant • Location</p>
                </div>
              </div>
            </div>

            {/* Station Members */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Station Members
              </h3>
              <div className="space-y-3">
                {stationMembers.map((member) => (
                  <div key={member.id} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">{member.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{member.name}</p>
                      <p className="text-xs text-gray-600">{member.rank}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Statistics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Cases</p>
                    <p className="text-3xl font-bold text-blue-600">{stats.activeCases}</p>
                    <p className="text-xs text-gray-500">Station {user.stationId}</p>
                  </div>
                  <Clock className="h-12 w-12 text-blue-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Closed Cases</p>
                    <p className="text-3xl font-bold text-green-600">{stats.closedCases}</p>
                    <p className="text-xs text-gray-500">Station {user.stationId}</p>
                  </div>
                  <CheckCircle className="h-12 w-12 text-green-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Crime Alerts</p>
                    <p className="text-3xl font-bold text-orange-600">{stats.alerts}</p>
                    <p className="text-xs text-gray-500">Regional Alerts</p>
                  </div>
                  <AlertTriangle className="h-12 w-12 text-orange-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Most Wanted</p>
                    <p className="text-3xl font-bold text-red-600">{stats.wantedCriminals}</p>
                    <p className="text-xs text-gray-500">State Database</p>
                  </div>
                  <TrendingUp className="h-12 w-12 text-red-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Station Recent FIRs */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Recent FIRs - Station {user.stationId}</h3>
                  <div className="flex space-x-2">
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === 'dashboard' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('dashboard')}
                    >
                      Active FIRs
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === 'closed' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('closed')}
                    >
                      Closed FIRs
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {(activeTab === 'dashboard' ? recentFIRs : closedFIRs).map((fir) => (
                    <div key={fir.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                            {fir.id}
                          </span>
                          <h4 className="font-medium text-gray-800">{fir.title}</h4>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {user.stationId}
                          </span>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          fir.status === 'Under Investigation' ? 'bg-yellow-100 text-yellow-800' :
                          fir.status === 'Evidence Collection' ? 'bg-orange-100 text-orange-800' :
                          fir.status.includes('Arrested') ? 'bg-green-100 text-green-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {fir.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span>Complainant: {fir.complainant}</span>
                          <span>Location: {fir.location}</span>
                          <span>Officer: {fir.officer}</span>
                        </div>
                        <span>{fir.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceDashboard;