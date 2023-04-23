import styled from "styled-components";

interface boxProps  {
    width?: string,
    padding?: string,
    radius?: string,
    margin?: string;
}

const BoxWrapper = styled.div<boxProps>`
width: ${ props => props.width ? props.width : '50%' };
padding:  ${ props => props.padding ? props.padding : '10px' };
border-radius:  ${ props => props.radius && props.radius};
margin:  ${ props => props.margin && props.margin};
border: 1px solid;
`;

export default BoxWrapper;