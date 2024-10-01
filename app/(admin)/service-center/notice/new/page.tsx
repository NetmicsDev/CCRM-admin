import { useRouter } from "next/navigation";
import NoticeForm from "../_components/notice-form";
import useModalStore from "@/app/_utils/store/modal";
import { addNotice } from "@/app/_services/notice";
import NoticeModel from "@/app/_models/notice";

export default function NoticeNewPage() {
  const router = useRouter();
  const { openAlert } = useModalStore();
  const addNewNotice = async (notice: NoticeModel) => {
    const { error } = await addNotice(notice);
    if (error) {
      openAlert({
        title: "공지사항 추가 오류",
        description: error.message,
      });
    } else {
      await openAlert({
        title: "공지사항 추가",
        description: "공지사항 추가 완료!",
      });
      router.replace("/service-center/notice");
    }
  };

  return <NoticeForm title="공지사항 추가하기" onSubmit={addNewNotice} />;
}
