import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'gatsby'
import TextLoop from 'react-text-loop';
import Row from 'Components/Row';
import Section from '../Section'

const Colors = {
  // YELLOW: '#F8E9A1',
  YELLOW: '#ffaf00',
  RED: '#F76C6C',
  BLUE: '#2f94cc',
  PURPLE: '#931ef7',
  // PURPLE: '#374785',
  DARK: '#24395E'
}

export default function Intro2 ({smartMirrorPost}) {
  const years = new Date().getFullYear() - 2008;
  return (
    <Container>
      <Section.Content narrow>
      <p>
        I'm <Loud>Atticus White</Loud>,
        a Boston based
        {' '}

        <Loud>
          <TextLoop>
            <span>👨‍💻 software developer</span>
            <span>👨‍👦 mentor</span>
            <span>📐 tech lead</span>
            {/* <span>🙋‍♂ team lead</span>
            <span>🎙 speaker</span> */}
            <span>⚙️ weekend hacker</span>
          </TextLoop>
        </Loud>
      </p>
      <p>
        I've spent most of the last decade in Javascript,
        building everything from websites to futuristic
        {' '}
        <CatchyLink to={smartMirrorPost.frontmatter.permalink}>
          smart mirrors
        </CatchyLink>
        .
      </p>
      <p>
        Today I'm building a smarter workplace at
        {' '}
        <EmployerLink href="https://robinpowered.com" target="_blank">
          Robin
        </EmployerLink>,
        leading front end teams working with <Technology>React</Technology>.
      </p>
      <p>
        I'm most active on <Twitter>Twitter</Twitter> and <Github>Github</Github>.
      </p>

      <Social />
      </Section.Content>
    </Container>
  )
}

const Container = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  width: '80%',
  margin: 'auto',
  fontSize: 32,
  lineHeight: 1.3
});

const Loud = styled.span({
  color: Colors.RED
})

const Catchy = styled.span({
  color: Colors.YELLOW
})

const CatchyLink = styled(Link)({
  color: Colors.YELLOW,
  textDecoration: 'none',
  borderBottom: `2px solid ${Colors.YELLOW}`
})

const Technology = styled.span({
  color: Colors.BLUE
})

const Twitter = styled(Technology)({
  borderBottom: `2px solid ${Colors.BLUE}`
})

const Github = styled(Catchy)({
  borderBottom: `2px solid ${Colors.YELLOW}`
})

const EmployerLink = styled.a({
  color: Colors.RED,
  textDecoration: 'none',
  borderBottom: `2px solid ${Colors.RED}`
})

const Social = () => (
  <Row>
    <MockSocialIcon />
    <MockSocialIcon />
    <MockSocialIcon />
  </Row>
)

const MockSocialIcon = styled.div({
  height: 32,
  width: 32,
  borderRadius: 4, //'50%',
  // backgroundColor: 'lightgray',
  border: '3px solid lightgray',
  marginRight: 8,
  // opacity: 1
})
