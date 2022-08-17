import React from "react";

import Image from "../../assets/home/Image.png";
import Image1 from "../../assets/home/image2.png";
import Image2 from "../../assets/home/image3.png";
import Image3 from "../../assets/home/image4.png";
import Symbol from "../../assets/home/symbol.png";
import BannerImage from "../../assets/home/title-image.png";
import Header from "../../components/Header/index";
import MovieList from "../../components/MovieList";
import { Container, Banner, Content } from "./styles";

// teste

function Home() {
  const data = {
    name: "MAD",
    image: BannerImage,
  };

  return (
    <Container>
      <Header />
      <Banner image={data.image}>
        <div className="movie-title">
          <p>
            <img src={Symbol} alt="" /> Shows
          </p>
          <h1>{data.name}</h1>
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
            <MovieList image={Image} />
            <MovieList image={Image1} />
            <MovieList image={Image2} />
            <MovieList image={Image3} />
          </div>
        </div>

        <div className="list-movies">
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
        </div>
      </Content>
    </Container>
  );
}

export default Home;
