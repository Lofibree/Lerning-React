import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/MyPosts/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogItem from './components/Dialogs/DialogItem/DialogItem';
import Message from './components/Dialogs/Message/Message';
import Post from './components/MyPosts/Post/Post';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='body'>
        <div className="app-wrapper">
          <Header />
          <Navbar state={props.state.navBar}/>
          {/* <ScrollBg/> */}
          <div className="app-content">
            <Routes>
              <Route path='/profile'
                element={<Profile 
                  state={props.state.profilePage}/>}
              />
              <Route path='/dialogs'
                element={<Dialogs 
                  state={props.state.messagePage} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
