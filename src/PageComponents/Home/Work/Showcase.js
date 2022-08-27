import React from 'react'
import styled from '@emotion/styled'
import Image from 'Components/image'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

function Showcase () {
  return (
    <div>
      <Carousel>
        <img
          src="https://robinpowered.com/assets/images/room-displays/hero-tablet.165be582.png"
          style={{width: 580}}
        />
        <Image
          style={{width: 420, border: '12px solid #060505'}}
        />
      </Carousel>
    </div>
  )
}
export default Showcase


class Carousel extends React.Component {
  state = {
    index: 0
  }

  cycle = () => {
    this.setState(({index}) => ({
      index: (index + 1) % React.Children.toArray(this.props.children).length
    }))
  }

  render () {
    const children = React.Children.toArray(this.props.children)
    const child = children[this.state.index]
    return (
      <TransitionGroup
        timeout={3000}
        onClick={this.cycle}
      >
        <CSSTransition
          key={this.state.index}
          in
          appear
          classNames="carousel"
        >
          <CarouselWrapper>
            {child}
          </CarouselWrapper>
        </CSSTransition>

      </TransitionGroup>
    )
  }
}

const CarouselWrapper = styled.div({
  opacity: 1,
  transition: '1s all',
  '&.carousel-enter': {
    opacity: 1
  },
  '&.carousel-exit': {
    display: 'none'
  }
})
