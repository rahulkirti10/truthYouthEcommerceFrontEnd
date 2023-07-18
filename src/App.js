import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./Components/Header/AppHeader";
import HomePage from "./Components/Home/HomePage";
import AppFooter from "./Components/AppFooter";
import ProductPage from "./Components/Products/ProductPage";
import Otp from "./Components/Signup/Otp";
import SignUp from "./Components/Signup/SignUp";
import LogIn from "./Components/Signup/LogIn";
import ProductDetails from "./Components/Products/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppHeader />
                <HomePage />
                <AppFooter />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <AppHeader />
                <ProductPage />
                <AppFooter />
              </>
            }
          />
          <Route
            path="/productdet"
            element={
              <>
                <AppHeader />
                <ProductDetails />
                <AppFooter />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <LogIn />
              </>
            }
          />
          <Route
            path="/verify"
            element={
              <>
                <Otp />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
