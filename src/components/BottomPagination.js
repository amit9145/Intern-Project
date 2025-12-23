import { useNavigate, useLocation } from "react-router-dom";
import home from "../assets/home.png";

const BottomPagination = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pages = ["/", "/login", "/signup", "/profile"];
    const totalPages = pages.length;

    const currentIndex = pages.indexOf(location.pathname);
    const currentPage = currentIndex + 1;

    const goPrev = () => {
        if (currentIndex > 0) {
            navigate(pages[currentIndex - 1]);
        }
    };

    const goNext = () => {
        if (currentIndex < totalPages - 1) {
            navigate(pages[currentIndex + 1]);
        }
    };

    return (
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 text-sm text-gray-600">

            <button onClick={() => navigate("/")}>
                <img className="w-5 h-5" src={home} alt="home" />
            </button>

            <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                className="disabled:opacity-40 text-bold text-xl text-gray-800"
            >
                &lt;
            </button>

            <span>{currentPage} of {totalPages}</span>

            <button
                onClick={goNext}
                disabled={currentIndex === totalPages - 1}
                className="disabled:opacity-40 text-bold text-xl text-gray-800"
            >
                &gt;
            </button>
        </div>
    );
};

export default BottomPagination;
