import styled from "styled-components";
import { color } from "../store/color";

export const TodoItemWrapper = styled.div<{ lightMode: boolean }>`
    width: 100%;
    height: 70px;
    background: ${({ lightMode }) => (lightMode ? color.lmArticle : color.dmArticle )};
    font-family: 'Cafe24Ohsquare';
    border-radius: 15px;
    margin: 5px 0;
    cursor: pointer;
`