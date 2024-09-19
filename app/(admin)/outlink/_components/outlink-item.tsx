import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import Outlink from "@/app/_types/outlink";
import Link from "next/link";

export default function OutlinkItem({ outlink }: { outlink: Outlink }) {
  return (
    <tr key={outlink.id} className="hover:bg-gray-50">
      <Td>{outlink.id}</Td>
      <Td>
        <div className="flex items-center gap-1">
          <Icon
            type="user-circle"
            className="inline-block w-5 h-5 stroke-gray-700"
          />
          <span>{outlink.company}</span>
        </div>
      </Td>
      <Td>{outlink.category}</Td>
      <Td>{outlink.updateDate}</Td>
      <Td className="w-0 space-x-2">
        <Link
          href={`/outlink/edit?data=${JSON.stringify(outlink)}`}
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
