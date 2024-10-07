"use client";
import { getUser } from "@/app/_services/user";
import PaymentHistory from "../payment-history";
import { useEffect, useState } from "react";
import useModalStore from "@/app/_utils/store/modal";
import UserModel from "@/app/_models/user";
import PaymentModel from "@/app/_models/payment";
import PageList from "@/app/_models/page-list";
import { getPayments } from "@/app/_services/payment";

export default function PaymentInfoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const { openAlert } = useModalStore();
  const [userData, setUserData] = useState<UserModel>();
  const [paymentList, setPaymentList] = useState<PageList<PaymentModel>>();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const { data, error } = await getUser(id);
        if (error) {
          openAlert({
            title: "유저 정보 가져오기 오류",
            description: error.message,
          });
          return;
        }
        setUserData(data);
      };
      const fetchPayment = async () => {
        const { data, error } = await getPayments(1, 1000);
        if (error) {
          openAlert({
            title: "결제내역 가져오기 오류",
            description: error.message,
          });
          return;
        }
        setPaymentList(data);
      };

      fetchUser();
      fetchPayment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="flex flex-col h-full overflow-auto">
      <h1 className="text-xl font-semibold mb-4">
        {userData?.name ?? "-"}님의 결제 정보
      </h1>
      {/* <h5 className="py-2 text-gray-700 text-sm font-medium">
        {userData?.toString()}
      </h5> */}
      <div className="overflow-auto">
        <PaymentHistory payments={paymentList?.data ?? []} />
      </div>
    </div>
  );
}
