import styled from "styled-components";
import { color } from "../store/color";

export const ToggleBtnWrapper = styled.div`
    .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;
        border: 2px solid ${color.dmToggleBorder};
        background-color: ${color.dmToggle};
        cursor: pointer;
    }
    .toggle--checked {
        background-color: ${color.lmToggle};
        border: 2px solid ${color.lmToggleBorder};
    }
    .toggle-circle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${color.toggleCircle};
    }
    .toggleBtn--checked {
    position: relative;
    transition: 2s;
    left: 27px;
    }
`