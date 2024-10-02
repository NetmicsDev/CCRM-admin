"use client";

import useModalStore from "@/app/_utils/store/modal";
import { useRouter } from "next/navigation";

export default function SignoutButton() {
  const router = useRouter();
  const { openAlert } = useModalStore();
  const signOut = async () => {
    const response = await fetch("/api/sign-out", { method: "POST" });

    if (response.ok) {
      router.push("/login");
    } else {
      openAlert({
        title: "로그아웃 오류",
        description: "다시 한번 시도해주세요",
      });
    }
  };

  return (
    <form action={signOut}>
      <button
        type="submit"
        className="rounded px-4 py-2 text-red-500 hover:bg-red-100"
      >
        로그아웃
      </button>
    </form>
  );
}
