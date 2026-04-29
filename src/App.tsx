import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import CorporatesPage from './pages/Corporates';
import StartupHubPage from './pages/StartupHub';
import MentorshipPage from './pages/Mentorship';
import AdvisoryPage from './pages/Advisory';
import CoWorkingPage from './pages/CoWorking';
import BpoPage from './pages/Bpo';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/corporates" element={<CorporatesPage />} />
          <Route path="/advisory" element={<AdvisoryPage />} />
          <Route path="/co-working" element={<CoWorkingPage />} />
          <Route path="/startup-hub" element={<StartupHubPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/bpo" element={<BpoPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
