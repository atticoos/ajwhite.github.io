import styled from '@emotion/styled'
import { keyframes } from '@emotion/react';
import Image from 'next/image';
import {m, motion} from 'framer-motion';
import { useMemo, useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { A, P, H2, Span, TextLoop } from '../../components';
import { Colors } from '../../design-system';
import { DotCanvas, Socials } from './components';
import { DeskDemo } from './components/DeskDemo';

const textShadow = {
  textShadow: '1px 2px 4px rgba(150, 150, 150, 0.4)'
}

const links = {
  ig: 'https://www.instagram.com/atticuswashere/',
  gh: 'https://github.com/ajwhite',
  tw: 'https://twitter.com/atticoos'
}
export function Home() {
  const numStories = 3;
  const [indexSelected, setIndexSelected] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0)
  useInterval(() => {
    setStoryIndex(prev => (prev + 1) % numStories);
  }, indexSelected ? null : 6000);
  // const storyIndex = 2

  const onIndexSelected = (index: number) => {
    setIndexSelected(true)
    setStoryIndex(index)
  }

  return (
    <>
      <BackgroundDotCanvas />
      <Center>
        <Content>
          <div style={{width: 640}}>
            <StoryNav count={numStories} selectedIndex={storyIndex} onIndexSelected={onIndexSelected} />
            <P size="xl" style={{...textShadow, marginBottom: -12}}>
              {`I'm`} <strong><Span color={Colors.Red}>Atticus White</Span></strong>,
              <br />
              <TextLoop index={storyIndex} animate={false}>
                <>a <strong>Boston</strong></>
                <>a <strong>Toronto</strong></>
                <strong>Internet</strong>
              </TextLoop>
              {' based '}
              <strong>
                <TextLoop index={storyIndex}>
                  <Span color={Colors.Orange}>👨‍💻 Developer</Span>
                  <Span color={Colors.Orange}>🚜 Jeeper</Span>
                  <Span color={Colors.Orange}>🖥️ Technologist</Span>
                </TextLoop>
              </strong>
            </P>
            <br />
            <P size="lg" style={textShadow}>
              <TextLoop index={storyIndex} animate={false}>
                <>
                  Founding engineer <A href="https://robinpowered.com" color={Colors.Red}>@Robin</A> since 2014,
                  <br />
                  where I <Span color={Colors.Orange}>shape & build</Span> WorkTech products
                </>
                <>
                  Adventuring in <A href={links.ig} color={Colors.Red}>4 wheel drive</A>,
                  <br/>
                  where I <Span color={Colors.Orange}>discover & explore</Span> Canada🇨🇦
                </>
                <>
                  Nerding out on <A href={links.gh} color={Colors.Red}>@Github</A> & <A href={links.tw} color={Colors.Blue}>@Twitter</A>,
                  <br/>
                  where we share <Span color={Colors.Orange}>knowledge & contribute</Span>
                </>
              </TextLoop>
            </P>
            <br />
            <P size="md">
              <A href="https://fs.blog/mental-models/">Mental Models</A>
              {' '}&middot;{' '}
              <A href="https://basecamp.com/shapeup/webbook">Shape Up</A>
              {' '}&middot;{' '}
              <A href="https://en.wikipedia.org/wiki/Domain-driven_design">Domain Driven Design</A>
            </P>
            <Socials />
          </div>

          <Preview>
            {storyIndex === 0 ? (
              <>
                {/* <Image
                  src="/static/images/robin-office.png"
                  width={550}
                  height={550}
                  // width={856 * 0.7}
                  // height={856 * 0.7}
                  style={{
                    borderRadius: '25%'
                    // boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.3)'
                  }}
                /> */}
                <Image
                  src="https://assets-global.website-files.com/5ff621612284ed8ec04c11c9/5ff621612284eddae04c1402_Room_display_gif1.gif"
                  height={580 * 0.65}
                  width={760 * 0.65}
                  layout="intrinsic"
                />
              </>
            ) : storyIndex === 1 ? (
              <motion.div
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'linear'
                }}
                style={{transform: rot(13)}}
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
                  ]
                }}
              >
                <Image
                  src="/static/images/jeep-logo.png"
                  height={340}
                  width={340}
                  layout="intrinsic"
                />
              </motion.div>
            ) : (
              <Span color={Colors.Red} style={{fontSize: 246, fontWeight: 'bold'}}>
                {`</>`}
              </Span>
            )}
          </Preview>
        </Content>
      </Center>
    </>
  );
}

const StoryNav = ({
  count,
  selectedIndex,
  onIndexSelected
}: {
  count: number,
  selectedIndex: number,
  onIndexSelected: (i: number) => void
}) => {
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

const StatusBoard = () => (
  <Image
    src="/static/images/status-board.png"
    width={632}
    height={632}
  />
)

const Preview = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const y = (val: number): string => `translateY(${val}%)`
const rot = (deg: number): string => `rotate(${deg}deg)`

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

const Center = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;

  @media only screen and (max-width: 640px) {
    justify-content: center;
  }
`;

const Content = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 420px;

  @media only screen and (min-width: 640px) {
    // width: 640px;
    // margin-left: 80px;
  }
`;

const BackgroundDotCanvas = styled(DotCanvas)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
