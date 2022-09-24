
let state = {
    profilePage: {
        posts: [
            { id: 0, message: 'Hi, how are you', likeCount: 12 },
            { id: 1, message: 'It is my first post', likeCount: 11 },
            { id: 1, message: 'It is my first post', likeCount: 11 },
            { id: 1, message: 'It is my first post', likeCount: 11 },
            { id: 1, message: 'It is my first post', likeCount: 11 },
        ]
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
}

export default state;