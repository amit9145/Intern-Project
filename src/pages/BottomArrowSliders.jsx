import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, House } from "lucide-react";

const BottomArrowSliders = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pages = ["/", "/login", "/signup", "/profile"];
    const totalPages = pages.length;
    const currentIndex = pages.indexOf(location.pathname);
    const currentPage = currentIndex + 1;

    const goPrev = () => {
        const prevIndex = currentIndex === 0 ? totalPages - 1 : currentIndex - 1;
        navigate(pages[prevIndex]);
    };

    const goNext = () => {
        const nextIndex = (currentIndex + 1) % totalPages;
        navigate(pages[nextIndex]);
    };

    const handleNavigateHome = () => {
        navigate("/");
    };

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#fafafa] h-[60px] flex items-center justify-center gap-4 text-sm z-50 border-t border-gray-200">
            <button 
                onClick={handleNavigateHome}
                className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100 active:scale-90"
            >
                <House className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors duration-200" />
            </button>

            <ChevronLeft
                onClick={goPrev}
                className="w-6 h-6 cursor-pointer text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 active:scale-95"
            />

            <span className="text-gray-500 font-medium">
                {currentPage} of {totalPages}
            </span>

            <ChevronRight
                onClick={goNext}
                className="w-6 h-6 cursor-pointer text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 active:scale-95"
            />
        </div>
    );
};

export default BottomArrowSliders;
