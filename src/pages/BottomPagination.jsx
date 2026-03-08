/**
 * PopX Mobile App - Bottom Navigation Component
 * 
 * This is the navigation bar component of PopX Mobile App that provides:
 * - Fixed bottom positioning for mobile app-like experience
 * - Previous/Next navigation buttons with smooth transitions
 * - Home button for quick navigation to welcome page
 * - Page indicator showing current position (e.g., "1 of 4")
 * - Lucide React icons for consistent visual design
 * - Responsive hover states and interactive feedback
 * 
 * @author PopX Development Team
 * @version 1.0.0
 */

import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, House } from "lucide-react";

const BottomPagination = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = ["/Intern-Project/", "/Intern-Project/login", "/Intern-Project/signup", "/Intern-Project/profile"];
  const totalPages = pages.length;
  const currentIndex = pages.indexOf(location.pathname);

  const goPrev = () => {
    const prevIndex = currentIndex === 0 ? totalPages - 1 : currentIndex - 1;
    navigate(pages[prevIndex]);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % totalPages;
    navigate(pages[nextIndex]);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#fafafa] h-[60px] flex items-center justify-center gap-4 text-sm z-50">
      <button onClick={() => navigate("/Intern-Project/")}>
        <House className="w-5 h-5 text-gray-500 hover:text-gray-700" />
      </button>

      <ChevronLeft
        onClick={goPrev}
        className="cursor-pointer text-gray-400 hover:text-gray-600"
      />

      <ChevronRight
        onClick={goNext}
        className="cursor-pointer text-gray-400 hover:text-gray-600"
      />
    </div>
  );
};

export default BottomPagination;
