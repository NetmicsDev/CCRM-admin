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
    resolve?: (value?: any) => void;
  };
  openAlert: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => Promise<void>;
  openConfirm: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => Promise<boolean>;
  closeModal: () => void; // 팝업 닫기
}

const useModalStore = create<ModalState>((set) => ({
  activeModal: ModalType.NONE,
  params: {
    title: "",
    description: "",
  },
  openAlert: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    return new Promise<void>((resolve) => {
      set({
        activeModal: ModalType.ALERT,
        params: {
          title,
          description,
          resolve,
        },
      });
    });
  },
  openConfirm: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    return new Promise<boolean>((resolve) => {
      set({
        activeModal: ModalType.CONFIRM,
        params: {
          title,
          description,
          resolve,
        },
      });
    });
  },
  closeModal: () =>
    set((state) => {
      state.params.resolve?.();
      return { activeModal: ModalType.NONE };
    }),
}));

export default useModalStore;
