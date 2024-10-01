import { Table } from "@/app/_components/Table";
import PaymentModel from "@/app/_models/payment";
import PaymentRow from "./payment-row";

export default function PaymentHistory({
  payments,
}: {
  payments: PaymentModel[];
}) {
  const columns = [
    { label: "결제 ID", key: "id" },
    { label: "결제 날짜", key: "payDate" },
    { label: "결제 완료일", key: "completeDate" },
    { label: "결제 상태", key: "status" },
    { label: "결제 수단", key: "payMethod" },
    { label: "구독 상태", key: "subscribe" },
    { label: "결제 금액", key: "amount" },
    { label: "", key: "actions" },
  ];

  return (
    <Table
      columns={columns}
      data={payments}
      renderRow={(payment) => <PaymentRow key={payment.id} payment={payment} />}
    />
  );
}
