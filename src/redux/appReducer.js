import { getIsAuthThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
}



const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}




export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS})



export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getIsAuthThunkCreator())
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })
    } 
}


export default appReduser; 