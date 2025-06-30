import React, { useState } from 'react';
import { Calculator, Download, RefreshCw, Info, Building } from 'lucide-react';

const HomeLoanCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    loanTenure: '',
    tenureType: 'years'
  });

  const [result, setResult] = useState<any>(null);

  const calculateHomeLoan = () => {
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
    
    // Tax benefits calculation (Section 24b and 80C)
    const maxInterestDeduction = 200000; // Section 24b limit
    const maxPrincipalDeduction = 150000; // Section 80C limit
    
    const annualEMI = emi * 12;
    const annualInterest = totalInterest / (totalMonths / 12);
    const annualPrincipal = (emi * 12) - annualInterest;
    
    const interestTaxBenefit = Math.min(annualInterest, maxInterestDeduction);
    const principalTaxBenefit = Math.min(annualPrincipal, maxPrincipalDeduction);
    const totalTaxBenefit = interestTaxBenefit + principalTaxBenefit;
    
    // Assuming 30% tax bracket
    const taxSavings = totalTaxBenefit * 0.30;
    
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
      interestTaxBenefit,
      principalTaxBenefit,
      totalTaxBenefit,
      taxSavings,
      schedule,
      effectiveEMI: emi - (taxSavings / 12)
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
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <Building className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-4">Home Loan Calculator</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Calculate your home loan EMI with tax benefits under Section 24(b) and Section 80C
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-secondary-800 mb-6">Home Loan Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  value={formData.loanAmount}
                  onChange={(e) => setFormData({...formData, loanAmount: e.target.value})}
                  placeholder="Enter home loan amount"
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
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
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
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
                    className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Tenure Type
                  </label>
                  <select
                    value={formData.tenureType}
                    onChange={(e) => setFormData({...formData, tenureType: e.target.value})}
                    className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl">
                <h4 className="font-semibold text-blue-900 mb-2">Tax Benefits</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Interest deduction up to ₹2 lakh (Section 24b)</li>
                  <li>• Principal repayment up to ₹1.5 lakh (Section 80C)</li>
                  <li>• Additional ₹1.5 lakh for first-time buyers (Section 80EE)</li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateHomeLoan}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-2xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-glow hover:shadow-glow-lg hover:scale-105"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate EMI
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
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">Home Loan Calculation Results</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-semibold">Monthly EMI</span>
                        <span className="font-bold text-blue-800 text-2xl">₹{result.emi.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800 font-semibold">Effective EMI (After Tax Benefits)</span>
                        <span className="font-bold text-green-800 text-xl">₹{result.effectiveEMI.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-glass-200 p-4 rounded-2xl">
                        <div className="text-center">
                          <span className="text-secondary-700 font-semibold block">Principal Amount</span>
                          <span className="font-bold text-secondary-800 text-xl">₹{result.loanAmount.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="bg-glass-200 p-4 rounded-2xl">
                        <div className="text-center">
                          <span className="text-secondary-700 font-semibold block">Total Interest</span>
                          <span className="font-bold text-secondary-800 text-xl">₹{result.totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-800 font-semibold">Total Amount Payable</span>
                        <span className="font-bold text-purple-800 text-xl">₹{result.totalAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-trust-50 to-trust-100 p-4 rounded-2xl">
                      <h4 className="font-semibold text-trust-800 mb-3">Annual Tax Benefits</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-trust-700">Interest Deduction (24b)</span>
                          <span className="font-semibold">₹{result.interestTaxBenefit.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-trust-700">Principal Deduction (80C)</span>
                          <span className="font-semibold">₹{result.principalTaxBenefit.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between border-t border-trust-200 pt-2">
                          <span className="text-trust-800 font-semibold">Tax Savings (30% bracket)</span>
                          <span className="font-bold text-trust-800">₹{result.taxSavings.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-glass-200 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-secondary-700 font-semibold">Total Tenure</span>
                        <span className="font-bold text-secondary-800">{result.totalMonths} months</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-2xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-glow hover:shadow-glow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Home Loan Report
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

            {/* Home Loan Info */}
            <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
              <h3 className="text-xl font-bold text-secondary-800 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-blue-600" />
                Home Loan Information
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-glass-200 rounded-2xl">
                  <h4 className="font-semibold text-secondary-800 mb-2">Tax Benefits</h4>
                  <ul className="list-disc list-inside text-sm text-secondary-700 space-y-1">
                    <li><strong>Section 24(b):</strong> Interest deduction up to ₹2 lakh per year</li>
                    <li><strong>Section 80C:</strong> Principal repayment up to ₹1.5 lakh per year</li>
                    <li><strong>Section 80EE:</strong> Additional ₹50,000 for first-time buyers</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Eligibility Factors</h4>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>Age: 21-65 years for salaried, 25-70 for self-employed</li>
                    <li>Income: Minimum ₹25,000 per month</li>
                    <li>Credit Score: 750+ for better rates</li>
                    <li>Loan-to-Value: Up to 90% of property value</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-2xl">
                  <h4 className="font-semibold text-yellow-900 mb-2">Tips for Lower EMI</h4>
                  <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                    <li>Make a higher down payment (20-30%)</li>
                    <li>Choose longer tenure for lower EMI</li>
                    <li>Compare rates from multiple lenders</li>
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

export default HomeLoanCalculator;