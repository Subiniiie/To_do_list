import styled from "styled-components";
import { color } from "../store/color";

export const ContentWrapper = styled.div<{ lightMode: boolean }>`
    width: 450px;
    height: 170px;
    background: ${({ lightMode }) => (lightMode ? color.lmContentModal : color.dmContentModal )};
    border-radius: 25px;
    z-index: 201;
`