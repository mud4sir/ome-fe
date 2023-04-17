import styled from "styled-components";

interface ImgProps {
    width?: string;
    height?: string;
    title?: string;
    rounded?: boolean;
}


const Image = styled.img<ImgProps>`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  title: ${props => props.title || 'generic content'};
  border-radius: ${props => (props.rounded && '100%')}
`;

export default Image;