import TableRow from "@/app/(admin)/_components/table-row";
import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import InsuranceModel from "@/app/_models/insurance";
import { deleteInsurance } from "@/app/_services/insurance";
import { formatDateToKorean } from "@/app/_utils/format";
import useModalStore from "@/app/_utils/store/modal";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InsuranceItem({
  insurance,
}: {
  insurance: InsuranceModel;
}) {
  const router = useRouter();
  const { openAlert, openConfirm } = useModalStore();

  const handleDelete = async () => {
    const confirmDelete = await openConfirm({
      title: " 삭제",
      description: "정말로 삭제하시겠습니까?",
    });
    if (confirmDelete) {
      const { error } = await deleteInsurance(insurance.id);
      if (error) {
        openAlert({
          title: "보험 청구 삭제 오류",
          description: error.message,
        });
      } else {
        await openAlert({
          title: "보험 청구 삭제",
          description: "보험 청구 삭제 완료!",
        });
        window.location.reload();
      }
    }
  };

  return (
    <TableRow
      onEdit={() =>
        router.push(`/outlink/insurance/edit?data=${JSON.stringify(insurance)}`)
      }
      onDelete={handleDelete}
    >
      <Td>{insurance.id}</Td>
      <Td>{insurance.getCategoryName()}</Td>
      <Td>
        <div className="flex items-center gap-2">
          {insurance.insurerName}
          <Link href={insurance.link} target="_blank">
            <Icon
              type="external-link"
              className="w-4 h-4 hover:text-blue-500"
            />
          </Link>
        </div>
      </Td>
      <Td>{formatDateToKorean(insurance.updatedAt)}</Td>
    </TableRow>
  );
}
