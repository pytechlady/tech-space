import React from "react";

const Cards = ({ text, heading, fontSize, textTransform, color }) => {

  const style = {
    fontSize: fontSize ? fontSize : "24px",
    textTransform: textTransform ? textTransform : "uppercase",

  }
  return (
    <div className="card-group container mt-3 pb-3">
      <div className="card">
        <div className="card-body">
          <div style={style} className="card-title">{heading ? heading : "Heading 1"}</div>
          <p className="card-text text-dark">
            {text
              ? text
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati, ea tempore voluptates consequatur quis exercitationem voluptatem impedit dolore recusandae officia atque mollitia. Fugiat veritatis tenetur est excepturi tempore ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati, ea tempore voluptates consequatur quis exercitationem voluptatem impedit dolore recusandae officia atque mollitia. Fugiat veritatis tenetur est excepturi tempore ex!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
