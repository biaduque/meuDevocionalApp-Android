import React from 'react';
import {
  Container,
  BaseBiblica,
  FlexContainer,
  Image,
  Layout,
  Tag,
  TagsWrapper,
  Title,
} from './styles';
import {Text, View} from 'react-native';
import GreenBook1 from '../../../assets/illustrations/book-verde2.png';
import YellowBook1 from '../../../assets/illustrations/book-amarelo1.png';
import YellowBook2 from '../../../assets/illustrations/book-amarelo2.png';
import YellowBook3 from '../../../assets/illustrations/book-amarelo3.png';
import {useNavigation} from '@react-navigation/core';
import Utils from '../../../common/utils';
import {useSelector} from 'react-redux';

const DevotionalsComponent = ({devotional, handleOpenModalDelete}) => {
  const utils = new Utils();
  const navigation = useNavigation();

  const $app = useSelector(state => state.app);

  const onLongPress = () => {
    handleOpenModalDelete(devotional);
  };

  const onPress = () => {
    navigation.navigate('MyDevotionalView', {
      devotional,
      colors: parseColors(),
    });
  };

  const renderImageBook = () => {
    switch (parseColors().image) {
      case 'amarelo1':
        return YellowBook1;
      case 'amarelo2':
        return YellowBook2;
      case 'amarelo3':
        return YellowBook3;
      case 'verde2':
        return GreenBook1;
      default:
        return YellowBook1;
    }
  };

  const parseColors = () => {
    return utils.transformDataColor(devotional.backgroundColor, $app.theme);
  };

  return (
    <Layout
      background={parseColors().background}
      onLongPress={() => onLongPress()}
      onPress={() => onPress()}>
      <Container>
        <FlexContainer>
          <View>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 20,
                opacity: 0.6,
                color: parseColors().titulo,
              }}>
              {devotional.createdAt}
            </Text>
            <Title color={parseColors().titulo}>{devotional.titulo}</Title>
            <BaseBiblica color={parseColors().baseBiblica}>
              {devotional.baseBiblica}
            </BaseBiblica>
          </View>

          <Image source={renderImageBook()} />
        </FlexContainer>

        <TagsWrapper>
          {devotional.aplicacao1 !== '' && (
            <Tag background={parseColors().tagsBackground}>
              {devotional.aplicacao1}
            </Tag>
          )}
          {devotional.aplicacao2 !== '' && (
            <Tag background={parseColors().tagsBackground}>
              {devotional.aplicacao2}
            </Tag>
          )}
          {devotional.aplicacao3 !== '' && (
            <Tag background={parseColors().tagsBackground}>
              {devotional.aplicacao3}
            </Tag>
          )}
        </TagsWrapper>
      </Container>
    </Layout>
  );
};

export default DevotionalsComponent;
