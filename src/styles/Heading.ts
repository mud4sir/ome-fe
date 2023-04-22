import styled, { css } from 'styled-components';

const baseStyles = css`
  color: ${props => props.theme.colors.black || ''};
  line-height: 1.2;
`;

const H1 = styled.h1`
  ${baseStyles}
  font-size: ${props => props.theme.sizes.h1};
`;

const H2 = styled.h2`
  ${baseStyles};
  font-size: ${props => props.theme.sizes.h2};
`;

const H3 = styled.h3`
  ${baseStyles};
  font-size: ${props => props.theme.sizes.h3};
`;

const H4 = styled.h4`
  ${baseStyles};
  font-size: ${props => props.theme.sizes.h4};
`;

const Heading = {
  H1,
  H2,
  H3,
  H4,
};

export default Heading;
