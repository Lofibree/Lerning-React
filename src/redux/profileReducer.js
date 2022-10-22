
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_EDIT_POST_INIT = 'UPDATE-EDIT-POST-INIT';
const UPDATE_EDIT_POST_TEXT = 'UPDATE-EDIT-POST-TEXT';
const COMPLETE_POST_EDIT = 'COMPLETE-POST-EDIT';
const DELETE_POST = 'DELETE-POST';



let initialState = {
    posts: [
        { id: 0, message: 'Hi, how are you', editPostText: 'edit post', likeCount: 12, time: '08:57'  },
        { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '08:55' },
        { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '08:54' },
        { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '07:57' },
        { id: 1, message: 'It is my first post', editPostText: 'edit post', likeCount: 11, time: '02:53' },
    ],
    newPostText: 'it-kamasutra',
}

const profileReducer = (state = initialState, action) => {

    // debugger;

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length,
                message: state.newPostText,
                likeCount: 0,
                time: action.time
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case UPDATE_EDIT_POST_INIT: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts[action.index] = {...state.posts[action.index]};
            stateCopy.posts[action.index].editPostText = stateCopy.posts[action.index].message;
            return stateCopy;
        }
        case UPDATE_EDIT_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts[action.index] = {...state.posts[action.index]};
            stateCopy.posts[action.index].editPostText = action.newText;
            return stateCopy;
        }
        case COMPLETE_POST_EDIT: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts[action.index] = {...state.posts[action.index]};
            stateCopy.posts[action.index].message = stateCopy.posts[action.index].editPostText;
            stateCopy.editPostText = '';
            return stateCopy;
        }
        case DELETE_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts[action.index] = {...state.posts[action.index]};
            stateCopy.posts.splice(action.index, 1);
            return stateCopy;
        }
        default:
            return state;

    }

}

//  ВАЩЕ ХЗ КОНЕЧНО С ЭТИМИ КОПИРОВАНИЯМИ - НАДО ЛИ ИХ ДЕЛАТЬ НА КАЖДЫЙ ЧИХ ИЛИ НЕТ?


export const addPostActionCreator = (timeMesse) => ({ type: ADD_POST, time: timeMesse });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const editPostActionCreator = (index) => ({ type: UPDATE_EDIT_POST_INIT, index: index });
export const onEditChangePostActionCreator = (text, index) => ({ type: UPDATE_EDIT_POST_TEXT, newText: text, index: index });
export const completeEditPostActionCreator = (index) => ({ type: COMPLETE_POST_EDIT, index: index });
export const deletePostActionCreator = (index) => ({ type: DELETE_POST, index: index });



export default profileReducer;