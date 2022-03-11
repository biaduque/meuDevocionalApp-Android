import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import ModalSheetBottom from '../../../components/ModalSheetBottom';
import {
  ActionCancelButton,
  ActionConfirmButton,
  Container,
  ContentTop,
  Description,
  Title,
  WrapperTopContent,
} from './styles';
import {setMyDevotionals} from '../../../store/actions/mydevotionals.action';
import LocalRepositoryService from '../../../services/LocalRepositoryService';
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
          <ActionCancelButton onPress={() => handleClose()}>
            <Text style={styles.textCancel}>Cancelar</Text>
          </ActionCancelButton>
        </WrapperTopContent>

        {titleConfirm && (
          <ActionConfirmButton onPress={() => deleteItem()}>
            <Text style={styles.textConfirm}>{titleConfirm}</Text>
          </ActionConfirmButton>
        )}
      </Container>
    </ModalSheetBottom>
  );
};

const styles = StyleSheet.create({
  textCancel: {
    color: 'red',
    fontSize: 22,
    fontWeight: '500',
  },
  textConfirm: {
    color: '#0179fd',
    fontSize: 22,
    fontWeight: '500',
  },
});

export default ModalDeleteSheet;
