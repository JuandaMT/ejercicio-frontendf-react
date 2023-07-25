import React from "react";

//No entiendo este paso ni lo que es React.Component
class PersonClass extends React.Component {
  render() {
    return (
      <span>
        Hola, me llamo {this.props.name} {this.props.surname} y tengo{" "}
        {this.props.age} años.
      </span>
    );
  }
}
export default PersonClass;
