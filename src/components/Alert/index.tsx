import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppThemeUtils from '../../utils/appUtils';

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

const Alert: React.FC<AlertProps> = ({
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
          {/* <CloseView>
          <TouchableOpacity>
            <Icon name="clear" size={20} color="#333333" />
          </TouchableOpacity>
        </CloseView> */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -50,
            }}
          >
            <Icon
              name="done"
              size={35}
              color="#fff"
              style={{
                backgroundColor: AppThemeUtils.colorPrimaryDark,
                borderRadius: 50,
                padding: 20,
              }}
            />
          </View>
          <TextView style={{ paddingBottom: 10 }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 26,
              }}
            >
              {title}
            </Text>
          </TextView>
          <TextView>
            <Text style={{ textAlign: 'center' }}>{message}</Text>
          </TextView>
          <ButtonsView>
            {buttons.map((item: any) => (
              <ButtonView
                key={item.text}
                style={{
                  width:
                    buttons.length !== 1
                      ? `${100 / buttons.length - 5}%`
                      : '100%',
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

export default Alert;
