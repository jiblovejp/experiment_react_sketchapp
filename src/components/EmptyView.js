import React from 'react';
import { render, Artboard, Text, View, Image } from 'react-sketchapp';
import { colors, fontsType } from '../designSystem';
import Title from '../components/Title';
import Description from '../components/Description';
import Button from '../components/Button';
import styled from 'styled-components/primitives'
import PropTypes from 'prop-types'


const EmptyContainer = styled.View`
justify-content: center;
align-items: center;
`

const Card = styled.View`
flex: 1
border: 1px solid #E9EEf5;
border-radius: 3px;
padding: 24px;
background-color: #ffffff;
align-items: center;

`

const ImageStyle = styled.Image`
width: 80px;
height: 80px;
margin: 24px;
`

const DescriptionStyle = styled(Description)`
marginTop: 4px;
textAlign: center;
lineHeight: 24;	

`

const EmptyView = ({ title, description, imageURL, buttonText }) => {
    
    return (
        <EmptyContainer>
            <Card>
                <ImageStyle source={imageURL} resizeMode='contain'/>
                <Title>{title}</Title>
                <DescriptionStyle>{description}</DescriptionStyle>
                <Button>{buttonText}</Button>
            </Card>
        </EmptyContainer>
    )
}


EmptyView.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

EmptyView.defaultProps = {

    title: 'Title',
    description: 'Lorem ipsum'
}

export default EmptyView