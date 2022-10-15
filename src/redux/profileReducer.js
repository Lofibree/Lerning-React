
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_POST_INIT = 'UPDATE-EDIT-POST-INIT';
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
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
                time: action.time // TIME MANAGEMENT
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        case UPDATE_NEW_POST_INIT:
            state.posts[action.index].editPostText = state.posts[action.index].message;
            return state;

        case UPDATE_EDIT_POST_TEXT:
            state.posts[action.index].editPostText = action.newText;
            return state;

        case COMPLETE_POST_EDIT:
            state.posts[action.index].message = state.posts[action.index].editPostText;
            state.editPostText = '';
            return state;

        case DELETE_POST:
            state.posts.splice(action.index, 1);
            return state;
        default:
            return state;

    }

}


export const addPostActionCreator = (timeMesse) => ({ type: ADD_POST, time: timeMesse });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const editPostActionCreator = (index) => ({ type: UPDATE_NEW_POST_INIT, index: index });
export const onEditChangePostActionCreator = (text, index) => ({ type: UPDATE_EDIT_POST_TEXT, newText: text, index: index });
export const completeEditPostActionCreator = (index) => ({ type: COMPLETE_POST_EDIT, index: index });
export const deletePostActionCreator = (index) => ({ type: DELETE_POST, index: index });



export default profileReducer;