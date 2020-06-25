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
    background-color:#fff; 
  }
  
  .avoid-clicks {
    pointer-events: none;
  }

    .grid-boxes {
      background: linear-gradient(270deg, #345f54, #368571, #43ddb6, #5cf7d0);
      animation-name: example;
      // animation-duration: 10s;
      animation: example 1s ease infinite;
      // animation-iteration-count: infinite;


      @keyframes example {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}         
      }
      
    
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
