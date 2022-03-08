import React from 'react';
import {Container, FlatList, Layout} from './styles';
import DevotionalsComponent from '../../components/fragments/MyDevotionals/Devotionals';

const MyDevotionalsScreen = () => {
  const devotionals = [
    {
      id: 1,
      titulo: 'Minha nova devoção',
      ref: 'Salmos 88:13',
      tags: [
        {
          id: 1,
          name: 'amor',
        },
        {
          id: 2,
          name: 'salvação',
        },
        {
          id: 3,
          name: 'vida',
        },
      ],
    },
    {
      id: 2,
      titulo: 'Nem só de pão',
      ref: 'Matheus 4:4',
      tags: [
        {
          id: 1,
          name: 'vida',
        },
      ],
    },
    {
      id: 3,
      titulo:
        'Dia de trabalho muito produtivo, posso agradecer a Deus por isso',
      ref: 'Salmos 42:5',
      tags: [
        {
          id: 1,
          name: 'paz',
        },
        {
          id: 1,
          name: 'refugio',
        },
        {
          id: 1,
          name: 'espírito',
        },
      ],
    },
    {
      id: 4,
      titulo: 'Aquieta minha alma, pois estou em paz',
      ref: 'Salmos 88:13',
      tags: [
        {
          id: 1,
          name: 'vida',
        },
      ],
    },
  ];

  return (
    <Layout>
      <Container>
        <FlatList
          contentContainerStyle={{paddingBottom: 40}}
          showsVerticalScrollIndicator={true}
          data={devotionals}
          renderItem={({item}) => <DevotionalsComponent devotional={item} />}
        />
      </Container>
    </Layout>
  );
};

export default MyDevotionalsScreen;
