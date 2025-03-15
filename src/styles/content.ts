import styled from "styled-components";
import { color } from "../store/color";

export const ContentWrapper = styled.div`
    width: 420px;
    height: 220px;
    background: ${color.lmContentModal};
    border-radius: 25px;
    z-index: 201;
`