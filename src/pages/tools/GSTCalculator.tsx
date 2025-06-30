import React, { useState } from 'react';
import { Calculator, Download, RefreshCw, Info, Receipt } from 'lucide-react';

const GSTCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: '',
    gstRate: '18',
    calculationType: 'exclusive' // exclusive or inclusive
  });

  const [result, setResult] = useState<any>(null);

  const gstRates = [
    { value: '0', label: '0% - Essential items' },
    { value: '5', label: '5% - Basic necessities' },
    { value: '12', label: '12% - Standard items' },
    { value: '18', label: '18% - Most goods & services' },
    { value: '28', label: '28% - Luxury items' }
  ];

  const calculateGST = () => {
    const amount = parseFloat(formData.amount) || 0;
    const rate = parseFloat(formData.gstRate) || 0;
    
    let result: any = {};
    
    if (formData.calculationType === 'exclusive') {
      // Amount is without GST, calculate GST to be added
      const gstAmount = (amount * rate) / 100;
      const totalAmount = amount + gstAmount;
      
      // CGST and SGST calculation (for intra-state)
      const cgst = gstAmount / 2;
      const sgst = gstAmount / 2;
      
      result = {
        originalAmount: amount,
        gstRate: rate,
        gstAmount,
        cgst,
        sgst,
        igst: gstAmount, // for inter-state
        totalAmount,
        calculationType: 'exclusive'
      };
    } else {
      // Amount is inclusive of GST, calculate GST component
      const gstAmount = (amount * rate) / (100 + rate);
      const originalAmount = amount - gstAmount;
      
      const cgst = gstAmount / 2;
      const sgst = gstAmount / 2;
      
      result = {
        originalAmount,
        gstRate: rate,
        gstAmount,
        cgst,
        sgst,
        igst: gstAmount,
        totalAmount: amount,
        calculationType: 'inclusive'
      };
    }
    
    setResult(result);
  };

  const resetForm = () => {
    setFormData({
      amount: '',
      gstRate: '18',
      calculationType: 'exclusive'
    });
    setResult(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Receipt className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">GST Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate Goods and Services Tax (GST) for your transactions with CGST, SGST, and IGST breakdowns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">GST Calculation Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (₹)
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Rate
                </label>
                <select
                  value={formData.gstRate}
                  onChange={(e) => setFormData({...formData, gstRate: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {gstRates.map((rate) => (
                    <option key={rate.value} value={rate.value}>
                      {rate.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Calculation Type
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="exclusive"
                      checked={formData.calculationType === 'exclusive'}
                      onChange={(e) => setFormData({...formData, calculationType: e.target.value})}
                      className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-700">Exclusive (Add GST to amount)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="inclusive"
                      checked={formData.calculationType === 'inclusive'}
                      onChange={(e) => setFormData({...formData, calculationType: e.target.value})}
                      className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-700">Inclusive (Extract GST from amount)</span>
                  </label>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateGST}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate GST
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">GST Calculation Results</h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800 font-semibold">
                        {result.calculationType === 'exclusive' ? 'Amount (Before GST)' : 'Amount (After GST)'}
                      </span>
                      <span className="font-bold text-blue-800 text-xl">₹{result.originalAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">GST Breakdown @ {result.gstRate}%</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total GST Amount</span>
                        <span className="font-semibold">₹{result.gstAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-900 mb-3">Intra-State Transaction (CGST + SGST)</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-yellow-700">CGST ({result.gstRate/2}%)</span>
                        <span className="font-semibold">₹{result.cgst.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-700">SGST ({result.gstRate/2}%)</span>
                        <span className="font-semibold">₹{result.sgst.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-3">Inter-State Transaction (IGST)</h3>
                    <div className="flex justify-between">
                      <span className="text-purple-700">IGST ({result.gstRate}%)</span>
                      <span className="font-semibold">₹{result.igst.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-green-800 font-semibold">
                        {result.calculationType === 'exclusive' ? 'Total Amount (Including GST)' : 'Original Amount (Before GST)'}
                      </span>
                      <span className="font-bold text-green-800 text-xl">₹{result.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download GST Calculation
                </button>
              </div>
            )}

            {/* GST Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-green-600" />
                GST Information
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">GST Structure</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li><strong>CGST:</strong> Central Goods and Services Tax</li>
                    <li><strong>SGST:</strong> State Goods and Services Tax</li>
                    <li><strong>IGST:</strong> Integrated Goods and Services Tax</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">When to Use</h4>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li><strong>CGST + SGST:</strong> For transactions within the same state</li>
                    <li><strong>IGST:</strong> For inter-state transactions</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">GST Rates</h4>
                  <ul className="list-disc list-inside text-sm text-green-800 space-y-1">
                    <li><strong>0%:</strong> Essential items (milk, bread, etc.)</li>
                    <li><strong>5%:</strong> Basic necessities (sugar, tea, etc.)</li>
                    <li><strong>12%:</strong> Standard items (computers, etc.)</li>
                    <li><strong>18%:</strong> Most goods and services</li>
                    <li><strong>28%:</strong> Luxury items (cars, AC, etc.)</li>
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

export default GSTCalculator;