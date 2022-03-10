import React from 'react';
import {Container, DateTime, Layout, Tag, TagsWrapper, Title} from './styles';
import {Text} from 'react-native';

const DevotionalsComponent = ({devotional}) => {
  return (
    <Layout background={devotional.backgroundColor}>
      <Container>
        <Text style={{fontSize: 26, marginBottom: 20}}>🤬</Text>
        <Title>{devotional.titulo}</Title>
        <DateTime>{devotional.ref}</DateTime>

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
