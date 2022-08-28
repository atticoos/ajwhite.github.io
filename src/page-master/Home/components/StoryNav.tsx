import { useMemo } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../../design-system';

type Props = {
  count: number
  selectedIndex: number
  onIndexSelected: (i: number) => void
}

export function StoryNav ({
  count,
  selectedIndex,
  onIndexSelected
}: Props): JSX.Element {
  const range = useMemo(
    () => Array.from(new Array(count)).map((_, i) => i),
    [count]
  )
  return (
    <div style={{
      display: 'flex'
    }}>
      {range.map(i => (
        <Dot
          key={i}
          selected={i === selectedIndex}
          onClick={() => onIndexSelected(i)}
        />
      ))}
    </div>
  )
}

const Dot = styled.div<{selected: boolean}>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 8px;
  // box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition-duration: 0.3s;
  background-color: ${({ selected }) => selected
    ? Colors.Black
    : Colors.Gray};
  &:hover {
    transform: scale(1.2);
  }
`;
