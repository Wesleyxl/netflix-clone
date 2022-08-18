import React, { useState, useEffect } from "react";

import { movieRoutes } from "../../api/movieRoutes";
import Symbol from "../../assets/home/symbol.png";
import Header from "../../components/Header/index";
import MovieList from "../../components/MovieList";
import { Container, Banner, Content } from "./styles";

// teste

function Home() {
  const [movies, setMovies] = useState([]);
  const [banner, setBanner] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const response = await movieRoutes.index();

      if (response.error) {
        alert(response.error);
      } else {
        setMovies(response);
      }
    };
    const getBanner = async () => {
      const response = await movieRoutes.getBanner();

      if (response.error) {
        alert(response.error);
      } else {
        setBanner(response);
      }
    };

    getBanner();
    getMovies();
  }, []);

  return (
    <Container>
      <Header />
      <Banner banner={banner.banner}>
        <div className="movie-title">
          <p>
            <img src={Symbol} alt="" /> Shows
          </p>
          <h1>{banner.name}</h1>
          <div className="buttons">
            <a href="/" className="btn-play">
              <i className="fa-solid fa-chevron-right" />
              play
            </a>
            <a href="/" className="btn-more">
              <i className="fa-solid fa-exclamation" />
              More info
            </a>
          </div>
        </div>
      </Banner>

      <Content>
        <div className="list-movies">
          <div className="title">
            <p>
              See again <i className="fa-solid fa-chevron-right" />
            </p>
          </div>
          <div className="list">
            {movies
              ? movies.map((movie) => (
                  <div key={movie.id}>
                    <MovieList data={movie} />
                  </div>
                ))
              : ""}
            {/* <MovieList image={Image1} />
            <MovieList image={Image2} />
            <MovieList image={Image3} /> */}
          </div>
        </div>

        {/* <div className="list-movies">
          <div className="title">
            <p>
              Top 10 in your country <i className="fa-solid fa-chevron-right" />
            </p>
          </div>
          <div className="list">
            <MovieList image={Image} />
            <MovieList image={Image1} />
            <MovieList image={Image2} />
            <MovieList image={Image3} />

          </div>
        </div> */}
      </Content>
    </Container>
  );
}

export default Home;
