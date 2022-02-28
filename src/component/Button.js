import React from 'react'

const Button = ({text, color, backgroundColor, width, marginBottom, marginTop, marginLeft, border}) => {
    const style = {
        backgroundColor: backgroundColor ? backgroundColor : "#fff",
        color: color ? color : "#000",
        width: width ? width : "100%",
        marginBottom: marginBottom ? marginBottom : "20px",
        marginLeft: marginLeft ? marginLeft : "0",
        border: border ? border : "none",
        marginTop: marginTop ? marginTop :"0",
    }
  return (
    <button style={style} className="btn btn-primary">
        {text ? text : "button"}
    </button>
  )
}

export default Button