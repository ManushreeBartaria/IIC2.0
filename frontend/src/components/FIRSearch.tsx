import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Eye, Download, Calendar, MapPin, User, FileText } from 'lucide-react';
import { User as UserType } from '../App';

interface FIRSearchProps {
  user: UserType;
  onLogout: () => void;
  onBack: () => void;
}

const FIRSearch: React.FC<FIRSearchProps> = ({ user, onLogout, onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('all');

  const mockFIRs = [
    {
      id: 'MH-FIR-2025-001',
      title: 'Drug Trafficking Network',
      complainant: 'Narcotics Control Bureau',
      date: '2025-01-13',
      time: '03:30',
      location: 'Mumbai Port Area',
      offense: 'Drug Trafficking',
      status: 'Under Investigation',
      officer: 'ACP Vikram Singh',
      stationId: 'PS-MUM-007 - Mumbai',
      state: 'Maharashtra',
      description: 'Large-scale drug trafficking operation intercepted at Mumbai port. International network suspected.',
      accused: 'Rajesh Gupta, 2 others',
      witness: 'Port security, Customs officials'
    },
    {
      id: 'KA-FIR-2025-045',
      title: 'Cybercrime - Banking Fraud',
      complainant: 'Anita Reddy',
      date: '2025-01-12',
      time: '11:15',
      location: 'Bangalore IT Park',
      offense: 'Cybercrime',
      status: 'Under Investigation',
      officer: 'Inspector Suresh Kumar',
      stationId: 'PS-BLR-012 - Bangalore',
      state: 'Karnataka',
      description: 'Online banking fraud involving fake payment gateway. Multiple victims across South India.',
      accused: 'Unknown (Cyber investigation ongoing)',
      witness: 'Bank officials, IT forensics team'
    },
    {
      id: 'UP-FIR-2025-123',
      title: 'Interstate Vehicle Theft',
      complainant: 'Ramesh Yadav',
      date: '2025-01-11',
      time: '07:45',
      location: 'NH-24, Ghaziabad',
      offense: 'Vehicle Theft',
      status: 'Under Investigation',
      officer: 'SI Manoj Sharma',
      stationId: 'PS-GZB-003 - Ghaziabad',
      state: 'Uttar Pradesh',
      description: 'Luxury car theft from highway parking. Vehicle tracking shows movement towards Rajasthan border.',
      accused: 'Suspected interstate gang',
      witness: 'Highway patrol, CCTV footage'
    },
    {
      id: 'TN-FIR-2025-089',
      title: 'Human Trafficking Case',
      complainant: 'NGO - Child Rights Foundation',
      date: '2025-01-10',
      time: '16:20',
      location: 'Chennai Central Railway Station',
      offense: 'Human Trafficking',
      status: 'Investigation Complete',
      officer: 'DCP Lakshmi Narayanan',
      stationId: 'PS-CHN-001 - Chennai',
      state: 'Tamil Nadu',
      description: 'Rescue operation of 12 minors from trafficking network. Multi-state coordination involved.',
      accused: 'Gopal Krishnan, Meera Devi (Arrested)',
      witness: 'Railway police, NGO workers'
    },
    {
      id: 'RJ-FIR-2025-067',
      title: 'Archaeological Artifact Smuggling',
      complainant: 'Archaeological Survey of India',
      date: '2025-01-09',
      time: '14:10',
      location: 'Jaipur Heritage Site',
      offense: 'Heritage Crime',
      status: 'Under Investigation',
      officer: 'Inspector Arjun Singh',
      stationId: 'PS-JAI-005 - Jaipur',
      state: 'Rajasthan',
      description: 'Illegal excavation and smuggling of ancient artifacts. International buyers suspected.',
      accused: 'Mohan Lal (Arrested), 3 others absconding',
      witness: 'ASI officials, Local villagers'
    },
    {
      id: 'WB-FIR-2025-234',
      title: 'Counterfeit Currency Racket',
      complainant: 'Bank Manager - State Bank',
      date: '2025-01-08',
      time: '10:30',
      location: 'Kolkata Financial District',
      offense: 'Economic Offense',
      status: 'Under Investigation',
      officer: 'Inspector Debashish Roy',
      stationId: 'PS-KOL-015 - Kolkata',
      state: 'West Bengal',
      description: 'Large-scale counterfeit currency operation discovered. High-quality fake notes in circulation.',
      accused: 'Sunil Das, Ravi Chatterjee',
      witness: 'Bank officials, Currency experts'
    },
    {
      id: 'GJ-FIR-2025-156',
      title: 'Industrial Accident Investigation',
      complainant: 'Factory Workers Union',
      date: '2025-01-07',
      time: '08:45',
      location: 'Ahmedabad Industrial Area',
      offense: 'Industrial Negligence',
      status: 'Evidence Collection',
      officer: 'SI Kiran Patel',
      stationId: 'PS-AMD-009 - Ahmedabad',
      state: 'Gujarat',
      description: 'Chemical plant explosion causing worker injuries. Safety protocol violations suspected.',
      accused: 'Factory Management',
      witness: 'Workers, Safety inspectors'
    }
  ];

  const filteredFIRs = mockFIRs.filter(fir => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      fir.id.toLowerCase().includes(query) ||
      fir.title.toLowerCase().includes(query) ||
      fir.complainant.toLowerCase().includes(query) ||
      fir.location.toLowerCase().includes(query) ||
      fir.offense.toLowerCase().includes(query) ||
      fir.description.toLowerCase().includes(query) ||
      fir.state.toLowerCase().includes(query) ||
      fir.stationId.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Dashboard</span>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">All-India FIR Search & Case Reference</h1>
                <p className="text-sm text-gray-600">Search FIRs across all police stations in India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-600">{user.rank}</p>
              </div>
              <button
                onClick={onLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <Search className="h-6 w-6 text-gray-400" />
            <h2 className="text-xl font-semibold text-gray-800">All-India FIR Database Search</h2>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800">
              <span className="font-medium">Access Level:</span> All-India database access for cross-referencing cases, 
              criminal history, and inter-state investigations. Search across all police stations nationwide.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search by FIR ID, location, crime type, complainant, accused, state..."
              />
            </div>
            <button className="flex items-center justify-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Search className="h-4 w-4" />
              <span>Search All-India Database</span>
            </button>
          </div>
        </div>

        {/* All FIRs Display */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              All Registered FIRs - India ({filteredFIRs.length} {searchQuery ? 'matching results' : 'total records'})
            </h3>
            {searchQuery && (
              <p className="text-sm text-gray-600 mt-1">
                Showing results for: "<span className="font-medium">{searchQuery}</span>"
              </p>
            )}
          </div>

          <div className="p-6">
            {filteredFIRs.length > 0 ? (
              <div className="space-y-4">
                {filteredFIRs.map((fir) => (
                  <div
                    key={fir.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {fir.id}
                        </span>
                        <h4 className="font-semibold text-gray-800">{fir.title}</h4>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {fir.state}
                        </span>
                      </div>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        fir.status === 'Under Investigation' ? 'bg-yellow-100 text-yellow-800' :
                        fir.status === 'Evidence Collection' ? 'bg-orange-100 text-orange-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {fir.status}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Complainant: {fir.complainant}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{fir.date} at {fir.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{fir.location}</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-2">
                      <p className="line-clamp-2">{fir.description}</p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Officer: {fir.officer} | Station: {fir.stationId}</span>
                      <span>Crime: {fir.offense}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No FIRs found matching your search criteria</p>
                <p className="text-sm text-gray-400 mt-2">Try different keywords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIRSearch;