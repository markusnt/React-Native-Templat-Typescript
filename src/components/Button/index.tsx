import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';
import AppThemeUtils from '../../utils/appUtils';

interface ButtonProps extends RectButtonProperties {
  children: string;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, outline, ...rest }) => (
  <Container
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
    <ButtonText style={outline ? { color: '#000' } : null}>
      {children}
    </ButtonText>
  </Container>
);

export default Button;
