let store = {
     _state:  {
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

    },

    getState () {
         return this._state;
    },

    addPost(postMessage) {
        let newPost = {id: 4, postText: postMessage, likesCounter: 0};
        this._state.profilePage.dataPosts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

    },

    addMessage() {
        let newMessage = {id: 3, message: this._state.dialogsPage.newMessageText};
        // store.state.dialogsPage.messagesData.push(newMessage);
        // store.state.newMessageText = "";
        // store.rerenderEntireTree(this.state);
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.newMessageText = "";
        this._callSubscriber(this._state);
    },

    updateNewMessage (currentText) {
        this._state.dialogsPage.newMessageText = currentText;
        this._callSubscriber(this._state);
    },

    updateNewPostText (currentText) {
        this._state.profilePage.newPostText = currentText;
        this._callSubscriber(this._state);
    },

    // rerenderEntireTree ()  {
    //     console.log("state changed")
    // },
    subscribe (observer)  {
        this._callSubscriber = observer;
    },

};
export default store;
