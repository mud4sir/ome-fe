import styled from "styled-components";

interface descBoxProps {
    tiny?: boolean
}

const DescBox = styled.div<descBoxProps>`
line-height: 1.25;
border-bottom: 2px solid ${({theme}) => theme.colors.grey || ''};
&:last-child {
    border-bottom: none;
};
& p {
    color: ${({theme}) => theme.colors.grey || ''};
}
`;

export default DescBox;