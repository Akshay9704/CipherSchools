import card from "../Images/movie.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Showcase = () => {
    const navigate = useNavigate();
    
    function player() {
        navigate("Player")
      }

  return (
    <>
      <div className="Showcase container mt-3">
        <h1 className="text-4xl">Videos</h1>
        <hr className="my-4"></hr>
      </div>
      <div className="lg:flex lg:justify-center lg:gap-5">
        <div className="card" style={{ width: "18rem" }}>
          <img src={card} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Video-1</h5>
            <p className="card-text">Video Description</p>
            <a href="#" className="btn btn-primary" onClick={player}>
              Link
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={card} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Video-2</h5>
            <p className="card-text">Video Description</p>
            <a href="#" className="btn btn-primary" onClick={player}>
              Link
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={card} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Video-3</h5>
            <p className="card-text">Video Description</p>
            <a href="#" className="btn btn-primary" onClick={player}>
              Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
