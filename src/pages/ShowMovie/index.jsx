import React from "react";

import Banner from "../../assets/bg.png";
import { Container } from "./styles";

function ShowMovie() {
  return (
    <Container image={Banner}>
      <div className="text-area">
        <div className="category-area">
          <p>Drama</p>
          <p>|</p>
          <p>Thriller</p>
          <p>|</p>
          <p>Supernatural</p>
        </div>
        <div className="title">
          <h1>Stranger Things</h1>
        </div>
        <div className="movie-info">
          <p>2019</p>
          <p>|</p>
          <p>
            DIRECTOR: <span>Shawn Levy</span>
          </p>
          <p>|</p>
          <p>
            seasons: <span>3 (5 Episodes)</span>
          </p>
        </div>
        <div className="movie-description">
          <p>
            In 1980s Indiana, a group of young friends witness supernatural
            forces and secret government exploits. As they search for answers,
            the children unravel a series of extraordinary mysteries.
          </p>
        </div>
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        <div className="btn-area">
          <button type="button" className="red-button">
            Stream now
            <i className="fa-solid fa-circle-play" />
          </button>
          <button type="button" className="white-button">
            All Episodes
          </button>
        </div>
      </div>
    </Container>
  );
}

export default ShowMovie;
