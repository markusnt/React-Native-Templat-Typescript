## React-Native-Templat-Typescript

### Template ja pré configurado para criação de aplicação mobile utilizando react native com typescript

#### Feito Com
Abaixo segue o que foi utilizado na criação deste template:
- React Native
- Redux
  - Redux Saga
- Reactotron
- React Navigation
- React Native Gesture Handler
- Styled Components
- Yup
- Date-fns
- Axios
- React Native Vector Icons
- Unform
- ESlint
  - eslint-config-airbnb
  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
  - eslint-plugin-react
  - eslint-plugin-react-native
  - eslint-import-resolver-babel-plugin-root-import
- Prettier
  - eslint-plugin-prettier
  - eslint-config-prettier
- EditorConfig

### Estrutura de Arquivos
A estrutura de arquivos está da seguinte maneira:

```
├── src/
│   ├── components/
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── hooks/
│   ├── images/
│   ├── pages/
│   │   └── Main/
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── routes/
│   │   ├── app.routes.tsx
│   │   ├── auth.routes.tsx
│   │   └── index.tsx
│   ├── services/
│   │   └── api.ts
│   ├── store/
│   │   ├── modules/
│   │   │   |   └── auth/
|   |   |   |   |   ├── actions.js
|   |   |   |   |   ├── reducer.js
|   |   |   |   |   └── sagas.js
│   │   │   ├── rootReducer.js
│   │   │   └── rootSaga.js
│   │   ├── createStore.js
│   │   ├── index.js
│   │   └── persistReducers.js
│   ├── utils/
│   │   ├── appUtils.tsx
│   └── App.tsx
└── index.js
```
