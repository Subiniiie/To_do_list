import styled from "styled-components";
import { color } from "../../store/color";

export const SettingTitleWrapper = styled.p<{ lightMode: boolean }>`
    font-size: 14px;
    font-family: 'Cafe24Ohsquare';
    color: ${({ lightMode }) => lightMode ? color.lmTitle : color.dmTitle};
    margin-left: 13px;
`