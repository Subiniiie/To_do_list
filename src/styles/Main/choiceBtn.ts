import styled from "styled-components";
import checkmark_black from "../../assets/icon/checkmark_black.png";
import checkmark_black_default from "../../assets/icon/checkmark_black_default.png";
import checkmark_white from "../../assets/icon/checkmark_white.png";
import checkmark_white_default from "../../assets/icon/checkmark_white_default.png";

export const ChoiceBtnWrapper = styled.div<{ lightMode: boolean; isSelected: boolean }>`
background: url(${({ lightMode, isSelected }) => (lightMode ? (
                                                    isSelected ? checkmark_black : checkmark_black_default
                                                ) : (
                                                    isSelected ? checkmark_white : checkmark_white_default
                                                ))}
);
background-size: cover;
width: 30px;
height: 30px;
`