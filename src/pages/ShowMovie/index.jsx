import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { movieRoutes } from "../../api/movieRoutes";
import Header from "../../components/Header/index";
import { Container } from "./styles";

function ShowMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const response = await movieRoutes.show(id);

      if (response.error) {
        alert(response.error);
      } else {
        setMovie(response);
      }
    };

    getMovie();
  }, []);

  return (
    <Container image={movie && movie.banner}>
      <Header />
      <div className="text-area">
        <div className="category-area">
          <p>{movie && movie.category.name}</p>
          {/* <p>|</p>
          <p>Thriller</p>
          <p>|</p>
          <p>Supernatural</p> */}
        </div>
        <div className="title">
          <h1>{movie && movie.name}</h1>
        </div>
        <div className="movie-info">
          <p>{movie && movie.year}</p>
          <p>|</p>
          <p>
            DIRECTOR: <span>{movie && movie.director}</span>
          </p>
          <p>|</p>
          <p>
            seasons: <span>{movie && movie.duration}</span>
          </p>
        </div>
        <div className="movie-description">
          <p>{movie && movie.description}</p>
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
