import React from 'react'
import styled from '@emotion/styled'
import Layout from 'Components/layout'
import DotCanvas from 'Components/DotCanvas/DotCanvas'
import {Title} from 'Components/Type';
import IntroCard from './Components/Intro';
import Jobs from './Components/Jobs';

const BackgroundDotCanvas = styled(DotCanvas)({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
})

const IndexPage = () => (
  <Layout above={<BackgroundDotCanvas />}>
    <Centered style={{marginTop: 100}}>
      <IntroCard />

      <SectionHeading>{`What I've been up to`}</SectionHeading>
      <Jobs />
    </Centered>
  </Layout>
)

const Centered = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 470,
  marginLeft: 'auto',
  marginRight: 'auto'
})

const SectionHeading = styled(Title)({
  fontSize: 28,
  marginTop: 32,
  marginBottom: 24
})

export default IndexPage
