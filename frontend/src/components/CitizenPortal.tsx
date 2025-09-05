import React, { useState } from 'react';
import { 
  Users, 
  LogOut, 
  FileText, 
  AlertTriangle, 
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
  Eye,
  Phone,
  Home,
  Car,
  Zap,
  Building
} from 'lucide-react';
import { User } from '../App';

interface CitizenPortalProps {
  user: User;
  onLogout: () => void;
}

const CitizenPortal: React.FC<CitizenPortalProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showDisputeForm, setShowDisputeForm] = useState(false);
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [showHazardForm, setShowHazardForm] = useState(false);

  const myFIRs = [
    {
      id: 'FIR001',
      title: 'Mobile Phone Theft',
      date: '2025-01-10',
      status: 'Closed',
      station: 'PS001',
      officer: 'SI Priya Patel',
      canDispute: true,
      description: 'Mobile phone stolen from market area'
    },
    {
      id: 'FIR008',
      title: 'Vehicle Damage',
      date: '2025-01-05',
      status: 'Under Investigation',
      station: 'PS001',
      officer: 'Constable Amit Kumar',
      canDispute: false,
      description: 'Car damaged in parking area'
    }
  ];

  const myComplaints = [
    {
      id: 'CC001',
      type: 'FIR Closure Dispute',
      subject: 'Premature case closure',
      date: '2025-01-12',
      status: 'Under Review',
      description: 'FIR001 was closed without proper investigation'
    },
    {
      id: 'HC001',
      type: 'Infrastructure Hazard',
      subject: 'Broken streetlight',
      date: '2025-01-08',
      status: 'Forwarded to Municipal Corp',
      description: 'Streetlight not working in residential area'
    }
  ];

  const hazardTypes = [
    { id: 'school', label: 'Unsafe School Building', icon: Building },
    { id: 'bridge', label: 'Weak Bridge/Flyover', icon: Building },
    { id: 'road', label: 'Dangerous Road Condition', icon: Car },
    { id: 'streetlight', label: 'Streetlight Failure', icon: Zap },
    { id: 'other', label: 'Other Infrastructure', icon: Home }
  ];

  const [disputeForm, setDisputeForm] = useState({
    firId: '',
    reason: '',
    description: '',
    evidence: ''
  });

  const [complaintForm, setComplaintForm] = useState({
    station: '',
    area: '',
    caseSummary: '',
    officerName: '',
    incidentDate: ''
  });

  const [hazardForm, setHazardForm] = useState({
    type: '',
    location: '',
    description: '',
    urgency: 'Medium',
    coordinates: ''
  });

  const handleDisputeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dispute submitted successfully!\nReference ID: DSP${Date.now().toString().slice(-6)}\n\nYour complaint will be reviewed by government authorities within 7 working days.`);
    setDisputeForm({ firId: '', reason: '', description: '', evidence: '' });
    setShowDisputeForm(false);
  };

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Non-registration complaint submitted!\nReference ID: NRC${Date.now().toString().slice(-6)}\n\nThis complaint will be investigated by higher authorities.`);
    setComplaintForm({ station: '', area: '', caseSummary: '', officerName: '', incidentDate: '' });
    setShowComplaintForm(false);
  };

  const handleHazardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hazard report submitted!\nReference ID: HAZ${Date.now().toString().slice(-6)}\n\nLocation has been geo-tagged and forwarded to relevant authorities.`);
    setHazardForm({ type: '', location: '', description: '', urgency: 'Medium', coordinates: '' });
    setShowHazardForm(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">My FIRs</p>
                    <p className="text-3xl font-bold text-blue-600">{myFIRs.length}</p>
                  </div>
                  <FileText className="h-12 w-12 text-blue-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">My Complaints</p>
                    <p className="text-3xl font-bold text-purple-600">{myComplaints.length}</p>
                  </div>
                  <AlertTriangle className="h-12 w-12 text-purple-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Issues</p>
                    <p className="text-3xl font-bold text-orange-600">
                      {myComplaints.filter(c => c.status !== 'Resolved').length}
                    </p>
                  </div>
                  <Clock className="h-12 w-12 text-orange-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button
                  onClick={() => setShowDisputeForm(true)}
                  className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Dispute FIR Closure</p>
                    <p className="text-sm text-gray-600">Challenge premature case closure</p>
                  </div>
                </button>

                <button
                  onClick={() => setShowComplaintForm(true)}
                  className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <XCircle className="h-8 w-8 text-red-600" />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Report Non-Registration</p>
                    <p className="text-sm text-gray-600">Report FIR registration refusal</p>
                  </div>
                </button>

                <button
                  onClick={() => setShowHazardForm(true)}
                  className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Report Hazard</p>
                    <p className="text-sm text-gray-600">Report community safety issues</p>
                  </div>
                </button>
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
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                          {fir.id}
                        </span>
                        <span className={`px-2 py-1 text-sm font-medium rounded ${
                          fir.status === 'Closed' ? 'bg-red-100 text-red-800' :
                          fir.status === 'Under Investigation' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {fir.status}
                        </span>
                      </div>
                      <p className="font-medium text-gray-800">{fir.title}</p>
                      <p className="text-sm text-gray-600 mb-2">{fir.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Date: {fir.date}</span>
                        <span>Officer: {fir.officer}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">My Complaints</h3>
                <div className="space-y-3">
                  {myComplaints.map((complaint) => (
                    <div key={complaint.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded">
                          {complaint.id}
                        </span>
                        <span className={`px-2 py-1 text-sm font-medium rounded ${
                          complaint.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                          complaint.status.includes('Forwarded') ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {complaint.status}
                        </span>
                      </div>
                      <p className="font-medium text-gray-800">{complaint.subject}</p>
                      <p className="text-sm text-gray-600 mb-2">{complaint.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Type: {complaint.type}</span>
                        <span>Date: {complaint.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'fir-dispute':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">FIR Closure Dispute</h3>
            
            {showDisputeForm ? (
              <form onSubmit={handleDisputeSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select FIR to Dispute
                  </label>
                  <select
                    required
                    value={disputeForm.firId}
                    onChange={(e) => setDisputeForm({ ...disputeForm, firId: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select FIR</option>
                    {myFIRs.filter(fir => fir.canDispute).map(fir => (
                      <option key={fir.id} value={fir.id}>{fir.id} - {fir.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Dispute
                  </label>
                  <select
                    required
                    value={disputeForm.reason}
                    onChange={(e) => setDisputeForm({ ...disputeForm, reason: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Reason</option>
                    <option value="incomplete-investigation">Incomplete Investigation</option>
                    <option value="no-evidence-collection">No Evidence Collection</option>
                    <option value="premature-closure">Premature Closure</option>
                    <option value="suspect-not-questioned">Suspect Not Questioned</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Description
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={disputeForm.description}
                    onChange={(e) => setDisputeForm({ ...disputeForm, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Explain why you believe the case was closed prematurely..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Evidence (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={disputeForm.evidence}
                    onChange={(e) => setDisputeForm({ ...disputeForm, evidence: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Any additional evidence or information..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Submit Dispute
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDisputeForm(false)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Dispute closure of your FIR if you believe investigation was incomplete</p>
                <button
                  onClick={() => setShowDisputeForm(true)}
                  className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mx-auto"
                >
                  <Plus className="h-5 w-5" />
                  <span>File Dispute</span>
                </button>
              </div>
            )}
          </div>
        );

      case 'complaints':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">FIR Non-Registration Complaint</h3>
            
            {showComplaintForm ? (
              <form onSubmit={handleComplaintSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Police Station
                    </label>
                    <input
                      type="text"
                      required
                      value={complaintForm.station}
                      onChange={(e) => setComplaintForm({ ...complaintForm, station: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="Enter police station name/code"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area/Jurisdiction
                    </label>
                    <input
                      type="text"
                      required
                      value={complaintForm.area}
                      onChange={(e) => setComplaintForm({ ...complaintForm, area: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="Enter area where incident occurred"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Officer Name (if known)
                    </label>
                    <input
                      type="text"
                      value={complaintForm.officerName}
                      onChange={(e) => setComplaintForm({ ...complaintForm, officerName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="Officer who refused registration"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Incident Date
                    </label>
                    <input
                      type="date"
                      required
                      value={complaintForm.incidentDate}
                      onChange={(e) => setComplaintForm({ ...complaintForm, incidentDate: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Case Summary & Refusal Details
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={complaintForm.caseSummary}
                    onChange={(e) => setComplaintForm({ ...complaintForm, caseSummary: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="Describe the incident and explain why the police refused to register FIR..."
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">Note:</span> Your complaint will be linked to your Aadhaar ID for authenticity and forwarded to higher authorities for investigation.
                  </p>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Submit Complaint
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowComplaintForm(false)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <XCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Report police stations that refuse to register your FIR</p>
                <button
                  onClick={() => setShowComplaintForm(true)}
                  className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors mx-auto"
                >
                  <Plus className="h-5 w-5" />
                  <span>File Complaint</span>
                </button>
              </div>
            )}
          </div>
        );

      case 'hazards':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Community Hazard Reporting</h3>
            
            {showHazardForm ? (
              <form onSubmit={handleHazardSubmit} className="space-y-6">
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
                    placeholder="Enter detailed location (street, landmark, area)"
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
                    <option value="Low">Low - Minor inconvenience</option>
                    <option value="Medium">Medium - Safety concern</option>
                    <option value="High">High - Immediate danger</option>
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
                    placeholder="Describe the safety hazard in detail..."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-800">Location Tracking</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Your report will be geo-tagged with location coordinates for accurate tracking and faster response by authorities.
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
                <p className="text-gray-600 mb-4">Report infrastructure hazards and safety concerns in your community</p>
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
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Citizen Portal</h1>
                <p className="text-sm text-gray-600">Your Gateway to Public Safety Services</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-600">Aadhaar: {user.id.replace(/(\d{4})/g, '$1-').slice(0, -1)}</p>
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
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('fir-dispute')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'fir-dispute'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>FIR Closure Dispute</span>
            </button>
            <button
              onClick={() => setActiveTab('complaints')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'complaints'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <XCircle className="h-4 w-4" />
              <span>Non-Registration</span>
            </button>
            <button
              onClick={() => setActiveTab('hazards')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'hazards'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Community Hazards</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default CitizenPortal;