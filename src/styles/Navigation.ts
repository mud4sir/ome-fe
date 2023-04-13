import styled from 'styled-components';
import primaryColorBg from './Variables';
import blackTxt from './Variables';

// Define the props interface
interface NavProps {
  primary?: boolean;
}

const Navigation = styled.button<NavProps>`
  background-color: ${primaryColorBg};
  color: ${blackTxt};
  padding: 10px;
  border: none;
  cursor: pointer;
  display: flex;
`;

export default Navigation;