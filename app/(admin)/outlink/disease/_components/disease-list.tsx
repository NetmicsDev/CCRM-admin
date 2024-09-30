"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import DiseaseItem from "./disease-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import { Pagination } from "@/app/_components/Pagination";
import DiseaseModel from "@/app/_models/disease";
import { getDiseases } from "@/app/_services/disease";
import useModalStore from "@/app/_utils/store/modal";

export const DiseaseList: React.FC = () => {
  const { openAlert } = useModalStore();
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [diseases, setDiseases] = useState<PageList<DiseaseModel>>();

  useEffect(() => {
    const fetchDiseases = async () => {
      const { data, error } = await getDiseases(pageNum);

      if (error) {
        openAlert({
          title: "서버 오류",
          description: error.message,
        });
        return;
      }

      setDiseases(data);
    };
    fetchDiseases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const columns = [
    { label: "NO.", key: "id" },
    { label: "구분", key: "depth" },
    { label: "이름", key: "title" },
    { label: "", key: "actions" },
  ];

  return (
    <>
      <div className="block flex-1 overflow-auto">
        <Table
          columns={columns}
          data={diseases?.data ?? []}
          renderRow={(inquiry) => (
            <DiseaseItem key={inquiry.id} inquiry={inquiry} />
          )}
        />
      </div>
      <Pagination totalCount={diseases?.total ?? 0} currentPage={pageNum} />
    </>
  );
};

export default DiseaseList;
