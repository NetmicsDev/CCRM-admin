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
  Filler,
} from "chart.js";
import cn from "@/app/_utils/cn";

// Chart.js 레지스터
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const UserOverview = ({ className }: { className: string }) => {
  // 차트 데이터
  const data = {
    labels: [
      "Nov 01",
      "Nov 05",
      "Nov 10",
      "Nov 15",
      "Nov 20",
      "Nov 25",
      "Nov 30",
    ], // 레이블이 더 적음
    datasets: [
      {
        label: "User Overview",
        data: [
          10000, 5000, 8000, 11000, 7000, 12000, 9000, 7000, 5000, 6000, 5000,
          8000,
        ], // 임의의 데이터
        fill: "start", // 라인 아래를 채움
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(54, 162, 235, 0.5)");
          gradient.addColorStop(0.8, "rgba(54, 162, 235, 0)");
          return gradient;
        }, // 채운 부분의 색상
        borderColor: "#0E5FD9", // 라인 색상
        tension: 0.4, // 곡선 부드럽게
        pointRadius: 0, // 포인트 숨김
      },
    ],
  };

  // 차트 옵션
  const options = {
    responsive: true,
    maintainAspectRatio: false, // 비율을 유지하지 않고, 직접 높이 설정
    plugins: {
      legend: {
        display: false, // 범례 숨기기
      },
      tooltip: {
        enabled: true, // 툴팁 활성화
      },
    },
    scales: {
      x: {
        display: true, // X축 표시
        grid: {
          display: false, // X축 격자선 숨기기
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 4, // 최대 4개의 레이블만 표시
        },
      },
      y: {
        display: true, // Y축 표시
        grid: {
          drawBorder: false, // Y축 경계선 숨기기
          color: "rgba(200, 200, 200, 0.1)", // Y축 격자선 색상
        },
        ticks: {
          beginAtZero: true, // 0부터 시작
          stepSize: 5000, // Y축 단계
        },
        suggestedMin: 0, // Y축 최소값
        suggestedMax: 15000, // Y축 최대값 설정 (길이 조정)
      },
    },
  };

  return (
    <div className={cn("bg-white p-4 rounded-lg shadow-md", className)}>
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium text-gray-900">유저 오버뷰</p>
        <select className="text-sm border-gray-300 rounded">
          <option>월간</option>
          <option>주간</option>
        </select>
      </div>
      <div className="w-full h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default UserOverview;
