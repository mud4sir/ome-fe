import styled from "styled-components";

const DescBox = styled.div`
padding: 20px 0px;
line-height: 1.25;
border-bottom: 2px solid ${props => props.theme.colors.grey || ''};
&:last-child {
    border-bottom: none;
}
`;

export default DescBox;