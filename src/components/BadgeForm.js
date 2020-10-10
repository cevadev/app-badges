import React from "react";

class BadgeForm extends React.Component {
  //Inicializamos los inputs de nuestro formulario con un objeto vacio
  //state = {};

  //funcion que maneja los cambios en el input field
  /*   handleChange = (e) => {
    /* console.info({
      name: e.target.name,
      value: e.target.value,
    }); */

  //Almacenamos la información contenida en los inputs
  /* this.setState({
      //almacenamos el estado (informacion) en su campo rspectivo pudiendo ser: firstName, lastName, email. jobTitle etc
      [e.target.name]: e.target.value,
    });
  }; */

  //funcion que maneja el evento click del button
  handleClick = (e) => {
    console.info("Button was clicked");
  };

  //Cuando el boton del formulario se hace clik se activa el evento submit del form que llama a la funcion handleSubmit
  //handleSubmit = (e) => {
  //evitamos que el formulario se envie
  // e.preventDefault();
  // console.info("Form was submitted");
  //cuando enviamos el form se imprime todo el state
  //console.info(this.state);
  //};

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.props.onChange}
              //hacemos que la propiedad value sea controled indicamos que almacene solo el contenido de su input
              //es importante establecer esta propiedad de lo contrario se guardaria la informacion del input en dos lugares
              value={this.props.formValues.firstName}
            />

            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />

            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />

            <label>Job title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />

            <label>twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Save
          </button>

          {/* {
            //desplegamos algo condicionalmente, si existe el error, entonces desplegamos un parrafor para mostrar el error
            this.props.error && (
              <p className="text-danger">{this.props.error.message}</p>
            )
          } */}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
