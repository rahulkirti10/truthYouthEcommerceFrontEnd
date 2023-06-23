import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import SignLogPage from './Components/Signup/SignLogPage';
import AppHeader from './Components/AppHeader';
import HomePage from './Components/Home/HomePage';
import AppFooter from './Components/AppFooter';
import ProductPage from './Components/Products/ProductPage';

function App() {
  return (
    <>
    <Router>
    <AppHeader /> 
    <Routes>
      <Route path='/' exec element={<HomePage />}></Route>
      <Route path='/Products' exec element={<ProductPage />}></Route>
      <Route path='/Registeration' exec element={<SignLogPage />}></Route>
    </Routes>
    <AppFooter />
    </Router>
    </>
  );
}

export default App;
