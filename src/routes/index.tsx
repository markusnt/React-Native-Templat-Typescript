import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import Loading from '../components/Loading';
import AlertFooter from '../components/AlertFooter';

const Routes: React.FC = () => {
  // const { user, loading } = useAuth();

  const statusLoading = false;

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#999" />
  //     </View>
  //   );
  // }

  // return user ? <AppRoutes /> : <AuthRoutes />;
  return (
    <>
      {statusLoading ? <Loading /> : null}
      <AlertFooter
        show={false}
        title="Concluido"
        message="Abertura do botão realizada com sucesso!"
        buttons={[
          {
            text: 'Fechar',
            // action: () => console.log('teste'),
          },
        ]}
      />
      <AppRoutes />
      {/* return user ? <AppRoutes /> : <AuthRoutes />; */}
    </>
  );
};

export default Routes;
