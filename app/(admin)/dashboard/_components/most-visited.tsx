"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Chart.js 레지스터
ChartJS.register(ArcElement, Tooltip, Legend);

const MostVisited: React.FC = () => {
  // 도넛 차트 데이터
  const data = {
    labels: ["교육 클래스", "고객관리 프로그램", "업무 일지"], // 레이블
    datasets: [
      {
        label: "총 유저 수",
        data: [547914, 547914, 547914], // 유저 수 데이터
        backgroundColor: ["#007bff", "#ffa500", "#ff6347"], // 각 섹션 색상
        hoverBackgroundColor: ["#0056b3", "#cc8400", "#d94f30"], // 호버 시 색상
        borderWidth: 0, // 도넛 경계선 없음
      },
    ],
  };

  // 차트 옵션
  const options = {
    responsive: true,
    maintainAspectRatio: false, // 비율을 유지하지 않음
    plugins: {
      legend: {
        display: false, // 차트 범례 숨기기
      },
      tooltip: {
        enabled: true, // 툴팁 활성화
      },
    },
  };

  const sumData = data.datasets[0].data.reduce((a, b) => a + b, 0);
  const percentage = (num: number) =>
    ((data.datasets[0].data[num] / sumData) * 100).toFixed(1);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-900 font-medium">가장 많이 방문한 페이지</p>
        <select className="text-sm border-gray-300 rounded">
          <option>월간</option>
          <option>주간</option>
        </select>
      </div>

      {/* 도넛 차트 */}
      <div className="w-40 mx-auto mb-4" style={{ height: "150px" }}>
        <Doughnut data={data} options={options} />
      </div>

      {/* 테이블 */}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="font-normal">페이지 이름</th>
            <th className="font-normal">총 유저 수</th>
            <th className="font-normal">점유율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center py-2">
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                교육 클래스
              </div>
            </td>
            <td>{data.datasets[0].data[0]}</td>
            <td className="text-green-500">{percentage(0) + "%"}</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center py-2">
                <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                고객관리 프로그램
              </div>
            </td>
            <td>{data.datasets[0].data[1]}</td>
            <td className="text-green-500">{percentage(1) + "%"}</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center py-2">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                업무 일지
              </div>
            </td>
            <td>{data.datasets[0].data[2]}</td>
            <td className="text-green-500">{percentage(2) + "%"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MostVisited;
