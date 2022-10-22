

const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_IMG = 'SET-USERS-IMG';
const COMBINE_USER_AND_IMG = 'COMBINE-USER-AND-IMG';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';


let initialState = {
    usersBank: [], 
    usersImgBank: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 3
}



const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW: {
            let stateCopy = {
                ...state,
                usersBank: [...state.usersBank]
            }
            let u = stateCopy.usersBank.find(item => item.id === action.id);
            let neededIndex = stateCopy.usersBank.indexOf(u);
            stateCopy.usersBank[neededIndex] = {...state.usersBank[neededIndex]};
            let a = stateCopy.usersBank[neededIndex];
            a.followed
                ? a.followed = false
                : a.followed = true

            return stateCopy;
        }
        case SET_USERS:
            return { 
                ...state, 
                usersBank: action.newUsers
            }
        case SET_USERS_IMG: {
            let stateCopy = {
                ...state,
                usersBank: [...state.usersBank],
                usersImgBank: [...state.usersImgBank]
            }
            let newArr = action.usersImg
            let newArr2 = newArr.map(function (item) {
                return (item.url)
            })
            stateCopy.usersImgBank = [...newArr2];
            return stateCopy;
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case COMBINE_USER_AND_IMG: {
            // debugger;
            let stateCopy = {
                ...state,
                usersBank: [...state.usersBank],
                usersImgBank: [...state.usersImgBank]
            }
            for (var i = 0; i < stateCopy.usersBank.length; i++) {
                if (stateCopy.usersBank[i].photos.small === null) {
                    stateCopy.usersBank[i].photos.small = stateCopy.usersImgBank[i];
                }
            }
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            // debugger;
            return {
                ...state,
                currentPage: action.currentPage
            }
        }


        default:
            return state;
    }
}




export const followUnFollowAC = (id) => ({ type: FOLLOW_UNFOLLOW, id: id });
export const setUsersAC = (newUsers) => ({ type: SET_USERS, newUsers: newUsers });
export const setUsersImgAC = (usersImg) => ({ type: SET_USERS_IMG, usersImg: usersImg })
export const combineUserAndImgAC = () => ({ type: COMBINE_USER_AND_IMG })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

export default usersReduser;