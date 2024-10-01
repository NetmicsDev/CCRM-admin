import React, { Suspense } from "react";
import { Header } from "../../../_components/Header";
import { Breadcrumb } from "../../../_components/Breadcrumb";
import { InvoiceList } from "./_components/invoice-list";
import { Pagination } from "../../../_components/Pagination";
import { Footer } from "../../../_components/Footer";

export default function InvoicePage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">인보이스</h1>
      <Suspense fallback={<></>}>
        <InvoiceList />
      </Suspense>
    </div>
  );
}
