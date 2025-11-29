import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import UniWorkLanding from "./components/UniWorkLanding";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public landing page */}
        <Route path="/" element={<UniWorkLanding />} />

        {/* Logged-in homepage */}
        <Route path="/home" element={<HomeLoggedIn />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
