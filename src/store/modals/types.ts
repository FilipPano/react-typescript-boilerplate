type ModalTypes = unknown;

export interface ModalState<T> {
  modalType: ModalTypes | null,
  modalProps?: T,
}
