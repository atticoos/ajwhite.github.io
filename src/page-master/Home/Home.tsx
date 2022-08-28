import styled from '@emotion/styled'
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { Colors } from '../../design-system';
import { A, P, Span, TextLoop } from '../../components';
import { DotCanvas, Jeep, StoryNav, Socials } from './components';

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
            <StoryNav
              count={numStories}
              selectedIndex={storyIndex}
              onIndexSelected={onIndexSelected}
            />
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
                <Image
                  src="/static/images/robin-room-display.gif"
                  height={580 * 0.65}
                  width={760 * 0.65}
                  layout="intrinsic"
                />
              </>
            ) : storyIndex === 1 ? (
              <Jeep />
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

const Preview = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
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
