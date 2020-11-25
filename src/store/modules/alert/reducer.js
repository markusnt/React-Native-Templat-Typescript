/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  content: {title: 'Titulo', message: 'Coloque aqui a mensagem', buttons: [
    { text: 'Exemplo 1', action: () => console.log('deu') },
    { text: 'Exemplo 2', action: () => console.log('deu') },
  ]},
};

export default function alert(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@alert/ALERT_DATA': {
        draft.content = {title: action.payload.title, message: action.payload.message, buttons: action.payload.buttons};
        break;
      }


      default:
    }
  });
}
