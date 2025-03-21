import styled from "styled-components";
import { color } from "../store/color";

export const SettingOptionWrapper = styled.div<{ lightMode: boolean }>`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 40px;
    right: 100px;
    width: 150px;
    height: 150px;
    background-color:  ${({ lightMode }) => lightMode ? color.lmSettingOption : color.dmSettingOption };
    border: 2px solid ${({ lightMode }) => lightMode ? color.lmSettingOptionBorder : color.dmSettingOptionBorder};
    border-radius: 30px;
    color: red;
    justify-content: space-around;
    cursor: pointer;
    z-index: 100;
`