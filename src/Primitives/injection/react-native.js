import Primitives from '../Primitives'
const {
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Easing,
  Dimensions,
  TextInput,
  TouchableOpacity
} = require('react-native')

import styled from 'styled-components/native'

Primitives.inject({
  Styled: styled,
  View,
  Text,
  Image,
  TextInput,
  Easing,
  Animated,
  Platform,
  Dimensions,
  Touchable: TouchableOpacity
})

console.log('Inject Native')
