import React from 'react'
import styled from '@emotion/styled'
import Colors from 'common/style/colors'
import Section from '../Section'

export default function Footer () {
  return (
    <Section>
      <Section.Content narrow>
        <Description>
          This site was built in React with Gatsby and shipped with Github Pages.
        </Description>
      </Section.Content>
    </Section>
  )
}

const Description = styled.div({
  fontSize: 28,
  // color: Colors.DARK //'rgba(255, 255, 255, 1)'
})
