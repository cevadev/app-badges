import React from "react";

class BadgeForm extends React.Component {
  //Inicializamos los inputs de nuestro formulario con un objeto vacio
  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  };

  //funcion que maneja los cambios en el input field
  handleChange = (e) => {
    /* console.info({
      name: e.target.name,
      value: e.target.value,
    }); */

    //Almacenamos la información contenida en los inputs
    this.setState({
      //almacenamos el estado (informacion) en su campo rspectivo pudiendo ser: firstName, lastName, email. jobTitle etc
      [e.target.name]: e.target.value,
    });
  };

  //funcion que maneja el evento click del button
  handleClick = (e) => {
    console.info("Button was clicked");
  };

  //Cuando el boton del formulario se hace clik se activa el evento submit del form que llama a la funcion handleSubmit
  handleSubmit = (e) => {
    //evitamos que el formulario se envie
    e.preventDefault();
    console.info("Form was submitted");
    //cuando enviamos el form se imprime todo el state
    console.info(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.handleChange}
              //hacemos que la propiedad value sea controled indicamos que almacene solo el contenido de su input
              //es importante establecer esta propiedad de lo contrario se guardaria la informacion del input en dos lugares
              value={this.state.firstName}
            />

            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />

            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />

            <label>Job title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.handleChange}
              value={this.state.jobTitle}
            />

            <label>twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={this.handleChange}
              value={this.state.twitter}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
