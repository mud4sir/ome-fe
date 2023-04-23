import styled from "styled-components";

interface ImgProps {
    width?: string;
    height?: string;
    title?: string;
    rounded?: boolean;
    logo?: boolean;
}


const Image = styled.img<ImgProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  title: ${props => props.title || 'generic content'};
  border-radius: ${props => (props.rounded && '50%')};
  object-fit: contain;
  background-color: ${({theme: {colors}, logo}) => logo ? '' : colors.black};
  cursor: pointer;
`;

export default Image;