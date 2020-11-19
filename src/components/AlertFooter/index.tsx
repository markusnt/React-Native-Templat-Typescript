import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text, TouchableOpacity } from 'react-native';

import {
  Container,
  AlertView,
  TextView,
  CloseView,
  ButtonsView,
  ButtonView,
  Button,
} from './styles';

interface AlertProps {
  show: boolean;
  title: string;
  message: string;
  buttons: Record<string, any>;
}

const AlertFooter: React.FC<AlertProps> = ({
  show,
  title,
  message,
  buttons,
  ...rest
}) => {
  if (show) {
    return (
      <Container {...rest}>
        <AlertView>
          <CloseView>
            <TouchableOpacity>
              <Icon name="clear" size={20} color="#333333" />
            </TouchableOpacity>
          </CloseView>
          <TextView>
            <Text style={{ textAlign: 'center' }}>{message}</Text>
          </TextView>
          <ButtonsView>
            {buttons.map((item: any) => (
              <ButtonView
                style={{
                  width:
                    buttons.length !== 1
                      ? `${100 / buttons.length - 5}%`
                      : '40%',
                }}
              >
                <Button onPress={item.action}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    {item.text}
                  </Text>
                </Button>
              </ButtonView>
            ))}
          </ButtonsView>
        </AlertView>
      </Container>
    );
  }
  return null;
};

export default AlertFooter;
