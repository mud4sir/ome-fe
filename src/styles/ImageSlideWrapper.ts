import styled from "styled-components";
interface ImageSlideWrapperProps {
    height?: string;
}

const ImageSlideWrapper = styled.div<ImageSlideWrapperProps>`
height: ${({ height }) => height ? height : '100px' };
overflow: hidden;
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 10px;
margin-top: 15px;
flex-direction: row;`;


export default ImageSlideWrapper;