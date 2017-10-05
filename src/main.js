
import React from 'react';
import { render, Artboard, Text, View, Image } from 'react-sketchapp';
import { colors, fontsType } from './designSystem';
import styled from 'styled-components/primitives'
import EmptyView from '../src/components/EmptyView'
import BroadcastView from '../src/components/BroadcastView'


const Container = styled.View`
  width: 375px;
  background-color: gray;

`


const Document = () => (

  <Container>

    <BroadcastView
      broadcastText="awesome awesomx awesome awesome awesome awesome awesome awesome"
      iconURL="https://drive.google.com/uc?id=0BzHNTjMVU_M9RFQtbThuSGZydUE"
    />
    

{/*Case: status== FILLING_APPLICATION_FORM, WAITING_FOR_IC_CALL, WAITING_FOR_DOCUMENTS, PROCESSING_DOCUMENTS, WAITING_FOR_FIRST_TRANSFER*/}
    <EmptyView
      title="Account opening"
      description="Your account is in the process. Please check back later."
      imageURL="https://drive.google.com/uc?id=0BzHNTjMVU_M9RmxFbWlJYVdiX0U"
      buttonText="Try again later" />


{/*Case: status== TRANSFERRED_WITH_CASHIER_CHEQUE,*/}
    <EmptyView
      title="Work in progress"
      description="We’re buying stocks for your first investment. Please check back later."
      imageURL="https://drive.google.com/uc?id=0BzHNTjMVU_M9NlItOHpfdEptLU0"
      buttonText="Try again later" />
  </Container >

)

export default (context) => {
  render(<Document />, context.document.currentPage())
}