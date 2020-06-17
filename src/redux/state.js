import {rerenderEntireTree} from "../render"

let state = {

    profilePage: {
        dataPosts: [
            {id: 0, postText: "Hello Mike!", likesCounter: 2},
            {id: 1, postText: "Second!", likesCounter: 3},
            {id: 2, postText: "it works!", likesCounter: 0},
            {id: 3, postText: "qwerty", likesCounter: 15}
        ],

        myProfileData: {
            avaimg: "https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200",
            profileName: "2Michael T",
            profileBirth: "2 january",
            profileCity: "Krasnoyarsk",
            profileHSchool: "SFU'15"

        },
        newPostText: ""

    }

    ,


    dialogsPage: {
        dialogsData: [
            {id: 0, name: "Petr", avaimg: "https://cdn5.f-cdn.com/ppic/83143340/logo/18417739/FXa5V/profile_logo_.png"},
            {id: 1, name: "Mikhail", avaimg: "https://cdn5.f-cdn.com/ppic/83143340/logo/18417739/FXa5V/profile_logo_.png"},
            {id: 2, name: "Dmitriy", avaimg: "https://cdn5.f-cdn.com/ppic/83143340/logo/18417739/FXa5V/profile_logo_.png"},
            {id: 3, name: "Mariya", avaimg: "https://cdn5.f-cdn.com/ppic/83143340/logo/18417739/FXa5V/profile_logo_.png"},
            {id: 4, name: "Diana", avaimg: "https://cdn5.f-cdn.com/ppic/83143340/logo/18417739/FXa5V/profile_logo_.png"},
            {id: 5, name: "Dmitriy", avaimg: "https://cdn5.f-cdn.com/ppic/83143340/logo/18417739/FXa5V/profile_logo_.png"}
        ],
        messagesData:
            [
                {id: 0, message: "hello"},
                {id: 1, message: "message"},
                {
                    id: 2, message: "First message Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                        "Blanditiis cum cumque deserunt dolorem earum laborum maiores molestiae perspiciatis quae " +
                        "quos, sequi sint tenetur. Atque, illo, totam! Blanditiis ipsum omnis possimus.    "
                },

            ],
        newMessageText: ""
    }

};


export let addPost = (postMessage) => {

    let newPost = {id: 4, postText: postMessage, likesCounter: 0};
    state.profilePage.dataPosts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export let addMessage =() => {
    debugger;
    let newMessage = {id: 3, message: state.dialogsPage.newMessageText};
    state.dialogsPage.messagesData.push(newMessage);
    state.newMessageText = "";
    rerenderEntireTree(state);

}

export let updateNewMessage =(currentText) => {
    state.dialogsPage.newMessageText = currentText;
    rerenderEntireTree(state);

}

export let updateNewPostText = (currentText) => {
    state.profilePage.newPostText = currentText;
    rerenderEntireTree(state);
}


export default state;

window.state = state;