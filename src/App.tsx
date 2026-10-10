import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { InitialLoader } from './components/common/InitialLoader';
import { PlaceholderNotice } from './components/common/PlaceholderNotice';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { EnquiryModal } from './components/common/EnquiryModal';
import { ToastProvider } from './context/ToastContext';
import { EnquiryModalProvider } from './context/EnquiryModalContext';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { RoomsPage } from './pages/RoomsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { RulesPage } from './pages/RulesPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <ToastProvider>
      <EnquiryModalProvider>
        <Router>
          {/* Branded fast initial splash loading screen */}
          <InitialLoader minDurationMs={650} />

          <ScrollToTop />

          {/* Collapsible Owner Checklist Banner */}
          <PlaceholderNotice />

          {/* Sticky Header Navbar */}
          <Navbar />

          {/* Main Route Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Shared Modal & Floating Elements */}
          <EnquiryModal />
          <FloatingWhatsApp />

          {/* Site-wide Footer */}
          <Footer />
        </Router>
      </EnquiryModalProvider>
    </ToastProvider>
  );
}

export default App;
