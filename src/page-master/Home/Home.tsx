import styled from '@emotion/styled'
import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { A, P, Span, TextLoop } from '../../components';
import { Colors } from '../../design-system';
import { DotCanvas, Socials } from './components';

const textShadow = {
  textShadow: '1px 2px 4px rgba(150, 150, 150, 0.4)'
}

const stories = [{
  location: 'Boston',
  role: '👨‍💻 Developer',
  subject: '@Robin',
  activity: 'shape & build'
}, {
  location: 'Toronto',
  role: '🚚 Jeeper',
  subject: '@atticuswashere',
  activity: 'explore & adventure'
}, {
  location: 'Internet',
  role: '🧪 Tinkerer',
  subject: '@atticoos',
  activity: 'code & experiment'
}]
export function Home() {

  const [storyIndex, setStoryIndex] = useState(0)

  useInterval(() => {
    setStoryIndex(prev => (prev + 1) % 3);
  }, 4000);
  console.log(storyIndex)

  return (
    <>
      <BackgroundDotCanvas />
      <Content>
        <P size="xl" style={{...textShadow, marginBottom: -12}}>
          {`I'm`} <strong><Span color={Colors.Red}>Atticus White</Span></strong>,
          <br />
          <TextLoop index={storyIndex} animate={false}>
            <>
              a <strong>Boston</strong>
            </>
            <>
              a <strong>Toronto</strong>
            </>
            <>
              an <strong>Internet</strong>
            </>
          </TextLoop>
          {' based '}
          <strong>
            <TextLoop index={storyIndex}>
              <Span color={Colors.Orange}>👨‍💻 Developer</Span>
              <Span color={Colors.Orange}>🚚 Jeeper</Span>
              <Span color={Colors.Orange}>🧪 Tinkerer</Span>
            </TextLoop>
          </strong>
        </P>
        <br />
        <P size="lg" style={textShadow}>
          <TextLoop index={storyIndex} animate={false}>
            <>
              Founding engineer <A href="https://robinpowered.com" color={Colors.Red}>@Robin</A>,
              <br />
              where I <Span color={Colors.Orange}>shape & build</Span> WorkTech products
            </>
            <>
              Having <A href="#" color={Colors.Red}>adventures</A>,
              <br/>
              where I <Span color={Colors.Orange}>explore</Span> {`Ontario's`} great highlands
            </>
            <>
              Nerding out on <A href="#" color={Colors.Red}>@Github</A>,
              <br/>
              where I tinker on <A href="#" color={Colors.Orange}>projects</A>
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
      </Content>
    </>
  );
}

const Content = styled.section`
  position: fixed;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BackgroundDotCanvas = styled(DotCanvas)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
