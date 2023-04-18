import styled from "styled-components";

interface ImgProps {
    width?: string;
    height?: string;
    title?: string;
    rounded?: boolean;
}


const Image = styled.img<ImgProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  title: ${props => props.title || 'generic content'};
  border-radius: ${props => (props.rounded && '100%')};
  object-fit: contain;
`;

export default Image;