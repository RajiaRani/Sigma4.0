import "./styles/global.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import MainPage from "../src/pages/MAINPAGE/MainPage.jsx";
import Country from "./pages/COUNTRY/Country.jsx";
import CountryDetails from "./pages/COUNTRY/CountryDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Universities from "./pages/UNIVERSITY/Universities.jsx";
import MSList from "./pages/UNIVERSITY/MSList.jsx";
import UniversityDetails from "./pages/UNIVERSITY/UniversityDetails.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <BrowserRouter>
      <TransitionGroup>
        <CSSTransition timeout={100} classNames="page" key={window.location.pathname}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/country" element={<Country />} />
            <Route path="/country/:id" element={<CountryDetails />} />
            <Route path="/universities/:id" element={<UniversityDetails />} />
            <Route path="/universities/MS-PG" element={<MSList />} />
            
            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  );
}

export default App;
