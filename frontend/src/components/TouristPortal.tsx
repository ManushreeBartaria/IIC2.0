import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  LogOut, 
  AlertTriangle, 
  Shield, 
  Navigation,
  Phone,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
  Eye,
  Zap,
  Building,
  Car,
  Home
} from 'lucide-react';
import { User } from '../App';

interface TouristPortalProps {
  user: User;
  onLogout: () => void;
}

const TouristPortal: React.FC<TouristPortalProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showEmergencyForm, setShowEmergencyForm] = useState(false);
  const [showHazardForm, setShowHazardForm] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<{lat: number, lng: number} | null>(null);
  const [nearestStation, setNearestStation] = useState('PS-DEL-001 - Connaught Place');

  useEffect(() => {
    // Request GPS location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied');
        }
      );
    }
  }, []);

  const myFIRs = [
    {
      id: 'TUR-FIR-001',
      title: 'Passport Theft at Hotel',
      date: '2025-01-14',
      status: 'Under Investigation',
      station: 'PS-GOA-003 - Panaji',
      officer: 'Inspector Maria Fernandes',
      location: 'Beach Resort, Calangute'
    },
    {
      id: 'TUR-FIR-002',
      title: 'Overcharging by Taxi Driver',
      date: '2025-01-10',
      status: 'Investigation Complete',
      station: 'PS-RAJ-007 - Jaipur',
      officer: 'SI Arjun Singh',
      location: 'Hawa Mahal Area'
    }
  ];

  const safetyAlerts = [
    {
      id: 'SA001',
      type: 'Weather Alert',
      title: 'Heavy Rain Warning - Mumbai',
      message: 'Heavy rainfall expected in Mumbai region. Avoid coastal areas.',
      severity: 'High',
      time: '2 hours ago'
    },
    {
      id: 'SA002',
      type: 'Security Alert',
      title: 'VIP Movement - Delhi',
      message: 'Traffic restrictions on India Gate to Red Fort route.',
      severity: 'Medium',
      time: '4 hours ago'
    },
    {
      id: 'SA003',
      type: 'Public Safety',
      title: 'Festival Crowd - Varanasi',
      message: 'Large crowds expected at Dashashwamedh Ghat. Exercise caution.',
      severity: 'Medium',
      time: '6 hours ago'
    }
  ];

  const hazardTypes = [
    { id: 'suspicious', label: 'Suspicious Activity/Package', icon: AlertTriangle },
    { id: 'monument', label: 'Monument Safety Issue', icon: Building },
    { id: 'transport', label: 'Transport Safety Concern', icon: Car },
    { id: 'accommodation', label: 'Hotel/Accommodation Issue', icon: Home },
    { id: 'infrastructure', label: 'Infrastructure Hazard', icon: Zap }
  ];

  const [emergencyForm, setEmergencyForm] = useState({
    type: 'theft',
    location: '',
    description: '',
    urgency: 'High'
  });

  const [hazardForm, setHazardForm] = useState({
    type: '',
    location: '',
    description: '',
    urgency: 'Medium'
  });

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const firId = `TUR-FIR-${Date.now().toString().slice(-3)}`;
    alert(`Emergency FIR submitted successfully!\n\nFIR ID: ${firId}\nStation: ${nearestStation}\nOfficer will contact you within 30 minutes.\n\nYou can track progress in your dashboard.`);
    setEmergencyForm({ type: 'theft', location: '', description: '', urgency: 'High' });
    setShowEmergencyForm(false);
  };

  const handleHazardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for sensitive keywords
    const sensitiveKeywords = ['terrorist', 'bomb', 'attack', 'riot', 'explosion', 'weapon'];
    const containsSensitive = sensitiveKeywords.some(keyword => 
      hazardForm.description.toLowerCase().includes(keyword)
    );

    if (containsSensitive) {
      alert(`⚠️ SECURITY ALERT\n\nYour report contains sensitive keywords and has been:\n✓ Linked to your ${user.passportNumber ? 'Passport' : 'Aadhaar'} ID\n✓ Routed to ${nearestStation} for verification\n✓ Will be escalated to authorities after police approval\n\nReference ID: SEC${Date.now().toString().slice(-6)}`);
    } else {
      alert(`Hazard report submitted!\nReference ID: HAZ${Date.now().toString().slice(-6)}\n\nReport forwarded to relevant authorities for action.`);
    }
    
    setHazardForm({ type: '', location: '', description: '', urgency: 'Medium' });
    setShowHazardForm(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Location & Safety Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Navigation className="h-5 w-5 mr-2 text-red-600" />
                Current Location & Safety Status
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-green-800">Safe Zone</p>
                    <p className="text-sm text-green-600">New Delhi - Tourist Area</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-800">Nearest Station</p>
                    <p className="text-sm text-blue-600">{nearestStation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Emergency Actions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setShowEmergencyForm(true)}
                  className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Phone className="h-8 w-8 text-red-600" />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Emergency FIR</p>
                    <p className="text-sm text-gray-600">Report theft, assault, or emergency</p>
                  </div>
                </button>

                <button
                  onClick={() => setShowHazardForm(true)}
                  className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Report Hazard</p>
                    <p className="text-sm text-gray-600">Safety concerns or suspicious activity</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">My FIRs</p>
                    <p className="text-3xl font-bold text-red-600">{myFIRs.length}</p>
                  </div>
                  <FileText className="h-12 w-12 text-red-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Safety Alerts</p>
                    <p className="text-3xl font-bold text-orange-600">{safetyAlerts.length}</p>
                  </div>
                  <AlertTriangle className="h-12 w-12 text-orange-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Zone Status</p>
                    <p className="text-2xl font-bold text-green-600">Safe</p>
                  </div>
                  <Shield className="h-12 w-12 text-green-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">My FIRs</h3>
                <div className="space-y-3">
                  {myFIRs.map((fir) => (
                    <div key={fir.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-sm font-medium rounded">
                          {fir.id}
                        </span>
                        <span className={`px-2 py-1 text-sm font-medium rounded ${
                          fir.status === 'Under Investigation' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {fir.status}
                        </span>
                      </div>
                      <p className="font-medium text-gray-800">{fir.title}</p>
                      <p className="text-sm text-gray-600 mb-2">{fir.location}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Date: {fir.date}</span>
                        <span>Officer: {fir.officer}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Safety Alerts</h3>
                <div className="space-y-3">
                  {safetyAlerts.map((alert) => (
                    <div key={alert.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 text-sm font-medium rounded ${
                          alert.severity === 'High' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {alert.type}
                        </span>
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </div>
                      <p className="font-medium text-gray-800">{alert.title}</p>
                      <p className="text-sm text-gray-600">{alert.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'emergency':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Emergency FIR Registration</h3>
            
            {showEmergencyForm ? (
              <form onSubmit={handleEmergencySubmit} className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">
                    <span className="font-medium">Emergency FIR:</span> This will be automatically routed to {nearestStation} based on your GPS location.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Type
                  </label>
                  <select
                    required
                    value={emergencyForm.type}
                    onChange={(e) => setEmergencyForm({ ...emergencyForm, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  >
                    <option value="theft">Theft/Robbery</option>
                    <option value="assault">Assault/Violence</option>
                    <option value="fraud">Fraud/Cheating</option>
                    <option value="harassment">Harassment</option>
                    <option value="accident">Accident</option>
                    <option value="other">Other Emergency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location Details
                  </label>
                  <input
                    type="text"
                    required
                    value={emergencyForm.location}
                    onChange={(e) => setEmergencyForm({ ...emergencyForm, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="Enter detailed location (hotel, landmark, area)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Incident Description
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={emergencyForm.description}
                    onChange={(e) => setEmergencyForm({ ...emergencyForm, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="Describe what happened in detail..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Submit Emergency FIR
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEmergencyForm(false)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <Phone className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Report theft, assault, fraud, or any emergency situation</p>
                <button
                  onClick={() => setShowEmergencyForm(true)}
                  className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors mx-auto"
                >
                  <Plus className="h-5 w-5" />
                  <span>File Emergency FIR</span>
                </button>
              </div>
            )}
          </div>
        );

      case 'hazards':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Report Safety Hazards</h3>
            
            {showHazardForm ? (
              <form onSubmit={handleHazardSubmit} className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">⚠️ Important:</span> Filing false or misleading complaints is punishable by law. 
                    Consequences include monetary fine, access suspension, or legal action.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Hazard Type
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {hazardTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setHazardForm({ ...hazardForm, type: type.id })}
                        className={`flex items-center space-x-3 p-3 border rounded-lg transition-colors ${
                          hazardForm.type === type.id
                            ? 'border-orange-500 bg-orange-50 text-orange-800'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <type.icon className="h-6 w-6" />
                        <span>{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location Details
                  </label>
                  <input
                    type="text"
                    required
                    value={hazardForm.location}
                    onChange={(e) => setHazardForm({ ...hazardForm, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter detailed location (monument, station, hotel, area)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    value={hazardForm.urgency}
                    onChange={(e) => setHazardForm({ ...hazardForm, urgency: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Low">Low - Minor concern</option>
                    <option value="Medium">Medium - Safety issue</option>
                    <option value="High">High - Immediate attention needed</option>
                    <option value="Critical">Critical - Life threatening</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hazard Description
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={hazardForm.description}
                    onChange={(e) => setHazardForm({ ...hazardForm, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="Describe the safety hazard or suspicious activity in detail..."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">AI Detection:</span> Reports with sensitive keywords (terrorist, bomb, attack, etc.) 
                    will be linked to your ID and routed through police verification before escalation.
                  </p>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Submit Report
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowHazardForm(false)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <AlertTriangle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Report suspicious activity, monument damage, or safety concerns</p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4 text-left">
                  <p className="text-sm text-gray-700 mb-2"><span className="font-medium">Examples:</span></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• "Suspicious unattended bag at Jaipur Railway Station"</li>
                    <li>• "Cracks appearing in Hawa Mahal monument wall"</li>
                    <li>• "Overcrowding risk at Pushkar Fair"</li>
                    <li>• "Possible landslide zone on Mount Abu route"</li>
                  </ul>
                </div>
                <button
                  onClick={() => setShowHazardForm(true)}
                  className="flex items-center space-x-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors mx-auto"
                >
                  <Plus className="h-5 w-5" />
                  <span>Report Hazard</span>
                </button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-red-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Tourist Portal</h1>
                <p className="text-sm text-gray-600">Safety Alerts & Emergency Services</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-600">
                  {user.passportNumber ? `Passport: ${user.passportNumber}` : `Aadhaar: ${user.id}`}
                </p>
                <p className="text-xs text-gray-500">{user.nationality}</p>
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
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex space-x-1 p-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Shield className="h-4 w-4" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('emergency')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'emergency'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>Emergency FIR</span>
            </button>
            <button
              onClick={() => setActiveTab('hazards')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'hazards'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Report Hazards</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default TouristPortal;