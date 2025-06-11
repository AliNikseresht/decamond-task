"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import styles from "@/app/auth/styles/auth.module.scss";

export default function AuthPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePhone = (phone: string) => {
    const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;
    return iranPhoneRegex.test(phone);
  };

  const handleLogin = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    if (!validatePhone(phone)) {
      setError("Phone number is not valid");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const user = data.results[0];

      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (err) {
      console.error("Error fetching user:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h1>Login</h1>
        <Input
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={error}
        />
        <Button
          label={loading ? "Loading..." : "Login"}
          type="submit"
          disabled={loading}
        />
      </form>
    </div>
  );
}
