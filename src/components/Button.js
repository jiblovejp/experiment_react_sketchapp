import React from 'react'
import { fontsType, colors } from '../designSystem'
import styled from 'styled-components/primitives'
import { render, Text, View, Image } from 'react-sketchapp';


const DefaultStyle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 16px;
  height: 40px;
  border-radius: 3px;
  background-color: ${colors.JittaBlue}
`
const OutlineStyle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;  
  margin: 16px;
  height: 40px;
  border-radius: 3px;
  border: #8DA2B9;
  background: #FFF;
`

const DisabledStyle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;  
  margin: 16px;
  height: 40px;
  border-radius: 3px;
  background: #E9EEF5;
`
const ButtonText = styled.Text`
  background: rgba(0, 0, 0, 0);
  textAlign: center;
  color: ${({ disabled }) => (disabled ? colors.Casper : '#FFF')};
  ${fontsType.Title};
`
const TouchableStyled = styled.Touchable``

const Button = props => {
  
  let renderButton = (
    <DefaultStyle>
      <ButtonText>
        {props.children}
      </ButtonText>
    </DefaultStyle>
  )
  if (props.disabled) {
    renderButton = (
      <DisabledStyle>
        <ButtonText disabled>
          {props.children}
        </ButtonText>
      </DisabledStyle>
    )
  } else if (props.outline) {
    renderButton = (
      <OutlineStyle>
        <ButtonText style={{ color: colors.Bluewood }}>
          {props.children}
        </ButtonText>
      </OutlineStyle>
    )
  }

  return (
    <TouchableStyled {...props}>
      {renderButton}
    </TouchableStyled>
  )
}

Button.defaultProps = {
  disabled: false,
  outline: false
}

export default Button
