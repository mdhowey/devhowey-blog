import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import Register from './pages/register/Register';
import Home from "./pages/home/Home";
import ShowPost from './pages/showpost/ShowPost';
import Newblog from './pages/newblog/Newblog';
import Login from './pages/login/Login';
import ProfileSettings from './pages/profile_settings/ProfileSettings';
import { Fragment } from 'react';

function App() {
  const user = true;
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<Home />}/>
          <Route path='/register' element={user ? <Home /> : <Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/newblog' element={<Newblog />}/>
          <Route path='/settings' element={<ProfileSettings />}/>
          <Route path='/post/:postId' element={<ShowPost />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
