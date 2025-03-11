import styled from "styled-components";
import { color } from "../store/color";

export const ContainerWrapper = styled.div<{ lightMode: boolean }>`
    width: 500px;
    height: 500px;
    background-color: ${({ lightMode }) => (lightMode ? color.lmContainer : color.dmContainer)};
    opacity: 0.7;
    border-radius: 15%;
`