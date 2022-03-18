import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {BackIcon, BigWrapper, Header, Layout, SearchBar} from './styles';
import {useSelector} from 'react-redux';
import DevotionalsComponent from '../../fragments/MeusDevocionais/Devotionals';
import {FlatList} from '../../fragments/MeusDevocionais/styles';

const SearchDevocionais = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [devotionals, setDevotionals] = useState([]);
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState(false);
  const $myDevotionals = useSelector(state => state.myDevotionals);

  useEffect(() => {
    async function getDevotionals() {
      setDevotionals($myDevotionals.devotionals);
      setData($myDevotionals.devotionals);
    }

    getDevotionals();

    return () => {};
  }, []);

  const handleChangeSearch = value => {
    setSearch(value);
    setSearching(true);
    if (value.length > 0) {
      const filtered = data.filter(item => {
        return item.titulo.toLowerCase().includes(value.toLowerCase());
      });
      setDevotionals(filtered);
      setSearching(false);
    } else {
      setDevotionals(data);
      setSearching(false);
    }
  };

  return (
    <Layout>
      <Header>
        <BackIcon onPress={() => navigation.goBack()} />
        <SearchBar
          placeholder="Pesquisar"
          autoFocus={false}
          value={search}
          onChangeText={handleChangeSearch}
        />
      </Header>

      {searching ? (
        <BigWrapper>
          <ActivityIndicator color={'#fff'} size={'large'} />
          <Text style={{marginTop: 20}}>Carregando...</Text>
        </BigWrapper>
      ) : devotionals.length <= 0 ? (
        <BigWrapper>
          <Text style={{fontSize: 24, textAlign: 'center'}}>
            Nenhum resultado encontrado
          </Text>
        </BigWrapper>
      ) : (
        <View style={{marginTop: 20}}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 120,
            }}
            style={{paddingRight: 0, paddingLeft: 0}}
            showsVerticalScrollIndicator={false}
            data={devotionals}
            renderItem={({item}) => <DevotionalsComponent devotional={item} />}
          />
        </View>
      )}
    </Layout>
  );
};

export default SearchDevocionais;
