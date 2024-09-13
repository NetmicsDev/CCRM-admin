import Icon from "@/app/_components/Icon";
import { Table, Td } from "@/app/_components/Table";
import cn from "@/app/_utils/cn";

export default function PaymentHistory() {
  return (
    <Table
      columns={[
        { label: "결제 ID", key: "id" },
        { label: "결제 날짜", key: "payDate" },
        { label: "결제 완료일", key: "completeDate" },
        { label: "결제 상태", key: "status" },
        { label: "결제 수단", key: "payMethod" },
        { label: "구독 상태", key: "subscribe" },
        { label: "결제 금액", key: "amount" },
        { label: "", key: "actions" },
      ]}
      data={[
        {
          id: "EKG464SJFN17",
          payDate: "2024년 9월 25일",
          completeDate: "2024년 9월 25일",
          status: 0,
          payMethod: "0077 **** **** 3814 (Visa)",
          subscribe: 1,
          amount: 10000,
        },
        {
          id: "EKG464SJFN18",
          payDate: "2024년 9월 25일",
          completeDate: "2024년 9월 25일",
          status: 1,
          payMethod: "0077 **** **** 3814 (Visa)",
          subscribe: 1,
          amount: 10000,
        },
        {
          id: "EKG464SJFN19",
          payDate: "2024년 9월 25일",
          completeDate: "2024년 9월 25일",
          status: 1,
          payMethod: "0077 **** **** 3814 (Visa)",
          subscribe: 1,
          amount: 10000,
        },
        {
          id: "EKG464SJFN20",
          payDate: "2024년 9월 25일",
          completeDate: "2024년 9월 25일",
          status: 1,
          payMethod: "0077 **** **** 3814 (Visa)",
          subscribe: 1,
          amount: 10000,
        },
      ]}
      renderRow={(payment) => (
        <tr key={payment.id} className="hover:bg-gray-50">
          <Td>{payment.id}</Td>
          <Td>{payment.payDate}</Td>
          <Td>{payment.completeDate}</Td>
          <Td>
            <span
              className={cn(
                "inline-block rounded-full w-1 h-1 p-1 mr-2",
                payment.status ? "bg-green-500" : "bg-yellow-500"
              )}
            />
            {payment.status === 0 ? "보류중" : "결제 완료"}
          </Td>
          <Td>{payment.payMethod}</Td>
          <Td>
            <span
              className={cn(
                "inline-block rounded-full w-1 h-1 p-1 mr-2",
                payment.subscribe === 0
                  ? "bg-red-500"
                  : payment.subscribe === 1
                  ? "bg-green-500"
                  : "bg-yellow-500"
              )}
            />
            {payment.subscribe === 0
              ? "보류중"
              : payment.subscribe === 1
              ? "구독 중"
              : "구독 해지"}
          </Td>
          <Td>{payment.amount.toLocaleString()} 원</Td>
          <Td>
            <Icon type="more-vertical" className="w-4 h-4" />
          </Td>
        </tr>
      )}
    />
  );
}
