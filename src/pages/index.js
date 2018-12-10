import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Image from '../components/image'
import DotCanvas from 'Components/DotCanvas/DotCanvas'

const BackgroundDotCanvas = styled(DotCanvas)({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
})

const IndexPage = () => (
  <Layout above={<BackgroundDotCanvas />}>
    <h1>Hi people</h1>
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
