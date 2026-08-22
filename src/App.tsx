import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './page/Home';
import Footer from './components/Footer';
import AboutPage from './page/AboutPage';
import ScrollToTop from './components/ScrolltoTop';
import MinistryPage from './page/MinistryPage';
import SermonsPage from './page/SermonsPage';
import ContactPage from './page/ContactPage';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onDone={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ministry" element={<MinistryPage />} />
        <Route path="/sermon" element={<SermonsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;