import React from 'react';
import styled from '@emotion/styled';

export class DotCanvas extends React.Component {
  initCanvas(ref) {
    if (ref) {
      require('./Dots').default(ref);
    }
  }

  render() {
    const {maskStyle, ...props} = this.props;
    return (
      <div {...props}>
        <div ref={this.initCanvas} />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.93)',
          ...maskStyle
        }} />
      </div>
    );
  }
}
