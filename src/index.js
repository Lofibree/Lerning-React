import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
// debugger;
let rerenderEntireTree = (state) => {
    // debugger;
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                store={store}
                    // addPost={store.addPost.bind(store)}
                    // updateNewPostText={store.updateNewPostText.bind(store)}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}




rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// reportWebVitals();
