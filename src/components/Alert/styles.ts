import styled from 'styled-components/native';
import AppThemeUtils from '../../utils/appUtils';

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  justify-content: center;
  align-items: center;
`;

export const AlertView = styled.View`
  width: 70%;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  padding: 8px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ButtonView = styled.View`
  flex-direction: row;
  padding: 5px 5px 5px 5px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${AppThemeUtils.colorPrimary};
  padding: 10px;
  width: 100%;
  border-radius: 50px;
`;

export const TextView = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px 25px 10px;
`;

export const CloseView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px 10px 0px 8px;
`;
