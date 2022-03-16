import React from 'react';
import {FlatList, Layout, TitleScreen} from './styles';
import MockData from '../../../common/mockData';
import RepeaterEstudos from './Repeater';

const Estudos = () => {
  const mockData = new MockData();

  return (
    <Layout>
      <TitleScreen>Estudos Biblícos</TitleScreen>

      <FlatList
        horizontal
        contentContainerStyle={{paddingRight: 40}}
        showsHorizontalScrollIndicator={false}
        data={mockData.estudosMock}
        renderItem={({item}) => {
          return <RepeaterEstudos item={item} />;
        }}
      />
    </Layout>
  );
};

export default Estudos;
