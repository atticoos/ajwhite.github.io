import React, { ReactNode, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInterval } from 'usehooks-ts';

type Props = {
  animate?: boolean
  children: ReactNode
  index?: number
}

export function TextLoop({
  animate = true,
  children,
  index: controlledIndex
}: Props): JSX.Element {
  const isControlled = controlledIndex !== undefined;
  const [managedIndex, setIndex] = useState(0);
  const index = isControlled ? controlledIndex : managedIndex;
  const items = useMemo(() => React.Children.toArray(children), [children]);

  useInterval(() => {
    setIndex(prevIndex => (prevIndex + 1) % items.length);
  }, isControlled ? null : 3000);


  return (
    <Container>
      {animate ? (
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            style={{display: 'inline-block'}}
            initial={{ transform: 'translateY(-20px)' }}
            animate={{ transform: 'translateY(0px)' }}
            transition={{ type: 'spring', duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <span style={{display: 'inline-block'}}>{items[index]}</span>
          </motion.span>
        </AnimatePresence>
      ) : items[index]}
    </Container>
  )
}

const Container = styled.span`
  overflow: hidden;
`;
