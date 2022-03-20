import React from 'react';
import {Dimensions} from 'react-native';
import ModalSheetBottom from '../ModalSheetBottom';
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
