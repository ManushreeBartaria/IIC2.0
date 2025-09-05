import { useState } from 'react';
import { 
  Building, 
  LogOut, 
  FileText, 
  Eye, 
  AlertTriangle, 
  Clock,
  CheckCircle,
  Camera,
  Shield,
  MapPin,
  Phone,
  Calendar,
  TrendingUp,
  Users,
  Activity
} from 'lucide-react';
import { User } from '../types';

interface GovernmentPortalProps {
  user: User;
  onLogout: () => void;
}

const GovernmentPortal: React.FC<GovernmentPortalProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalCases: 342,
    pendingCases: 67,
    closedCases: 275,
    criticalAlerts: 12,
    cctvFunctional: 156,
    cctvNeedRepair: 23,
    firClosureDisputes: 12,
    nonRegistrationComplaints: 8,
    generalComplaints: 15
  };

  const pendingCases = [
    {
      id: 'FIR001',
      title: 'Theft at Commercial Complex',
      station: 'PS001',
      officer: 'SI Priya Patel',
      contact: '+91-9876543210',
      daysOpen: 12,
      priority: 'High'
    },
    {
      id: 'FIR007',
      title: 'Missing Person Case',
      station: 'PS002',
      officer: 'Inspector Mohan Das',
      contact: '+91-9876543211',
      daysOpen: 8,
      priority: 'Critical'
    },
    {
      id: 'FIR015',
      title: 'Vehicle Accident Investigation',
      station: 'PS003',
      officer: 'Constable Raj Kumar',
      contact: '+91-9876543212',
      daysOpen: 15,
      priority: 'Medium'
    }
  ];

  const cctvRequests = [
    {
      id: 'CCTV001',
      type: 'Installation',
      location: 'School Zone, Sector 15',
      reason: 'High crime rate area',
      priority: 'High',
      reportedBy: 'Local Citizens'
    },
    {
      id: 'CCTV002',
      type: 'Repair',
      location: 'Traffic Junction, MG Road',
      reason: 'Camera not functioning',
      priority: 'Critical',
      reportedBy: 'Traffic Police'
    },
    {
      id: 'CCTV003',
      type: 'Installation',
      location: 'Park Area, Block C',
      reason: 'Safety concerns',
      priority: 'Medium',
      reportedBy: 'Resident Welfare Association'
    }
  ];

  const firClosureDisputes = [
    {
      id: 'FCD001',
      complainant: 'Rahul Sharma',
      aadhaar: '1234-5678-9012',
      firId: 'FIR005',
      station: 'PS001 - Delhi',
      originalOfficer: 'SI Priya Patel',
      description: 'Case closed prematurely without proper investigation',
      reason: 'Incomplete Investigation',
      status: 'Under Review',
      submittedDate: '2025-01-12'
    },
    {
      id: 'FCD002',
      complainant: 'Meera Gupta',
      aadhaar: '2345-6789-0123',
      firId: 'MH-FIR-2024-456',
      station: 'PS-MUM-003 - Mumbai',
      originalOfficer: 'Inspector Ravi Kumar',
      description: 'Domestic violence case closed without arresting accused',
      reason: 'No Evidence Collection',
      status: 'Investigation Initiated',
      submittedDate: '2025-01-10'
    },
    {
      id: 'FCD003',
      complainant: 'Sunil Yadav',
      aadhaar: '3456-7890-1234',
      firId: 'UP-FIR-2024-789',
      station: 'PS-LKO-007 - Lucknow',
      originalOfficer: 'Constable Amit Singh',
      description: 'Property dispute case closed citing civil matter',
      reason: 'Premature Closure',
      status: 'Under Review',
      submittedDate: '2025-01-08'
    },
    {
      id: 'FCD004',
      complainant: 'Kavita Sharma',
      aadhaar: '4567-8901-2345',
      firId: 'RJ-FIR-2024-234',
      station: 'PS-JAI-002 - Jaipur',
      originalOfficer: 'SI Mohan Lal',
      description: 'Dowry harassment case closed without questioning accused family',
      reason: 'Suspect Not Questioned',
      status: 'Departmental Inquiry Ordered',
      submittedDate: '2025-01-06'
    }
  ];

  const nonRegistrationComplaints = [
    {
      id: 'NRC001',
      complainant: 'Priya Patel',
      aadhaar: '2345-6789-0123',
      station: 'PS002',
      area: 'Connaught Place, Delhi',
      officerName: 'SI Rajesh Kumar',
      incidentDate: '2025-01-05',
      description: 'Police station refused to register FIR for theft case',
      refusalReason: 'Claimed it was a civil dispute',
      status: 'Investigation Initiated',
      submittedDate: '2025-01-11'
    },
    {
      id: 'NRC002',
      complainant: 'Arjun Singh',
      aadhaar: '5678-9012-3456',
      station: 'PS-CHN-005 - Chennai',
      area: 'T. Nagar, Chennai',
      officerName: 'Constable Venkat',
      incidentDate: '2025-01-03',
      description: 'Refused to register FIR for chain snatching incident',
      refusalReason: 'Asked to come with more witnesses',
      status: 'Under Review',
      submittedDate: '2025-01-09'
    },
    {
      id: 'NRC003',
      complainant: 'Deepika Reddy',
      aadhaar: '6789-0123-4567',
      station: 'PS-HYD-008 - Hyderabad',
      area: 'Banjara Hills, Hyderabad',
      officerName: 'Inspector Srinivas',
      incidentDate: '2024-12-28',
      description: 'Domestic violence FIR registration refused',
      refusalReason: 'Suggested family counseling instead',
      status: 'Departmental Action Initiated',
      submittedDate: '2025-01-07'
    },
    {
      id: 'NRC004',
      complainant: 'Manoj Kumar',
      aadhaar: '7890-1234-5678',
      station: 'PS-KOL-012 - Kolkata',
      area: 'Park Street, Kolkata',
      officerName: 'SI Debashish Roy',
      incidentDate: '2025-01-01',
      description: 'Cybercrime FIR registration denied',
      refusalReason: 'Directed to cyber cell without registering FIR',
      status: 'Under Review',
      submittedDate: '2025-01-05'
    }
  ];

  const generalComplaints = [
    {
      id: 'GC001',
      complainant: 'Sunil Kumar',
      aadhaar: '3456-7890-1234',
      location: 'Highway Bridge, Km 15',
      type: 'Infrastructure Hazard',
      description: 'Dangerous potholes causing accidents',
      urgency: 'High',
      status: 'Forwarded to PWD',
      submittedDate: '2025-01-08'
    },
    {
      id: 'GC002',
      complainant: 'Anita Verma',
      aadhaar: '8901-2345-6789',
      location: 'Government School, Sector 12',
      type: 'Infrastructure Hazard',
      description: 'School building has cracks in walls, unsafe for children',
      urgency: 'Critical',
      status: 'Forwarded to Education Dept',
      submittedDate: '2025-01-10'
    },
    {
      id: 'GC003',
      complainant: 'Rajesh Gupta',
      aadhaar: '9012-3456-7890',
      location: 'Main Market Area',
      type: 'Infrastructure Hazard',
      description: 'Streetlights not working for 2 months, safety concern',
      urgency: 'Medium',
      status: 'Forwarded to Municipal Corp',
      submittedDate: '2025-01-06'
    },
    {
      id: 'GC004',
      complainant: 'Lakshmi Devi',
      aadhaar: '0123-4567-8901',
      location: 'Flyover Junction, NH-8',
      type: 'Infrastructure Hazard',
      description: 'Flyover railing damaged, risk of vehicles falling',
      urgency: 'Critical',
      status: 'Emergency Action Initiated',
      submittedDate: '2025-01-12'
    },
    {
      id: 'GC005',
      complainant: 'Vikram Singh',
      aadhaar: '1234-5678-9012',
      location: 'Industrial Area, Phase 2',
      type: 'Environmental Concern',
      description: 'Illegal waste dumping causing health hazards',
      urgency: 'High',
      status: 'Forwarded to Pollution Board',
      submittedDate: '2025-01-09'
    },
    {
      id: 'GC006',
      complainant: 'Pooja Sharma',
      aadhaar: '2345-6789-0123',
      location: 'Women\'s Hostel, University Campus',
      type: 'Safety Concern',
      description: 'Inadequate security measures, safety of women students at risk',
      urgency: 'High',
      status: 'Under Review',
      submittedDate: '2025-01-11'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Statistics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Cases</p>
                    <p className="text-3xl font-bold text-blue-600">{stats.totalCases}</p>
                  </div>
                  <FileText className="h-12 w-12 text-blue-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending Cases</p>
                    <p className="text-3xl font-bold text-orange-600">{stats.pendingCases}</p>
                  </div>
                  <Clock className="h-12 w-12 text-orange-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">CCTV Functional</p>
                    <p className="text-3xl font-bold text-green-600">{stats.cctvFunctional}</p>
                  </div>
                  <Camera className="h-12 w-12 text-green-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Complaints</p>
                    <p className="text-3xl font-bold text-purple-600">{stats.firClosureDisputes + stats.nonRegistrationComplaints + stats.generalComplaints}</p>
                  </div>
                  <AlertTriangle className="h-12 w-12 text-red-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Complaint Categories */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">FIR Closure Disputes</p>
                    <p className="text-2xl font-bold text-red-600">{stats.firClosureDisputes}</p>
                  </div>
                  <FileText className="h-10 w-10 text-red-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Non-Registration</p>
                    <p className="text-2xl font-bold text-orange-600">{stats.nonRegistrationComplaints}</p>
                  </div>
                  <Shield className="h-10 w-10 text-orange-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">General Complaints</p>
                    <p className="text-2xl font-bold text-blue-600">{stats.generalComplaints}</p>
                  </div>
                  <Building className="h-10 w-10 text-blue-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Quick Overview Cards */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Critical Pending Cases</h3>
                <div className="space-y-3">
                  {pendingCases.slice(0, 3).map((case_item) => (
                    <div key={case_item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">{case_item.id}</p>
                        <p className="text-sm text-gray-600">{case_item.title}</p>
                        <p className="text-xs text-gray-500">{case_item.daysOpen} days open</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        case_item.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                        case_item.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {case_item.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent FIR Closure Disputes</h3>
                <div className="space-y-3">
                  {firClosureDisputes.slice(0, 3).map((complaint) => (
                    <div key={complaint.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">FIR: {complaint.firId}</p>
                        <p className="text-sm text-gray-600">By: {complaint.complainant}</p>
                        <p className="text-xs text-gray-500">{complaint.reason}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        complaint.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                        complaint.status.includes('Investigation') ? 'bg-blue-100 text-blue-800' :
                        complaint.status.includes('Inquiry') ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {complaint.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'cases':
        return (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Case Oversight Dashboard</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {pendingCases.map((case_item) => (
                  <div key={case_item.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {case_item.id}
                        </span>
                        <h4 className="font-semibold text-gray-800">{case_item.title}</h4>
                      </div>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        case_item.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                        case_item.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {case_item.priority} Priority
                      </span>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span>Station: {case_item.station}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Officer: {case_item.officer}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>{case_item.contact}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span className={case_item.daysOpen > 10 ? 'text-red-600 font-medium' : ''}>
                          {case_item.daysOpen} days open
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        View Details
                      </button>
                      <button className="px-3 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700">
                        Contact Station
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'cctv':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Functional CCTVs</p>
                    <p className="text-2xl font-bold text-green-600">{stats.cctvFunctional}</p>
                  </div>
                  <Camera className="h-10 w-10 text-green-600 opacity-20" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Need Repair</p>
                    <p className="text-2xl font-bold text-red-600">{stats.cctvNeedRepair}</p>
                  </div>
                  <AlertTriangle className="h-10 w-10 text-red-600 opacity-20" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Installation Requests</p>
                    <p className="text-2xl font-bold text-blue-600">15</p>
                  </div>
                  <MapPin className="h-10 w-10 text-blue-600 opacity-20" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">CCTV Management Requests</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {cctvRequests.map((request) => (
                    <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                            request.type === 'Installation' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            {request.type}
                          </span>
                          <h4 className="font-semibold text-gray-800">{request.id}</h4>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          request.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                          request.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {request.priority}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{request.location}</span>
                        </div>
                        <div>
                          <span className="font-medium">Reason:</span> {request.reason}
                        </div>
                        <div>
                          <span className="font-medium">Reported by:</span> {request.reportedBy}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                          Approve
                        </button>
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Forward to Dept
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'complaints':
        return (
          <div className="space-y-6">
            {/* Complaint Categories Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">FIR Closure Disputes</p>
                    <p className="text-2xl font-bold text-red-600">{firClosureDisputes.length}</p>
                    <p className="text-xs text-gray-500">Cases closed prematurely</p>
                  </div>
                  <FileText className="h-10 w-10 text-red-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Non-Registration</p>
                    <p className="text-2xl font-bold text-orange-600">{nonRegistrationComplaints.length}</p>
                    <p className="text-xs text-gray-500">FIR registration refused</p>
                  </div>
                  <Shield className="h-10 w-10 text-orange-600 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">General Complaints</p>
                    <p className="text-2xl font-bold text-blue-600">{generalComplaints.length}</p>
                    <p className="text-xs text-gray-500">Infrastructure & safety</p>
                  </div>
                  <Building className="h-10 w-10 text-blue-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* FIR Closure Disputes */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-red-600" />
                  FIR Closure Disputes ({firClosureDisputes.length})
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {firClosureDisputes.map((complaint) => (
                    <div key={complaint.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                            {complaint.id}
                          </span>
                          <h4 className="font-semibold text-gray-800">FIR: {complaint.firId}</h4>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          complaint.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                          complaint.status.includes('Investigation') ? 'bg-blue-100 text-blue-800' :
                          complaint.status.includes('Inquiry') ? 'bg-red-100 text-red-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {complaint.status}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <p><span className="font-medium">Complainant:</span> {complaint.complainant}</p>
                          <p><span className="font-medium">Aadhaar:</span> {complaint.aadhaar}</p>
                          <p><span className="font-medium">Station:</span> {complaint.station}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">Original Officer:</span> {complaint.originalOfficer}</p>
                          <p><span className="font-medium">Dispute Reason:</span> {complaint.reason}</p>
                          <p><span className="font-medium">Submitted:</span> {complaint.submittedDate}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{complaint.description}</p>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Review Case File
                        </button>
                        <button className="px-3 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700">
                          Contact Station
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                          Order Reinvestigation
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Non-Registration Complaints */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-orange-600" />
                  FIR Non-Registration Complaints ({nonRegistrationComplaints.length})
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {nonRegistrationComplaints.map((complaint) => (
                    <div key={complaint.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                            {complaint.id}
                          </span>
                          <h4 className="font-semibold text-gray-800">Non-Registration Complaint</h4>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          complaint.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                          complaint.status.includes('Investigation') ? 'bg-blue-100 text-blue-800' :
                          complaint.status.includes('Action') ? 'bg-red-100 text-red-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {complaint.status}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <p><span className="font-medium">Complainant:</span> {complaint.complainant}</p>
                          <p><span className="font-medium">Aadhaar:</span> {complaint.aadhaar}</p>
                          <p><span className="font-medium">Station:</span> {complaint.station}</p>
                          <p><span className="font-medium">Area:</span> {complaint.area}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">Officer:</span> {complaint.officerName}</p>
                          <p><span className="font-medium">Incident Date:</span> {complaint.incidentDate}</p>
                          <p><span className="font-medium">Refusal Reason:</span> {complaint.refusalReason}</p>
                          <p><span className="font-medium">Submitted:</span> {complaint.submittedDate}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{complaint.description}</p>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Verify Complaint
                        </button>
                        <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                          Order FIR Registration
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                          Disciplinary Action
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* General Complaints */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-blue-600" />
                  General Government Attention ({generalComplaints.length})
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {generalComplaints.map((complaint) => (
                    <div key={complaint.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                            {complaint.id}
                          </span>
                          <h4 className="font-semibold text-gray-800">{complaint.type}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            complaint.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                            complaint.urgency === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {complaint.urgency}
                          </span>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          complaint.status.includes('Forwarded') ? 'bg-blue-100 text-blue-800' :
                          complaint.status.includes('Emergency') ? 'bg-red-100 text-red-800' :
                          complaint.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {complaint.status}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <p><span className="font-medium">Complainant:</span> {complaint.complainant}</p>
                          <p><span className="font-medium">Aadhaar:</span> {complaint.aadhaar}</p>
                          <p><span className="font-medium">Location:</span> {complaint.location}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">Type:</span> {complaint.type}</p>
                          <p><span className="font-medium">Urgency:</span> {complaint.urgency}</p>
                          <p><span className="font-medium">Submitted:</span> {complaint.submittedDate}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{complaint.description}</p>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          View Location
                        </button>
                        <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                          Forward to Dept
                        </button>
                        <button className="px-3 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700">
                          Priority Action
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              <Building className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Government Portal</h1>
                <p className="text-sm text-gray-600">Public Safety Oversight & Management</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-600">{user.department}</p>
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
              onClick={() => setActiveTab('overview')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Activity className="h-4 w-4" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('cases')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'cases'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Case Oversight</span>
            </button>
            <button
              onClick={() => setActiveTab('cctv')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'cctv'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Camera className="h-4 w-4" />
              <span>CCTV Monitoring</span>
            </button>
            <button
              onClick={() => setActiveTab('complaints')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'complaints'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Citizen Complaints</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default GovernmentPortal;