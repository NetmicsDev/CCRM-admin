import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import DiseaseModel from "@/app/_models/disease";
import { formatDateToKorean } from "@/app/_utils/format";
import Link from "next/link";

export default function DiseaseItem({ inquiry }: { inquiry: DiseaseModel }) {
  return (
    <tr key={inquiry.id} className="hover:bg-gray-50">
      <Td>{inquiry.id}</Td>
      <Td>{inquiry.depth}</Td>
      <Td>{inquiry.title}</Td>
      <Td className="w-0 space-x-2">
        <Link
          href={`/outlink/disease/edit?data=${JSON.stringify(
            inquiry.toJson()
          )}`}
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
