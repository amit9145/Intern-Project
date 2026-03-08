/**
 * PopX Mobile App - Main Application Component
 * 
 * This is the root component of the PopX Mobile App that handles:
 * - React Router setup for navigation between pages
 * - Mobile-centered layout (375px width)
 * - Bottom pagination integration
 * - Page routing for Home, Login, Signup, and Profile
 * 
 * @author PopX Development Team
 * @version 1.0.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BottomPagination from "./pages/BottomPagination";

function App() {
  return (
    <BrowserRouter basename="/Intern-Project">
      <div className="min-h-screen bg-[#fafafa]">
        <div className="flex items-center justify-center py-8 pb-[60px]">
          <div className="w-[375px] h-[812px] border border-[#e1e1e1] flex flex-col shadow-sm bg-white">
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<CreateAccount />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
        <BottomPagination />
      </div>
    </BrowserRouter>
  );
}

export default App;
