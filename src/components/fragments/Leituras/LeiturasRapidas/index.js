import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {FlatList, Layout, TitleScreen} from './styles';
import RepeaterQuickReader from './Repeater';
import {api} from '../../../../services/api';

const LeiturasRapidas = () => {
  const [leiturasRapidas, setLeiturasRapidas] = useState([]);

  useEffect(() => {
    async function loadLeiturasRapidas() {
      const {data} = await api.get('/devocionais');
      setLeiturasRapidas(data);
    }

    loadLeiturasRapidas();

    return () => {
      setLeiturasRapidas([]);
    };
  }, []);

  return (
    <Layout>
      <TitleScreen>Leituras Rapidas</TitleScreen>
      <FlatList
        horizontal
        contentContainerStyle={{paddingRight: 40}}
        showsHorizontalScrollIndicator={false}
        data={leiturasRapidas}
        renderItem={({item}) => {
          return <RepeaterQuickReader item={item} />;
        }}
      />
    </Layout>
  );
};

export default LeiturasRapidas;
