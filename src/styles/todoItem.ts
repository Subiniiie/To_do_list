import styled from "styled-components";
import { color } from "../store/color";

export const TodoItemWrapper = styled.div<{ lightMode: boolean; isSelected: boolean }>`
    width: 100%;
    height: 70px;
    background: ${({ lightMode, isSelected }) => (lightMode ? (
                                                    isSelected ? color.lmChoice : color.lmArticle
                                                ) : (
                                                    isSelected ? color.dmChoice : color.dmArticle
                                                ))};
    font-family: 'Cafe24Ohsquare';
    color: ${({ lightMode }) => (lightMode ? color.lmTitle : color.dmTitle )};
    border-radius: 15px;
    margin: 5px 0;
    cursor: pointer;
`