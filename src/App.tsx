import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ResultsPage from "./components/ResultsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "FickleFlight - Your Travel Companion";
        metaDescription = "Find and book flights with ease";
        break;
      case "/results":
        title = "Flight Results - FickleFlight";
        metaDescription = "Browse available flights";
        break;
      case "/dashboard":
        title = "Dashboard - FickleFlight";
        metaDescription = "Manage your bookings and profile";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
