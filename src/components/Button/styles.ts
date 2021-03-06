import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import AppThemeUtils from '../../utils/appUtils';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: ${AppThemeUtils.colorPrimary};
  border-radius: 50px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
`;
