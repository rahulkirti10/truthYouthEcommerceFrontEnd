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
    {showHeaderFooter(window.location.pathname) && <AppHeader />}
    <Routes>
      <Route path='/' exec element={<HomePage />}></Route>
      <Route path='/Products' exec element={<ProductPage />}></Route>
      <Route path='/Registeration' exec element={<SignLogPage />}></Route>
    </Routes>
    {showHeaderFooter(window.location.pathname) && <AppFooter />}
    </Router>
    </>
  );
}

export default App;
