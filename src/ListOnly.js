import React from "react";
import withRouter from "./withRouter";

class ListOnly extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>ListOnly</h1>
                <p>Introducción finalizada</p>
                <button onClick={() => this.props.navigate("/")}>Volver</button>
            </div>
        )
    }
}

export default withRouter(ListOnly);