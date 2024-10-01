import TableRow from "@/app/(admin)/_components/table-row";
import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import DiseaseModel from "@/app/_models/disease";
import { deleteDisease } from "@/app/_services/disease";
import { formatDateToKorean } from "@/app/_utils/format";
import useModalStore from "@/app/_utils/store/modal";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DiseaseItem({ disease }: { disease: DiseaseModel }) {
  const router = useRouter();
  const { openAlert, openConfirm } = useModalStore();

  const handleDelete = async () => {
    const confirmDelete = await openConfirm({
      title: " 삭제",
      description: "정말로 삭제하시겠습니까?",
    });
    if (confirmDelete) {
      const { error } = await deleteDisease(disease.id);
      if (error) {
        openAlert({
          title: "질병 코드 삭제 오류",
          description: error.message,
        });
      } else {
        await openAlert({
          title: "질병 코드 삭제",
          description: "질병 코드 삭제 완료!",
        });
        window.location.reload();
      }
    }
  };

  return (
    <TableRow
      onEdit={() =>
        router.push(`/outlink/disease/edit?data=${JSON.stringify(disease)}`)
      }
      onDelete={handleDelete}
    >
      <Td>{disease.id}</Td>
      <Td>{disease.depth}</Td>
      <Td>{disease.title}</Td>
    </TableRow>
  );
}
