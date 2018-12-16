import React from 'react';
import styled from '@emotion/styled';

export default class DotCanvas extends React.Component {
  initCanvas(ref) {
    if (ref) {
      require('./Dots').default(ref);
    }
  }

  render() {
    return (
      <div {...this.props}>
        <div ref={this.initCanvas} />
        <Mask />
      </div>
    );
  }
}

const Mask = styled.div({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.9)'
})
