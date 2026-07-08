import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectsDetail'));
const CorporatesPage = lazy(() => import('./pages/Corporates'));
const StartupHubPage = lazy(() => import('./pages/StartupHub'));
const MentorshipPage = lazy(() => import('./pages/Mentorship'));
const AdvisoryPage = lazy(() => import('./pages/Advisory'));
const CoWorkingPage = lazy(() => import('./pages/CoWorking'));
const BpoPage = lazy(() => import('./pages/Bpo'));
const AcademyPage = lazy(() => import('./pages/Academy'));
const ContactPage = lazy(() => import('./pages/ContactUs'));
const ApplyPage = lazy(() => import('./pages/Apply'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="h-10 w-10 rounded-full border-4 border-[#3d7118]/20 border-t-[#3d7118] animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/corporates" element={<CorporatesPage />} />
              <Route path="/advisory" element={<AdvisoryPage />} />
              <Route path="/co-working" element={<CoWorkingPage />} />
              <Route path="/startup-hub" element={<StartupHubPage />} />
              <Route path="/mentorship" element={<MentorshipPage />} />
              <Route path="/bpo" element={<BpoPage />} />
              <Route path="/academy" element={<AcademyPage />} />
              <Route path="/apply" element={<ApplyPage />} />
              <Route path="/contactUs" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
