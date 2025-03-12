import styled from "styled-components";
import { color } from "../store/color";

export const ToggleBtnWrapper = styled.div`
    .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;
        background-color: ${color.dmToggle};
    }
    .toggle--checked {
        background-color: ${color.lmToggle};
    }
    .toggle-circle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    // background-color: ${color.toggleCircle};
    }
`