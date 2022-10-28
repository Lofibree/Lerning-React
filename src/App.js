import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import Profile from './components/MyPosts/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import DialogContainer from './components/Dialogs/Dialog/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import PostPageContainer from './components/MyPosts/Post/PostPageContainer';
import UserContainer from './components/Users/UserContainer/UserContainer';
import HeaderContainer from './components/Layout/Header/HeaderContainer';


const App = (props) => {

  return (
    <div className='body'>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <Footer />
        <div className="app-content">
          <Routes>
            <Route path='/profile'
              element={<Profile />}
            />
            <Route path='/profile/:id'
              element={<PostPageContainer />}
            />
            <Route path='/dialogs'
              element={<DialogsContainer />}
            />
            <Route path='/dialogs/:id'
              element={<DialogContainer />}
            />
            <Route path='/users'
              element={<UsersContainer />}
            />
            <Route path='/users/:id'
              element={<UserContainer />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}





export default App;
