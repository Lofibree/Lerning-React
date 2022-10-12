
let store = {
    _callSubscriber() {
        console.log('State changed');
    },
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: 'Hi, how are you', likeCount: 12, time: '08:57'  },
                { id: 1, message: 'It is my first post', likeCount: 11, time: '08:55' },
                { id: 1, message: 'It is my first post', likeCount: 11, time: '08:54' },
                { id: 1, message: 'It is my first post', likeCount: 11, time: '07:57' },
                { id: 1, message: 'It is my first post', likeCount: 11, time: '02:53' },
            ],
            newPostText: 'it-kamasutra',
            editPostText: 'edit post',
        },
        messagePage: {
            messages: [
                { id: 0, message: 'hi', time: '12:00' },
                { id: 1, message: 'how are you', time: '12:25' },
                { id: 2, message: 'fuck you', time: '12:30' },
            ],
            newMessText: 'type mess',
            editMessText: 'edit mess',
            // dateMess: 'date mess',
            dialogs: [
                // { id: 0, name: 'Sergey' },
                { id: 1, name: 'lofi', href: 'https://vk.com/lofibree' },
                // { id: 2, name: 'seva' },
                { id: 3, name: 'rock', href: 'https://vk.com/rockkom21' },
                // { id: 4, name: 'dggnjsdx' }
            ]
        },
        navBar: [
            { id: 0, name: 'Ricardo' },
            { id: 1, name: 'Milos' },
            { id: 2, name: 'yo' },
        ]
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) { // { type: 'ADD-POST' }

        // POST MANAGEMENT

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
                time: action.time
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-EDIT-POST-INIT') {
            this._state.profilePage.editPostText = this._state.profilePage.posts[action.index].message;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-EDIT-POST-TEXT') {
            this._state.profilePage.editPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'COMPLETE-POST-EDIT') {
            this._state.profilePage.posts[action.index].message = this._state.profilePage.editPostText;
            this._callSubscriber(this._state);
        }
        else if(action.type === 'DELETE-POST') {
            this._state.profilePage.posts.splice(action.index, 1);
            this._callSubscriber(this._state);
        }


        //  MESSAGE MANAGEMENT

        else if (action.type === 'ADD-MESSAGE') {
            // debugger;
            let newMess = {
                id: 5,
                message: this._state.messagePage.newMessText,
                time: action.timeMess  // DATE MANAGEMENT
            };
            this._state.messagePage.messages.push(newMess);
            this._state.messagePage.newMessText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESS-TEXT') {
            this._state.messagePage.newMessText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'DELETE-MESS') {
            this._state.messagePage.messages.splice(action.index, 1);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-EDIT-MESS-TEXT') {
            this._state.messagePage.editMessText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-EDIT-MESS-INIT') {
            this._state.messagePage.editMessText = this._state.messagePage.messages[action.index].message;
            this._callSubscriber(this._state);
        } else if (action.type === 'COMPLETE-MESS-EDIT') {
            this._state.messagePage.messages[action.index].message = this._state.messagePage.editMessText;
            this._callSubscriber(this._state);
        }
        

    }
}

export default store;


// store - OOP 