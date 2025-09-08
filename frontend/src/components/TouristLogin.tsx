import React, { useState } from 'react';
import { MapPin, ArrowLeft, Eye, EyeOff, Shield, User as UserIcon } from 'lucide-react';
import { User as AppUser } from '../App';

interface TouristLoginProps {
  onLogin: (user: AppUser) => void;
  onBack: () => void;
}

const TouristLogin: React.FC<TouristLoginProps> = ({ onLogin, onBack }) => {
  const [formData, setFormData] = useState({
    idType: 'passport',
    idNumber: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const user: AppUser = {
        id: formData.idNumber,
        name: formData.idType === 'passport' ? 'John Smith' : 'Ravi Kumar',
        type: 'tourist',
        passportNumber: formData.idType === 'passport' ? formData.idNumber : undefined,
        nationality: formData.idType === 'passport' ? 'United States' : 'India'
      };
      onLogin(user);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <button
              onClick={onBack}
              className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Tourist Portal</h2>
            <p className="text-gray-600 mt-2">Safety alerts, emergency FIR & geo-protection</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, idType: 'passport', idNumber: '' })}
                  className={`flex items-center justify-center space-x-2 px-4 py-3 border rounded-lg transition-colors ${
                    formData.idType === 'passport'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <UserIcon className="h-4 w-4" />
                  <span>Passport</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, idType: 'aadhaar', idNumber: '' })}
                  className={`flex items-center justify-center space-x-2 px-4 py-3 border rounded-lg transition-colors ${
                    formData.idType === 'aadhaar'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Shield className="h-4 w-4" />
                  <span>Aadhaar</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {formData.idType === 'passport' ? 'Passport Number' : 'Aadhaar Number'}
              </label>
              <input
                type="text"
                required
                value={formData.idNumber}
                onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors"
                placeholder={formData.idType === 'passport' ? 'Enter passport number' : 'Enter 12-digit Aadhaar number'}
                maxLength={formData.idType === 'passport' ? 20 : 12}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors pr-12"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Authenticating...' : 'Access Tourist Portal'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              <span>Secure Tourist Authentication</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              GPS location access will be requested for safety features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristLogin;
