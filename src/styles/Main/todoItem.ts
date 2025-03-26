import styled from "styled-components";
import { color } from "../../store/color";

export const TodoItemWrapper = styled.div<{ lightMode: boolean; isSelected: boolean; isHover: boolean }>`
    width: 90%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    transition: all 0.3s ease-in-out;

    ${({ isHover }) => isHover && `
        width: 100%; 
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    `}
`