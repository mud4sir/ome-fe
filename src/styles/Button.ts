import styled from 'styled-components';

// Define the props interface
interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${props => (props.primary ? '#007bff' : '#33b249')};
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export default Button;