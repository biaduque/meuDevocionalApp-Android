import React from 'react';
import {Dimensions, Text, StyleSheet, StatusBar} from 'react-native';
import {
  ActionCancelButton,
  ActionConfirmButton,
  Backdrop,
  Container,
  ContentTop,
  Description,
  Layout,
  Title,
  WrapperTopContent,
} from './styles';
import {Portal} from '@gorhom/portal';

const ModalSheetBottom = ({
  open = false,
  onClose,
  title,
  description,
  titleConfirm,
  height,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    open && (
      <Portal>
        <Layout height={height}>
          <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
          <Backdrop onPress={() => handleClose()} />

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
              <ActionConfirmButton>
                <Text style={styles.textConfirm}>{titleConfirm}</Text>
              </ActionConfirmButton>
            )}
          </Container>
        </Layout>
      </Portal>
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
