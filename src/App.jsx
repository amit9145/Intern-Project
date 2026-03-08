import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount"
import Login from "./pages/Login"
import Profile from "./pages/Profile";
import BottomArrowSliders from "./pages/BottomArrowSliders";


function App() {
  return (
    <BrowserRouter basename="/Intern-Project">
      <div className="min-h-screen flex items-center justify-center pb-[60px] bg-[#fafafa]">
        
        <div className="relative mt-8 w-[375px] h-[890px] border border-[#e1e1e1] flex flex-col shadow-sm">
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
      <BottomArrowSliders />
    </BrowserRouter>
  );
}

export default App;
