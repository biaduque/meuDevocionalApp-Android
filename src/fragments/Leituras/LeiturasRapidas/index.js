import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {FlatList, Layout, TitleScreen} from './styles';
import RepeaterQuickReader from './Repeater';
import {api} from '../../../services/api';
import Utils from '../../../common/utils';
import {Loading} from '../../../components/Loading/styles';

const LeiturasRapidas = () => {
  const utils = new Utils();

  const [leiturasRapidas, setLeiturasRapidas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeiturasRapidas() {
      try {
        const {data} = await api.get('/devocionais');

        data.map(item => {
          item.backgroundColor = utils.getRandomColor();
          return item;
        });

        setLeiturasRapidas(data.reverse());
        setLoading(false);
      } catch (e) {
        setLoading(true);
      }
    }

    loadLeiturasRapidas();

    return () => {
      setLeiturasRapidas([]);
    };
  }, []);

  return (
    <Layout>
      <TitleScreen>Leituras Rápidas</TitleScreen>
      {loading ? (
        <View style={{padding: 60}}>
          <Loading />
        </View>
      ) : (
        <FlatList
          horizontal
          contentContainerStyle={{paddingRight: 40}}
          showsHorizontalScrollIndicator={false}
          data={leiturasRapidas}
          renderItem={({item}) => {
            return <RepeaterQuickReader item={item} />;
          }}
        />
      )}
    </Layout>
  );
};

export default LeiturasRapidas;
