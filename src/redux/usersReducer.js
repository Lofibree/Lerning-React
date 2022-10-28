

const SET_FOLLOW = 'SET_FOLLOW';
const SET_UNFOLLOW = 'SET_UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER = 'SET_USER';
const SET_USER_IMG_CARD = 'SET_USER_IMG_CARD';
const TOGGLE_IS_FETCHING_USER = 'TOGGLE_IS_FETCHING_USER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    usersBank: [], 
    user: {photos: {small: null, large: null}},
    userStatus: 'someStatus',
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
    isFetchingUser: false,
    followingInProgress: []
}



const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOW: {
            let stateCopy = {
                ...state,
                usersBank: [...state.usersBank]
            }
            let neededUserIndex = stateCopy.usersBank.findIndex(user => user.id === action.id)
            stateCopy.usersBank[neededUserIndex] = {...state.usersBank[neededUserIndex]}
            stateCopy.usersBank[neededUserIndex].followed = action.isFollowedResault
            return stateCopy
        }
        case SET_UNFOLLOW: {
            let stateCopy = {
                ...state,
                usersBank: [...state.usersBank]
            }
            let neededUserIndex = stateCopy.usersBank.findIndex(user => user.id === action.id)
            stateCopy.usersBank[neededUserIndex] = {...state.usersBank[neededUserIndex]}
            stateCopy.usersBank[neededUserIndex].followed = action.isUnFollowedResault
            return stateCopy
        }
        case SET_USERS: {
            return { 
                ...state, 
                usersBank: action.newUsers
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            // debugger;
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_USER: {
            // debugger;
            return {
                ...state,
                user: action.user
            }
        }
        case SET_USER_IMG_CARD: {
            return {
                ...state,
                userImgCard: action.userImgCard
            }
        }
        case TOGGLE_IS_FETCHING_USER: {
            return {
                ...state,
                isFetchingUser: action.isFetchingUser
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            // debugger;
            return {
                ...state,
                followingInProgress: action.followingInProgress 
                ? [...state.followingInProgress, action.id]
                : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }
}




export const setFollowAC = (isFollowedResault, id) => ({ type: SET_FOLLOW, isFollowedResault, id });
export const setUnFollowAC = (isUnFollowedResault, id) => ({ type: SET_UNFOLLOW, isUnFollowedResault, id });
export const setUsersAC = (newUsers) => ({ type: SET_USERS, newUsers: newUsers });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const setIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserAC = (user) => ({ type: SET_USER, user });
export const setIsFetchingUserAC = (isFetchingUser) => ({ type: TOGGLE_IS_FETCHING_USER, isFetchingUser });
export const toggleFollowingProgressAC = (followingInProgress, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, id });


export default usersReduser; 