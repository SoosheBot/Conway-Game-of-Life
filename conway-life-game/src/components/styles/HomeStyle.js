import styled from "styled-components";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  color: white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 25%;
  margin-right: 25%;
  background-color: #246655;
  border-radius: 5px;

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .intro {
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 15%;
    margin-right: 15%;
  }

  .home-body {
    margin-bottom: 2rem;
  }

  a {
    color: #38a085;
    text-decoration: none;
  }
  a:hover {
    color: #00b4a3;
  }

  .home-footer {
    margin-top: 5rem;
    margin-bottom: 2rem;
    background-color: #246655;
    margin-left: 50%;
  }
`;

export default HomeStyle;
