import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import Inquiry from "@/app/_types/inquiry";
import Link from "next/link";

export default function InquiryItem({ inquiry }: { inquiry: Inquiry }) {
  return (
    <tr key={inquiry.id} className="hover:bg-gray-50">
      <Td>{inquiry.id}</Td>
      <Td>{inquiry.title}</Td>
      <Td>{inquiry.category + " 문의"}</Td>
      <Td>{inquiry.updateDate}</Td>
      <Td className="w-0 space-x-2">
        <Link
          href={`/service-center/inquiry/edit?data=${JSON.stringify(inquiry)}`}
          className="inline-flex p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800"
        >
          <Icon type="send" className="w-5 h-5" />
        </Link>
        <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
          <Icon type="more-vertical" className="h-5 w-5" />
        </button>
      </Td>
    </tr>
  );
}
