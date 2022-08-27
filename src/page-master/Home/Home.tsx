import styled from '@emotion/styled'
import { P, Span } from '../../components';
import { DotCanvas } from '../../components/DotCanvas/DotCanvas';
import { Colors } from '../../design-system';
import { Socials } from './Socials';

// Text loop, https://codepen.io/Gumball22/pen/podZOo

export function Home() {
  return (
    <>
      <BackgroundDotCanvas />
      <Content>
        <P size="lg">
          I'm <Span color={Colors.Red}>Atticus White</Span>, a Boston & Toronto based <Span color={Colors.Orange}>👨‍💻developer</Span>
        </P>
        <P size="lg">
          8 years ago we created {' '}
          <a href="https://robinpowered.com"><Span color={Colors.Red}>Robin</Span></a>, where I continue to <Span color={Colors.Orange}>shape & build</Span> WorkTech products.
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
