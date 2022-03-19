import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {CreatedAt, Layout, LayoutImageBackground, Title} from './styles';
import Utils from '../../../common/utils';
import moment from 'moment';
import ModalDeleteSheet from './ModalDeleteSheet';

const RepeaterMural = ({item, theme}) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const parseColors = () => {
    const utils = new Utils();
    return utils.transformDataColor(item.backgroundColor, theme);
  };

  const onLongPress = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModal = () => {
    setOpenModalDelete(false);
  };

  return item.backgroundImage != null ? (
    <Layout
      backgroundColor={parseColors().background}
      onLongPress={onLongPress}>
      <ModalDeleteSheet
        open={openModalDelete}
        handleClose={handleCloseModal}
        title={'Deseja excluir o item do mural?'}
        description={'Tem certeza que deseja excluir este item?'}
        titleConfirm={'Excluir'}
        itemMural={item}
      />

      <LayoutImageBackground source={{uri: item.backgroundImage}} />
      <View />
      <Title background={parseColors().background} color={parseColors().titulo}>
        {item.titulo}
      </Title>
      <CreatedAt
        background={parseColors().background}
        color={parseColors().titulo}>
        {moment(item.createdAt, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY')}
      </CreatedAt>
    </Layout>
  ) : (
    <Layout
      backgroundColor={parseColors().background}
      onLongPress={onLongPress}>
      <ModalDeleteSheet
        open={openModalDelete}
        handleClose={handleCloseModal}
        title={'Deseja excluir o item do mural?'}
        description={'Tem certeza que deseja excluir este item?'}
        titleConfirm={'Excluir'}
        itemMural={item}
      />

      <View />
      <Title background={parseColors().background} color={parseColors().titulo}>
        {item.titulo}
      </Title>
      <CreatedAt
        background={parseColors().background}
        color={parseColors().titulo}>
        {moment(item.createdAt, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY')}
      </CreatedAt>
    </Layout>
  );
};

export default RepeaterMural;
