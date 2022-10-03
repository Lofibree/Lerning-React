import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/state';

import './index.css';
import { addPost, updateNewPostText } from './redux/state';




const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText} />
        </React.StrictMode>
    );
}




rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// reportWebVitals();
