"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import InsuranceItem from "./insurance-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import { Pagination } from "@/app/_components/Pagination";
import InsuranceModel from "@/app/_models/insurance";
import { getInsurances } from "@/app/_services/insurance";
import useModalStore from "@/app/_utils/store/modal";

export const InsuranceList: React.FC = () => {
  const { openAlert } = useModalStore();
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [insurances, setInsurances] = useState<PageList<InsuranceModel>>();

  useEffect(() => {
    const fetchInsurances = async () => {
      const { data, error } = await getInsurances(pageNum);

      if (error) {
        openAlert({
          title: "서버 오류",
          description: error.message,
        });
        return;
      }

      setInsurances(data);
    };
    fetchInsurances();
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
          data={insurances?.data ?? []}
          renderRow={(insurance) => (
            <InsuranceItem key={insurance.id} insurance={insurance} />
          )}
        />
      </div>
      <Pagination totalCount={insurances?.total ?? 0} currentPage={pageNum} />
    </>
  );
};

export default InsuranceList;
