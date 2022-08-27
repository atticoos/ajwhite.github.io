import styled from '@emotion/styled';

export const Colors = {
  Gray: {
    LIGHT: '#b7b9bb',
    NORMAL: '#6a6a6a'
  },
  White: {
    NORMAL: '#fff'
  },
  Blue: {
    NORMAL: '#31a2d4'
  },
  Black: {
    NORMAL: '#32383e'
  },
  Orange: {
    NORMAL: '#FF9900'
  }
};

export const Title = styled.div({
  fontSize: 24,
  fontWeight: 600,
  marginBottom: 4,
  color: Colors.Black.NORMAL
});

export const Subtitle = styled.div({
  fontSize: 18,
  marginBottom: 4,
  color: Colors.Black.NORMAL
})
