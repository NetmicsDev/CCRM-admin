"use client";

import React, { useState } from "react";
import Icon, { IconType } from "../Icon";

const FileUpload = ({
  name,
  label,
  accept,
  icon = "plus",
  placeholder,
}: {
  name: string;
  label: string;
  accept?: string;
  icon: IconType;
  placeholder?: string;
}) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name); // 파일 이름 저장
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="block text-sm font-medium text-gray-700">{label}</span>
      <div className="w-full flex items-center border border-gray-300 shadow-sm rounded-md px-3 py-2.5">
        <label
          htmlFor={name}
          className="flex items-center cursor-pointer space-x-2"
        >
          <Icon type={icon} className="w-5 h-5 text-gray-500" />
          <span className="text-gray-500">
            {fileName ? fileName : placeholder}
          </span>
        </label>
        <input
          id={name}
          name={name}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileUpload;
