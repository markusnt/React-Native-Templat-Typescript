import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';
import AppThemeUtils from '../../utils/appUtils';

const Dashboard: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: AppThemeUtils.colorPrimary }}>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
