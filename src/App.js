import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/MyPosts/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ScrollBg from './components/ScrollBg/ScrollBg.jsx';



const App = () => {
  return (
    <BrowserRouter>
    <div className='body'>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <ScrollBg/> */}
        <div className="app-content">
          <Routes>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/dialogs' element={<Dialogs />}/>
          </Routes>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
