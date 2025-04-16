import { observersConfigType } from './components/Bot';
import { BubbleTheme } from './features/bubble/types';

/* eslint-disable solid/reactivity */
type BotProps = {
  chatflowid: string;
  apiHost?: string;
  onRequest?: (request: RequestInit) => Promise<void>;
  chatflowConfig?: Record<string, unknown>;
  observersConfig?: observersConfigType;
  theme?: BubbleTheme;
};

let elementUsed: Element | undefined;

export const initFull = (props: BotProps & { id?: string }) => {
  destroy();
<<<<<<< HEAD
  const fullElement = props.id ? document.getElementById(props.id) : document.querySelector('codenula-fullchatbot');
  if (!fullElement) throw new Error('<codenula-fullchatbot> element not found.');
=======
  const fullElement = props.id ? document.getElementById(props.id) : document.querySelector('flowise-fullchatbot');
  if (!fullElement) throw new Error('<flowise-fullchatbot> element not found.');
>>>>>>> upstream/main
  Object.assign(fullElement, props);
  elementUsed = fullElement;
};

export const init = (props: BotProps) => {
  destroy();
<<<<<<< HEAD
  const element = document.createElement('codenula-chatbot');
=======
  const element = document.createElement('flowise-chatbot');
>>>>>>> upstream/main
  Object.assign(element, props);
  document.body.appendChild(element);
  elementUsed = element;
};

export const destroy = () => {
  elementUsed?.remove();
};

type Chatbot = {
  initFull: typeof initFull;
  init: typeof init;
  destroy: typeof destroy;
};

declare const window:
  | {
      Chatbot: Chatbot | undefined;
    }
  | undefined;

export const parseChatbot = () => ({
  initFull,
  init,
  destroy,
});

export const injectChatbotInWindow = (bot: Chatbot) => {
  if (typeof window === 'undefined') return;
  window.Chatbot = { ...bot };
};
