import styled from '@emotion/styled';

type StyledColorProps = {
  color?: string;
}
type StyledSizeProps = {
  size?: string;
}

const colors = ({ color }: StyledColorProps) => color
  ? `color: ${color};`
  : undefined;

const sizeDefs: Record<string, string> = {
  lg: '32px',
  md: '24px',
  sm: '16px'
};
const sizes = ({ size }: StyledSizeProps) => size && sizeDefs[size]
  ? `font-size: ${sizeDefs[size]};`
  : undefined;

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
