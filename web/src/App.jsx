import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import Home from './pages/Home';
import History from './pages/History';
import FamilyTree from './pages/FamilyTree';
import Foundation from './pages/Foundation';
import Membership from './pages/Membership';

function Layout() {
  useScrollToTop();
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/tree" element={<FamilyTree />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
