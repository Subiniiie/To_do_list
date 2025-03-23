import styled from "styled-components";
import { color } from "../../store/color";

export const ContentInputWrapper = styled.input.attrs({ type: "text" })`
    width: 80%;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: ${color.modalInput};
`