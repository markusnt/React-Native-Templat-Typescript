import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AppThemeUtils from '../../utils/appUtils';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  /* background: #232129; */
  /* border-radius: 10px; */
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-color: #232129;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${AppThemeUtils.colorPrimary};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
