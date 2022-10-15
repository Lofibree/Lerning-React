import  {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navBarReducer from "./navBarReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    navBar: navBarReducer
});

let store = createStore(reducers);

export default store;