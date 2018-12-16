import React from 'react'
import styled from '@emotion/styled'
import Layout from 'Components/layout'
import DotCanvas from 'Components/DotCanvas/DotCanvas'
import {Title} from 'Components/Type';
import IntroCard from './Components/Intro';
import Intro2 from './Components/Intro2';
import Jobs from './Components/Jobs';
import Work from './Work'
import Learning from './Learning';

const BackgroundDotCanvas = styled(DotCanvas)({
  // position: 'fixed',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
})

const IndexPage = () => (
  <Layout above={null}>
    <div style={{height: '100vh'}}>
      <BackgroundDotCanvas />
      <Intro2 />
    </div>

    <div style={{position: 'relative'}}>
    <Work />
    <Learning />

    <Centered style={{marginTop: 200}}>

      <SectionHeading>{`What I've been up to`}</SectionHeading>
      <Jobs />
    </Centered>
    </div>
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
