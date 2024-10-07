"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@/app/_components/Table";
import InvoiceItem from "./invoice-item";
import { Pagination } from "@/app/_components/Pagination";
import useModalStore from "@/app/_utils/store/modal";
import { useSearchParams } from "next/navigation";
import PageList from "@/app/_models/page-list";
import PaymentModel from "@/app/_models/payment";
import { getPayments } from "@/app/_services/payment";

export const InvoiceList: React.FC = () => {
  const { openAlert } = useModalStore();
  const searchParams = useSearchParams();
  const pageNum: number = Number(searchParams.get("page") ?? "1");

  const [invoices, setInvoices] = useState<PageList<PaymentModel>>();

  useEffect(() => {
    const fetchPayments = async () => {
      const { data, error } = await getPayments(pageNum);

      if (error) {
        openAlert({
          title: "서버 오류",
          description: error.message,
        });
        return;
      }

      setInvoices(data);
    };
    fetchPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const columns = [
    { label: "NO.", key: "id" },
    { label: "결제 유형", key: "type" },
    { label: "이름", key: "name" },
    { label: "VAT NO.", key: "vat" },
    { label: "날짜", key: "date" },
    { label: "상태", key: "status" },
    { label: "결제 금액", key: "amount" },
    { label: "", key: "actions" },
  ];

  return (
    <>
      <div className="block flex-1 overflow-auto">
        <Table
          columns={columns}
          data={invoices?.data ?? []}
          renderRow={(info) => <InvoiceItem key={info.id} invoice={info} />}
        />
      </div>
      <Pagination totalCount={invoices?.total ?? 0} currentPage={pageNum} />
    </>
  );
};

export default InvoiceList;
