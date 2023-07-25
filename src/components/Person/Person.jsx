const Person = (props) => {
  return (
    <span>
    nombre: {props.name}<br /> 
    apellido: {props.surname}<br /> 
    edad: {props.age}
    </span>
  )
}
export default Person;
