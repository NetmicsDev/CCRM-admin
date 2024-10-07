import React, { Suspense } from "react";
import { InvoiceList } from "./_components/invoice-list";

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
