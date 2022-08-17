import styled from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 146px;
  min-height: 146px;
  transition: 0.5s ease;
  border-radius: 10px;
  margin-right: -100px;
  position: relative;
  overflow: hidden;

  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 10px;

    .img {
      transition: 0.5s ease;
      width: 260px;
      height: 146px;
      margin: 0 auto;

      img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
        height: 100%;
      }
    }
    .description {
      background: #141414;
      transition: 0.5s ease;
      width: 260px;
      height: 154px;
      margin: 0 auto;
      padding: 24px;

      .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          width: 32px;
          height: 32px;
          border-radius: 16px;
          background: none;
          border: 1px solid #ffffff;
          color: #ffffff;
          margin: 0 5px;

          :hover {
            background: #ffffff;
            color: #000000;
          }
        }
      }

      .info {
        margin: 16px 0;
        width: 100%;
        display: flex;
        align-items: center;

        .match {
          color: #3dcd5e;
          margin-right: 10px;
        }

        .parental {
          padding: 2px;
          border: 1px solid #ffffff;
        }
      }

      .category-info {
        display: flex;

        p {
          margin: 0 5px;
        }
      }
    }
  }

  :hover {
    overflow: unset;
    .box {
      height: 388px;
      z-index: 1000;
      .img {
        width: 390px;
        height: 220px;

        img {
          width: 100%;
        }
      }
      .description {
        width: 390px;
        height: 168px;
      }
    }
  }
`;
