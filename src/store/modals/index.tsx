import React from 'react';
import { ModalState } from './types';
import { createStoreProvider } from 'utils/context';

function useModalState<T>() {
  const initialState = {
    modalType: null,
    modalProps: null,
  };

  const [modalState, setModalState] = React.useState<ModalState<T|null>>(initialState);

  return {
    modalType: modalState.modalType,
    modalProps: modalState.modalProps,
    openModal: (modalOptions: ModalState<T>) => setModalState(modalOptions),
    closeModal: () => setModalState(initialState),
  };
}

export const [useModal, ModalProvider] = createStoreProvider(useModalState);
