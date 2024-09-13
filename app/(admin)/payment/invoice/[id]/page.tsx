"use client";

import Icon from "@/app/_components/Icon";
import { Download, Printer } from "lucide-react";

export default function InvoiceDetailPage() {
  return (
    <div id="invoice-detail" className="px-4 overflow-auto h-full">
      <div className="flex justify-between items-center py-2 sticky top-0 bg-white">
        <h1 className="text-3xl font-bold">CCRM</h1>
        <div className="print:hidden">
          <button
            className="flex items-center px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 font-medium text-sm"
            onClick={() => window.print()}
          >
            <Icon type="printer" className="inline-flex w-4 h-4 mr-2" />
            다운로드 및 프린트
          </button>
        </div>
      </div>

      <p className="text-gray-600 my-6">
        안녕하세요 정은우님,
        <br />
        이것은 당신이 월 후불 구독 10000에 지불한 10,000₩에 대한 영수증입니다.
      </p>

      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">결제 고유 번호</h2>
          <p className="text-3xl font-bold">741037024</p>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold mb-2">결제일</h2>
          <p className="text-xl">2024년 9월 25일 03:45 pm</p>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">(주)비가치네트워크</h2>
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
              <p className="font-semibold">월 후불 구독 10000</p>
              <p className="text-sm text-gray-600">교육 콘텐츠 구독</p>
            </td>
            <td className="text-right py-2">1</td>
            <td className="text-right py-2">10,000₩</td>
            <td className="text-right py-2">10,000₩</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">
              <p className="font-semibold">Logo Creation</p>
              <p className="text-sm text-gray-600">
                Logo and business cards design
              </p>
            </td>
            <td className="text-right py-2">1</td>
            <td className="text-right py-2">0₩</td>
            <td className="text-right py-2">0₩</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end">
        <table className="w-64">
          <tbody>
            <tr>
              <td className="text-right py-2">Sub-Total</td>
              <td className="text-right py-2 font-semibold">10,000₩</td>
            </tr>
            <tr>
              <td className="text-right py-2">Vat Rate</td>
              <td className="text-right py-2 font-semibold">10,000₩</td>
            </tr>
            <tr>
              <td className="text-right py-2">Vat Due</td>
              <td className="text-right py-2 font-semibold">10,000₩</td>
            </tr>
            <tr className="border-t">
              <td className="text-right py-2 font-bold">TOTAL DUE</td>
              <td className="text-right py-2 font-bold">10,000₩</td>
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
