import styled from "styled-components";

const GridStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;



  .grid-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }

    // .grid-boxes {
    //   color: #fff;
    //   animation: background-color 1s ease-in-out infinite;
    // }
  }

  .gen-count {
    margin: 2%;
    font-weight: bold;
    text-align: center
  }

  .button-box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }

  button {
      border-radius: 5px;
      margin: 1%;
      padding: 1%;
    }

  @media only screen and (max-width: 600px) {
    .button-box {
      flex-wrap: wrap;
    }
  }
`;

export default GridStyle;
