import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import UniWorkLanding from "./components/UniWorkLanding";
import Signup from "./pages/Signup";
import AddJob from "./pages/AddJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<UniWorkLanding />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main user dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional role dashboards (fixes warnings) */}
        <Route path="/student-dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />

        {/* Other pages */}
        <Route path="/home" element={<HomeLoggedIn />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addjob" element={<AddJob />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
