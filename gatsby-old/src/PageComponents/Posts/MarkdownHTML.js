import React from 'react'
import styled from '@emotion/styled'

const MarkdownHTML = styled.div({
  'img': {
    maxWidth: '80%',
    display: 'block',
    margin: '20px auto',
    maxHeight: 400
  }
});

export default ({children}) => (
  <MarkdownHTML
    dangerouslySetInnerHTML={{__html: children}}
  />
)
