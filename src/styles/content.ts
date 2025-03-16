import styled from "styled-components";
import { color } from "../store/color";

export const ContentWrapper = styled.div<{ lightMode: boolean }>`
    width: 420px;
    height: 220px;
    background: ${({ lightMode }) => (lightMode ? color.lmContentModal : color.dmContentModal )};
    border-radius: 25px;
    z-index: 201;
`