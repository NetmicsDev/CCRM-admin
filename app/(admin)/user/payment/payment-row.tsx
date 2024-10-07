import { useRouter } from "next/navigation";
import TableRow from "../../_components/table-row";
import PaymentModel from "@/app/_models/payment";
import useModalStore from "@/app/_utils/store/modal";
import Td from "@/app/_components/Table/td";
import { formatDateToKorean } from "@/app/_utils/format";
import cn from "@/app/_utils/cn";

export default function PaymentRow({ payment }: { payment: PaymentModel }) {
  const router = useRouter();
  const { openAlert } = useModalStore();
  return (
    <TableRow
      key={payment.id}
      dropdownOptions={[
        {
          icon: "printer",
          label: "다운로드 및 프린트",
          onClick: () =>
            router.push(`/payment/invoice/${payment.id}?method=print`),
        },
        {
          icon: "trash",
          label: "삭제",
          color: "red-500",
          onClick: () => {
            openAlert({
              title: "삭제 불가",
              description: "결제 내역은 관리자 페이지에서 삭제할 수 없습니다",
            });
          },
        },
      ]}
    >
      <Td>{payment.id}</Td>
      <Td>{formatDateToKorean(payment.authDate)}</Td>
      <Td>{formatDateToKorean(payment.payExpDate)}</Td>
      <Td>
        <span
          className={cn(
            "inline-block rounded-full w-1 h-1 p-1 mr-2",
            payment.resultCode ? "bg-green-500" : "bg-yellow-500"
          )}
        />
        {payment.resultCode === "" ? "보류중" : "결제 완료"}
      </Td>
      <Td>{payment.cardNum}</Td>
      <Td>{payment.goodsName === "" ? "후불제" : "후불제"}</Td>
      <Td>{payment.amt.toLocaleString()} 원</Td>
    </TableRow>
  );
}
