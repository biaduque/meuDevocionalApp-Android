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

const ModalDeleteSheet = ({
  title,
  description,
  titleConfirm,
  open,
  handleClose,
  devotional,
}) => {
  const repositoryService = new LocalRepositoryService();

  const dispatch = useDispatch();

  async function deleteItem() {
    const devotionals = await repositoryService.removeItem(
      repositoryService.DEVOCIONAL_LIST_KEY,
      devotional,
      true,
    );

    if (devotionals != null) {
      dispatch(setMyDevotionals(devotionals));
    }

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

            <ActionConfirmButton onPress={() => deleteItem()}>
              <TextConfirm>{titleConfirm}</TextConfirm>
            </ActionConfirmButton>
          </Footer>
        </WrapperTopContent>
      </Container>
    </ModalSheetBottom>
  );
};

export default ModalDeleteSheet;
