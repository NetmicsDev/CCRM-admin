import Image from "next/image";
import PaymentHistory from "./payment-history";

export default function Info() {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <h1 className="text-xl font-semibold mb-4">결제 정보</h1>
      <div className="flex flex-[3] flex-col items-start overflow-hidden">
        <div className="rounded-lg bg-zinc-900 flex flex-col p-8 items-start text-white">
          <p className="text-sm">CURRENT SUBSCRIPTION PLANS</p>

          <h2 className="mt-4 text-2xl font-semibold">🚀 Premium</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Premium monthly subscription plan active since: Apr 16, 2021
          </p>

          <button className="mt-6 rounded-full bg-yellow-300 px-6 py-3 text-sm font-medium text-zinc-900">
            Upgrade Plans
          </button>
        </div>
      </div>
      {/* 결제 수단 */}
      <h5 className="py-2 text-gray-700 text-sm font-medium">결제 수단</h5>
      <div className="flex-[3] overflow-auto">
        <div className="flex">
          <div className="relative aspect-[1.586] h-48 rounded bg-gradient-to-br from-[#091B57] to-[#8B76BB] flex flex-col text-white">
            <Image
              src={"/images/visa.svg"}
              alt="visa logo"
              width={60}
              height={20}
              className="absolute top-6 right-6"
            />
            <p className="absolute left-6 top-1/2 -translate-y-1/2 ">
              *** *** *** 1234
            </p>
            <p className="absolute bottom-6 right-6">
              <span className="text-gray-300 text-sm">Expires</span>
              <br />
              04 / 24
            </p>
            <p className="absolute left-6 bottom-6 text-sm">KEVIN GILBERT</p>
          </div>
        </div>
      </div>
      {/* 결제 내역 */}
      <h5 className="py-2 text-gray-700 text-sm font-medium">결제 내역</h5>
      <div className="flex-[4] overflow-auto">
        <PaymentHistory />
      </div>
    </div>
  );
}
