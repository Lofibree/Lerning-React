import { headerAPI, usersAPI } from "../components/api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_MY_PROFILE = 'SET_MY_PROFILE';


let initialState = {
    id: null, 
    email: null,
    login: null,
    isAuth: false,
    lookingForAJob: true,
    photos: {photos: {small: null, large: null}}
}



const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case SET_MY_PROFILE: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}




export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} })
export const setMyProfileAC  = (lookingForAJob, photos) => ({ type: SET_MY_PROFILE, data: {lookingForAJob, photos} });


export const getIsAuthThunkCreator = () => {
    return (dispatch) => {
        headerAPI.setIsAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data; 
                dispatch(setAuthUserData(id, email, login));
                usersAPI.setUserProfile(id).then(data => {
                    // debugger;
                    let {lookingForAJob, photos} = data;
                    dispatch(setMyProfileAC(lookingForAJob, photos));

                })
            }
        })
    } 
} 


export default authReduser; 