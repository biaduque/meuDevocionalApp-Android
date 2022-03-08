import React from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {
  ActionCancelButton,
  ActionConfirmButton,
  ContentTop,
  Description,
  Layout,
  Title,
  WrapperTopContent,
} from './styles';

const ModalSheetBottom = ({
  open = false,
  onClose,
  title,
  description,
  titleConfirm,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    /*TODO: realizar close do modal*/
    open && (
      <Layout onPress={() => handleClose()}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
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
          <ActionConfirmButton>
            <Text style={styles.textConfirm}>{titleConfirm}</Text>
          </ActionConfirmButton>
        )}
      </Layout>
    )
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

export default ModalSheetBottom;
