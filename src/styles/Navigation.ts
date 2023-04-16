import styled from 'styled-components';
import primaryColorBg from './Variables';
import blackTxt from './Variables';

// Define the props interface
interface NavProps {
  primary?: boolean;
}

const Navigation = styled.nav<NavProps>`
  background-color: ${primaryColorBg};
  color: ${blackTxt};
  padding: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.2);
`;

export default Navigation;