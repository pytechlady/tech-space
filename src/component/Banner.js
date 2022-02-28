import React from "react";

const Banner = ({ text, backgroundColor, marginTop }) => {
  const style = {
    backgroundColor: backgroundColor ? backgroundColor : "#4c6b9f",
    marginTop: marginTop ? marginTop : "60px",
  };
  return (
    <div>
      <div style={style}>
        <div className="container p-5">
          <center>
            <h2 className="card-title text-light">Tech Space</h2>
            <p className="card-text text-light">
              {text
                ? text
                : "We are showing people that engineering isn’t just the physics of how a transistor works. It’s using the technology, and being creative with it, and solving problems that people have or creating something beautiful with it. And we think that’s opening up engineering to a whole new group of people that maybe never would have thought that engineering was for them."}
            </p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Banner;
