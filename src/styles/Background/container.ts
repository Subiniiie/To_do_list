import styled from "styled-components";
import { color } from "../../store/color";

export const ContainerWrapper = styled.div<{ lightMode: boolean }>`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background-color: ${({ lightMode }) => (lightMode ? color.lmContainer : color.dmContainer)};
    border-radius: 10%;
`