
import React from 'react'
import styled from '@emotion/styled'
import jobs from '../../../data/employment'
import Colors from 'common/style/colors'
import Row from 'Components/Row';
import Job from './Job'

export default function Work (props) {
  return (
    <Container>
      <Content>
        <Title>I love building products.</Title>
        <Row style={{justifyContent: 'space-between'}}>
          <div>
            {jobs.map((job, i) => (
              <Job
                job={job}
                key={i}
                active={i === 0}
                style={{marginBottom: 32}}
              />
            ))}
          </div>
          <div>
            <img
              src="https://robinpowered.com/assets/images/room-displays/hero-tablet.165be582.png"
              style={{width: 580}}
            />
          </div>
        </Row>
      </Content>
    </Container>
  )
}

const Title = styled.div({
  marginBottom: 120,
  marginTop: -120,
  color: 'rgba(255, 255, 255, 1)',
  fontSize: 42,
  textAlign: 'center'
})

const Container = styled.div({
  backgroundColor: Colors.DARK,
  padding: '120px 0',
  // height: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row'
  // width: '80%',
  // margin: '300px auto'
})

const Content = styled.div({
  width: '80%',
  padding: '80px 0',
  margin: 'auto'
})
