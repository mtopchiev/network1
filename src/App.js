import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Messages from "./components/Messages/Messages";

import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content-wrapper">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/music" />
                    <Route path="/news" />

                </div>
                <Footer/>


            </div>
        </BrowserRouter>
        );
        }

            export default App;
