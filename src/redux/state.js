
let store = {
    _callSubscriber() {
        console.log('State changed');
    },
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: 'Hi, how are you', likeCount: 12 },
                { id: 1, message: 'It is my first post', likeCount: 11 },
                { id: 1, message: 'It is my first post', likeCount: 11 },
                { id: 1, message: 'It is my first post', likeCount: 11 },
                { id: 1, message: 'It is my first post', likeCount: 11 },
            ],
            newPostText: 'it-kamasutra'
        },
        messagePage: {
            messages: [
                { id: 0, message: 'hi' },
                { id: 1, message: 'how are you' },
                { id: 2, message: 'fuck you' },
            ],
            dialogs: [
                // { id: 0, name: 'Sergey' },
                { id: 1, name: 'lofi' },
                // { id: 2, name: 'seva' },
                { id: 3, name: 'rock' },
                // { id: 4, name: 'dggnjsdx' }
            ]
        },
        navBar: [
            { id: 0, name: 'Ricardo'},
            { id: 1, name: 'Milos'},
            { id: 2, name: 'yo'}
        ]
    }, 


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }, 


    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;


// store - OOP 