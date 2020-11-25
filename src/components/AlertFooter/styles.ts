import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import AppThemeUtils from '../../utils/appUtils';

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
`;

export const AlertView = styled.View`
  background-color: white;
  width: 100%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: absolute;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  bottom: 0;
`;

export const CloseView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 8px;
  padding-bottom: 0px;
  padding-right: 15px;
`;

export const ButtonsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ButtonView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 10px 5px 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${AppThemeUtils.colorPrimary};
  padding: 10px;
  width: 100%;
  border-radius: 20px;
`;

export const TextView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  padding: 5px;
`;
