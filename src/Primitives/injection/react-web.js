import React from 'react'
import Primitives from '../Primitives'
import styled from 'styled-components'

import Animated from 'animated'
import Easing from 'animated/lib/Easing'

const View = styled.div``
const Text = styled.p``
const Image = styled.img``
const TextInput = styled.input``
const Touchable = styled.a``

const TouchableProxy = props => {
  const newProps = Object.assign({}, props, { onClick: props.onPress })
  return <Touchable {...props} />
}

const Platform = {
  OS: 'web',
  Version: 0,
  select: obj => {
    if (hasOwnProperty.call(obj, Platform.OS)) {
      return obj[Platform.OS]
    }
    return obj.default
  }
}

Primitives.inject({
  Styled: styled,
  View, // Web should allows override tag
  Text, // Web should allows override tag
  Image,
  TextInput,
  Easing,
  Animated: {
    ...Animated,
    View: Animated.createAnimatedComponent(View),
    Text: Animated.createAnimatedComponent(Text),
    Image: Animated.createAnimatedComponent(Image)
  },
  Platform,
  Touchable: TouchableProxy
})

console.log('Inject Web')
