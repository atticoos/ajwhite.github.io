import React from 'react';
import styled from '@emotion/styled';
import Card from 'Components/Card';
import Row from 'Components/Row';
import {Title, Subtitle, Colors} from 'Components/Type';

/*
Inspiration

http://www.charliewaite.me/
http://jessdesigntan.com/
http://sachagreif.com/
*/

const IntroCard = ({
  photo = 'https://pbs.twimg.com/profile_images/378800000310470879/b66c49481eb365dae8ea695031b60be7_400x400.jpeg'
}) => (
  <Card style={{width: '80%', margin: 'auto', padding: 0}}>
    <Photo
      src={photo}
      style={{
        borderRadius: '50%',
        overflow: 'hidden',
        width: 100,
        margin: '-50px auto 0 auto'
      }}
    />

    <Padded>
      <Intro>
        <p>I'm <b>Atticus White</b>. I started coding {(2018 - 2009) * 365} days ago. Today, I'm a React developer building Robin.</p>
        <p>I live in Boston</p>
      </Intro>
      {/* <Title fontSize={24} marginBottom={4}>Atticus White</Title>
      <Subtitle fontSize={18} marginBottom={0}>Turns ideas into things</Subtitle> */}
      <Social />
    </Padded>
  </Card>
)

const Intro = styled.div({
  fontSize: 24
})

const Photo = styled.img({
  width: '100%',
  marginBottom: 8
});

const Padded = styled.div({
  padding: 40 //'0px 16px'
})

const Social = () => (
  <Row>
    <MockSocialIcon />
    <MockSocialIcon />
    <MockSocialIcon />
  </Row>
)

const MockSocialIcon = styled.div({
  height: 28,
  width: 28,
  borderRadius: '50%',
  backgroundColor: Colors.Gray.LIGHT,
  marginRight: 8,
  opacity: 0.5
})

// export default IntroCard

export default () => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh'}}>
    <div style={{fontSize: 32}}>
      I'm <b style={{fontSize: 42}}>Atticus White</b>, a JavaScript developer who started coding 3523 days ago.
    </div>
  </div>
)
