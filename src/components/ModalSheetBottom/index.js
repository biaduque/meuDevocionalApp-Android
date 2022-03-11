import React from 'react';
import {StatusBar} from 'react-native';
import {Backdrop, Layout} from './styles';
import {Portal} from '@gorhom/portal';

const ModalSheetBottom = ({open = false, onClose, height, ...children}) => {
  return (
    open && (
      <Portal>
        <Layout height={height}>
          <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
          <Backdrop onPress={() => onClose()} />

          {children.children}
        </Layout>
      </Portal>
    )
  );
};

export default ModalSheetBottom;
