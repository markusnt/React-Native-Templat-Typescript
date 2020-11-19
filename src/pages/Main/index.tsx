import React from 'react';
import { View, Text } from 'react-native';
import Alert from '../../components/Alert';
import AlertFooter from '../../components/AlertFooter';
import Button from '../../components/Button';

// import { Container } from './styles';
import AppThemeUtils from '../../utils/appUtils';

const Main: React.FC = () => {
  const showAlert = false;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Alert
        show
        title="Concluido"
        message="Abertura do botão realizada com sucesso!"
        footer="testdde"
        buttons={[
          {
            text: 'Ok',
            action: () => console.log('teste'),
          },
        ]}
      />
      <AlertFooter
        show={showAlert}
        title="Concluido"
        message="Abertura do botão realizada com sucesso!"
        buttons={[
          {
            text: 'Ok',
            // action: () => console.log('teste'),
          },
        ]}
      />
      <Button
        outline={false}
        title="Open Alert Tipo 1"
        onPress={() => console.log('teste')}
      />
    </View>
  );
};

export default Main;
