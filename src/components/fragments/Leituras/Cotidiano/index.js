import React from 'react';
import {FlatList, Layout, TitleScreen} from './styles';
import RepeaterCotidiano from './Repeater';
import MockData from '../../../../common/MockData';

const Cotidiano = () => {
  const mockData = new MockData();

  return (
    <Layout>
      <TitleScreen>Cotidiano</TitleScreen>

      <FlatList
        horizontal
        contentContainerStyle={{paddingRight: 40}}
        showsHorizontalScrollIndicator={false}
        data={mockData.cotidianoMock}
        renderItem={({item}) => {
          return <RepeaterCotidiano item={item} />;
        }}
      />
    </Layout>
  );
};

export default Cotidiano;
