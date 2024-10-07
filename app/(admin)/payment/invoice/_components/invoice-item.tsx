"use client";

import { Td } from "@/app/_components/Table";
import TableRow from "@/app/(admin)/_components/table-row";
import PaymentModel from "@/app/_models/payment";
import { formatDateToKorean } from "@/app/_utils/format";
import { useRouter } from "next/navigation";
import cn from "@/app/_utils/cn";

export default function InvoiceItem({ invoice }: { invoice: PaymentModel }) {
  const router = useRouter();

  return (
    <TableRow
      dropdownOptions={[
        {
          icon: "file-search",
          label: "상세 정보",
          onClick: () => {
            router.push(`/payment/invoice/${invoice.id}`);
          },
        },
      ]}
    >
      <Td>{invoice.id}</Td>
      <Td>{invoice.goodsName}</Td>
      <Td>{invoice.buyerName}</Td>
      <Td>{invoice.arsNo}</Td>
      <Td>{formatDateToKorean(invoice.payExpDate)}</Td>
      <Td>
        <span
          className={cn(
            "inline-block rounded-full w-1 h-1 p-1 mr-2",
            invoice.resultCode ? "bg-green-500" : "bg-yellow-500"
          )}
        />
        {invoice.resultCode ? "보류중" : "결제 완료"}
      </Td>
      <Td>{invoice.amt.toLocaleString()}원</Td>
    </TableRow>
  );
}
