import styled from "styled-components";
import { color } from "../store/color";

export const SubTitleWrapper = styled.p<{ lightMode: boolean}>`
    font-size: 22px;
    font-family: 'Cafe24Ohsquare';
    color: ${({ lightMode }) => (lightMode ? color.lmTitle : color.dmTitle)};
`