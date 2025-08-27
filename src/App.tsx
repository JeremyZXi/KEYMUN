// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Committees from "./pages/Events.tsx";
import Resources from './pages/Resources';
import About from "./pages/About";
import CommitteeDetail from './pages/CommitteeDetail';

function App() {
  return (
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/committees/:id" element={<CommitteeDetail />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
