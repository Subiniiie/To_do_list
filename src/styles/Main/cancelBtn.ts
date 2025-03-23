import styled from "styled-components";
import { color } from "../../store/color";

export const CancelBtnWrapper = styled.button`
        background: ${color.complete};
        width: 40px;
        height: 25px;
        font-family: 'Cafe24Ohsquare';
        border-radius: 10px;
        border: 2px solid ${color.completeBorder};
        cursor: pointer;
`