import TableRow from "@/app/(admin)/_components/table-row";
import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import TermModel from "@/app/_models/term";
import { deleteTerm } from "@/app/_services/term";
import { formatDateToKorean } from "@/app/_utils/format";
import useModalStore from "@/app/_utils/store/modal";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TermItem({ term }: { term: TermModel }) {
  const router = useRouter();
  const { openAlert, openConfirm } = useModalStore();

  const handleDelete = async () => {
    const confirmDelete = await openConfirm({
      title: " 삭제",
      description: "정말로 삭제하시겠습니까?",
    });
    if (confirmDelete) {
      const { error } = await deleteTerm(term.id);
      if (error) {
        openAlert({
          title: "보험 약관 삭제 오류",
          description: error.message,
        });
      } else {
        await openAlert({
          title: "보험 약관 삭제",
          description: "보험 약관 삭제 완료!",
        });
        window.location.reload();
      }
    }
  };

  return (
    <TableRow
      onEdit={() =>
        router.push(`/outlink/term/edit?data=${JSON.stringify(term)}`)
      }
      onDelete={handleDelete}
    >
      <Td>{term.id}</Td>
      <Td>{term.category}</Td>
      <Td>{term.insurerName}</Td>
      <Td>{formatDateToKorean(term.updatedAt)}</Td>
    </TableRow>
  );
}
