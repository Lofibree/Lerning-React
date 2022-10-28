
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_EDIT_POST_INIT = 'UPDATE-EDIT-POST-INIT';
// const UPDATE_EDIT_POST_TEXT = 'UPDATE-EDIT-POST-TEXT';
// const COMPLETE_POST_EDIT = 'COMPLETE-POST-EDIT';
const DELETE_POST = 'DELETE-POST';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_POSTS = 'SET_POSTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_COMMENTS = 'SET_COMMENTS';
const TOGGLE_IS_FETCHING_COMM = 'TOGGLE_IS_FETCHING_COMM';
const SET_POST_IMG = 'SET_POST_IMG';
const SET_PARTICULAR_POST = 'SET_PARTICULAR_POST';
const TOGGLE_IS_FETCHING_POST = 'TOGGLE_IS_FETCHING_POST';


let initialState = {
    posts: [
        // { id: 0, message: 'Hi, how are you', editPostText: 'edit post', likeCount: 12, time: '08:57'  },
        // { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '08:55' },
        // { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '08:54' },
        // { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '07:57' },
        // { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '02:53' },
    ],
    comments: [],
    // postImg: null,
    partPost: {title: 'title', body: 'body'},
    currentPage: 1,
    isFetching: true,
    isFetchingComm: true,
    isFetchingPost: true,
    newPostText: 'it-kamasutra',
}

const profileReducer = (state = initialState, action) => {

    // debugger;

    switch (action.type) {
        // case ADD_POST: {
        //     let newPost = {
        //         id: state.posts.length,
        //         message: state.newPostText,
        //         likeCount: 0,
        //         time: action.time
        //     }
        //     return {
        //         ...state,
        //         posts: [...state.posts, newPost],
        //         newPostText: ''
        //     }
        // }
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };
        // }
        // case UPDATE_EDIT_POST_INIT: {
        //     let stateCopy = {...state};
        //     stateCopy.posts = [...state.posts];
        //     stateCopy.posts[action.index] = {...state.posts[action.index]};
        //     stateCopy.posts[action.index].editPostText = stateCopy.posts[action.index].message;
        //     return stateCopy;
        // }
        // case UPDATE_EDIT_POST_TEXT: {
        //     let stateCopy = {...state};
        //     stateCopy.posts = [...state.posts];
        //     stateCopy.posts[action.index] = {...state.posts[action.index]};
        //     stateCopy.posts[action.index].editPostText = action.newText;
        //     return stateCopy;
        // }
        // case COMPLETE_POST_EDIT: {
        //     let stateCopy = {...state};
        //     stateCopy.posts = [...state.posts];
        //     stateCopy.posts[action.index] = {...state.posts[action.index]};
        //     stateCopy.posts[action.index].message = stateCopy.posts[action.index].editPostText;
        //     stateCopy.editPostText = '';
        //     return stateCopy;
        // }
        case DELETE_POST: {
            debugger;
            let stateCopy = {
                ...state,
                partPost: {title: 'title', body: 'body'}
            };
            // stateCopy.posts = [...state.posts];
            // let postToDelete = stateCopy.posts.find(post => post.id === action.id);
            // let neededIndex = stateCopy.posts.indexOf(postToDelete);
            // stateCopy.posts[neededIndex] = {...state.posts[neededIndex]};
            // stateCopy.posts.splice(neededIndex, 1);
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_POSTS: {
            return {
                ...state,
                posts: action.newPosts
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_COMMENTS: {
            // debugger;
            return {
                ...state,
                comments: action.newComments
            }
        }
        case TOGGLE_IS_FETCHING_COMM: {
            // debugger;
            return {
                ...state,
                isFetchingComm: action.isFetchingComm
            }
        }
        case SET_POST_IMG: {
            return {
                ...state,
                postImg: action.postImg
            }
        }
        case SET_PARTICULAR_POST: {
            // debugger;
            let stateCopy = {
                ...state,
                partPost: action.post
            }
            // debugger;
            return stateCopy
        }
        case TOGGLE_IS_FETCHING_POST: {
            return {
                ...state,
                isFetchingPost: action.isFetchingPost
            }
        }
        default:
            return state;

    }

}

//  ВАЩЕ ХЗ КОНЕЧНО С ЭТИМИ КОПИРОВАНИЯМИ - НАДО ЛИ ИХ ДЕЛАТЬ НА КАЖДЫЙ ЧИХ ИЛИ НЕТ?


// export const addPost = (timeMesse) => ({ type: ADD_POST, time: timeMesse });
// export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
// export const editPostActionCreator = (index) => ({ type: UPDATE_EDIT_POST_INIT, index: index });
// export const onEditChangePostActionCreator = (text, index) => ({ type: UPDATE_EDIT_POST_TEXT, newText: text, index: index });
// export const completeEditPostActionCreator = (index) => ({ type: COMPLETE_POST_EDIT, index: index });
export const deletePostAC = (id) => ({ type: DELETE_POST, id });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setPosts = (newPosts) => ({ type: SET_POSTS, newPosts })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setCommentsAC = (newComments) => ({ type: SET_COMMENTS, newComments })
export const setIsFetchingCommAC = (isFetchingComm) => ({ type: TOGGLE_IS_FETCHING_COMM, isFetchingComm })
export const setPostImgAC = (postImg) => ({ type: SET_POST_IMG, postImg })
export const setParticularPostAC = (post) => ({ type: SET_PARTICULAR_POST, post })
export const setIsFetchingPostAC = (isFetchingPost) => ({ type: TOGGLE_IS_FETCHING_POST, isFetchingPost })



export default profileReducer; 