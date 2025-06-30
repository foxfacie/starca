import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import ForensicAudit from './pages/services/ForensicAudit';
import InsolvencyBankruptcy from './pages/services/InsolvencyBankruptcy';
import CorporateRestructuring from './pages/services/CorporateRestructuring';
import CompanyFormation from './pages/services/CompanyFormation';
import LLPFormation from './pages/services/LLPFormation';
import OPCRegistration from './pages/services/OPCRegistration';
import PartnershipRegistration from './pages/services/PartnershipRegistration';
import BusinessValuation from './pages/services/BusinessValuation';
import AuditAssurance from './pages/services/AuditAssurance';
import RBIFEMACompliance from './pages/services/RBIFEMACompliance';
import SecretarialServices from './pages/services/SecretarialServices';
import GSTAdvisory from './pages/services/GSTAdvisory';
import IncomeTaxAdvisory from './pages/services/IncomeTaxAdvisory';
import InternationalTax from './pages/services/InternationalTax';
import CustomAdvisory from './pages/services/CustomAdvisory';
import LegalSupport from './pages/services/LegalSupport';
import ComplianceManagement from './pages/services/ComplianceManagement';
import Tools from './pages/Tools';
import IncomeTaxCalculator from './pages/tools/IncomeTaxCalculator';
import HRACalculator from './pages/tools/HRACalculator';
import EMICalculator from './pages/tools/EMICalculator';
import GSTCalculator from './pages/tools/GSTCalculator';
import SIPCalculator from './pages/tools/SIPCalculator';
import NSCCalculator from './pages/tools/NSCCalculator';
import HomeLoanCalculator from './pages/tools/HomeLoanCalculator';
import AutoLoanCalculator from './pages/tools/AutoLoanCalculator';
import Resources from './pages/Resources';
import Forms from './pages/resources/Forms';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/forensic-audit" element={<ForensicAudit />} />
          <Route path="/services/insolvency-bankruptcy" element={<InsolvencyBankruptcy />} />
          <Route path="/services/corporate-restructuring" element={<CorporateRestructuring />} />
          <Route path="/services/company-formation" element={<CompanyFormation />} />
          <Route path="/services/llp-formation" element={<LLPFormation />} />
          <Route path="/services/opc-registration" element={<OPCRegistration />} />
          <Route path="/services/partnership-registration" element={<PartnershipRegistration />} />
          <Route path="/services/business-valuation" element={<BusinessValuation />} />
          <Route path="/services/audit-assurance" element={<AuditAssurance />} />
          <Route path="/services/rbi-fema-compliance" element={<RBIFEMACompliance />} />
          <Route path="/services/secretarial-services" element={<SecretarialServices />} />
          <Route path="/services/gst-advisory" element={<GSTAdvisory />} />
          <Route path="/services/income-tax-advisory" element={<IncomeTaxAdvisory />} />
          <Route path="/services/international-tax" element={<InternationalTax />} />
          <Route path="/services/custom-advisory" element={<CustomAdvisory />} />
          <Route path="/services/legal-support" element={<LegalSupport />} />
          <Route path="/services/compliance-management" element={<ComplianceManagement />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/income-tax-calculator" element={<IncomeTaxCalculator />} />
          <Route path="/tools/hra-calculator" element={<HRACalculator />} />
          <Route path="/tools/emi-calculator" element={<EMICalculator />} />
          <Route path="/tools/gst-calculator" element={<GSTCalculator />} />
          <Route path="/tools/sip-calculator" element={<SIPCalculator />} />
          <Route path="/tools/nsc-calculator" element={<NSCCalculator />} />
          <Route path="/tools/home-loan-calculator" element={<HomeLoanCalculator />} />
          <Route path="/tools/auto-loan-calculator" element={<AutoLoanCalculator />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/forms" element={<Forms />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;