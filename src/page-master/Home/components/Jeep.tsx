import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Image from 'next/image';
import { m, motion } from 'framer-motion';

export function Jeep() {
  return (
    <motion.div
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear',
      }}
      style={{ transform: rot(13) }}
      animate={{
        transform: [
          `${rot(13)} ${y(0)}`,
          `${rot(12.5)} ${y(0.5)}`,
          `${rot(12)} ${y(1)}`,
          `${rot(12.5)} ${y(1.5)}`,
          `${rot(12)} ${y(1.8)}`,
          `${rot(11)} ${y(1.4)}`,
          `${rot(12)} ${y(1)}`,
          `${rot(12.6)} ${y(0.5)}`,
          `${rot(13)} ${y(0)}`,
          `${rot(14)} ${y(-0.5)}`,
          `${rot(13)} ${y(0)}`,
        ],
      }}
    >
      <Image
        src="/static/images/jeep-logo.png"
        height={340}
        width={340}
        layout="intrinsic"
      />
    </motion.div>
  );
}

const y = (val: number): string => `translateY(${val}%)`;
const rot = (deg: number): string => `rotate(${deg}deg)`;

const bouncy = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -30px, 0);
}

70% {
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0,-4px,0);
}
`;
const BouncyImage = styled(Image)`
  animate: ${bouncy} 1s ease infinite;
`;
