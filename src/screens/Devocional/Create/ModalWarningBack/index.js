import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import ModalSheetBottom from '../../../../components/ModalSheetBottom';
import {
  ActionCancelButton,
  ActionConfirmButton,
  Container,
  ContentTop,
  Description,
  Footer,
  Separator,
  TextCancel,
  TextConfirm,
  Title,
  WrapperTopContent,
} from './styles';
import {setMyDevotionals} from '../../../../store/actions/mydevotionals.action';
import LocalRepositoryService from '../../../../services/LocalRepositoryService';
import {useDispatch} from 'react-redux';

const ModalWarningBackSheet = ({
  title,
  description,
  titleConfirm,
  titleCancel,
  onPress,
  open,
  handleClose,
}) => {
  return (
    <ModalSheetBottom
      height={Dimensions.get('window').height}
      open={open}
      onClose={handleClose}>
      <Container>
        <WrapperTopContent>
          <ContentTop>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </ContentTop>

          <Footer>
            <ActionCancelButton onPress={() => onPress()}>
              <TextCancel>{titleCancel}</TextCancel>
            </ActionCancelButton>

            <Separator />

            <ActionConfirmButton onPress={() => handleClose()}>
              <TextConfirm>{titleConfirm}</TextConfirm>
            </ActionConfirmButton>
          </Footer>
        </WrapperTopContent>
      </Container>
    </ModalSheetBottom>
  );
};

export default ModalWarningBackSheet;
