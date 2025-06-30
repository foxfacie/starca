import React, { useState } from 'react';
import { Calculator, Download, RefreshCw, Info, Home } from 'lucide-react';

const HRACalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    basicSalary: '',
    hraReceived: '',
    rentPaid: '',
    city: 'metro'
  });

  const [result, setResult] = useState<any>(null);

  const calculateHRA = () => {
    const basic = parseFloat(formData.basicSalary) || 0;
    const hra = parseFloat(formData.hraReceived) || 0;
    const rent = parseFloat(formData.rentPaid) || 0;
    
    // HRA exemption calculation
    const cityPercentage = formData.city === 'metro' ? 0.5 : 0.4;
    const hraPercentage = basic * cityPercentage;
    const rentExcess = Math.max(0, rent - (basic * 0.1));
    
    const exemption = Math.min(hra, hraPercentage, rentExcess);
    const taxableHRA = Math.max(0, hra - exemption);
    
    setResult({
      basicSalary: basic,
      hraReceived: hra,
      rentPaid: rent,
      hraPercentage,
      rentExcess,
      exemption,
      taxableHRA,
      annualExemption: exemption * 12,
      annualTaxableHRA: taxableHRA * 12
    });
  };

  const resetForm = () => {
    setFormData({
      basicSalary: '',
      hraReceived: '',
      rentPaid: '',
      city: 'metro'
    });
    setResult(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="w-8 h-8 text-secondary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">HRA Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your House Rent Allowance (HRA) exemption under Section 10(13A) of Income Tax Act
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">HRA Calculation Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Basic Salary (₹)
                </label>
                <input
                  type="number"
                  value={formData.basicSalary}
                  onChange={(e) => setFormData({...formData, basicSalary: e.target.value})}
                  placeholder="Enter your monthly basic salary"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly HRA Received (₹)
                </label>
                <input
                  type="number"
                  value={formData.hraReceived}
                  onChange={(e) => setFormData({...formData, hraReceived: e.target.value})}
                  placeholder="Enter monthly HRA amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Rent Paid (₹)
                </label>
                <input
                  type="number"
                  value={formData.rentPaid}
                  onChange={(e) => setFormData({...formData, rentPaid: e.target.value})}
                  placeholder="Enter monthly rent amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City Type
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                >
                  <option value="metro">Metro City (Mumbai, Delhi, Chennai, Kolkata)</option>
                  <option value="non-metro">Non-Metro City</option>
                </select>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateHRA}
                  className="flex-1 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-3 px-6 rounded-lg font-medium hover:from-secondary-700 hover:to-secondary-800 transition-all duration-300 flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate HRA
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {result && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">HRA Exemption Results</h2>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Monthly Calculation</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Basic Salary</span>
                        <span className="font-semibold">₹{result.basicSalary.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">HRA Received</span>
                        <span className="font-semibold">₹{result.hraReceived.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rent Paid</span>
                        <span className="font-semibold">₹{result.rentPaid.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">HRA Exemption Components</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-blue-700">Actual HRA Received</span>
                        <span className="font-semibold">₹{result.hraReceived.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">{formData.city === 'metro' ? '50%' : '40%'} of Basic Salary</span>
                        <span className="font-semibold">₹{result.hraPercentage.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Rent - 10% of Basic</span>
                        <span className="font-semibold">₹{result.rentExcess.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-800 font-semibold">Monthly HRA Exemption</span>
                      <span className="font-bold text-green-800 text-xl">₹{result.exemption.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-800 font-semibold">Annual HRA Exemption</span>
                      <span className="font-bold text-green-800 text-xl">₹{result.annualExemption.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-red-800 font-semibold">Monthly Taxable HRA</span>
                      <span className="font-bold text-red-800 text-xl">₹{result.taxableHRA.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-800 font-semibold">Annual Taxable HRA</span>
                      <span className="font-bold text-red-800 text-xl">₹{result.annualTaxableHRA.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 bg-secondary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary-700 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download HRA Report
                </button>
              </div>
            )}

            {/* HRA Rules Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-secondary-600" />
                HRA Exemption Rules
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Exemption Calculation</h4>
                  <p className="text-sm text-gray-700">
                    HRA exemption is the minimum of:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                    <li>Actual HRA received</li>
                    <li>50% of basic salary (metro) or 40% (non-metro)</li>
                    <li>Rent paid minus 10% of basic salary</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Important Conditions</h4>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>You must be paying rent for accommodation</li>
                    <li>You should not own a house in the same city</li>
                    <li>Rent receipts are required for claims above ₹1 lakh annually</li>
                    <li>PAN of landlord required if annual rent exceeds ₹1 lakh</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Metro Cities</h4>
                  <p className="text-sm text-yellow-800">
                    Mumbai, Delhi, Chennai, and Kolkata are considered metro cities for HRA calculation purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRACalculator;