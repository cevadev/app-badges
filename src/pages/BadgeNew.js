import React from "react";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import PageLoading from '../components/PageLoading';
import header from "../images/platziconf-logo.svg";

//llamamos al api para hacer una llamada a POST
import api from "../api";

import Swal from 'sweetalert';

import "./styles/BadgeNew.css";
class BadgeNew extends React.Component {
  //inicializamos un state. el loading significa que estamos enviado los datos y al momento de estar el
  //form en blanco suestado es false
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  //este metodo recibe el evento y luego realiza un setState
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  /**Manejamos la alerta de error con la dependencia sweet alter */
  alertaFaltanDatos(faltantes){
    Swal({
      title: 'Error',
      text: `Los datos están completo ${faltantes}`,
      icon: 'error',
    });
  }

  alertaError(){
    Swal({
      title: 'Oops!',
      text: 'Ha ocurrido un error inesperado, vuelva a intentarlo',
      icon: 'error'
    })
  }

  alertaExitosa(){
    Swal({
      title: 'Creación exitosa',
      text: 'Muchas gracias por inscribirse a la conferencia',
      icon: 'success',
    }).then((result)=>{
      if(result.value || !result.value){
        this.props.history.push('/badgesOriginal');
      }
    });
  }

  //metodo para enviar datos de un nuevo badge al servidor.
  //Si sucede un error, atrapamos el error y lo mostramos en el formulario y no como una pagina como en otros casos
  handleSubmit = async (e) => {
    //detenemos primero el evento de lo contario el navegador trata de enviar los datos a una pagina que no hemos especificado
    e.preventDefault();

    let datosFaltantes = [];

    for(const propiedad in this.state.form){
      if(this.state.form.hasOwnProperty(propiedad)){
        const valor = this.state.form[propiedad];
        if(valor === ''){
          datosFaltantes.push(propiedad);
        }
      }
    }

    if(this.state.form.firstName === '' ||
       this.state.form.lastName === '' ||
       this.state.form.email === '' ||
       this.state.form.jobTitle === '' ||
       this.state.form.twitter === ''){
         let camposFaltantes  = datosFaltantes.join(',');
         this.alertaFaltanDatos(camposFaltantes);
    }
    else{
      this.setState({
        loading: true,
        error: null
      })

      //this.setState({ loading: true, error: null });

      try {
        await api.badges.create(this.state.form); //le pasamos los datos del formulario
        this.setState({ loading: false });
        this.alertaExitosa();

        //si todo es un éxito, es decir, se envian correctamente los datos, nos queremos ir del formulario
        //y regresar automáticamente a la lista de badges, para hacer esto debemos utilizar un props que las páginas reciben
        //ya que las paginas se la damos a las rutas de React router y la ruta le pasa 3 props: match, history y location
        //utilizamos history y redirigimos al usuario a badgesOrinal
        //this.props.history.push('/badgesOriginal'); //lo incluimos en el metodo alertaExitosa()


      } catch (error) {
        this.setState({ loading: false, error: error });
        this.alertaError();
      }
    }
    
  };

  /**En el caso de que el loading se encienda no queremos regresar el formulario, vamos a regresar el componente loader */
  render() {
    if(this.state.loading){
      return <PageLoading />
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                email={this.state.form.email || "Email"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                twitter={this.state.form.twitter}
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
