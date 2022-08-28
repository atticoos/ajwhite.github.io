import styled from '@emotion/styled'
import { A, P, Span, TextLoop } from '../../components';
import { Colors } from '../../design-system';
import { DotCanvas, Socials } from './components';

const textShadow = {
  textShadow: '1px 2px 4px rgba(150, 150, 150, 0.4)'
}

export function Home() {
  return (
    <>
      <BackgroundDotCanvas />
      <Content>
        <P size="lg" style={textShadow}>
          {`I'm `}
          <strong><Span color={Colors.Red}>Atticus White</Span></strong>,<br />
          a Boston & Toronto based{' '}
          <strong>
          <TextLoop>
            <Span color={Colors.Orange}>{'👨‍💻'} Developer</Span>
            <Span color={Colors.Orange}>{'🚚'} Jeeper</Span>
            <Span color={Colors.Orange}>{'👨‍👦'} Mentor</Span>
          </TextLoop>
          </strong>
        </P>
        <P size="lg" style={textShadow}>
          Founding engineer{' '}
          <strong><A href="https://robinpowered.com" color={Colors.Red}>@Robin</A></strong>,<br />
          where I <strong><Span color={Colors.Orange}>shape & build</Span></strong> WorkTech products.
        </P>
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
