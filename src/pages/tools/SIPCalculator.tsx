import React, { useState } from 'react';
import { Calculator, Download, RefreshCw, Info, TrendingUp } from 'lucide-react';

const SIPCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    monthlyInvestment: '',
    expectedReturn: '',
    timePeriod: '',
    stepUpPercentage: ''
  });

  const [result, setResult] = useState<any>(null);

  const calculateSIP = () => {
    const monthlyAmount = parseFloat(formData.monthlyInvestment) || 0;
    const annualReturn = parseFloat(formData.expectedReturn) || 0;
    const years = parseFloat(formData.timePeriod) || 0;
    const stepUp = parseFloat(formData.stepUpPercentage) || 0;
    
    const monthlyReturn = annualReturn / (12 * 100);
    const totalMonths = years * 12;
    
    let futureValue = 0;
    let totalInvestment = 0;
    let currentMonthlyAmount = monthlyAmount;
    
    // Calculate with step-up SIP
    for (let month = 1; month <= totalMonths; month++) {
      // Increase investment amount annually if step-up is specified
      if (stepUp > 0 && month > 1 && (month - 1) % 12 === 0) {
        currentMonthlyAmount = currentMonthlyAmount * (1 + stepUp / 100);
      }
      
      totalInvestment += currentMonthlyAmount;
      
      // Calculate future value with compound interest
      const remainingMonths = totalMonths - month + 1;
      futureValue += currentMonthlyAmount * Math.pow(1 + monthlyReturn, remainingMonths - 1);
    }
    
    const totalGains = futureValue - totalInvestment;
    const absoluteReturn = ((futureValue - totalInvestment) / totalInvestment) * 100;
    
    // Calculate year-wise breakdown for first 5 years
    const yearlyBreakdown = [];
    let runningInvestment = 0;
    let runningValue = 0;
    let yearlyAmount = monthlyAmount;
    
    for (let year = 1; year <= Math.min(5, years); year++) {
      for (let month = 1; month <= 12; month++) {
        runningInvestment += yearlyAmount;
        runningValue += yearlyAmount * Math.pow(1 + monthlyReturn, (years - year) * 12 + (12 - month) + 1);
      }
      
      yearlyBreakdown.push({
        year,
        investment: runningInvestment,
        value: runningValue,
        gains: runningValue - runningInvestment
      });
      
      if (stepUp > 0) {
        yearlyAmount = yearlyAmount * (1 + stepUp / 100);
      }
    }
    
    setResult({
      monthlyInvestment: monthlyAmount,
      totalInvestment,
      futureValue,
      totalGains,
      absoluteReturn,
      years,
      yearlyBreakdown
    });
  };

  const resetForm = () => {
    setFormData({
      monthlyInvestment: '',
      expectedReturn: '',
      timePeriod: '',
      stepUpPercentage: ''
    });
    setResult(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-4">SIP Calculator</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Calculate returns on your Systematic Investment Plan (SIP) with compound growth projections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-secondary-800 mb-6">SIP Investment Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Monthly Investment Amount (₹)
                </label>
                <input
                  type="number"
                  value={formData.monthlyInvestment}
                  onChange={(e) => setFormData({...formData, monthlyInvestment: e.target.value})}
                  placeholder="Enter monthly SIP amount"
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Expected Annual Return (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.expectedReturn}
                  onChange={(e) => setFormData({...formData, expectedReturn: e.target.value})}
                  placeholder="Expected return rate"
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Investment Period (Years)
                </label>
                <input
                  type="number"
                  value={formData.timePeriod}
                  onChange={(e) => setFormData({...formData, timePeriod: e.target.value})}
                  placeholder="Investment duration"
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Annual Step-up (%) - Optional
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.stepUpPercentage}
                  onChange={(e) => setFormData({...formData, stepUpPercentage: e.target.value})}
                  placeholder="Yearly increase in SIP amount"
                  className="w-full px-4 py-3 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-glass-50 backdrop-blur-xl"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateSIP}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-2xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-glow hover:shadow-glow-lg hover:scale-105"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate SIP
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
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">SIP Calculation Results</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-semibold">Total Investment</span>
                        <span className="font-bold text-blue-800 text-xl">₹{result.totalInvestment.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800 font-semibold">Future Value</span>
                        <span className="font-bold text-green-800 text-2xl">₹{result.futureValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-800 font-semibold">Total Gains</span>
                        <span className="font-bold text-purple-800 text-xl">₹{result.totalGains.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-4 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-accent-800 font-semibold">Absolute Return</span>
                        <span className="font-bold text-accent-800 text-xl">{result.absoluteReturn.toFixed(2)}%</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-glass-200 p-4 rounded-2xl text-center">
                        <span className="text-secondary-700 font-semibold block">Monthly SIP</span>
                        <span className="font-bold text-secondary-800">₹{result.monthlyInvestment.toLocaleString()}</span>
                      </div>
                      <div className="bg-glass-200 p-4 rounded-2xl text-center">
                        <span className="text-secondary-700 font-semibold block">Investment Period</span>
                        <span className="font-bold text-secondary-800">{result.years} years</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-2xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-glow hover:shadow-glow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download SIP Report
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
                          <th className="px-4 py-3 text-right">Investment</th>
                          <th className="px-4 py-3 text-right">Value</th>
                          <th className="px-4 py-3 text-right rounded-r-xl">Gains</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.yearlyBreakdown.map((row: any, index: number) => (
                          <tr key={index} className="border-b border-white/10">
                            <td className="px-4 py-3 font-medium">{row.year}</td>
                            <td className="px-4 py-3 text-right">₹{row.investment.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-3 text-right font-semibold">₹{row.value.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                            <td className="px-4 py-3 text-right text-green-600 font-semibold">₹{row.gains.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* SIP Info */}
            <div className="bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass p-8 border border-white/20">
              <h3 className="text-xl font-bold text-secondary-800 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-purple-600" />
                SIP Information
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-glass-200 rounded-2xl">
                  <h4 className="font-semibold text-secondary-800 mb-2">What is SIP?</h4>
                  <p className="text-sm text-secondary-700">
                    Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in mutual funds. 
                    It helps in rupee cost averaging and building wealth through the power of compounding.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Benefits of SIP</h4>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>Rupee cost averaging reduces market volatility impact</li>
                    <li>Power of compounding grows your wealth over time</li>
                    <li>Disciplined investing builds financial habits</li>
                    <li>Flexible investment amounts and tenure</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-2xl">
                  <h4 className="font-semibold text-yellow-900 mb-2">Step-up SIP</h4>
                  <p className="text-sm text-yellow-800">
                    Increase your SIP amount annually to counter inflation and boost returns. 
                    Even a 10% annual increase can significantly enhance your corpus.
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

export default SIPCalculator;