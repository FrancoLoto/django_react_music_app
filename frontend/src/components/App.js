import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./Home";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage"


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center">
                <Home />
            </div>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);