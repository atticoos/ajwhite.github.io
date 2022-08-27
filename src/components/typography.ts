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

const pSizes: Record<string, string> = {
  lg: '32px'
};
export const P = styled.p<StyledSizeProps & StyledColorProps>`
  margin: 14px 0;
  line-height: 1.3;
  ${colors}
  ${({ size }) => size && pSizes[size]
    ? `font-size: ${pSizes[size]};`
    : undefined }
`;

export const Span = styled.span<StyledColorProps>`
  ${colors}
`;
