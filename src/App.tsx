import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/collections/:handle" element={<Products />} />
      </Routes>
      <SpeedInsights />
    </Router>
  );
}
