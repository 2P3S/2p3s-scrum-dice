import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

type ToastState = {
  toastMsgs: string[];
  setToastMsgs: (msg: string) => void;
};

const useToastStore = create<ToastState>(set => ({
  toastMsgs: [],
  setToastMsgs: msg => {
    set(state => ({
      toastMsgs: [...state.toastMsgs, msg],
    }));
    setTimeout(() => {
      set(state => ({
        toastMsgs: state.toastMsgs.filter(toastMsg => toastMsg !== msg),
      }));
    }, 5000);
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('ToastStore', useToastStore);
}

export default useToastStore;
