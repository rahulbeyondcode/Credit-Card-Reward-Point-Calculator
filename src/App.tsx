import { Navigate, Route, Routes, Link, useLocation } from "react-router";

import ChooseBestCard from "features/choose-best-card";
import CardsSection from "features/update-cards-list";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <nav className="main-nav">
        <div className="nav-content">
          <h1 className="nav-logo">💳 Reward Point Calculator</h1>
          <div className="nav-links">
            <Link
              to="/home"
              className={`nav-link ${
                location.pathname === "/home" ? "active" : ""
              }`}
            >
              Calculate Rewards
            </Link>
            <Link
              to="/cards"
              className={`nav-link ${
                location.pathname === "/cards" ? "active" : ""
              }`}
            >
              My Cards
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<ChooseBestCard />} />
        <Route path="/cards" element={<CardsSection />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
