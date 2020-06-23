import styled from 'styled-components';

//styles for the modal buttons and nav bar

const NavStyle = styled.div`
.nav-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.overlay {
  z-index: 98;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(24, 24, 24, 0.3);
}

.modal {
  z-index: 99;
  /* Everything below is optional styling */
  position: relative;
  width: 100%;
  max-width: 500px;
  max-height: 500%;
  margin: 0 auto;
}

.close-modal {
  position: absolute;
  top: -20px;
  right: 0;
  border: 0;
  -webkit-appearance: none;
  background: none;
  color: red;
  font-weight: bold;
  cursor: pointer;
}

.modal-body {
  padding: 20px 24px;
  border-radius: 4px;
  background-color: white;
}

button {
  border-radius: 5px;
  margin: 10px;
  padding: 15px;

}

@media only screen and (max-width: 600px) {
     
  .nav-wrapper {
      flex-wrap:wrap;
  }
}
`;

export default NavStyle;