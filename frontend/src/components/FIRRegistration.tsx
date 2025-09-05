import React, { useState } from 'react';
import { ArrowLeft, Save, User, MapPin, Calendar, FileText, Users2, AlertCircle } from 'lucide-react';
import { User as UserType } from '../App';

interface FIRRegistrationProps {
  user: UserType;
  onClose: () => void;
}

const FIRRegistration: React.FC<FIRRegistrationProps> = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    // Complainant Details
    complainantName: '',
    complainantAge: '',
    complainantGender: '',
    complainantAddress: '',
    complainantContact: '',
    complainantIdProof: '',
    complainantIdNumber: '',
    
    // Incident Details
    incidentDate: '',
    incidentTime: '',
    incidentLocation: '',
    offenseType: '',
    caseNarrative: '',
    
    // Witness Information
    witnessName: '',
    witnessContact: '',
    witnessAddress: '',
    
    // Accused Details
    accusedName: '',
    accusedAddress: '',
    accusedDescription: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const offenseTypes = [
    'Theft/Burglary',
    'Assault/Violence',
    'Fraud/Cheating',
    'Domestic Violence',
    'Road Accident',
    'Missing Person',
    'Cybercrime',
    'Drug Offense',
    'Murder/Attempt to Murder',
    'Other'
  ];

  const idProofTypes = [
    'Aadhaar Card',
    'PAN Card',
    'Voter ID',
    'Passport',
    'Driving License',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate FIR registration
    setTimeout(() => {
      const firId = `FIR${Date.now().toString().slice(-6)}`;
      alert(`FIR registered successfully!\nFIR ID: ${firId}\nRegistered by: ${user.name} (${user.id})\nStation: ${user.stationId}\nTimestamp: ${new Date().toLocaleString()}`);
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <User className="h-6 w-6 mr-2 text-blue-600" />
              Complainant Details
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.complainantName}
                  onChange={(e) => setFormData({ ...formData, complainantName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter complainant's full name"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="120"
                    value={formData.complainantAge}
                    onChange={(e) => setFormData({ ...formData, complainantAge: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                  <select
                    required
                    value={formData.complainantGender}
                    onChange={(e) => setFormData({ ...formData, complainantGender: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
              <textarea
                required
                rows={3}
                value={formData.complainantAddress}
                onChange={(e) => setFormData({ ...formData, complainantAddress: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter complete address"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.complainantContact}
                  onChange={(e) => setFormData({ ...formData, complainantContact: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter mobile number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID Proof Type *</label>
                <select
                  required
                  value={formData.complainantIdProof}
                  onChange={(e) => setFormData({ ...formData, complainantIdProof: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select ID Proof</option>
                  {idProofTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {formData.complainantIdProof && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID Proof Number *</label>
                <input
                  type="text"
                  required
                  value={formData.complainantIdNumber}
                  onChange={(e) => setFormData({ ...formData, complainantIdNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={`Enter ${formData.complainantIdProof} number`}
                />
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2 text-red-600" />
              Incident Details
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Incident Date *</label>
                <input
                  type="date"
                  required
                  value={formData.incidentDate}
                  onChange={(e) => setFormData({ ...formData, incidentDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Incident Time *</label>
                <input
                  type="time"
                  required
                  value={formData.incidentTime}
                  onChange={(e) => setFormData({ ...formData, incidentTime: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Offense Type *</label>
                <select
                  required
                  value={formData.offenseType}
                  onChange={(e) => setFormData({ ...formData, offenseType: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Offense Type</option>
                  {offenseTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Incident Location *</label>
              <input
                type="text"
                required
                value={formData.incidentLocation}
                onChange={(e) => setFormData({ ...formData, incidentLocation: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter detailed location of the incident"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Case Narrative *</label>
              <textarea
                required
                rows={6}
                value={formData.caseNarrative}
                onChange={(e) => setFormData({ ...formData, caseNarrative: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe the incident in detail..."
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <Users2 className="h-6 w-6 mr-2 text-green-600" />
              Witness Information (Optional)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Witness Name</label>
                <input
                  type="text"
                  value={formData.witnessName}
                  onChange={(e) => setFormData({ ...formData, witnessName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter witness name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Witness Contact</label>
                <input
                  type="tel"
                  value={formData.witnessContact}
                  onChange={(e) => setFormData({ ...formData, witnessContact: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter witness contact number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Witness Address</label>
              <textarea
                rows={3}
                value={formData.witnessAddress}
                onChange={(e) => setFormData({ ...formData, witnessAddress: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter witness address"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 flex items-center mt-8">
              <AlertCircle className="h-6 w-6 mr-2 text-orange-600" />
              Accused Details (If Known)
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Accused Name</label>
              <input
                type="text"
                value={formData.accusedName}
                onChange={(e) => setFormData({ ...formData, accusedName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter accused name (if known)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Accused Address</label>
              <textarea
                rows={3}
                value={formData.accusedAddress}
                onChange={(e) => setFormData({ ...formData, accusedAddress: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter accused address (if known)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Accused Description</label>
              <textarea
                rows={3}
                value={formData.accusedDescription}
                onChange={(e) => setFormData({ ...formData, accusedDescription: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Physical description, known details about the accused"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-purple-600" />
              Review & Submit
            </h3>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">Auto-filled System Information</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div>
                  <p><span className="font-medium">Officer Name:</span> {user.name}</p>
                  <p><span className="font-medium">Officer ID:</span> {user.id}</p>
                </div>
                <div>
                  <p><span className="font-medium">Police Station:</span> {user.stationId}</p>
                  <p><span className="font-medium">Registration Time:</span> {new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Complainant Information</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium">Name:</span> {formData.complainantName}</p>
                  <p><span className="font-medium">Age/Gender:</span> {formData.complainantAge} years, {formData.complainantGender}</p>
                  <p><span className="font-medium">Contact:</span> {formData.complainantContact}</p>
                  <p><span className="font-medium">ID Proof:</span> {formData.complainantIdProof} - {formData.complainantIdNumber}</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Incident Details</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium">Date & Time:</span> {formData.incidentDate} at {formData.incidentTime}</p>
                  <p><span className="font-medium">Location:</span> {formData.incidentLocation}</p>
                  <p><span className="font-medium">Offense Type:</span> {formData.offenseType}</p>
                  <p><span className="font-medium">Description:</span> {formData.caseNarrative}</p>
                </div>
              </div>

              {(formData.witnessName || formData.accusedName) && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Additional Information</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    {formData.witnessName && <p><span className="font-medium">Witness:</span> {formData.witnessName}</p>}
                    {formData.accusedName && <p><span className="font-medium">Accused:</span> {formData.accusedName}</p>}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <span className="font-medium">Important:</span> Once submitted, this FIR will be registered as immutable record 
                with tamper-proof timestamp and officer details. Please verify all information is accurate.
              </p>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">New FIR Registration</h1>
            <div className="text-sm text-gray-600">
              Step {currentStep} of 4
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`h-1 w-24 mx-2 ${
                    step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Complainant</span>
            <span>Incident</span>
            <span>Witnesses</span>
            <span>Submit</span>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{isSubmitting ? 'Registering FIR...' : 'Register FIR'}</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FIRRegistration;