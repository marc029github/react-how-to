import React from "react";
import withRouter from "./withRouter";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            telefono: ""
        }

        this.updateStateName = this.updateStateName.bind(this);
        this.updateStateApellido = this.updateStateApellido.bind(this);
        this.updateStateEmail = this.updateStateEmail.bind(this);
        this.updateStateTelefono = this.updateStateTelefono.bind(this);

    }

    /*sendForm = () => {
        console.log("Enviando formulario");
        this.props.updateClientList(document.getElementById("nombre").value);
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
    }*/

    sendForm = (event) => {
        event.preventDefault();
        console.log("Enviando formulario");
        this.props.updateClientList(document.getElementById("nombre").value);
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        this.props.navigate("/listOnly");
    }

    deleteItem = (event) => {
        event.preventDefault();
        console.log("Eliminando cliente");
        this.props.deleteClient(document.getElementById("nombre").value);
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
    }

    updateStateName = (event) => {
        this.setState({nombre: event.target.value});
    }

    updateStateApellido = (event) => {
        this.setState({apellido: event.target.value});
    }
    updateStateEmail = (event) => {
        this.setState({email: event.target.value});
    }
    updateStateTelefono = (event) => {
        this.setState({telefono: event.target.value});
    }

    render() {
        return (
            <div className="form">
                <h4>Formulario de {this.props.titulo}:</h4>
                <form>
                    <label>Nombre:</label>
                    <input type="text" id="nombre" value={this.state.nombre} onChange={this.updateStateName}/>
                    <br />
                    <label>Apellido:</label>
                    <input type="text" id="apellido" value={this.state.apellido} onChange={this.updateStateApellido}/>
                    <br />
                    <label>Email:</label>
                    <input type="email" id="email" value={this.state.email} onChange={this.updateStateEmail}/>
                    <br />
                    <label>Teléfono:</label>
                    <input type="tel" id="telefono" value={this.state.telefono} onChange={this.updateStateTelefono}/>
                    <br />
                    <button onClick={this.sendForm} className="boton">Enviar</button>
                    <button onClick={this.deleteItem} className="boton">Eliminar</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Form);