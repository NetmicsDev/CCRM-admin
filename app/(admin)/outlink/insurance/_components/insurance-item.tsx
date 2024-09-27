import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import InsuranceModel from "@/app/_models/insurance";
import { formatDateToKorean } from "@/app/_utils/format";
import Link from "next/link";

export default function InsuranceItem({
  insurance,
}: {
  insurance: InsuranceModel;
}) {
  return (
    <tr className="hover:bg-gray-50">
      <Td>{insurance.id}</Td>
      <Td>{insurance.category}</Td>
      <Td>{insurance.insurerName}</Td>
      <Td>{formatDateToKorean(insurance.updatedAt)}</Td>
      <Td className="w-0 space-x-2">
        <Link
          href={`/outlink/insurance/edit?data=${JSON.stringify(
            insurance.toJson()
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
