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
  DateCreatedAt,
} from './styles';
import {Vibration, View} from 'react-native';
import GreenBook1 from '../../../assets/illustrations/book-verde2.png';
import YellowBook1 from '../../../assets/illustrations/book-amarelo1.png';
import YellowBook2 from '../../../assets/illustrations/book-amarelo2.png';
import YellowBook3 from '../../../assets/illustrations/book-amarelo3.png';
import {useNavigation} from '@react-navigation/core';
import Utils from '../../../common/utils';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {
  setHandleModalDeleteDevocional,
  setSelectedDevotional,
} from '../../../store/actions/mydevotionals.action';

const DevotionalsComponent = ({devotional}) => {
  const utils = new Utils();
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const $app = useSelector(state => state.app);

  const onLongPress = () => {
    dispatch(setHandleModalDeleteDevocional(true));
    dispatch(setSelectedDevotional(devotional));

    const DURATION = 100;

    Vibration.vibrate(DURATION);
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
            <DateCreatedAt color={parseColors().titulo}>
              {moment(devotional.date).format('DD/MM/YYYY')}
            </DateCreatedAt>

            <Title color={parseColors().titulo}>{devotional.titulo}</Title>

            <BaseBiblica color={parseColors().baseBiblica}>
              {devotional.livro} {devotional.capitulo}:{devotional.versiculo}
            </BaseBiblica>
          </View>

          <Image source={renderImageBook()} />
        </FlexContainer>

        <TagsWrapper>
          {devotional.aplicacao1 != null && (
            <Tag background={parseColors().tagsBackground}>
              {devotional.aplicacao1}
            </Tag>
          )}
          {devotional.aplicacao2 != null && (
            <Tag background={parseColors().tagsBackground}>
              {devotional.aplicacao2}
            </Tag>
          )}
          {devotional.aplicacao3 != null && (
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
