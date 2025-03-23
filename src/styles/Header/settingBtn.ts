import styled from "styled-components";
import { color } from "../../store/color";

export const SettingBtnWrapper = styled.button`
    background: ${color.setting};
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 2.5px solid ${color.settingBorder};
    font-family: 'Cafe24Ohsquare';
    display: flex;
    justify-content: center;
    cursor: pointer;
`