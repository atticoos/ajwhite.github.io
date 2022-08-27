import React, { ReactNode, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInterval } from 'usehooks-ts';

type Props = {
  children: ReactNode
}

export function TextLoop({children}: Props): JSX.Element {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => React.Children.toArray(children), [children]);
  useInterval(() => {
    setIndex(prevIndex => (prevIndex + 1) % items.length);
  }, 3000);
  return (
    <Container>
      <AnimatePresence>
        <motion.span
          key={index}
          style={{display: 'inline-block'}}
          initial={{ transform: 'translateY(-40px)' }}
          animate={{ transform: 'translateY(0px)' }}
          exit={{ display: 'none' }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </Container>
  )
}

const Container = styled.span`
  overflow: hidden;
`;
