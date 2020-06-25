import styled from "styled-components";


const GridStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .grid-wrapper {
    margin-left:5%;
    margin-right:10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color:slategrey;   
    box-shadow: 0 10px 25px;
  }

    .grid-boxes {
      background: grey;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0,0,0,.5), 0 -5px 20px rgba(0,0,0,.3);
      // background: linear-gradient(270deg, #246655, #a4f1de);
      animation-name: example;
      animation: example 1s ease infinite;


      @keyframes example {
        from {background-color:#246655;}
        to {background-color:#a4f1de;}        
      }
      
    
  }

  .gen-count {
    margin: 2%;
    margin-left:5%;
    margin-right:10%;
    font-weight: bold;
    text-align: center
  }

  .button-box {
    margin-left:5%;
    margin-right:10%;
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
      box-shadow: 0 10px 25px;
    }

  @media only screen and (max-width: 600px) {
    .button-box {
      flex-wrap: wrap;
    }
  }

  .footer {
    margin-top:2rem;
  }

`;






export default GridStyle;
