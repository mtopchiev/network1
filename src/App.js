import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";

import {BrowserRouter, Route} from "react-router-dom";


function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content-wrapper">
                    <Route path="/profile" render={()=><Profile state={props.state.profilePage}/>}/>
                    <Route path="/dialogs">         <Dialogs state={props.state.dialogsPage}/></Route>
                    <Route path="/music" />
                    <Route path="/news" />

                </div>
                <Footer/>


            </div>
        </BrowserRouter>
        );
        }

            export default App;
