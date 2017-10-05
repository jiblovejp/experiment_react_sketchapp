import React from 'react';
import { render, Artboard, Text, View, Image } from 'react-sketchapp';
import { colors, fontsType } from '../designSystem';
import Title from '../components/Title';
import Description from '../components/Description';
import Button from '../components/Button';
import styled from 'styled-components/primitives'
import PropTypes from 'prop-types'

const NormalText = styled.Text`
    color: #fff;
    flexWrap: wrap;
    lineHeight: 14;
    ${fontsType.Label};
`

const BroadcastContainer = styled.View`
    background-color: ${colors.Bluewood};
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    paddingLeft: 24px;
    paddingRight: 24px;
    paddingTop: 16px;
    paddingBottom: 16px;
`

const MessageView = styled.View`
    flex: 1;
    marginRight: 16px;
    width: 280px;
`

const ActionView = styled.View` 
    flex: 0;
    marginRight: 16px;
    marginLeft: 16px;
`

const Container = styled.View`
    width: 375px;
    background-color: gray;
`

const ImageStyle = styled.Image`
    width: 24px;
    height: 24px;
`

const BroadcastView = ({ broadcastText, iconURL }) => {
    return (
        <BroadcastContainer>
            <MessageView>
                <NormalText>{broadcastText}</NormalText>
            </MessageView>
            <ImageStyle source={iconURL} resizeMode='contain' />
        </BroadcastContainer>
    )

}

export default BroadcastView
