import Image from "next/image";
import LoginForm from "./form";
export default function LoginPage() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex flex-col items-center ">
        <Image
          src="/images/logo.svg"
          alt="CCRM logo"
          width={120}
          height={0}
          style={{ height: "auto" }}
        />
        <h2 className="mt-4 text-3xl font-bold text-gray-900">관리자 로그인</h2>
      </div>
      <div className="mt-6 mx-auto sm:max-w-lg w-full">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
