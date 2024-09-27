import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import TermModel from "@/app/_models/term";
import { formatDateToKorean } from "@/app/_utils/format";
import Link from "next/link";

export default function TermItem({ term }: { term: TermModel }) {
  return (
    <tr key={term.id} className="hover:bg-gray-50">
      <Td>{term.id}</Td>
      <Td>{term.category}</Td>
      <Td>{term.insurerName}</Td>
      <Td>{formatDateToKorean(term.updatedAt)}</Td>
      <Td className="w-0 space-x-2">
        <Link
          href={`/outlink/term/edit?data=${JSON.stringify(term.toJson())}`}
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
