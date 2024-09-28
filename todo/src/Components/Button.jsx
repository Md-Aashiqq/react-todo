/* eslint-disable react/prop-types */

function Button({name,func}) {
  return (
    <button onClick={() => func()}>{name}</button>
  )
}

export default Button