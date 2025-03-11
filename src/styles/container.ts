import styled from "styled-components";
import { color } from "../store/color";

export const ContainerWrapper = styled.div<{ lightMode: boolean }>`
    width: 600px;
    height: 600px;
    background-color: ${({ lightMode }) => (lightMode ? color.lmContainer : color.dmContainer)};
    border-radius: 15%;
`