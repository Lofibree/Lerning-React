import './App.css';
import Header from './components/Layout/Header/Header';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import Profile from './components/MyPosts/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import DialogContainer from './components/Dialogs/Dialog/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (
    <div className='body'>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Footer />
        <div className="app-content">
          <Routes>
            <Route path='/profile'
              element={<Profile />}
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
            {/* <Route path='/users/:id'
              element={<UserProfile />}
            /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}





export default App;
