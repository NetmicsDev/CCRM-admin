"use client";

import Icon from "@/app/_components/Icon";
import PaymentModel from "@/app/_models/payment";
import { getPayment } from "@/app/_services/payment";
import { formatDateToKoreanWithTime } from "@/app/_utils/format";
import useModalStore from "@/app/_utils/store/modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function InvoiceDetailPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { method: string };
}) {
  const router = useRouter();
  const { openAlert } = useModalStore();

  const { id } = params;

  const [invoice, setInvoice] = useState<PaymentModel>();

  useEffect(() => {
    if (id) {
      const fetchInvoice = async () => {
        const { data, error } = await getPayment(params.id);

        if (error) {
          await openAlert({
            title: "서버 오류",
            description: error.message,
          });
          return;
        }
        setInvoice(data);
      };
      fetchInvoice();
    }
  }, [id]);

  useEffect(() => {
    if (invoice && searchParams?.method === "print") {
      window.print();
      searchParams.method = "";
    }
  }, [invoice, searchParams]);

  return (
    <div id="invoice-detail" className="px-4 overflow-auto h-full">
      <div className="flex justify-between items-center py-2 sticky top-0 bg-white">
        <h1 className="text-3xl font-bold">CCRM</h1>
        <div className="flex gap-2 print:hidden">
          <button
            className="flex items-center pl-3 pr-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 font-medium text-sm"
            onClick={() => window.print()}
          >
            <Icon type="printer" className="inline-flex w-4 h-4 mr-2" />
            다운로드 및 프린트
          </button>
          <button
            className="flex items-center pl-3 pr-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 font-medium text-sm"
            onClick={() => router.back()}
          >
            <Icon type="close" className="inline-flex w-4 h-4 mr-2" />
            닫기
          </button>
        </div>
      </div>

      <p className="text-gray-600 my-6">
        안녕하세요 {invoice?.buyerName || "-"}님,
        <br />
        이것은 당신이 {invoice?.goodsName || "-"}에 지불한 {invoice?.amt || 0}
        원에 대한 영수증입니다.
      </p>

      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">결제 고유 번호</h2>
          <p className="text-3xl font-bold">{invoice?.billKey || "-"}</p>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold mb-2">결제일</h2>
          <p className="text-xl">
            {formatDateToKoreanWithTime(invoice?.payExpDate ?? new Date())}
          </p>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">(주)비가자네트워크</h2>
          <p>서울시 강남구 테헤란로20길</p>
          <p>27 동방빌딩</p>
          <p>사업자등록번호</p>
          <p>6333-87-01853</p>
          <p>원격평생교육시설</p>
          <p>제원-670호(서울시교육청)</p>
          <p>통신판매번호</p>
          <p>제2021-서울강남-01014호</p>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold mb-2">정은우</h2>
          <p>서울특별시 중구</p>
          <p>장충단로 247, 4층 407호</p>
          <p>우편번호 04564</p>
          <p>ltd@example.com</p>
        </div>
      </div>

      <table className="w-full mb-8">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">PRODUCT</th>
            <th className="text-right py-2">QNT</th>
            <th className="text-right py-2">UNIT</th>
            <th className="text-right py-2">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">
              <p className="font-semibold">{invoice?.goodsName ?? "-"}</p>
              <p className="text-sm text-gray-600">뭐가 들어가야 할까</p>
            </td>
            <td className="text-right py-2">1</td>
            <td className="text-right py-2">{invoice?.amt ?? 0}원</td>
            <td className="text-right py-2">
              {1 * Number.parseFloat(invoice?.amt ?? "0")}원
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <p className="font-semibold">부가세</p>
              <p className="text-sm text-gray-600">부가세</p>
            </td>
            <td className="text-right py-2"></td>
            <td className="text-right py-2">0원</td>
            <td className="text-right py-2">0원</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end">
        <table className="w-64">
          <tbody>
            <tr>
              <td className="text-right py-2">Sub-Total</td>
              <td className="text-right py-2 font-semibold">
                {invoice?.amt ?? 0}원
              </td>
            </tr>
            <tr>
              <td className="text-right py-2">Vat Rate</td>
              <td className="text-right py-2 font-semibold">{0}%</td>
            </tr>
            <tr>
              <td className="text-right py-2">Vat Due</td>
              <td className="text-right py-2 font-semibold">{0}원</td>
            </tr>
            <tr className="border-t">
              <td className="text-right py-2 font-bold">TOTAL DUE</td>
              <td className="text-right py-2 font-bold">
                {invoice?.amt ?? 0}원
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 mt-8 text-center">
        저희와 거래해 주셔서 진심으로 감사드립니다. 귀하의 무궁한 발전을
        기대합니다.
      </p>
    </div>
  );
}
