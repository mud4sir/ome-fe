import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({primary, theme: {colors}}) => (primary ? colors.primaryBtn : colors.secondaryBtn)};
  color: ${props => props.theme.colors.white};
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export default Button;