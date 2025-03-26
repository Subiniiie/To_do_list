import styled from "styled-components";

export const BoxWrapper = styled.div`
    width: 90%;
    height: 55%;
    overflow-y: auto;
    overflow-x: visible;
    margin: 25px auto 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &::-webkit-scrollbar {
        display: none;
    };
`