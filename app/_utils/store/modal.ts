// store/popupStore.ts
"use client"; // 클라이언트 전용

import { create } from "zustand";

export enum ModalType {
  NONE,
  ALERT,
  CONFIRM,
}

interface ModalState {
  activeModal: ModalType;
  params: {
    title: string;
    description: string;
    onConfirm: () => void;
  };
  openAlert: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => void;
  openConfirm: ({
    title,
    description,
    onConfirm,
  }: {
    title: string;
    description: string;
    onConfirm: () => void;
  }) => void;
  closeModal: () => void; // 팝업 닫기
}

const useModalStore = create<ModalState>((set) => ({
  activeModal: ModalType.NONE,
  params: {
    title: "",
    description: "",
    onConfirm: () => {},
  },
  openAlert: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    set({
      activeModal: ModalType.ALERT,
      params: {
        title,
        description,
        onConfirm: () => set({ activeModal: ModalType.NONE }),
      },
    });
  },
  openConfirm: ({
    title,
    description,
    onConfirm,
  }: {
    title: string;
    description: string;
    onConfirm: () => void;
  }) => {
    set({
      activeModal: ModalType.CONFIRM,
      params: {
        title,
        description,
        onConfirm: () => {
          onConfirm();
          set({ activeModal: ModalType.NONE });
        },
      },
    });
  },
  closeModal: () => set({ activeModal: ModalType.NONE }),
}));

export default useModalStore;
