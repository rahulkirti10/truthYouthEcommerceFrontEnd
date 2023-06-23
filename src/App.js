import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import SignLogPage from './Components/Signup/SignLogPage';
import AppHeader from './Components/AppHeader';
import HomePage from './Components/Home/HomePage';
import AppFooter from './Components/AppFooter';
import ProductPage from './Components/Products/ProductPage';

function App() {

  const showHeaderFooter = (pathname) => {
    const excludedPaths = ['/Registeration']; // Array of paths where you want to exclude the header and footer

    return !excludedPaths.includes(pathname);
  };


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
          path="/Products/*"
          element={
            <>
            <AppHeader />
              <ProductPage />
              <AppFooter />
            </>
          }
        />
      <Route
          path="/Registeration"
          element={
            <>
              <SignLogPage />
            </>
          }
        />
    </Routes>
    </Router>
    </>
  );
}

export default App;
