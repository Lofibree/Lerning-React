const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';
const DELETE_MESS = 'DELETE-MESS';
const UPDATE_EDIT_MESS_TEXT = 'UPDATE-EDIT-MESS-TEXT';
const UPDATE_EDIT_MESS_INIT = 'UPDATE-EDIT-MESS-INIT';
const COMPLETE_MESS_EDIT = 'COMPLETE-MESS-EDIT';
const ADD_DIALOG = 'ADD-DIALOG';
const COMPLETE_ADD_DIALOG = 'COMPLETE-ADD-DIALOG';
const UPDATE_ADD_DIALOG_TEXT ='UPDATE-ADD-DIALOG-TEXT';



let initialState = {
    messagesBank:  [
        { id: 0, message: 'hi', editMessText: 'edit mess', time: '12:00', ownerDialog: 'lofi' },
        { id: 1, message: 'how are you', editMessText: 'edit mess', time: '12:25', ownerDialog: 'lofi' },
        { id: 2, message: 'fuck you', editMessText: 'edit mess', time: '12:30', ownerDialog: 'lofi' },
        { id: 3, message: 'freddie', editMessText: 'edit mess', time: '13:00', ownerDialog: 'lofi' },
        { id: 4, message: 'yellow', editMessText: 'edit mess', time: '13:12', ownerDialog: 'lofi' },
        { id: 5, message: 'blue', editMessText: 'edit mess', time: '13:38', ownerDialog: 'rock' },
        { id: 6, message: 'red', editMessText: 'edit mess', time: '18:00', ownerDialog: 'rock' },
        { id: 7, message: 'white', editMessText: 'edit mess', time: '19:03', ownerDialog: 'seva' },
        { id: 8, message: 'black', editMessText: 'edit mess', time: '20:46', ownerDialog: 'seva' },
    ],
    newMessText: 'type mess',
    dialogs: [
        // { id: 0, name: 'Sergey' },
        { id: 0, name: 'lofi', href: 'https://vk.com/lofibree' },
        // { id: 2, name: 'seva' },
        { id: 1, name: 'rock', href: 'https://vk.com/rockkom21' },
        { id: 2, name: 'seva', href: 'https://vk.com/rockkom21' },
        // { id: 4, name: 'dggnjsdx' }
    ],
    newDialogText: 'add name'
}




const messagesReducer = (state = initialState, action) => {

// debugger;
// debugger;
    switch (action.type) {
        case ADD_MESSAGE:
            let newMess = {
                id: action.id + 1,
                message: state.newMessText,
                time: action.timeMess,  // TIME MANAGEMENT
                ownerDialog: state.dialogs[action.id].name
            };
            state.messagesBank.push(newMess);
            state.newMessText = '';
            return state;

        case UPDATE_NEW_MESS_TEXT:
            state.newMessText = action.newText;
            return state;

        case DELETE_MESS:
            state.messagesBank.splice(action.index, 1);
            return state;

        case UPDATE_EDIT_MESS_TEXT:
            state.messagesBank[action.index].editMessText = action.newText;
            return state;

        case UPDATE_EDIT_MESS_INIT:
            state.messagesBank[action.index].editMessText = state.messagesBank[action.index].message;
            return state;

        case COMPLETE_MESS_EDIT:
            state.messagesBank[action.index].message = state.messagesBank[action.index].editMessText;
            return state;
        case ADD_DIALOG:
            let isDialogExist = state.dialogs.some(d => d.name === state.newDialogText);
            if (isDialogExist === false) {
                let newDialog = {
                    id: state.dialogs.length, 
                    name: state.newDialogText,
                }
            state.dialogs.push(newDialog);
            } else {
                window.alert('This dialog already exist')
            }
            return state;
        case UPDATE_ADD_DIALOG_TEXT:
            state.newDialogText = action.newText;
            return state;
        default:
            return state;

    }
}



export const addMessActionCreator = (timeMesse, id) => ({ type: ADD_MESSAGE, timeMess: timeMesse, id: id });
export const onMessChangeActionCreator = (text) => ({ type: UPDATE_NEW_MESS_TEXT, newText: text });
export const editMessActionCreator = (index) => ({ type: UPDATE_EDIT_MESS_INIT, index: index });
export const onEditChangeMessActionCreator = (text, index) => ({ type: UPDATE_EDIT_MESS_TEXT, newText: text, index: index });
export const completeEditMessActionCreator = (index) => ({ type: COMPLETE_MESS_EDIT, index: index });
export const deleteMessActionCreator = (index) => ({ type: DELETE_MESS, index: index });
export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const onAddDialogChangeActionCreator = (text) => ({ type: UPDATE_ADD_DIALOG_TEXT, newText: text })

export default messagesReducer;