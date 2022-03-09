import React, {useEffect, useState} from 'react';
import {FlatList, Layout, TitleScreen} from './styles';
import RepeaterQuickReader from './Repeater';
import {api} from '../../../../services/api';
import Utils from '../../../../common/Utils';

const LeiturasRapidas = () => {
  const utils = new Utils();
  const [leiturasRapidas, setLeiturasRapidas] = useState([]);

  useEffect(() => {
    async function loadLeiturasRapidas() {
      const {data} = await api.get('/devocionais');

      data.map(item => {
        item.backgroundColor = utils.getRandomColor();
        return item;
      });
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
