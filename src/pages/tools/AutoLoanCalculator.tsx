import React, { useState } from 'react';
import { Calculator, Download, RefreshCw, Info, Car } from 'lucide-react';

const AutoLoanCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    vehiclePrice: '',
    downPayment: '',
    interestRate: '',
    loanTenure: '',
    tenureType: 'years',
    vehicleType: 'new'
  });

  const [result, setResult] = useState<any>(null);

  const calculateAutoLoan = () => {
    const vehiclePrice = parseFloat(formData.vehiclePrice) || 0;
    const downPayment = parseFloat(formData.downPayment) || 0;
    const principal = vehiclePrice - downPayment;
    const annualRate = parseFloat(formData.interestRate) || 0;
    const tenure = parseFloat(formData.loanTenure) || 0;
    
    const monthlyRate = annualRate / (12 * 100);
    const totalMonths = formData.tenureType === 'years' ? tenure * 12 : tenure;
    
    let emi = 0;
    if (monthlyRate > 0) {
      emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
            (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else {
      emi = principal / totalMonths;
    }
    
    const totalAmount = emi * totalMonths;
    const totalInterest = totalAmount - principal;
    const totalCost = vehiclePrice + totalInterest;
    
    // Calculate additional costs
    const insurance = vehiclePrice * 0.03; // Approximate 3% of vehicle price
    const registration = vehiclePrice * 0.08; // Approximate 8% (varies by state)
    const processingFee = Math.min(principal * 0.005, 10000); // 0.5% or max ₹10,000
    
    const totalAdditionalCosts = insurance + registration + processingFee;
    const totalOutflow = totalCost + totalAdditionalCosts;
    
    // Generate amortization schedule for first year
    const schedule = [];
    let balance = principal;
    
    for (let month = 1; month <= Math.min(12, totalMonths); month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = emi - interestPayment;
      balance -= principalPayment;
      
      schedule.push({
        month,
        emi: emi,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance)
      });
    }
    
    setResult({
      vehiclePrice,
      downPayment,
      loanAmount: principal,
      emi,
      totalAmount,
      totalInterest,
      totalMonths,
      insurance,
      registration,
      processingFee,
      totalAdditionalCosts,
      totalCost,
      totalOutflow,
      schedule
    });
  };

  const resetForm = () => {
    setFormData({
      vehiclePrice: '',
      downPayment: '',
      interestRate: '',
      loanTenure: '',
      tenureType: 'years',
      vehicleType: 'new'
    });
    setResult(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <Car className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-4">Auto Loan Calculator</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Calculate your car loan EMI with insurance, registration, and processing fee considerations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-secondary-800 mb-6">Auto Loan Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Vehicle Type
                </label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                >
                  <option value="new">New Vehicle</option>
                  <option value="used">Used Vehicle</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Vehicle Price (₹)
                </label>
                <input
                  type="number"
                  value={formData.vehiclePrice}
                  onChange={(e) => setFormData({...formData, vehiclePrice: e.target.value})}
                  placeholder="Enter vehicle price"
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Down Payment (₹)
                </label>
                <input
                  type="number"
                  value={formData.downPayment}
                  onChange={(e) => setFormData({...formData, downPayment: e.target.value})}
                  placeholder="Enter down payment amount"
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
                <p className="text-xs text-secondary-600 mt-1">Recommended: 20-30% of vehicle price</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Annual Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.interestRate}
                  onChange={(e) => setFormData({...formData, interestRate: e.target.value})}
                  placeholder="Enter interest rate"
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
                <p className="text-xs text-secondary-600 mt-1">New cars: 7-12% | Used cars: 12-16%</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Loan Tenure
                  </label>
                  <input
                    type="number"
                    value={formData.loanTenure}
                    onChange={(e) => setFormData({...formData, loanTenure: e.target.value})}
                    placeholder="Enter tenure"
                    className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Tenure Type
                  </label>
                  <select
                    value={formData.tenureType}
                    onChange={(e) => setFormData({...formData, tenureType: e.target.value})}
                    className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-2xl">
                <h4 className="font-semibold text-red-900 mb-2">Additional Costs Included</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Insurance: ~3% of vehicle price</li>
                  <li>• Registration: ~8% of vehicle price</li>
                  <li>• Processing fee: 0.5% of loan amount</li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateAutoLoan}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-2xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-glow hover:shadow-glow-lg hover:scale-105"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Auto Loan
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 border border-white/20 text-secondary-700 rounded-2xl hover:bg-glass-200 transition-all duration-300 flex items-center bg-glass-50 backdrop-blur-xl"
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
              <>
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">Auto Loan Calculation Results</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-red-800 font-semibold">Monthly EMI</span>
                        <span className="font-bold text-red-800 text-2xl">₹{result.emi.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-glass-200 p-4 rounded-2xl">
                        <div className="text-center">
                          <span className="text-secondary-700 font-semibold block">Vehicle Price</span>
                          <span className="font-bold text-secondary-800 text-lg">₹{result.vehiclePrice.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="bg-glass-200 p-4 rounded-2xl">
                        <div className="text-center">
                          <span className="text-secondary-700 font-semibold block">Down Payment</span>
                          <span className="font-bold text-secondary-800 text-lg">₹{result.downPayment.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-semibold">Loan Amount</span>
                        <span className="font-bold text-blue-800 text-xl">₹{result.loanAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-800 font-semibold">Total Interest</span>
                        <span className="font-bold text-purple-800 text-xl">₹{result.totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-4 rounded-2xl">
                      <h4 className="font-semibold text-accent-800 mb-3">Additional Costs</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-accent-700">Insurance</span>
                          <span className="font-semibold">₹{result.insurance.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-accent-700">Registration</span>
                          <span className="font-semibold">₹{result.registration.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-accent-700">Processing Fee</span>
                          <span className="font-semibold">₹{result.processingFee.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between border-t border-accent-200 pt-2">
                          <span className="text-accent-800 font-semibold">Total Additional</span>
                          <span className="font-bold text-accent-800">₹{result.totalAdditionalCosts.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800 font-semibold">Total Cost of Ownership</span>
                        <span className="font-bold text-green-800 text-xl">₹{result.totalOutflow.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-glass-200 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-secondary-700 font-semibold">Loan Tenure</span>
                        <span className="font-bold text-secondary-800">{result.totalMonths} months</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-2xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-glow hover:shadow-glow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Auto Loan Report
                  </button>
                </div>

                {/* Amortization Schedule */}
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-secondary-800 mb-4">Amortization Schedule (First Year)</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-glass-200 rounded-xl">
                          <th className="px-4 py-3 text-left rounded-l-xl">Month</th>
                          <th className="px-4 py-3 text-right">EMI</th>
                          <th className="px-4 py-3 text-right">Principal</th>
                          <th className="px-4 py-3 text-right">Interest</th>
                          <th className="px-4 py-3 text-right rounded-r-xl">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.schedule.map((row: any, index: number) => (
                          <tr key={index} className="border-b border-white/10">
                            <td className="px-4 py-3 font-medium">{row.month}</td>
                            <td className="px-4 py-3 text-right">₹{row.emi.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-3 text-right text-green-600 font-semibold">₹{row.principal.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-3 text-right">₹{row.interest.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-3 text-right font-semibold">₹{row.balance.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* Auto Loan Info */}
            <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
              <h3 className="text-xl font-bold text-secondary-800 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-red-600" />
                Auto Loan Information
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-glass-200 rounded-2xl">
                  <h4 className="font-semibold text-secondary-800 mb-2">Eligibility Criteria</h4>
                  <ul className="list-disc list-inside text-sm text-secondary-700 space-y-1">
                    <li>Age: 21-65 years</li>
                    <li>Minimum income: ₹2.5 lakh per annum</li>
                    <li>Credit score: 650+ (750+ for better rates)</li>
                    <li>Employment: 2+ years for salaried, 3+ for self-employed</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Loan Features</h4>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>Loan amount: Up to 90% of vehicle price</li>
                    <li>Tenure: 1-7 years for new cars, 1-5 years for used</li>
                    <li>Processing fee: 0.5-2% of loan amount</li>
                    <li>Prepayment: Usually allowed after 6 months</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-2xl">
                  <h4 className="font-semibold text-yellow-900 mb-2">Money-Saving Tips</h4>
                  <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                    <li>Make a higher down payment (30-40%)</li>
                    <li>Compare rates from multiple lenders</li>
                    <li>Consider shorter tenure to save on interest</li>
                    <li>Negotiate processing fees and charges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoLoanCalculator;