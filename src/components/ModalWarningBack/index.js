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
  onPressCancel,
  onPressContinue,
  open,
}) => {
  return (
    <ModalSheetBottom
      height={Dimensions.get('window').height}
      open={open}
      onClose={onPressContinue}>
      <Container>
        <WrapperTopContent>
          <ContentTop>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </ContentTop>

          <Footer>
            <ActionCancelButton onPress={() => onPressCancel()}>
              <TextCancel>{titleCancel}</TextCancel>
            </ActionCancelButton>

            <Separator />

            <ActionConfirmButton onPress={() => onPressContinue()}>
              <TextConfirm>{titleConfirm}</TextConfirm>
            </ActionConfirmButton>
          </Footer>
        </WrapperTopContent>
      </Container>
    </ModalSheetBottom>
  );
};

export default ModalWarningBackSheet;
