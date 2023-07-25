import "./App.css";
import React from "react";
import Person from "./components/Person/Person";
import PersonClass from "./components/PersonClass/PersonClass";


const name = "Papá";
const surname = "de Juanda";
const age = 50;

function App() {
  return (
    <>
      <div className="ejercicio1">
        <h1>Bienvenido al ejercicio1</h1>
        <Person name={name} surname={surname} age={age} /> <br />
        <Person name={"Juanda"} surname={"MT"} age={25} />
        <br />
        <Person name={"Marta"} surname={"MM"} age={26} />
        <br />
        <Person name={"Yolanda"} surname={"TT"} age={27} /> <br />
      </div>
      <div className="clases">
      <PersonClass name={"Marc"} surname={"MT"} age={25} /> <br />
        <PersonClass name={"Yolanda"} surname={"MM"} age={12} /> <br />
        <PersonClass name={"Marta"} surname={"TT"} age={30} />
      </div>
    </>
  );
}

export default App;
