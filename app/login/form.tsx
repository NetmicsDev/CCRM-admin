"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "../_components/Input";
import Icon from "../_components/Icon";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      // Here you would typically make an API call to authenticate
      // For demonstration, we'll just simulate a successful login
      console.log("Logging in with:", email, password);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      router.push("/dashboard");
    } catch (err) {
      setError("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <TextField
        label="이메일 주소"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="비밀번호"
        name="password"
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        trailingIcon={
          <Icon
            type={showPassword ? "eye-off" : "eye"}
            className="w-5 h-5 stroke-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          />
        }
      />

      <div className="pt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-3 border border-transparent rounded-md shadow-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:bg-gray-900"
        >
          로그인
        </button>
      </div>
    </form>
  );
}
