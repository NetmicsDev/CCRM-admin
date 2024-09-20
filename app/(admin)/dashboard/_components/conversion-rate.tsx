"use client";

import Icon from "@/app/_components/Icon";
import { Bar } from "react-chartjs-2";

// 변경된 BounceRate 차트 데이터
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Bounce Rate",
      data: [41, 55, 90, 90, 60, 74],
      backgroundColor: "rgba(255, 206, 86, 0.6)", // 노란색 배경
      borderRadius: 2, // 둥근 모서리
      borderSkipped: false, // 둥근 막대 표현
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
          <p className="text-xs text-gray-500">전환율</p>
          <h2 className="text-2xl font-semibold mt-1">9.73%</h2>
        </div>
        <div className="text-green-500 flex items-center text-sm">
          <Icon type="move-up" className="w-4 h-4" />
          <span className="ml-1">6.7% 증가</span>
        </div>
      </div>
      <Bar data={data} options={options} className="pt-6" />
    </div>
  );
};

export default BounceRate;
