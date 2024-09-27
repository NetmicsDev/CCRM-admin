"use client";

import React, { useEffect, useState } from "react";
import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import DiseaseItem from "./disease-item";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import { Pagination } from "@/app/_components/Pagination";
import DiseaseModel from "@/app/_models/disease";
import getDiseases from "@/app/_services/disease";

export const DiseaseList: React.FC = () => {
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [diseases, setDiseases] = useState<PageList<DiseaseModel>>();

  useEffect(() => {
    getDiseases(pageNum)
      .then((data) => {
        setDiseases(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
