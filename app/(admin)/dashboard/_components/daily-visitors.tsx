"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Icon from "@/app/_components/Icon";

// Chart.js 레지스터
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const DailyVisitors: React.FC = () => {
  // 차트 데이터
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // X축 레이블
    datasets: [
      {
        label: "Active Users",
        data: [200, 400, 300, 500, 700, 600, 300], // Y축 데이터
        fill: false, // 라인 차트 아래를 채움
        borderColor: "#0E5FD9", // 라인색
        tension: 0.4, // 곡선의 부드러움 정도
        pointBackgroundColor: "#0E5FD9", // 포인트 배경색
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
      tooltip: {
        enabled: true, // 툴팁 숨기기
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

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">일간 방문자 수</p>
          <h2 className="text-2xl font-semibold mt-1">
            {data.datasets[0].data.reduce((a, b) => a + b, 0).toLocaleString()}
          </h2>
        </div>
        <div className="text-red-500 flex items-center text-sm">
          <Icon type="move-up" className="w-4 h-4 rotate-180" />
          <span className="ml-1">13.5% 하락</span>
        </div>
      </div>

      {/* 차트 영역 */}
      <Line data={data} options={options} className="pt-6" />
    </div>
  );
};

export default DailyVisitors;
