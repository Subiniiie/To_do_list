import styled from "styled-components";
import { color } from "../store/color";

export const SettingLineWrapper = styled.div<{ lightMode: boolean}>`
    width: 100%;
    height: 2px;
    background-color: ${({ lightMode }) => lightMode ? color.lmSettingOptionBorder : color.dmSettingOptionBorder };
`