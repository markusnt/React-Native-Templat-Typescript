import React from 'react';
import { View, Text } from 'react-native';
import Alert from '../../components/Alert';
import Button from '../../components/Button';

// import { Container } from './styles';
import AppThemeUtils from '../../utils/appUtils';

const Main: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Alert
        title="Concluido"
        message="Essa e uma mensagem de exemplo de sucesso!"
        buttons={[{ text: 'OK' }]}
      />
    </View>
  );
};

export default Main;
