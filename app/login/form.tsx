"use client";
import { useEffect, useState } from "react";
import { TextField } from "../_components/Input";
import Icon from "../_components/Icon";
import { flushSync } from "react-dom";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (loading && error !== "") {
      setError("");
    }
  }, [loading, error]);

  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    flushSync(() => setLoading(true));
    const response = await fetch("/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      setError(data.error?.message ?? "Unknown Error");
    }
  };

  return (
    <form className="space-y-4" action={handleSubmit}>
      <TextField
        label="아이디"
        name="username"
        type="username"
        autoComplete="email"
        required
      />

      <TextField
        label="비밀번호"
        name="password"
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        required
        trailingIcon={
          <Icon
            type={showPassword ? "eye-off" : "eye"}
            className="w-5 h-5 stroke-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          />
        }
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

      <div className="pt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-3 border border-transparent rounded-md shadow-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none disabled:bg-gray-400 disabled:pointer-events-none"
          disabled={loading}
        >
          로그인
        </button>
      </div>
    </form>
  );
}
