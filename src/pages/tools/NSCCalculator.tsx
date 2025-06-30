import React, { useState } from 'react';
import { Calculator, Download, RefreshCw, Info, PiggyBank } from 'lucide-react';

const NSCCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    investmentAmount: '',
    tenure: '5'
  });

  const [result, setResult] = useState<any>(null);

  const calculateNSC = () => {
    const principal = parseFloat(formData.investmentAmount) || 0;
    const years = parseInt(formData.tenure) || 5;
    
    // NSC interest rate is 6.8% per annum (as of 2024)
    const interestRate = 6.8;
    
    // NSC compounds annually
    const maturityAmount = principal * Math.pow(1 + interestRate / 100, years);
    const totalInterest = maturityAmount - principal;
    
    // Tax benefits calculation
    const taxBenefit80C = Math.min(principal, 150000); // Max 80C benefit
    const taxSavings30Percent = taxBenefit80C * 0.30; // Assuming 30% tax bracket
    
    // Year-wise breakdown
    const yearlyBreakdown = [];
    let runningAmount = principal;
    
    for (let year = 1; year <= years; year++) {
      const yearlyInterest = runningAmount * (interestRate / 100);
      runningAmount += yearlyInterest;
      
      yearlyBreakdown.push({
        year,
        openingBalance: runningAmount - yearlyInterest,
        interest: yearlyInterest,
        closingBalance: runningAmount
      });
    }
    
    setResult({
      principal,
      interestRate,
      tenure: years,
      maturityAmount,
      totalInterest,
      taxBenefit80C,
      taxSavings30Percent,
      yearlyBreakdown,
      effectiveReturn: ((maturityAmount - principal) / principal) * 100
    });
  };

  const resetForm = () => {
    setFormData({
      investmentAmount: '',
      tenure: '5'
    });
    setResult(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <PiggyBank className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-4">NSC Calculator</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Calculate returns on National Savings Certificate (NSC) investments with tax benefits under Section 80C
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-secondary-800 mb-6">NSC Investment Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Investment Amount (₹)
                </label>
                <input
                  type="number"
                  value={formData.investmentAmount}
                  onChange={(e) => setFormData({...formData, investmentAmount: e.target.value})}
                  placeholder="Enter NSC investment amount"
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
                <p className="text-xs text-secondary-600 mt-1">Minimum: ₹1,000 | Maximum: No limit</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Investment Tenure
                </label>
                <select
                  value={formData.tenure}
                  onChange={(e) => setFormData({...formData, tenure: e.target.value})}
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                >
                  <option value="5">5 Years (NSC VIII Issue)</option>
                </select>
                <p className="text-xs text-secondary-600 mt-1">Current interest rate: 6.8% per annum</p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-2xl">
                <h4 className="font-semibold text-indigo-900 mb-2">Key Features</h4>
                <ul className="text-sm text-indigo-800 space-y-1">
                  <li>• Fixed interest rate of 6.8% per annum</li>
                  <li>• Tax deduction under Section 80C</li>
                  <li>• Interest compounded annually</li>
                  <li>• Government-backed security</li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateNSC}
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-6 rounded-2xl font-medium hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center shadow-glow hover:shadow-glow-lg hover:scale-105"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate NSC
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
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">NSC Calculation Results</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-semibold">Principal Amount</span>
                        <span className="font-bold text-blue-800 text-xl">₹{result.principal.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800 font-semibold">Maturity Amount</span>
                        <span className="font-bold text-green-800 text-2xl">₹{result.maturityAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-800 font-semibold">Total Interest Earned</span>
                        <span className="font-bold text-purple-800 text-xl">₹{result.totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-accent-800 font-semibold">Effective Return</span>
                        <span className="font-bold text-accent-800 text-xl">{result.effectiveReturn.toFixed(2)}%</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-trust-50 to-trust-100 p-4 rounded-2xl">
                      <h4 className="font-semibold text-trust-800 mb-2">Tax Benefits</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-trust-700">80C Deduction</span>
                          <span className="font-semibold">₹{result.taxBenefit80C.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-trust-700">Tax Savings (30% bracket)</span>
                          <span className="font-semibold">₹{result.taxSavings30Percent.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-glass-200 p-4 rounded-2xl text-center">
                        <span className="text-secondary-700 font-semibold block">Interest Rate</span>
                        <span className="font-bold text-secondary-800">{result.interestRate}% p.a.</span>
                      </div>
                      <div className="bg-glass-200 p-4 rounded-2xl text-center">
                        <span className="text-secondary-700 font-semibold block">Tenure</span>
                        <span className="font-bold text-secondary-800">{result.tenure} years</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-6 rounded-2xl font-medium hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center shadow-glow hover:shadow-glow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download NSC Report
                  </button>
                </div>

                {/* Year-wise Breakdown */}
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-secondary-800 mb-4">Year-wise Growth</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-glass-200 rounded-xl">
                          <th className="px-4 py-3 text-left rounded-l-xl">Year</th>
                          <th className="px-4 py-3 text-right">Opening Balance</th>
                          <th className="px-4 py-3 text-right">Interest</th>
                          <th className="px-4 py-3 text-right rounded-r-xl">Closing Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.yearlyBreakdown.map((row: any, index: number) => (
                          <tr key={index} className="border-b border-white/10">
                            <td className="px-4 py-3 font-medium">{row.year}</td>
                            <td className="px-4 py-3 text-right">₹{row.openingBalance.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-3 text-right text-green-600 font-semibold">₹{row.interest.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-3 text-right font-semibold">₹{row.closingBalance.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* NSC Info */}
            <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
              <h3 className="text-xl font-bold text-secondary-800 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-indigo-600" />
                NSC Information
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-glass-200 rounded-2xl">
                  <h4 className="font-semibold text-secondary-800 mb-2">About NSC</h4>
                  <p className="text-sm text-secondary-700">
                    National Savings Certificate is a government-backed savings scheme that offers 
                    guaranteed returns with tax benefits under Section 80C of the Income Tax Act.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Key Benefits</h4>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>Government-backed security with guaranteed returns</li>
                    <li>Tax deduction up to ₹1.5 lakh under Section 80C</li>
                    <li>No TDS on interest earned</li>
                    <li>Can be used as collateral for loans</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-2xl">
                  <h4 className="font-semibold text-yellow-900 mb-2">Important Notes</h4>
                  <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                    <li>Lock-in period of 5 years</li>
                    <li>Premature withdrawal not allowed</li>
                    <li>Interest is taxable at maturity</li>
                    <li>Available at post offices and banks</li>
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

export default NSCCalculator;