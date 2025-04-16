import { customElement } from 'solid-element';
import { defaultBotProps } from './constants';
import { Bubble } from './features/bubble';
import { Full } from './features/full';

export const registerWebComponents = () => {
  if (typeof window === 'undefined') return;
  // @ts-expect-error element incorect type
<<<<<<< HEAD
  customElement('codenula-fullchatbot', defaultBotProps, Full);
  customElement('codenula-chatbot', defaultBotProps, Bubble);
=======
  customElement('flowise-fullchatbot', defaultBotProps, Full);
  customElement('flowise-chatbot', defaultBotProps, Bubble);
>>>>>>> upstream/main
};
