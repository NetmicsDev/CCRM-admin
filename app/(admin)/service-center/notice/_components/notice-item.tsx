"use client";

import { Td } from "@/app/_components/Table";
import TableRow from "@/app/(admin)/_components/table-row";
import NoticeModel from "@/app/_models/notice";
import { deleteNotice } from "@/app/_services/notice";
import { formatDateToKorean } from "@/app/_utils/format";
import useModalStore from "@/app/_utils/store/modal";
import { useRouter } from "next/navigation";

export default function NoticeItem({ notice }: { notice: NoticeModel }) {
  const router = useRouter();
  const { openAlert, openConfirm } = useModalStore();

  const handleDelete = async () => {
    const confirmDelete = await openConfirm({
      title: " 삭제",
      description: "정말로 삭제하시겠습니까?",
    });
    if (confirmDelete) {
      const { error } = await deleteNotice(notice.id);
      if (error) {
        openAlert({
          title: "공지사항 삭제 오류",
          description: error.message,
        });
      } else {
        await openAlert({
          title: "공지사항 삭제",
          description: "공지사항 삭제 완료!",
        });
        window.location.reload();
      }
    }
  };

  return (
    <TableRow
      onEdit={() =>
        router.push(
          `/service-center/notice/edit?data=${JSON.stringify(notice)}`
        )
      }
      onDelete={handleDelete}
    >
      <Td>{notice.id}</Td>
      <Td>{notice.title}</Td>
      <Td>
        {notice.category === "notice"
          ? "공지사항"
          : notice.category === "main"
          ? "메인 상단"
          : "팝업"}
      </Td>
      <Td>{formatDateToKorean(notice.updatedAt)}</Td>
    </TableRow>
  );
}
