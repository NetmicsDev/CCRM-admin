"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Icon from "@/app/_components/Icon";

// Chart.js 레지스터
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActiveUsers: React.FC = () => {
  // 차트 데이터
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8], // 표시되지 않음
    datasets: [
      {
        label: "활성 유저 수",
        data: [2000, 3500, 1000, 3123, 1845, 3234, 2567, 1500],
        backgroundColor: "#0E5FD9",
        borderRadius: 10, // 막대기 둥글게
        borderSkipped: false, // 막대기 둥글게 표현할 때 사용
      },
    ],
  };

  // 차트 옵션
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // 범례 숨기기
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
    maxBarThickness: 10,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">월간 활성 유저 수</p>
          <h2 className="text-2xl font-semibold mt-2">
            {data.datasets[0].data.reduce((a, b) => a + b, 0).toLocaleString()}
          </h2>
        </div>
        <div className="text-green-500 flex items-center text-sm">
          <Icon type="move-up" className="w-4 h-4" />
          <span className="ml-1">6.7% 증가</span>
        </div>
      </div>

      {/* 차트 영역 */}
      <Bar data={data} options={options} className="pt-6" />
    </div>
  );
};

export default ActiveUsers;
