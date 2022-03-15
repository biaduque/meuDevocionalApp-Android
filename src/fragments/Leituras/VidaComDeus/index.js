import React from 'react';
import {FlatList, Layout, TitleScreen} from './styles';
import RepeaterVidaComDeus from './Repeater';
import MockData from '../../../common/mockData';

const VidaComDeus = () => {
  const mockData = new MockData();

  return (
    <Layout>
      <TitleScreen>Vida Com Deus</TitleScreen>

      <FlatList
        horizontal
        contentContainerStyle={{paddingRight: 40}}
        showsHorizontalScrollIndicator={false}
        data={mockData.vidaComDeusMock}
        renderItem={({item}) => {
          return <RepeaterVidaComDeus item={item} />;
        }}
      />
    </Layout>
  );
};

export default VidaComDeus;
