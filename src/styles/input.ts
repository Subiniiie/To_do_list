import styled from "styled-components";
import { color } from "../store/color";

export const InputWrapper = styled.input`
    type: "text;
    display: relative;
    width: 80%;
    height: 30px;
    border-radius: 5px;
    border: none;
    border: 10px solid ${color.searchBarBorder} !important;
`