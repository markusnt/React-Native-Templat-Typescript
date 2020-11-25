import React from 'react';

import { ActivityIndicator, Image } from 'react-native';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <Image
        style={{ width: '90%', height: '40%' }}
        source={{
          uri: 'https://i.imgur.com/RCs7Nyv.jpg',
        }}
      />
      <ActivityIndicator size="large" color="#a0a0a0" />
    </Container>
  );
};

export default Loading;
