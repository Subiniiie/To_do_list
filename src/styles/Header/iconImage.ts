import styled from "styled-components";

export const IconImageWrapper = styled.div<{ iconImage: string }>`
    background: url(${(props) => props.iconImage});
    background-size: cover;
    width: 18px;
    height: 18px;
    margin-right: 12px;
`