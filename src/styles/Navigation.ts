import styled from 'styled-components';

const Navigation = styled.nav`
  background-color: ${props => props.theme.colors.primaryColorBg || ''};
  color: ${props => props.theme.colors.black || ''};
  padding: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.2);
`;

export default Navigation;