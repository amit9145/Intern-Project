import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount"
import Login from "./components/Login"
import Profile from "./components/Profile";
import BottomPagination from "./components/BottomPagination";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[375px] h-[667px] bg-white border-2">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<CreateAccount/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
          <BottomPagination/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
