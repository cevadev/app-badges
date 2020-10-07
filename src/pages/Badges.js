import React from "react";
import BadgesList from "../components/BadgesList.js";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import "./styles/Badges.css";

import confLogo from "../images/platziconf-logo.svg";

class Badges extends React.Component {
  /*Manejo del ciclo de vida del componente Badges
   * En el manejo del ciclo de vida hay un orden:
   * 1. se ejecuta el constructor(props), los props que recibe los utilizamos para inicializar la super clase
   * 2. se ejecuta el render()
   * 3. se ejecuta el componentDidMount()
   */
  constructor(props) {
    super(props);
    console.info("1. constructor()");

    //Inicializamos la informacion de lista de badges
    /*  this.state = {
      data: [],
    }; */

    //para ricky and morty
    this.state = {
      data: {
        loading: true,
        error: null,
        results: [],
      },
    };
  }

  /**Simulacion de una peticion. en 3 segundos actualizamos el state con la info contenida en data */
  /* componentDidMount() {
    console.info("3. componentDidMount()");
    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Freda",
            lastName: "Grady",
            email: "Leann_Berge@gmail.com",
            jobTitle: "Legacy Brand Director",
            twitter: "FredaGrady22221-7573",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Major",
            lastName: "Rodriguez",
            email: "Ilene66@hotmail.com",
            jobTitle: "Human Research Architect",
            twitter: "ajorRodriguez61545",
            avatarUrl:
              "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Markets Officer",
            twitter: "DaphneyTorphy96105",
            avatarUrl:
              "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
          },
        ],
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.info("5. componentDidUpdate()");
    console.info({
      prevProps: prevProps,
      prevState: prevState,
    });

   
    console.info({
      props: this.props,
      state: this.state,
    });
  } */
  /**Hacemos la llamada a la API */
  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      //a response le sacamos los datos
      const data = await response.json();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  /**este metodo se ejecuta antes de que el componente se desmonte del DOM. esto se llama cuando pasamos a otra pagina
   * o componente
   */
  componentWillUnmount() {
    console.info("6. componentWillUnmount()");
    clearTimeout(this.timeoutId);
  }

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    console.info("2. render()");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="ConfLogo"
              ></img>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        {/* <BadgesList badges={this.state.data} /> */}

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data.results} />
          </div>
        </div>

        {/**expresion dentro de JSX */}
        {this.state.loading && (
          <div>
            <Loader />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Badges;
