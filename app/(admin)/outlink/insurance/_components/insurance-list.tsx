"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import InsuranceItem from "./insurance-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import { Pagination } from "@/app/_components/Pagination";
import InsuranceModel from "@/app/_models/insurance";
import getInsurances from "@/app/_services/insurance";

export const InsuranceList: React.FC = () => {
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [insuranceList, setInsuranceList] =
    useState<PageList<InsuranceModel>>();

  useEffect(() => {
    getInsurances(pageNum)
      .then((data) => {
        setInsuranceList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNum]);

  const columns = [
    { label: "NO.", key: "id" },
    { label: "카테고리", key: "category" },
    { label: "제목", key: "title" },
    { label: "업데이트 날짜", key: "updateAt" },
    { label: "", key: "actions" },
  ];

  return (
    <>
      <div className="block flex-1 overflow-auto">
        <Table
          columns={columns}
          data={insuranceList?.data ?? []}
          renderRow={(insurance) => (
            <InsuranceItem key={insurance.id} insurance={insurance} />
          )}
        />
      </div>
      <Pagination
        totalCount={insuranceList?.total ?? 0}
        currentPage={pageNum}
      />
    </>
  );
};

export default InsuranceList;
