import React from 'react'
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export default class TextRotator extends React.Component {
  static defaultProps = {
    interval: 6000
  };

  state = {
    index: 0
  };

  componentDidMount() {
    // this.interval = setInterval(
    //   this.cycle.bind(this),
    //   this.props.interval
    // );
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  cycle() {
    this.setState(({index}) => ({
      index: (index + 1) % React.Children.toArray(this.props.children).length
    }))
  }

  render () {
    const children = React.Children.toArray(this.props.children);
    const child = children[this.state.index]
    console.log('rendering', {
      index: this.state.index,
      child
    })
    return (
      <TransitionGroup
        className="textRotator"
        component={AnimatedContainer}
      >
        <CSSTransition
          key={this.state.index}
          timeout={3000}
          classNames="animate"
        >
          <Animated onClick={this.cycle.bind(this)}>
            {child}
          </Animated>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

const AnimatedContainer = styled.span({
  display: 'inline-block',
  position: 'relative'
});

const Animated = styled.span({
  position: 'absolute',
  display: 'inline-block',
  transition: '1s all',
  '&.animate-enter': {

  },
  '&.animate-exit': {
    transform: 'translateY(-30px)'
  }
})
