import { Routes,Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import LoginForm from './pages/loginPage/loginPage';
import { withCookies } from 'react-cookie';
function App() {
  return (

    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
    </Routes>
  );
}

export default withCookies(App);
