import React from "react";

import { Container } from "./styles";

function MovieList({ image }) {
  const hanlderMovieShow = () => {
    window.location = "/details";
  };

  return (
    <Container>
      <div className="box">
        <div className="img">
          <img src={image} alt="name" title="name" />
        </div>

        <div className="description">
          <div className="buttons">
            <div>
              <button type="button" onClick={hanlderMovieShow}>
                <i className="fa-solid fa-play" />
              </button>
              <button type="button">
                <i className="fa-solid fa-plus" />
              </button>
              <button type="button">
                <i className="fa-regular fa-thumbs-up" />
              </button>
              <button type="button">
                <i className="fa-regular fa-thumbs-down" />
              </button>
            </div>
            <div>
              <button type="button">
                <i className="fa-solid fa-chevron-down" />
              </button>
            </div>
          </div>

          <div className="info">
            <p className="match">90% Match</p>
            <div className="parental">18</div>
          </div>

          <div className="category-info">
            <p>Mystery</p>
            <p>Thriller</p>
            <p>Science Fiction </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MovieList;
