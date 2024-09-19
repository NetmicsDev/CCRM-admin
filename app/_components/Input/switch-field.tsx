"use client";

import cn from "@/app/_utils/cn";
import React, { useState } from "react";

interface SwitchFieldProps {
  label: string;
  isOn?: boolean;
  onToggle?: (value: boolean) => void;
  name: string; // Form 제출 시 name으로 사용
}

const SwitchField: React.FC<SwitchFieldProps> = ({
  label,
  isOn = false,
  onToggle,
  name,
}) => {
  const [switchState, setSwitchState] = useState(isOn);

  const toggleSwitch = () => {
    const newState = !switchState;
    setSwitchState(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="inline-block text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          "relative w-16 my-2 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300",
          switchState ? "bg-blue-500" : "bg-gray-300"
        )}
        onClick={toggleSwitch}
      >
        <input
          type="checkbox"
          name={name}
          checked={switchState}
          onChange={toggleSwitch} // form과 상태 동기화
          className="hidden" // 기본 checkbox는 숨김
        />
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            switchState ? "translate-x-8" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default SwitchField;
