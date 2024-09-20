"use client";

import Icon from "@/app/_components/Icon";
import React from "react";

import { Line } from "react-chartjs-2";

// 변경된 ConversionRate 차트 데이터
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Conversion Rate",
      data: [9.5, 10, 9.2, 10.3, 9.7, 9.6, 9.4],
      fill: false,
      borderColor: "#0FAF62", // 초록색 라인
      tension: 0.3, // 곡선 부드럽게
      pointBackgroundColor: "#0FAF62",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // 범례 숨기기
    },
    tooltip: {
      enabled: false, // 툴팁 숨기기
    },
  },
  scales: {
    x: {
      display: false, // X축 숨기기
    },
    y: {
      display: false, // Y축 숨기기
      beginAtZero: true,
    },
  },
};
const BounceRate: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">이탈율</p>
          <h2 className="text-2xl font-semibold mt-1">9.73%</h2>
        </div>
        <div className="text-green-500 flex items-center text-sm">
          <Icon type="move-up" className="w-4 h-4" />
          <span className="ml-1">1.1% 증가</span>
        </div>
      </div>
      <Line data={data} options={options} className="pt-6" />
    </div>
  );
};

export default BounceRate;
