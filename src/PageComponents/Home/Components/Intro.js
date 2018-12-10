import React from 'react';
import styled from '@emotion/styled';
import Card from 'Components/Card';
import Row from 'Components/Row';
import {Title, Subtitle, Colors} from 'Components/Type';

const IntroCard = ({
  photo = 'https://pbs.twimg.com/profile_images/378800000310470879/b66c49481eb365dae8ea695031b60be7_400x400.jpeg'
}) => (
  <Card style={{width: '100%', padding: 0}}>
    <Photo src={photo} />

    <Padded>
      <Row style={{justifyContent: 'space-between'}}>
        <div>
          <Title fontSize={24} marginBottom={4}>Atticus White</Title>
          <Subtitle fontSize={18} marginBottom={0}>Turns ideas into things</Subtitle>
        </div>
        <Social />
      </Row>
    </Padded>
  </Card>
)

const Photo = styled.img({
  width: '100%',
  marginBottom: 8
});

const Padded = styled.div({
  padding: '0px 16px'
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
  marginLeft: 8,
  opacity: 0.5
})

export default IntroCard
