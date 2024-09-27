import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import FaqModel from "@/app/_models/faq";
import { formatDateToKorean } from "@/app/_utils/format";
import Link from "next/link";

export default function FaqItem({ faq }: { faq: FaqModel }) {
  return (
    <tr className="hover:bg-gray-50">
      <Td>{faq.id}</Td>
      <Td>{faq.title}</Td>
      <Td>{faq.category + " 관련"}</Td>
      <Td>{formatDateToKorean(faq.updatedAt)}</Td>
      <Td className="w-0 space-x-2">
        <Link
          href={`/service-center/faq/edit?data=${JSON.stringify(faq.toJson())}`}
          className="inline-flex p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800"
        >
          <Icon type="square-pen" className="w-5 h-5" />
        </Link>
        <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
          <Icon type="more-vertical" className="h-5 w-5" />
        </button>
      </Td>
    </tr>
  );
}
