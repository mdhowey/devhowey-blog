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

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<Home />}/>
          <Route path='/register' element={user ? <Home /> : <Register />}/>
          <Route path='/login' element={user ? <Home /> : <Login />}/>
          <Route path='/newblog' element={user ? <Newblog /> : <Home />}/>
          <Route path='/settings' element={user ? <ProfileSettings /> : <Register />}/>
          <Route path='/post/:postId' element={<ShowPost />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
