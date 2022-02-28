import React from 'react'

const ImageCards = ({image, text, width , color}) => {
    const style = {
        width : width ? width : "18rem",
        color : color ? color : "#fff"
    }
  return (
    <div className="card bg-primary the-cards" style={style}>
    <img src={image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <p className="card-text">{text ? text : "Hellooooo!"}</p>
    </div>
  </div> 
  )
}


export default ImageCards