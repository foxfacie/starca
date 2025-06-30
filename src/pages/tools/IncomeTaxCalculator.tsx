import React, { useState } from 'react';
import { Calculator, Download, RefreshCw, Info } from 'lucide-react';

const IncomeTaxCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    financialYear: '2024-25',
    age: 'below60',
    totalIncome: '',
    section80C: '',
    section80D: '',
    homeLoanInterest: '',
    otherDeductions: ''
  });

  const [result, setResult] = useState<any>(null);

  const taxSlabs = {
    'below60': [
      { min: 0, max: 250000, rate: 0 },
      { min: 250000, max: 500000, rate: 5 },
      { min: 500000, max: 1000000, rate: 20 },
      { min: 1000000, max: Infinity, rate: 30 }
    ],
    '60to80': [
      { min: 0, max: 300000, rate: 0 },
      { min: 300000, max: 500000, rate: 5 },
      { min: 500000, max: 1000000, rate: 20 },
      { min: 1000000, max: Infinity, rate: 30 }
    ],
    'above80': [
      { min: 0, max: 500000, rate: 0 },
      { min: 500000, max: 1000000, rate: 20 },
      { min: 1000000, max: Infinity, rate: 30 }
    ]
  };

  const calculateTax = () => {
    const income = parseFloat(formData.totalIncome) || 0;
    const deductions = (parseFloat(formData.section80C) || 0) + 
                      (parseFloat(formData.section80D) || 0) + 
                      (parseFloat(formData.homeLoanInterest) || 0) + 
                      (parseFloat(formData.otherDeductions) || 0);
    
    const taxableIncome = Math.max(0, income - deductions);
    const slabs = taxSlabs[formData.age as keyof typeof taxSlabs];
    
    let tax = 0;
    let remainingIncome = taxableIncome;
    
    for (const slab of slabs) {
      if (remainingIncome <= 0) break;
      
      const taxableAtThisSlab = Math.min(remainingIncome, slab.max - slab.min);
      tax += (taxableAtThisSlab * slab.rate) / 100;
      remainingIncome -= taxableAtThisSlab;
    }
    
    const cess = tax * 0.04; // 4% Health and Education Cess
    const totalTax = tax + cess;
    const netIncome = income - totalTax;
    
    setResult({
      grossIncome: income,
      totalDeductions: deductions,
      taxableIncome,
      incomeTax: tax,
      cess,
      totalTax,
      netIncome,
      effectiveRate: income > 0 ? (totalTax / income) * 100 : 0
    });
  };

  const resetForm = () => {
    setFormData({
      financialYear: '2024-25',
      age: 'below60',
      totalIncome: '',
      section80C: '',
      section80D: '',
      homeLoanInterest: '',
      otherDeductions: ''
    });
    setResult(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Income Tax Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your income tax liability for FY 2024-25 with our comprehensive tax calculator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Calculation Details</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Financial Year
                  </label>
                  <select
                    value={formData.financialYear}
                    onChange={(e) => setFormData({...formData, financialYear: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="2024-25">2024-25</option>
                    <option value="2023-24">2023-24</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age Category
                  </label>
                  <select
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="below60">Below 60 years</option>
                    <option value="60to80">60-80 years</option>
                    <option value="above80">Above 80 years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Annual Income (₹)
                </label>
                <input
                  type="number"
                  value={formData.totalIncome}
                  onChange={(e) => setFormData({...formData, totalIncome: e.target.value})}
                  placeholder="Enter your total annual income"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section 80C Deductions (₹)
                  </label>
                  <input
                    type="number"
                    value={formData.section80C}
                    onChange={(e) => setFormData({...formData, section80C: e.target.value})}
                    placeholder="Max ₹1,50,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section 80D Deductions (₹)
                  </label>
                  <input
                    type="number"
                    value={formData.section80D}
                    onChange={(e) => setFormData({...formData, section80D: e.target.value})}
                    placeholder="Health insurance premium"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Home Loan Interest (₹)
                  </label>
                  <input
                    type="number"
                    value={formData.homeLoanInterest}
                    onChange={(e) => setFormData({...formData, homeLoanInterest: e.target.value})}
                    placeholder="Section 24(b) deduction"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Other Deductions (₹)
                  </label>
                  <input
                    type="number"
                    value={formData.otherDeductions}
                    onChange={(e) => setFormData({...formData, otherDeductions: e.target.value})}
                    placeholder="Other eligible deductions"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateTax}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Tax
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Calculation Results</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Gross Annual Income</span>
                    <span className="font-semibold">₹{result.grossIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Total Deductions</span>
                    <span className="font-semibold text-green-600">₹{result.totalDeductions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Taxable Income</span>
                    <span className="font-semibold">₹{result.taxableIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Income Tax</span>
                    <span className="font-semibold">₹{result.incomeTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Health & Education Cess (4%)</span>
                    <span className="font-semibold">₹{result.cess.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-primary-50 rounded-lg px-4">
                    <span className="text-primary-800 font-semibold">Total Tax Liability</span>
                    <span className="font-bold text-primary-800 text-xl">₹{result.totalTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
                    <span className="text-green-800 font-semibold">Net Income (After Tax)</span>
                    <span className="font-bold text-green-800 text-xl">₹{result.netIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Effective Tax Rate</span>
                    <span className="font-semibold">{result.effectiveRate.toFixed(2)}%</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-secondary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary-700 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Tax Report
                </button>
              </div>
            )}

            {/* Tax Slabs Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-primary-600" />
                Tax Slabs for FY 2024-25
              </h3>
              
              <div className="space-y-3">
                {taxSlabs[formData.age as keyof typeof taxSlabs].map((slab, index) => (
                  <div key={index} className="flex justify-between items-center py-2 px-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">
                      ₹{slab.min.toLocaleString()} - {slab.max === Infinity ? 'Above' : `₹${slab.max.toLocaleString()}`}
                    </span>
                    <span className="font-semibold text-primary-600">{slab.rate}%</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Health and Education Cess of 4% is applicable on the total income tax amount.
                  Standard deduction of ₹50,000 is available for salaried individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;