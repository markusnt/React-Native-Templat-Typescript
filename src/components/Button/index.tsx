import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';
import AppThemeUtils from '../../utils/appUtils';

interface ButtonProps extends RectButtonProperties {
  title: string;
  outline: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, outline, ...rest }) => (
  <Container
    elevation={20}
    {...rest}
    style={
      outline
        ? {
            backgroundColor: null,
            borderStyle: 'solid',
            borderColor: AppThemeUtils.colorPrimary,
            borderWidth: 2,
          }
        : null
    }
  >
    <ButtonText style={outline ? { color: '#000' } : null}>{title}</ButtonText>
  </Container>
);

export default Button;
