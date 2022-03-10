import React from 'react';
import {EditText, Layout, Container} from './styles';
import {Search} from 'react-native-iconly';

const SearchBar = ({onChange, value}) => {
  return (
    <Layout>
      <Container>
        <Search color={'#999'} />
        <EditText placeholder={'Pesquisar'} placeholderTextColor={'#999'} />
      </Container>
    </Layout>
  );
};

export default SearchBar;
