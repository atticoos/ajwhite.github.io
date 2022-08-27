import React from 'react'
import styled from '@emotion/styled'
import Colors from 'common/style/colors'
import DotCanvas from 'Components/DotCanvas/DotCanvas'
import Row from 'Components/Row';
import Section from '../Section'

export default function Learning () {
  return (
    <Section color={Colors.RED}>
      <Section.Title>I love learning</Section.Title>
      <Section.Content narrow>
        <Description>
          <p>
            I learn by doing, and I enjoy sharing what I learn with others through <b>writing</b>, <b>speaking</b>, and <b>mentoring</b>.
          </p>
          <p>
            I have over <u>120</u> projects on <b>Github</b>. Many were valuable.
            Few were remarkable. Those few are on <b>NPM</b> and receive over <b>1M</b> total downloads.
          </p>
        </Description>
      </Section.Content>
    </Section>
  )
}

const Description = styled.div({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: 32,
  lineHeight: 1.3
})

const Content = styled.div({
  position: 'relative',
  width: '80%',
  margin: 'auto'
})
