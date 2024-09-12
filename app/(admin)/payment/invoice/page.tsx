import React from "react";
import { Header } from "../../../_components/Header";
import { Breadcrumb } from "../../../_components/Breadcrumb";
import { InvoiceList } from "./_components/invoice-list";
import { Pagination } from "../../../_components/Pagination";
import { Footer } from "../../../_components/Footer";

export default function InvoicePage() {
  return (
    <main className="flex-1 overflow-y-auto bg-white rounded-lg p-6">
      <h1 className="text-xl font-semibold mb-4">인보이스</h1>
      <InvoiceList />
      <Pagination />
    </main>
  );
}
