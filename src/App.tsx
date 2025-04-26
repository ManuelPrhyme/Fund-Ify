import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Additional routes would be added here for other pages */}
        {/* <Route path="/explore" element={<ExplorePage />} /> */}
        {/* <Route path="/campaign/:id" element={<CampaignDetailsPage />} /> */}
        {/* <Route path="/create-campaign" element={<CreateCampaignPage />} /> */}
        {/* <Route path="/how-it-works" element={<HowItWorksPage />} /> */}
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;