import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import EntrepreneursPage from './pages/Entrepreneurs';
import CorporatesPage from './pages/Corporates';
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
          <Route path="/entrepreneurs" element={<EntrepreneursPage />} />
          <Route path="/corporates" element={<CorporatesPage />} />
          <Route path="/advisory" element={<AdvisoryPage />} />
          <Route path="/co-working" element={<CoWorkingPage />} />
          <Route path="/bpo" element={<BpoPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
