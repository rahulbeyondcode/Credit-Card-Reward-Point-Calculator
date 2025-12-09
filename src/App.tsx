import { Navigate, Route, Routes } from "react-router";
import ChooseBestCard from "./features/choose-best-card";
import CardsSection from "./features/update-cards-list";

function App() {
  return (
    <div>
      <nav>
        <h1>Reward Point Calculator</h1>
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
