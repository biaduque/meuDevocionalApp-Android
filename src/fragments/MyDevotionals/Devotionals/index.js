import React from 'react';
import {
  Container,
  DateTime,
  FlexContainer,
  Image,
  Layout,
  Tag,
  TagsWrapper,
  Title,
} from './styles';
import {Text, View} from 'react-native';
import Book1 from '../../../assets/illustrations/Variante6.png';
import Book2 from '../../../assets/illustrations/Variante7.png';
import Book3 from '../../../assets/illustrations/Variante8.png';
import Book4 from '../../../assets/illustrations/Variante9.png';
import {useNavigation} from '@react-navigation/core';
import VerLeituraRapida from '../../../screens/MyDevotionalView';

const DevotionalsComponent = ({devotional}) => {
  const navigation = useNavigation();
  const onLongPress = () => {
    alert('pressionou por muito tempo');
  };

  const onPress = () => {
    navigation.navigate('MyDevotionalView', {
      devotional,
    });
  };

  const renderImageBook = () => {
    if (devotional.backgroundColor === 'green1') {
      return Book4;
    }

    return Book1;
  };

  return (
    <Layout
      background={devotional.backgroundColor}
      onLongPress={() => onLongPress()}
      onPress={() => onPress()}>
      <Container>
        <FlexContainer>
          <View>
            <Text style={{fontSize: 26, marginBottom: 20}}>🥳</Text>
            <Title>{devotional.titulo}</Title>
            <DateTime>{devotional.baseBiblica}</DateTime>
          </View>

          <Image source={renderImageBook()} />
        </FlexContainer>

        <TagsWrapper>
          {devotional.tags && devotional.tags.length > 0
            ? devotional.tags.map((tag, index) => (
                <Tag key={index}>{tag.name}</Tag>
              ))
            : null}
        </TagsWrapper>
      </Container>
    </Layout>
  );
};

export default DevotionalsComponent;
