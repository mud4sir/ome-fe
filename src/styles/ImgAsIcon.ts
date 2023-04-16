import styled from "styled-components";

interface ImgProps {
    width?: string;
    height?: string;
    title?: string;
    rounded?: boolean;
}


const ImgAsIcon = styled.img<ImgProps>`
  width: ${props => props.width || '50px'};
  height: ${props => props.height || '50px'};
  title: ${props => props.title || 'generic content'};
  border-radius: ${props => (props.rounded && '100%')}
`;

export default ImgAsIcon;