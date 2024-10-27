
import './App.css';
import Lista from './Lista';
import Form from './Form';
import React, { useContext } from 'react';
import { Context } from './Store';


class App extends React.Component {

  state = {
    contactos : [{id: 1, nombre: "Cliente 1"}, {id: 2, nombre: "Cliente 2"}, {id: 3, nombre: "Cliente 3"}]
  }

  //Global state
  /*componentDidMount() {
    const { state: { contactosGlobal }, dispatch: setContactosGlobal } = useContext(Context);
    this.setState({ contactosGlobal });
    this.setContactosGlobal = setContactosGlobal;
  }*/

  componentDidMount() {
    console.log("Componente montado");
  }


  updateClientList = (nameClient) => {
    console.log("Actualizando lista de clientes");
    let newContact = {id: this.state.contactos.length + 1, nombre: nameClient};
    this.setState({contactos: [...this.state.contactos, newContact]});
    //this.setContactosGlobal({contactosGlobal: [...this.state.contactosGlobal, newContact]});
    const newContactTopClass = {id: this.props.contactosTopClass.length + 1, nombre: nameClient};
    this.props.contactosTopClass.push(newContactTopClass);
  }

  deleteClient = (nameClient) => {
    console.log("Eliminando cliente");
    //Find the contacto in the list state.contactos whose property nombre is equal to nameClient
    let index = this.state.contactos.findIndex(contacto => contacto.nombre === nameClient);
    //Remove the contacto from the list state.contactos
    this.state.contactos.splice(index, 1);
    //Update the state
    this.setState({contactos: this.state.contactos});
  }

  removeClientById = (id) => {
    console.log("Eliminando cliente");
    //Find the contacto in the list state.contactos whose property id is equal to id
    let index = this.state.contactos.findIndex(contacto => contacto.id === id);
    //Remove the contacto from the list state.contactos
    this.state.contactos.splice(index, 1);
    //Update the state
    this.setState({contactos: this.state.contactos});
  }

  render() {
    return (
      <div >
        <h1>Mi Aplicación</h1>
  
        <h2>Este es mi primer componente React</h2>
        <div className="parrafo">
          <p>Este es un párrafo de prueba</p>
        </div>
        <Lista titulo="Clientes" contactos={this.state.contactos} removeClientById={this.removeClientById} visible="true" className="lista"/>
        <br />
        <Lista titulo="ClientesTopClass" contactos={this.props.contactosTopClass} removeClientById={this.removeClientById} visible="true" className="lista"/>
        <br />
        <Form titulo="Clientes" updateClientList={this.updateClientList} deleteClient={this.deleteClient}/>
      </div>
    );
  }
}

/*function MiLista(props){
  return(
    <div className="lista">
      <h4>Lista de clientes de {props.titulo}:</h4>
      <ul>
        <li>Cliente 1</li>
        <li>Cliente 2</li>
        <li>Cliente 3</li>
      </ul>
    </div>

  )
}*/


export default App;
