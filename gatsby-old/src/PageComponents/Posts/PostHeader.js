import React from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import {Link} from 'gatsby'
import Tags from '../../data/tags'

const tagColors = {
  react: '#31a2d4'
}

export default function PostHeader({title, tags, date, project}) {
  tags = tags.map(t => Tags[t])
  const primaryTag = tags[0]
  return (
    <Container color={primaryTag && primaryTag.color.background}>
      <Content>
        <Link to="/">Home</Link>
        <Link to="/blog">Writing</Link>

        <Heading
          title={title}
          icon={primaryTag && primaryTag.icon}
        />

        {date && <Meta>Date: {moment(date).format('MMMM YYYY')}</Meta>}
        {tags && tags.length > 0 && <Meta>Tags: {tags.map(t => t.label).join(', ')}</Meta>}
        {project && <Meta>Project: {project}</Meta>}
      </Content>
    </Container>
  )
}

function Heading ({title, icon}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '60px 0'
    }}>
      <Title>{title}</Title>
      {icon && (
        <img src={`https://atticuswhite.com/dist/images/${icon}`} />
      )}
    </div>
  )
}

const Container = styled.div({
  padding: '32px 0',
  color: '#fff',
}, ({color}) => ({
  backgroundColor: color
}))

const Content = styled.div({
  maxWidth: 980,
  margin: 'auto'
})

const Title = styled.div({
  fontSize: 32,
  textAlign: 'center',
  marginBottom: 32
})

const Meta = styled.div({
  fontSize: 16,
  marginBottom: 2
})
