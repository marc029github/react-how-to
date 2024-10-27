import React from "react";
import withRouter from "./withRouter";

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Esta es la página de About</p>
                <button onClick={this.props.navigate("/")}>Volver</button>
            </div>
        )
    }
}
export default About;