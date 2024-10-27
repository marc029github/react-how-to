import React from 'react';

class Lista extends React.Component {

  state = {
    visible: true
  }

  updateState = () => {
    this.setState({visible: !this.state.visible});
  }

  remove = (id, event) => {
    event.preventDefault();
    console.log("Eliminando cliente");
    //Find the contacto in the list state.contactos whose property id is equal to id
    this.props.removeClientById(id);
  }

  render() {
    /*if (this.props.visible === "true") {
        this.setState({visible: true});
    }else{
        this.setState({visible: false});
    }*/
    if (this.state.visible) {
        return (
        <div>
            <h4>Lista de {this.props.titulo}:</h4>
            <dl className='lista'>
                {this.props.contactos.map(contacto => 
                    <div className='elementos' key={contacto.id}>
                        <dt>Id: {contacto.id}</dt>
                        <dd>Nombre: {contacto.nombre}</dd>
                        <button className='boton' onClick={(event) => this.remove(contacto.id, event)}>Eliminar</button> 
                    </div>
                )}
            </dl>
            <button onClick={() => this.updateState()}>Toggle</button>

        </div>

        )
    }
    else {
        return (
        <div className="lista">
            Lista oculta     
            <button onClick={() => this.updateState()}>Toggle</button>
        </div>
        )
    }
  }
}

export default Lista;