import React from "react";
import { Header } from "../../../_components/Header";
import { Breadcrumb } from "../../../_components/Breadcrumb";
import { InvoiceList } from "./_components/InvoiceList";
import { Pagination } from "../../../_components/Pagination";
import { Footer } from "../../../_components/Footer";

export default function InvoicePage() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
        <InvoiceList />
        <Pagination />
      </main>
    </div>
  );
}
