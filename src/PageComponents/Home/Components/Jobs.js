import React from 'react';
import styled from '@emotion/styled';
import Card from 'Components/Card';
import Row from 'Components/Row';
import {Title, Subtitle, Colors} from 'Components/Type';
import jobs from '../../../data/employment';

export default function Jobs (props) {
  return (
    <div style={{width: '100%'}}>
      {jobs.map((job, i) => (
        <Job
          job={job}
          key={i}
          style={{marginBottom: 18}}
        />
      ))}
    </div>
  )
}

const Job = ({job, ...props}) => (
  <Card {...props}>
    <Row>
      <Logo src={job.image} />
      <div>
        <JobTitle>{job.title}</JobTitle>
        <JobSubtitle>{job.subtitle}</JobSubtitle>
      </div>
    </Row>
    {job.date && <RoleDate current={job.date === 'Current'}><span>{job.date}</span></RoleDate>}
  </Card>
)

const Logo = styled.div({
  height: 90,
  width: 90,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: 12,
  marginRight: 16
}, ({src}) => ({
  backgroundImage: `url(${src})`
}))

const JobTitle = styled(Title)({
  fontSize: 24,
  marginBottom: 10
})

const JobSubtitle = styled(Subtitle)({
  fontSize: 18,
  marginBottom: 0
})

const RoleDate = styled.div({
  position: 'absolute',
  textAlign: 'right',
  left: -120,
  width: 100,
  top: 50,
  fontSize: 18,
  color: Colors.Black.NORMAL
}, props => props.current && ({
  // color: '#4ab223',
  color: '#fff',
  // fontWeight: 'bold',
  '& span': {
    display: 'inline-block',
    backgroundColor: '#4ab223',
    padding: '6px 8px',
    borderRadius: 4
  }
}))
