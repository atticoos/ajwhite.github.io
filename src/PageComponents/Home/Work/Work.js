
import React from 'react'
import styled from '@emotion/styled'
import jobs from '../../../data/employment'
import Colors from 'common/style/colors'
import DotCanvas from 'Components/DotCanvas/DotCanvas'
import Row from 'Components/Row';
import Section from '../Section';
import Job from './Job'

const BackgroundDots = styled(DotCanvas)({
  opacity: 0.05,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
});

export default function Work (props) {
  return (
    <Section color={Colors.DARK}>
      <BackgroundDots
        maskStyle={{
          backgroundColor: 'transparent'
        }}
      />
      <Section.Content>
        <Section.Title>I love building products</Section.Title>
        <Row style={{justifyContent: 'space-around'}}>
          <div>
            {jobs.map((job, i) => (
              <Job
                job={job}
                key={i}
                active={i === 0}
                style={{marginBottom: 18}}
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
      </Section.Content>
    </Section>
  )
}

const Content = styled.div({
  position: 'relative'
})
