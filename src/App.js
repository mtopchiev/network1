import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";

import {Route} from "react-router-dom";


function App(props) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content-wrapper">
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                              store={props.store}

                />}/>
                <Route path="/dialogs"> <Dialogs state={props.state.dialogsPage}
                                                 store={props.store}

                /></Route>
                <Route path="/music"/>
                <Route path="/news"/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
