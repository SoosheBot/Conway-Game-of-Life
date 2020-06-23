import styled from 'styled-components';


const GridStyle = styled.div`
    display:flex;
    flex-direction:column;
    text-align: center;
    // align-items:center;
    // justify-content:center;

    .grid-wrapper {
        display: flex;
        flex-direction:row;
        align-items:center;
        justify-content: center;
    }

    .button-box {      
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
      
    }

    button {
        border-radius: 5px;
        margin: 10px;
        padding: 15px;
    }
    
    p {
        font-weight: bold;
    }
        
    
`;


export default GridStyle;