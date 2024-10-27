import React from "react";
import App from "../App";
import { Routes,Route,Link } from "react-router-dom";
import About from "../About";
import ListOnly from "../ListOnly";
import Store from "../Store";

class Router extends React.Component {

    state = {
        contactosTopClass : [{id: 1, nombre: "Cliente 1"}, {id: 2, nombre: "Cliente 2"}, {id: 3, nombre: "Cliente 3"}]
    }

    render() {
        return (
            <>      
            <Store>     
                <Routes>
                    <Route path="/" element={<App  contactosTopClass={this.state.contactosTopClass} />} />
                    <Route path="/listOnly" element={<ListOnly />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Store>
            </>
        )
    }
}

export default Router;