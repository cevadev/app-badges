import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.info({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick = (e) => {
    console.info("Button was clicked");
  };

  handleSubmit = (e) => {
    //evitamos que el formulario se envie
    e.preventDefault();
    console.info("Form was submitted");
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
