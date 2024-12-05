import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import MainPage from "../src/pages/MAINPAGE/MainPage.jsx";
import Country from "./pages/COUNTRY/Country.jsx";
import CountryDetails from "./pages/COUNTRY/CountryDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Universities from "./pages/UNIVERSITY/Universities.jsx";
import MSList from "./pages/UNIVERSITY/MSList.jsx";
import UniversityDetails from "./pages/UNIVERSITY/UniversityDetails.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import LoadingSpinner from "./components/LoadingSpiner/LoadingSpinner.jsx";
import SignUp from "../src/UserPage/Passport/Signup.jsx";
import Login from "../src/UserPage/Passport/Login.jsx";
import EmailVerification from "./UserPage/Mailtrap/EmailVerification.jsx";
import ResetPasswordPage from "./UserPage/Mailtrap/ResetPasswordPage.jsx";
import ForgotPasswordPage from "./UserPage/Mailtrap/ForgotPasswordPage.jsx";
import DashboardPage from "./UserPage/Mailtrap/DashboardPage.jsx";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAuthStore } from "./store/authStore.jsx";
import { useEffect } from "react";


// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  if (!user.isVerified) {
    return <Navigate to='/verify-email' replace />;
  }

  return children;
};
// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to='/' replace />;
  }

  return children;
};


function App() {

  // const { isCheckingAuth, checkAuth } = useAuthStore();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);
  // if (isCheckingAuth) return <LoadingSpinner />;


  return (
    <BrowserRouter>
      <TransitionGroup>
        <CSSTransition timeout={100} classNames="page" key={window.location.pathname}>
          <Routes>
            <Route path="/" element={<MainPage />}  />
            <Route path="/country" element={ <Country /> } />
            <Route path="/country/:id" element={<CountryDetails />} />
            <Route path="/universities/:id" element={<UniversityDetails />} />
            <Route path="/universities/MS-PG" element={<MSList />} />


            <Route path="/auth/signup" element={
              <RedirectAuthenticatedUser>
                <SignUp />
              </RedirectAuthenticatedUser>
            } />

            <Route path="/auth/login" element={<RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>} />

            <Route
					path='/auth/forgot-password'
					element={
						<RedirectAuthenticatedUser>
							<ForgotPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

				<Route
					path='/auth/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

            <Route path="/auth/verify-email" element={<EmailVerification />} />

            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  );
}

export default App;
