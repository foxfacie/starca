import React, { useState } from 'react';
import { FileText, Download, Search, Filter, Calendar, ExternalLink } from 'lucide-react';

const Forms: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const formCategories = [
    { value: 'all', label: 'All Forms' },
    { value: 'income-tax', label: 'Income Tax' },
    { value: 'gst', label: 'GST' },
    { value: 'company', label: 'Company Law' },
    { value: 'llp', label: 'LLP' },
    { value: 'fema', label: 'FEMA' },
    { value: 'rbi', label: 'RBI' }
  ];

  const forms = [
    {
      name: "ITR-1 (Sahaj)",
      description: "For individuals having income from salary, one house property and other sources",
      category: "income-tax",
      lastUpdated: "2024-03-15",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "ITR-2",
      description: "For individuals and HUFs not having income from business or profession",
      category: "income-tax",
      lastUpdated: "2024-03-15",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "ITR-3",
      description: "For individuals and HUFs having income from business or profession",
      category: "income-tax",
      lastUpdated: "2024-03-15",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "ITR-4 (Sugam)",
      description: "For individuals, HUFs and firms (other than LLP) with presumptive income",
      category: "income-tax",
      lastUpdated: "2024-03-15",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "ITR-5",
      description: "For persons other than individual, HUF, company and person filing ITR-7",
      category: "income-tax",
      lastUpdated: "2024-03-15",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "ITR-6",
      description: "For companies other than companies claiming exemption under section 11",
      category: "income-tax",
      lastUpdated: "2024-03-15",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "ITR-7",
      description: "For persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D)",
      category: "income-tax",
      lastUpdated: "2024-03-15",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "GSTR-1",
      description: "Details of outward supplies of taxable goods and/or services effected",
      category: "gst",
      lastUpdated: "2024-03-10",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "GSTR-3B",
      description: "Monthly summary return to be filed by normal taxpayers",
      category: "gst",
      lastUpdated: "2024-03-10",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "GSTR-4",
      description: "Return for composition taxpayers",
      category: "gst",
      lastUpdated: "2024-03-10",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "GSTR-9",
      description: "Annual return for normal taxpayers",
      category: "gst",
      lastUpdated: "2024-03-10",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form INC-1",
      description: "Application for reservation of name",
      category: "company",
      lastUpdated: "2024-03-08",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form INC-2",
      description: "Application for incorporation of company",
      category: "company",
      lastUpdated: "2024-03-08",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form INC-7",
      description: "Application for incorporation of company",
      category: "company",
      lastUpdated: "2024-03-08",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form AOC-4",
      description: "Annual filing of financial statements and other documents",
      category: "company",
      lastUpdated: "2024-03-08",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form MGT-7",
      description: "Annual return of a company",
      category: "company",
      lastUpdated: "2024-03-08",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form FiLLiP",
      description: "Application for incorporation of Limited Liability Partnership",
      category: "llp",
      lastUpdated: "2024-03-05",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form 8",
      description: "Statement of account and solvency for LLP",
      category: "llp",
      lastUpdated: "2024-03-05",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form 11",
      description: "Annual return of LLP",
      category: "llp",
      lastUpdated: "2024-03-05",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form FC-GPR",
      description: "Application for government approval under FEMA",
      category: "fema",
      lastUpdated: "2024-03-03",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form FC-TRS",
      description: "Application for transfer of shares/convertible debentures",
      category: "fema",
      lastUpdated: "2024-03-03",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form ODI",
      description: "Overseas direct investment reporting",
      category: "rbi",
      lastUpdated: "2024-03-01",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Form ECB",
      description: "External commercial borrowing reporting",
      category: "rbi",
      lastUpdated: "2024-03-01",
      downloadUrl: "#",
      viewUrl: "#"
    }
  ];

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tax Forms & Returns</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download and view essential tax forms, returns, and compliance documents. 
            All forms are updated with the latest versions from respective departments.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search forms by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
              >
                {formCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredForms.length} of {forms.length} forms
            {selectedCategory !== 'all' && ` in ${formCategories.find(c => c.value === selectedCategory)?.label}`}
          </p>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredForms.map((form, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{form.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{form.description}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  form.category === 'income-tax' ? 'bg-blue-100 text-blue-800' :
                  form.category === 'gst' ? 'bg-green-100 text-green-800' :
                  form.category === 'company' ? 'bg-purple-100 text-purple-800' :
                  form.category === 'llp' ? 'bg-yellow-100 text-yellow-800' :
                  form.category === 'fema' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {formCategories.find(c => c.value === form.category)?.label}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Updated: {form.lastUpdated}</span>
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={form.viewUrl}
                  className="flex-1 bg-primary-50 text-primary-600 py-2 px-4 rounded-lg font-medium hover:bg-primary-100 transition-colors flex items-center justify-center text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View
                </a>
                <a
                  href={form.downloadUrl}
                  className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredForms.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No forms found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Important Notes */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Form Validity</h3>
              <p className="text-sm text-blue-800">
                Always ensure you're using the latest version of forms. Check the last updated date 
                and verify with official department websites before filing.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Filing Deadlines</h3>
              <p className="text-sm text-yellow-800">
                Be aware of filing deadlines for different forms. Late filing may attract penalties 
                and interest charges. Check our compliance calendar for due dates.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Professional Help</h3>
              <p className="text-sm text-green-800">
                For complex filings or if you're unsure about form requirements, 
                consult with our expert team for personalized guidance.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">Digital Signatures</h3>
              <p className="text-sm text-red-800">
                Many forms require digital signatures for online filing. Ensure you have 
                valid DSC before attempting to file returns electronically.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Form Filing?</h2>
          <p className="text-xl mb-6 opacity-90">
            Our expert team can help you with accurate form preparation and timely filing. 
            Avoid penalties and ensure compliance with professional assistance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Professional Help
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forms;