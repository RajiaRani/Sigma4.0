import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import MainPage from "../src/pages/MAINPAGE/MainPage.jsx";
import Country from "./pages/COUNTRY/Country.jsx";
import CountryDetails from "./pages/COUNTRY/CountryDetails.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Universities from "./pages/UNIVERSITY/Universities.jsx";
import MSList from "./pages/UNIVERSITY/MSList.jsx";
import UniversityDetails from "./pages/UNIVERSITY/UniversityDetails.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import SignUp from "../src/UserPage/Passport/Signup.jsx";
import Login from "../src/UserPage/Passport/Login.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dashboard from "./pages/USER-DASHBOARD/Dashboard.jsx";

function AnimatedRoutes() {
  const location = useLocation(); // Ensures it’s within Router context

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300} classNames="page">
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/country" element={<Country />} />
          <Route path="/country/:id" element={<CountryDetails />} />
          <Route path="/universities/:id" element={<UniversityDetails />} />
          <Route path="/universities/MS-PG" element={<MSList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<Dashboard />} />
          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
