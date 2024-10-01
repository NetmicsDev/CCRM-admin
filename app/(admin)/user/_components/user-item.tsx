import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import UserModel from "@/app/_models/user";
import cn from "@/app/_utils/cn";
import { formatDateToKorean } from "@/app/_utils/format";
import TableRow from "../../_components/table-row";
import useModalStore from "@/app/_utils/store/modal";
import { useRouter } from "next/navigation";
import { deleteUser } from "@/app/_services/user";

export default function UserItem({ user }: { user: UserModel }) {
  const router = useRouter();
  const { openAlert, openConfirm } = useModalStore();
  const handleDelete = async () => {
    const confirmDelete = await openConfirm({
      title: " 삭제",
      description: "정말로 삭제하시겠습니까?",
    });
    if (confirmDelete) {
      const { error } = await deleteUser(user.id);
      if (error) {
        openAlert({
          title: "유저 삭제 오류",
          description: error.message,
        });
      } else {
        await openAlert({
          title: "유저 삭제",
          description: "유저 삭제 완료!",
        });
        window.location.reload();
      }
    }
  };

  return (
    <TableRow
      onDelete={handleDelete}
      dropdownOptions={[
        {
          icon: "wallet-cards",
          label: "결제 정보",
          onClick: () => {
            router.push(`/user/payment/${user.id}`);
          },
        },
      ]}
    >
      <Td>{user.id}</Td>
      <Td>{user.email}</Td>
      <Td>{user.name}</Td>
      <Td>{user.phoneNumber}</Td>
      <Td>{formatDateToKorean(new Date(user.createdAt))}</Td>
      <Td>
        <span
          className={cn(
            "inline-block rounded-full bg-green-500 w-1 h-1 p-1 mr-2 ",
            {
              "bg-red-500":
                user.paymentMetadata?.subscriptionStatus === "CANCELED",
              "bg-yellow-500":
                user.paymentMetadata?.subscriptionStatus === "FREE_TRIAL",
            }
          )}
        />
        {user.paymentMetadata?.subscriptionStatus ?? "무료 체험"}
        {/* {user.subscriptionStatus === "CANCELED"
          ? "구독 해지"
          : user.subscriptionStatus === ""
          ? "구독 중"
          : "무료 체험"} */}
      </Td>
    </TableRow>
  );
}
