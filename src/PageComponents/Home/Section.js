import React from 'react'
import styled from '@emotion/styled'

const Container = styled.section({
  overflow: 'hidden',
  position: 'relative',
  padding: '120px 32px'
}, ({color}) => ({backgroundColor: color}))

const Content = Container.Content = styled.div({
  maxWidth: 1280,
  // paddingLeft: 32,
  // paddingRight: 32,
  margin: 'auto'
}, ({narrow}) => narrow && ({
  maxWidth: 980
}))

const Title = Container.Title = styled.div({
  marginBottom: 120,
  fontWeight: 600,
  color: 'rgba(255, 255, 255, 1)',
  fontSize: 42,
  textAlign: 'center'
})

export default Container;
