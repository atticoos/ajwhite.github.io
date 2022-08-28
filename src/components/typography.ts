import styled from '@emotion/styled';

type StyledColorProps = {
  color?: string;
};
type StyledSizeProps = {
  size?: string;
};

const colors = ({ color }: StyledColorProps) =>
  color ? `color: ${color};` : undefined;

const sizeDefs: Record<string, string> = {
  xl: '42px',
  lg: '32px',
  md: '24px',
  sm: '16px',
};
const sizes = ({ size }: StyledSizeProps) =>
  size && sizeDefs[size] ? `font-size: ${sizeDefs[size]};` : undefined;

const headingStyles = `
  margin: 0 0 14px 0;
  padding: 0;
  line-height: 1.4;
  ${colors}
`;
export const H2 = styled.h2`
  ${headingStyles}
  ${sizes({ size: 'xl' })}
`;
export const H3 = styled.h3`
  ${headingStyles}
  ${sizes({ size: 'lg' })}
`;
export const H4 = styled.h4`
  ${headingStyles}
  ${sizes({ size: 'md' })}
`;

export const P = styled.p<StyledSizeProps & StyledColorProps>`
  margin: 14px 0;
  line-height: 1.4;
  ${colors}
  ${sizes}
`;

export const A = styled.a<StyledSizeProps & StyledColorProps>`
  text-decoration: underline;
  text-underline-offset: 6px;
  ${colors}
  ${sizes}
`;

export const Span = styled.span<StyledSizeProps & StyledColorProps>`
  ${colors}
  ${sizes}
`;
