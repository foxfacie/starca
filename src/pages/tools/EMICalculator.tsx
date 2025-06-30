import React, { useState } from 'react';
import { Calculator, Download, RefreshCw, Info, CreditCard } from 'lucide-react';

const EMICalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    loanTenure: '',
    tenureType: 'years'
  });

  const [result, setResult] = useState<any>(null);

  const calculateEMI = () => {
    const principal = parseFloat(formData.loanAmount) || 0;
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
      loanAmount: principal,
      emi,
      totalAmount,
      totalInterest,
      totalMonths,
      schedule
    });
  };

  const resetForm = () => {
    setFormData({
      loanAmount: '',
      interestRate: '',
      loanTenure: '',
      tenureType: 'years'
    });
    setResult(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-8 h-8 text-accent-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">EMI Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your Equated Monthly Installment (EMI) for home loans, personal loans, and other financing options
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  value={formData.loanAmount}
                  onChange={(e) => setFormData({...formData, loanAmount: e.target.value})}
                  placeholder="Enter loan amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.interestRate}
                  onChange={(e) => setFormData({...formData, interestRate: e.target.value})}
                  placeholder="Enter interest rate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Tenure
                  </label>
                  <input
                    type="number"
                    value={formData.loanTenure}
                    onChange={(e) => setFormData({...formData, loanTenure: e.target.value})}
                    placeholder="Enter tenure"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tenure Type
                  </label>
                  <select
                    value={formData.tenureType}
                    onChange={(e) => setFormData({...formData, tenureType: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateEMI}
                  className="flex-1 bg-gradient-to-r from-accent-600 to-accent-700 text-white py-3 px-6 rounded-lg font-medium hover:from-accent-700 hover:to-accent-800 transition-all duration-300 flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate EMI
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
              <>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">EMI Calculation Results</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-accent-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-accent-800 font-semibold">Monthly EMI</span>
                        <span className="font-bold text-accent-800 text-2xl">₹{result.emi.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-center">
                          <span className="text-blue-800 font-semibold block">Principal Amount</span>
                          <span className="font-bold text-blue-800 text-xl">₹{result.loanAmount.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="text-center">
                          <span className="text-red-800 font-semibold block">Total Interest</span>
                          <span className="font-bold text-red-800 text-xl">₹{result.totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800 font-semibold">Total Amount Payable</span>
                        <span className="font-bold text-green-800 text-xl">₹{result.totalAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">Total Tenure</span>
                        <span className="font-bold text-gray-700">{result.totalMonths} months</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-accent-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-accent-700 transition-colors flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download EMI Schedule
                  </button>
                </div>

                {/* Amortization Schedule */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Amortization Schedule (First Year)</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left">Month</th>
                          <th className="px-4 py-2 text-right">EMI</th>
                          <th className="px-4 py-2 text-right">Principal</th>
                          <th className="px-4 py-2 text-right">Interest</th>
                          <th className="px-4 py-2 text-right">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.schedule.map((row: any, index: number) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className="px-4 py-2">{row.month}</td>
                            <td className="px-4 py-2 text-right">₹{row.emi.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-2 text-right">₹{row.principal.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-2 text-right">₹{row.interest.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-2 text-right">₹{row.balance.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* EMI Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-accent-600" />
                EMI Information
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">What is EMI?</h4>
                  <p className="text-sm text-gray-700">
                    Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender 
                    at a specified date each calendar month. EMIs consist of both principal and interest components.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">EMI Formula</h4>
                  <p className="text-sm text-blue-800">
                    EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    Where P = Principal, R = Monthly Interest Rate, N = Number of Monthly Installments
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Tips for Lower EMI</h4>
                  <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                    <li>Make a higher down payment to reduce principal</li>
                    <li>Choose a longer tenure (but pay more interest overall)</li>
                    <li>Compare interest rates from different lenders</li>
                    <li>Consider prepayment to reduce tenure</li>
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

export default EMICalculator;