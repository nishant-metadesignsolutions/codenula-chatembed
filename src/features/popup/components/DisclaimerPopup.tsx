import { Show, splitProps } from 'solid-js';

export type DisclaimerPopupProps = {
  isOpen?: boolean;
<<<<<<< HEAD
  onAccept?: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
=======
  isFullPage?: boolean; // New prop to indicate full-page mode
  onAccept?: () => void;
  onDeny?: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
  denyButtonText?: string;
>>>>>>> upstream/main
  blurredBackgroundColor?: string;
  backgroundColor?: string;
  buttonColor?: string;
  textColor?: string;
  buttonTextColor?: string;
<<<<<<< HEAD
=======
  denyButtonBgColor?: string;
>>>>>>> upstream/main
};

export const DisclaimerPopup = (props: DisclaimerPopupProps) => {
  const [popupProps] = splitProps(props, [
    'onAccept',
<<<<<<< HEAD
    'isOpen',
=======
    'onDeny',
    'isOpen',
    'isFullPage', // New prop
>>>>>>> upstream/main
    'title',
    'message',
    'textColor',
    'buttonColor',
    'buttonText',
<<<<<<< HEAD
    'buttonTextColor',    
    'blurredBackgroundColor',    
=======
    'denyButtonText',
    'buttonTextColor',
    'denyButtonBgColor',
    'blurredBackgroundColor',
>>>>>>> upstream/main
    'backgroundColor',
  ]);

  const handleAccept = () => {
    popupProps.onAccept?.();
  };

<<<<<<< HEAD
=======
  const handleDeny = () => {
    popupProps.onDeny?.();
  };

>>>>>>> upstream/main
  return (
    <Show when={popupProps.isOpen}>
      <div
        class="fixed inset-0 rounded-lg flex items-center justify-center backdrop-blur-sm z-50"
<<<<<<< HEAD
        style={{ background: popupProps.blurredBackgroundColor || 'rgba(0, 0, 0, 0.4)' }} 
      >
        <div class="p-10 rounded-lg shadow-lg max-w-md w-full text-center mx-4 font-sans" 
          style={{ background: popupProps.backgroundColor || 'white', color: popupProps.textColor || 'black' }}>
          <h2 class="text-2xl font-semibold mb-4 flex justify-center items-center">
            {popupProps.title ?? 'Disclaimer'}
          </h2>
=======
        style={{ background: popupProps.blurredBackgroundColor || 'rgba(0, 0, 0, 0.4)' }}
      >
        <div
          class="p-10 rounded-lg shadow-lg max-w-md w-full text-center mx-4 font-sans"
          style={{ background: popupProps.backgroundColor || 'white', color: popupProps.textColor || 'black' }}
        >
          <h2 class="text-2xl font-semibold mb-4 flex justify-center items-center">{popupProps.title ?? 'Disclaimer'}</h2>
>>>>>>> upstream/main

          <p
            class="text-gray-700 text-base mb-6"
            style={{ color: popupProps.textColor || 'black' }}
<<<<<<< HEAD
            innerHTML={popupProps.message ?? 'By using this chatbot, you agree to the <a target="_blank" href="https://codenula.com/">Terms & Condition</a>.'}
          />

          <div class="flex justify-center">
=======
            innerHTML={
              popupProps.message ??
              'By using this chatbot, you agree to the <a target="_blank" href="https://flowiseai.com/terms">Terms & Condition</a>.'
            }
          />

          <div class="flex justify-center space-x-4">
>>>>>>> upstream/main
            <button
              class="font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              style={{ background: popupProps.buttonColor || '#3b82f6', color: popupProps.buttonTextColor || 'white' }}
              onClick={handleAccept}
            >
              {popupProps.buttonText ?? 'Start Chatting'}
            </button>
<<<<<<< HEAD
=======

            {/* Only show the Cancel button if not in full-page mode */}
            <Show when={!popupProps.isFullPage}>
              <button
                class="font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                style={{ background: popupProps.denyButtonBgColor || '#ef4444', color: popupProps.buttonTextColor || 'white' }}
                onClick={handleDeny}
              >
                {popupProps.denyButtonText ?? 'Cancel'}
              </button>
            </Show>
>>>>>>> upstream/main
          </div>
        </div>
      </div>
    </Show>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> upstream/main
