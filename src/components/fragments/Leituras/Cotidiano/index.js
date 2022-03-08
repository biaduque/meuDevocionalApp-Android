import React from 'react';
import {FlatList, Layout, TitleScreen} from './styles';
import RepeaterCotidiano from './Repeater';

const Cotidiano = () => {
  const leiturasRapidas = [
    {
      id: 1,
      titulo: 'Em Tua Presença',
      descricao:
        'Mas eu, Senhor, a ti clamo por socorro; já de manhã a minha oração chega à tua presença.',
      ref: 'Salmos 88:13',
    },
    {
      id: 2,
      titulo: 'Leitura 2',
      descricao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu consectetur nunc nisl euismod nunc. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu consectetur nunc nisl euismod nunc.',
    },
    {
      id: 3,
      titulo: 'Leitura 3',
      descricao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu consectetur nunc nisl euismod nunc. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu consectetur nunc nisl euismod nunc.',
    },
    {
      id: 4,
      titulo: 'Leitura 4',
      descricao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu consectetur nunc',
    },
  ];

  return (
    <Layout>
      <TitleScreen>Cotidiano</TitleScreen>

      <FlatList
        horizontal
        contentContainerStyle={{paddingRight: 40}}
        showsHorizontalScrollIndicator={false}
        data={leiturasRapidas}
        renderItem={({item}) => {
          return <RepeaterCotidiano item={item} />;
        }}
      />
    </Layout>
  );
};

export default Cotidiano;
