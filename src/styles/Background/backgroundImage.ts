import styled from "styled-components";
import backgroundImage from "../../assets/background.jpg";

export const BackgroundWrapper = styled.div`
    background: url(${backgroundImage});
    background-size: cover;
    height: 100vh;
    opacity: 0.8;
    position: relative;
    justify-content: center;
    align-items: center;
`