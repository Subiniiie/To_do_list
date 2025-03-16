import styled from "styled-components";
import { color } from "../store/color";

export const ContentTitleWrapper = styled.h1<{ lightMode: boolean }>`
    font-size: 25px;
    font-family: 'Cafe24Ohsquare';
    color: ${({ lightMode }) => (lightMode ? color.lmTitle : color.dmTitle )};
`