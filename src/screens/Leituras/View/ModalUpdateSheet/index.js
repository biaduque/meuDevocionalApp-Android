import React from 'react';
import {Dimensions} from 'react-native';
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
import LocalRepositoryService from '../../../../services/LocalRepositoryService';

const ModalUpdateSheet = ({
  title,
  description,
  titleConfirm,
  open,
  handleClose,
  itemToUpdate,
}) => {
  const localRepository = new LocalRepositoryService();

  async function openScreen() {
    await localRepository.set(
      localRepository.LEITURAS_LIST_KEY,
      itemToUpdate,
      true,
    );

    handleClose();
  }

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
            <ActionCancelButton onPress={() => handleClose()}>
              <TextCancel>Cancelar</TextCancel>
            </ActionCancelButton>

            <Separator />

            <ActionConfirmButton onPress={() => openScreen()}>
              <TextConfirm>{titleConfirm}</TextConfirm>
            </ActionConfirmButton>
          </Footer>
        </WrapperTopContent>
      </Container>
    </ModalSheetBottom>
  );
};

export default ModalUpdateSheet;
