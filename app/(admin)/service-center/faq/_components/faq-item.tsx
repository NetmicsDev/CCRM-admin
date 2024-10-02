import TableRow from "@/app/(admin)/_components/table-row";
import { Td } from "@/app/_components/Table";
import FaqModel, { FaqCategory } from "@/app/_models/faq";
import { deleteFaq } from "@/app/_services/faq";
import { formatDateToKorean } from "@/app/_utils/format";
import useModalStore from "@/app/_utils/store/modal";
import { useRouter } from "next/navigation";

export default function FaqItem({ faq }: { faq: FaqModel }) {
  const router = useRouter();
  const { openAlert, openConfirm } = useModalStore();

  const handleDelete = async () => {
    const confirmDelete = await openConfirm({
      title: " 삭제",
      description: "정말로 삭제하시겠습니까?",
    });
    if (confirmDelete) {
      const { error } = await deleteFaq(faq.id);
      if (error) {
        openAlert({
          title: "FAQ 삭제 오류",
          description: error.message,
        });
      } else {
        await openAlert({
          title: "FAQ 삭제",
          description: "FAQ 삭제 완료!",
        });
        window.location.reload();
      }
    }
  };
  return (
    <TableRow
      onEdit={() =>
        router.push(
          `/service-center/faq/edit?data=${JSON.stringify(faq.toJson())}`
        )
      }
      onDelete={handleDelete}
    >
      <Td>{faq.id}</Td>
      <Td>{faq.title}</Td>
      <Td>{faq.getCategoryName()}</Td>
      <Td>{formatDateToKorean(faq.updatedAt)}</Td>
    </TableRow>
  );
}
