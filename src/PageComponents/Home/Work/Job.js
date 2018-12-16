import React from 'react'
import styled from '@emotion/styled'
import Card from 'Components/Card';
import Row from 'Components/Row';
import {Title, Subtitle, Colors} from 'Components/Type';

const Job = ({job, ...props}) => (
  <Container {...props}>
    <Row>
      <Logo src={job.image} />
      <div>
        <JobTitle>{job.title}</JobTitle>
        <JobSubtitle>{job.subtitle}</JobSubtitle>
      </div>
    </Row>
    {job.date && <RoleDate current={job.date === 'Current'}>
      <span>{job.date === 'Current' ? 'Now' : job.date}</span>
    </RoleDate>}
  </Container>
)

export default Job

const Container = styled.div({
  position: 'relative',
  marginBottom: 32,
  padding: 16,
  borderRadius: 8
}, ({active}) => active && ({
  backgroundColor: 'rgba(0, 0, 0, 0.15)'
}))

const Logo = styled.div({
  height: 72,
  width: 72,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: 12,
  marginRight: 16
}, ({src}) => ({
  backgroundImage: `url(${src})`
}))

const JobTitle = styled(Title)({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: 24,
  marginBottom: 4
})

const JobSubtitle = styled(Subtitle)({
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: 18,
  marginBottom: 0
})

const RoleDate = styled.div({
  position: 'absolute',
  textAlign: 'right',
  left: -120,
  width: 100,
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: 18,
  color: 'rgba(255, 255, 255, 0.25)'
}, props => props.current && ({
  color: 'rgba(255, 255, 255, 0.8)',

  // '& span': {
  //   display: 'inline-block',
  //   backgroundColor: '#4ab223',
  //   padding: '6px 8px',
  //   borderRadius: 4
  // }
}))
