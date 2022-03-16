import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {FlatList, Layout, TitleScreen} from './styles';
import RepeaterQuickReader from './Repeater';
import {api} from '../../../services/api';
import Utils from '../../../common/utils';
import {useDispatch} from 'react-redux';
import {setIsLoaded} from '../../../store/actions/app.action';

const LeiturasRapidas = () => {
  const utils = new Utils();
  const dispatch = useDispatch();

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

        setLeiturasRapidas(data);
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
      <TitleScreen>Leituras Rapidas</TitleScreen>
      {loading ? (
        <View style={{padding: 60}}>
          <ActivityIndicator size="large" color="#FFF" />
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
