import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import UserModel from "@/app/_models/user";
import cn from "@/app/_utils/cn";
import { formatDateToKorean } from "@/app/_utils/format";

export default function UserItem({ user }: { user: UserModel }) {
  return (
    <tr key={user.id} className="hover:bg-gray-50">
      <Td>{user.id}</Td>
      <Td>{user.email}</Td>
      <Td>{user.name}</Td>
      <Td>{user.phoneNumber}</Td>
      <Td>{formatDateToKorean(new Date(user.createdAt))}</Td>
      <Td>
        <span
          className={cn("inline-block rounded-full w-1 h-1 p-1 mr-2", {
            "bg-red-500": user.subscriptionStatus === "CANCELED",
            "bg-green-500": user.subscriptionStatus === "",
            "bg-yellow-500": user.subscriptionStatus === "FREE_TRIAL",
          })}
        />
        {user.subscriptionStatus === "CANCELED"
          ? "구독 해지"
          : user.subscriptionStatus === ""
          ? "구독 중"
          : "무료 체험"}
      </Td>
      <Td>
        <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors">
          결제 정보
        </button>
      </Td>
      <Td className="w-0">
        <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
          <Icon type="more-vertical" className="h-5 w-5" />
        </button>
      </Td>
    </tr>
  );
}
