import React from 'react';
import styled from '@emotion/styled';
import TextLoop from 'react-text-loop';

const Colors = {
  // YELLOW: '#F8E9A1',
  YELLOW: '#ffaf00',
  RED: '#F76C6C',
  BLUE: '#A8D0E6',
  PURPLE: '#931ef7',
  // PURPLE: '#374785',
  DARK: '#24395E'
}

export default function Intro2 () {
  const years = new Date().getFullYear() - 2008;
  return (
    <Container>
      <p>
        I'm <Loud>Atticus White</Loud>,
        a Boston based
        {' '}

        <Loud>
          <TextLoop>
            <span>Software Developer</span>
            <span>Team Lead</span>
            <span>Speaker</span>
            <span>Tech Lead</span>
            <span>Weekend Hacker</span>
          </TextLoop>
        </Loud>
      </p>
      <p>
        I first got my hands on <Catchy>JavaScript</Catchy> {years} years ago.
        I've been learning and exploring new boundaries ever since.
      </p>
      <p>
        Today I'm building <Employer>Robin</Employer> in <Technology>React</Technology>.
      </p>
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

const Technology = styled.span({
  color: Colors.BLUE
})

const Employer = styled.span({
  color: Colors.RED,
  borderBottom: `2px solid ${Colors.RED}`
})
