import './App.css';
import Header from './components/Layout/Header/Header';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import Profile from './components/MyPosts/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import DialogContainer from './components/Dialogs/Dialog/DialogContainer';

const App = (props) => {

  return (
      <div className='body'>
        <div className="app-wrapper">
          <Header />
          <Navbar state={props.state.navBar} />
          <Footer />
          <div className="app-content">
            <Routes>
              <Route path='/profile'
                element={<Profile
                  store={props.store}
                />}
              />
              <Route path='/dialogs'
                element={<DialogsContainer
                store={props.store}
                />}
              />
              <Route path='/dialogs/:id'
                element={<DialogContainer 
                store={props.store}
                />}
              />
            </Routes>
          </div>
        </div>
      </div>
  );
}





export default App;
