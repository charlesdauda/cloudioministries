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

const NotFound = () => (
  <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
    <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#b27a48]">404</p>
    <h1 className="mt-4 font-display text-5xl font-bold text-[#1c130d]">Page not found</h1>
    <p className="mt-4 max-w-md text-[#80766f]">The page you are looking for does not exist.</p>
    <a href="/" className="mt-8 bg-[#cc9c60] px-7 py-3 font-sans text-sm font-bold uppercase tracking-[0.12em] text-[#1c130d]">Return home</a>
  </main>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onDone={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ministry" element={<MinistryPage />} />
          <Route path="/sermon" element={<SermonsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;