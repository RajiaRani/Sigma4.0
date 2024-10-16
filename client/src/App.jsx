import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import MainPage from "./pages/MAINPAGE/MainPage.js";
import Country from "./pages/COUNTRY/Country.jsx";
import CountryDetails from "./pages/COUNTRY/CountryDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Universities from "./pages/UNIVERSITY/Universities.js";
import MSList from "./pages/UNIVERSITY/MSList.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
function App() {
  return (
    <BrowserRouter>

      <TransitionGroup>
        <CSSTransition timeout={100} classNames="page" key={window.location.pathname}>
          <Routes>
            <Route path="/abroadhub" element={<MainPage />} />
            <Route path="/country" element={<Country />} />
            <Route path="/api/country/:id" element={<CountryDetails />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/universities/MS-PG" element={<MSList />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

    </BrowserRouter>
  )
}

export default App
