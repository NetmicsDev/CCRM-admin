// components/Popup.tsx
"use client";

import React from "react";
import ReactDOM from "react-dom";
import useModalStore, { ModalType } from "@utils/store/modal";
import Icon from "../Icon";

// 첫 번째 팝업 컴포넌트
const AlertModal = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { closeModal } = useModalStore();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-medium py-3 px-6">{title}</h2>
      <p className="text-sm px-6 py-3 whitespace-pre-line text-center">
        {description}
      </p>
      <button
        className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={closeModal}
      >
        확인
      </button>
    </div>
  );
};

// 두 번째 팝업 컴포넌트
const ConfirmModal = ({
  title,
  description,
  onConfirm,
}: {
  title: string;
  description: string;
  onConfirm: () => void;
}) => {
  const { closeModal } = useModalStore();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-medium py-3 px-6">{title}</h2>
      <p className="text-sm px-6 py-3 whitespace-pre-line text-center">
        {description}
      </p>
      <div className="flex mt-4 gap-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          확인
        </button>
      </div>
    </div>
  );
};

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  const { closeModal } = useModalStore();

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트가 모달 안쪽으로 전달되지 않도록 막음
    closeModal();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 모달 본체 클릭 시 이벤트 버블링 막기
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      onClick={handleBackdropClick} // 백드롭 클릭 시 모달 닫기
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-2"
        onClick={handleModalClick} // 모달 본체 클릭 시에는 닫히지 않음
      >
        {children}
      </div>
    </div>
  );
};

// Modal 관리하는 컴포넌트
const ModalManager: React.FC = () => {
  const { activeModal, params } = useModalStore();

  if (activeModal === ModalType.NONE) return null;

  return ReactDOM.createPortal(
    <ModalWrapper>
      {activeModal === ModalType.ALERT ? (
        <AlertModal title={params.title} description={params.description} />
      ) : null}
      {activeModal === ModalType.CONFIRM ? <ConfirmModal {...params} /> : null}
    </ModalWrapper>,
    document.body // Portal을 사용하여 body에 직접 렌더링
  );
};

export default ModalManager;
