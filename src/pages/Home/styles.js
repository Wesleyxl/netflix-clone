import styled from "styled-components";

export const Container = styled.section``;

export const Banner = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${(props) => `${`http://${props.banner}`}`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.3);
  }

  .movie-title {
    margin: 0 0 180px 60px;

    p {
      font-size: 20px;
    }

    h1 {
      font-size: 50px;
      max-width: 400px;
    }

    .buttons {
      padding: 0 15px;
      width: 100%;
      display: flex;
      justify-content: flex-start;

      .btn-play {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 40px;
        border-radius: 5px;
        border: none;
        background: #ffffff;
        color: #000000;
        font-weight: bold;
        margin-right: 30px;

        i {
          margin-right: 4px;
        }

        :hover {
          box-shadow: 0 0 5px #ffffff;
        }
      }

      .btn-more {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 40px;
        border-radius: 5px;
        border: none;
        background: rgba(255, 255, 255, 0.3);
        color: #000000;

        i {
          border: 1px solid #000000;
          border-radius: 50%;
          padding: 2px 8px;
          margin-right: 5px;
          font-size: 14px;
        }

        :hover {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 15px;
  padding-bottom: 180px;
  overflow-x: hidden;

  .list-movies {
    margin: 30px 0 100px;

    .title p {
      font-weight: bold;
      margin: 0 0 20px 70px;
      font-size: 25px;
    }

    .list {
      display: inline-flex;
    }
  }
`;
