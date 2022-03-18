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
import {
  setHandleModalDeleteDevocional,
  setMyDevotionals,
  setSelectedDevotional,
} from '../../../../store/actions/mydevotionals.action';
import LocalRepositoryService from '../../../../services/LocalRepositoryService';
import {useDispatch, useSelector} from 'react-redux';

const ModalDeleteSheet = ({title, description, titleConfirm}) => {
  const repositoryService = new LocalRepositoryService();
  const dispatch = useDispatch();
  const $myDevotionals = useSelector(state => state.myDevotionals);

  const handleClose = () => {
    dispatch(setSelectedDevotional(null));
    dispatch(setHandleModalDeleteDevocional(false));
  };

  async function deleteItem() {
    const devotionals = await repositoryService.removeItem(
      repositoryService.DEVOCIONAL_LIST_KEY,
      $myDevotionals.selectedDevocional,
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
      open={$myDevotionals.openModalDeleteDevocional}
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
