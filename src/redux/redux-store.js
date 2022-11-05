import  {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navBarReducer from "./navBarReducer";
import usersReduser from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import appReduser from "./appReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReduser,
    navBar: navBarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;


export default store;